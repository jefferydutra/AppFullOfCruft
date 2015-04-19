using System.Data.SqlClient;
using AppFullOfCruft.Model;
using Dapper;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace AppFullOfCruft.HotelPopulator
{
    public class HotelPopulator
    {
        private readonly string _connection = ConfigurationManager
                                                    .ConnectionStrings["AppConnection"]
                                                    .ConnectionString;


        public async Task AddFromSearchApi(){
            var hotels = await GetHotels();

            await SaveHotels(hotels);
        }

        private async Task SaveHotels(IEnumerable<Hotel> hotels){


            using (var con = new SqlConnection(_connection))
            {
                con.Open();
                con.Execute("truncate table Hotels");
                con.Execute(@"
                    insert Hotels(Id, Name, Address, Rating, PlaceId, Lattitude, Longitude)
                    values (@Id, @Name, @Address, @Rating, @PlaceId, @Lattitude, @Longitude)",
                    hotels);
            }

        }

        private const string API_BASE_URL = "https://maps.googleapis.com/maps/";
        private const string API_PATH =
            "api/place/nearbysearch/json?location=43.4488, -80.487&radius=10000&types=lodging&key=AIzaSyBPIb7Takygx3LMBaJUQq8pZ-Rb5SAn7Vo";
        private async Task<IEnumerable<Hotel>> GetHotels(){
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(API_BASE_URL);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // New code:
                HttpResponseMessage response = await client.GetAsync(API_PATH);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    JObject hotelJson = JObject.Parse(content);
                    var hotels =
                        from hotelResult in hotelJson["results"]
                        select new Hotel
                        {
                            Id = hotelResult.Value<string>("id"),
                            Name = hotelResult.Value<string>("name"),
                            Rating = hotelResult.Value<decimal>("rating"),
                            Address = hotelResult.Value<string>("vicinity"),
                            PlaceId = hotelResult.Value<string>("place_id"),
                            Lattitude = (decimal)hotelResult["geometry"]["location"]["lat"],
                            Longitude = (decimal)hotelResult["geometry"]["location"]["lng"]
                        };
                    return hotels;

                }
            }
            return Enumerable.Empty<Hotel>();
        }
    }
}
