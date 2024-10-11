// 0-get_list_students.js
// Function to return a list of students with id,
// firstName, and location

/**
 * Function getListStudents
 * Returns an array of student objects
 * @returns {Array} - List of students
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
