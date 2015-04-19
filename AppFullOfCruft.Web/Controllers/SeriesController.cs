using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;

namespace AppFullOfCruft.Web.Controllers
{
    public class SeriesController : ApiController
    {
        private  IList<ComicSeries> _series = new List<ComicSeries>{
            ComicSeries.Create(1,"Amazing Spider-Man"),
            ComicSeries.Create(2,"X-Men"),
            ComicSeries.Create(3,"Other")
        };
        private IList<ErrorMessage> _errorMessages = new List<ErrorMessage>{
            new ErrorMessage("key1","something wrong"),
            new ErrorMessage("key2","something else wrong")
        };


        public SeriesController(){
            HttpContext.Current.Session["test"] = "sup";
        }

        public IEnumerable<ComicSeries> Get(){
            return _series;
        }

        public IHttpActionResult Post([FromBody] ComicSeries comicSeries)
        {
            var id = _series.Max(x => x.Id) + 1;
            var series = ComicSeries.Create(id, comicSeries.Title);
            _series.Add(series);
            //return new ResponseMessageResult(
            //            Request.CreateResponse(
            //                HttpStatusCode.NotAcceptable,
            //                _errorMessages
            //                )
            //            );
            return new ResponseMessageResult(
                Request.CreateResponse(
                    HttpStatusCode.Created,
                    series
                    )
                );
        }

    }

    public class ComicSeries{
        public ComicSeries(int id, string title){
            Id = id;
            Title = title;
        }
        public int Id { get; set; }
        public string Title { get; set; }

        public static ComicSeries Create(int id, string title){
            return new ComicSeries(id, title);
        }
    }

    public class ErrorMessage
    {
        public ErrorMessage(string property, string message)
        {
            Property = property;
            Message = message;
        }
        public string Property { get; set; }
        public string Message { get; set; }
    }
}
