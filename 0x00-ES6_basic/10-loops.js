/**
* Iterates through the employees object and returns a concatenated string of employee names.
*/
export default function appendToEachArrayValue(employees) {
  let concatenatedNames = '';

  for (const [department, employeeList] of Object.entries(employees)) {
    concatenatedNames += `${department}: ${employeeList.join(', ')}\n`;
  }

  return concatenatedNames;
}
