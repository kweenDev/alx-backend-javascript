/**
 * Creates an iterator for employees in the report object.
 * @param {Object} report - The report object created by createReportObject.
 * @returns {IterableIterator<string>} - Iterator to go through each employee.
 */
export default function createIteratorObject(report) {
  let employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  }
  return employees[Symbol.iterator]();
}
