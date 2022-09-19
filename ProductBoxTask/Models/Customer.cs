using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductBoxTask.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CustomerTypeId { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string LastUpdated { get; set; }
        public string CustomerType { get; set; }
    }
}
