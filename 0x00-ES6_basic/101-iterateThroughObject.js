/**
 * Iterates through the reportWithIterator and returns a string of employee names separated by '|'.
 * @param {IterableIterator<string>} reportWithIterator - Iterator for employee names.
 * @returns {string} - A string of employee names separated by '|'.
 */
export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [];
  for (const employee of reportWithIterator) {
    employeesArray.push(employee);
  }
  return employeesArray.join(' | ');
}
