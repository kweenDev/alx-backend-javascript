/**
 * HolbertonClass representing a class at Holberton School.
 *
 * @class HolbertonClass
 */
export class HolbertonClass {
  /**
     * Creates an instance of HolbertonClass.
     *
     * @param {Number} year - The year of the class.
     * @param {String} location - The location of the class.
     */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
     * Getter for the year.
     *
     * @returns {Number} The year of the class.
     */
  get year() {
    return this._year;
  }

  /**
     * Getter for the location.
     *
     * @returns {String} The location of the class.
     */
  get location() {
    return this._location;
  }
}

/**
 * StudentHolberton representing a student of Holberton School.
 *
 * @class StudentHolberton
 */
export class StudentHolberton {
  /**
     * Creates an instance of StudentHolberton.
     *
     * @param {String} firstName - The student's first name.
     * @param {String} lastName - The student's last name.
     * @param {HolbertonClass} holbertonClass - The student's Holberton class.
     */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
     * Getter for the full name of the student.
     *
     * @returns {String} The full name of the student.
     */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
     * Getter for the student's Holberton class.
     *
     * @returns {HolbertonClass} The student's Holberton class.
     */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
     * Getter for the full student description.
     *
     * @returns {String} Full student description.
     */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Franciso');

const student1 = new StudentHolberton('Guillame', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
