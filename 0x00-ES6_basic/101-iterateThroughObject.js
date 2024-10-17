/**
* Iterates through the reportWithIterator and returns a string of employee names separated by '|'.
*/
export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [];
  for (const employee of reportWithIterator) {
    employeesArray.push(employee);
  }
  return employeesArray.join(' | ');
}
