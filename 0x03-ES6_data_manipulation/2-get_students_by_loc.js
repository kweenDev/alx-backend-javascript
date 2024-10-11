// 2-get_students_by_loc.js
// Function to return students located in a specific city

/**
 * Function getStudentsByLocation
 * Filters students based on location
 * @param {Array} students - List of students
 * @param {string} city - City to filter by
 * @returns {Array} - Array of students in the specified city
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((obj) => obj.location === city);
}
