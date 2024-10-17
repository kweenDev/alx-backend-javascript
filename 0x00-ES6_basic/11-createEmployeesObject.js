/**
* Creates an object with a department name as a key and an array of employees as values.
*/
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
