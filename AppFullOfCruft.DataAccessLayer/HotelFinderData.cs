using System.Linq;
using System.Threading.Tasks;
using AppFullOfCruft.Model;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;

namespace AppFullOfCruft.DataAccessLayer
{
    public class HotelFinderData
    {
        public IEnumerable<Hotel> FindHotels(long latitude, long longitude){

            return new List<Hotel>();
        }
    }
}
