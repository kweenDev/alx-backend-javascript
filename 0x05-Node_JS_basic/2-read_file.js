const fs = require('fs');

/**
 * countStudents - Counts and logs students from a CSV file
 * @param {string} path - The path to the CSV file
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line);
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
