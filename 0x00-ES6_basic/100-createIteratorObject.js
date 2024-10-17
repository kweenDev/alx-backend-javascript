/**
* Creates an iterator for employees in the report object.
*/
export default function createIteratorObject(report) {
  let employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  }
  return employees[Symbol.iterator]();
}
