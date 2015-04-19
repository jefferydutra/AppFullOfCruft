using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;

namespace AppFullOfCruft.Web.Controllers
{
    public class CharacterController : ApiController
    {
        private IList<Character> _characters = new List<Character>{
            Character.Create(1,"Wolverine"),
            Character.Create(2,"Spider man"),
            Character.Create(3,"Cyclops")
        };
        private IList<ErrorMessage> _errorMessages = new List<ErrorMessage>{
            new ErrorMessage("key1","something wrong"),
            new ErrorMessage("key2","something else wrong")
        };


        public CharacterController()
        {
            HttpContext.Current.Session["test"] = "sup";
        }

        public IEnumerable<Character> Get()
        {
            return _characters;
        }

        public IHttpActionResult Post([FromBody] Character character)
        {
            var id = _characters.Max(x => x.Id) + 1;
            var series = ComicSeries.Create(id, character.Title);
            _characters.Add(character);
            return new ResponseMessageResult(
                Request.CreateResponse(
                    HttpStatusCode.Created,
                    series
                    )
                );
        }

        public class Character
        {
            public Character(int id, string title)
            {
                Id = id;
                Title = title;
            }
            public int Id { get; set; }
            public string Title { get; set; }

            public static Character Create(int id, string title)
            {
                return new Character(id, title);
            }
        }
    }
}
