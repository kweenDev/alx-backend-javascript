/**
* Creates a report object from the employees list.
*/
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    /**
        * Returns the number of departments in the employees list.
        */
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
