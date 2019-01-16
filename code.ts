export class Employee {
  constructor(public EmpNo: number, public EmpName: string) {}
}
export class EmployeeData {
  private employees: Array<Employee>;
  constructor() {
    this.employees = new Array<Employee>();
  }
  getEmployees(): Array<Employee> {
    this.employees.push(new Employee(101, "A"));
    this.employees.push(new Employee(102, "B"));
    return this.employees;
  }
}
