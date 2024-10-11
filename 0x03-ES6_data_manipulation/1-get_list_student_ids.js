// 1-get_list_student_ids.js
// Function to return an array of
// student ids from an array of student objects

/**
 * Function getListStudentIds
 * Returns array of student ids from student list
 * @param {Array} students - Array of student objects
 * @returns {Array} - Array of student ids
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((obj) => obj.id);
  }
  return [];
}
