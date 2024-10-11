// 3-get_ids_sum.js
// Function to sum all student ids

/**
 * Function getStudentIdsSum
 * Sums all student ids
 * @param {Array} students - List of students
 * @returns {Number} - Sum of all student ids
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
