using System.Diagnostics;
namespace AppFullOfCruft.Model
{
    public class Hotel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public decimal Rating { get; set; }
        public string PlaceId { get; set; }
        public decimal Lattitude { get; set; }
        public decimal Longitude { get; set; }
    }
}
