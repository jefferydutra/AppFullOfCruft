using System.Web.Mvc;

namespace AppFullOfCruft.Web.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Other()
        {
            return View();
        }
    }
}