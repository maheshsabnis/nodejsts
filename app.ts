import http = require("http");
import emps = require("./code");

let empObj = new emps.EmployeeData();

http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end(JSON.stringify(empObj.getEmployees()));
  })
  .listen(4050);
console.log("Server Started at port 4050");
