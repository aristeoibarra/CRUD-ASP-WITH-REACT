using System;
using System.Collections.Generic;

#nullable disable

namespace CRUD_ASP_NET.Models
{
    public partial class Employee
    {
        public int IdEmployee { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int IdDepartment { get; set; }
        public int IdPosition { get; set; }
        public double Salary { get; set; }

        public virtual Department IdDepartmentNavigation { get; set; }
        public virtual Position IdPositionNavigation { get; set; }
    }
}
