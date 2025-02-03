const employees = [
    {
        empId: 1,
        empName: "hemanth",
        empCompany: "Tech ",
        empSalary: 50000,
        empAddress: {
            empCity: "hyd",
            empArea: "kompally"
        }
    },
    {
        empId: 2,
        empName: "sam",
        empCompany: "Inc",
        empSalary: 60000,
        empAddress: {
            empCity: "delhi",
            empArea: "town"
        }
    },
    {
        empId: 3,
        empName: "shiva",
        empCompany: "Data",
        empSalary: 55000,
        empAddress: {
            empCity: "mumbai",
            empArea: "mumbai"
        }
    }
];


const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width="100%";
table.style.height="100%";
const thread = document.createElement("thread");
table.style.width = "100%";
const headerrow = document.createElement("tr");




