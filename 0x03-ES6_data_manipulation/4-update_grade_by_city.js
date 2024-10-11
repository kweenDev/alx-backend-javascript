/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
// 4-update_grade_by_city.js
// Function to update student grades by city

/**
 * Function updateStudentGradeByCity
 * Updates the grades of students in a specific city
 * @param {Array} students - List of students
 * @param {string} city - City to filter by
 * @param {Array} newGrades - Array of objects with studentId and grade
 * @returns {Array} - Array of students with updated grades
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
