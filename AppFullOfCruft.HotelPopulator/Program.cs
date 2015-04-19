using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppFullOfCruft.HotelPopulator
{
    class Program
    {
        static void Main(string[] args){
            var hotelPopulator = new HotelPopulator();
            Task t = hotelPopulator.AddFromSearchApi();

            t.Wait();
        }


    }
}
