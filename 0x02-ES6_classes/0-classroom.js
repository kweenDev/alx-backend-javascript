/**
 * Class representing a Classroom.
 * @class ClassRoom
 */
export default class ClassRoom {
  /**
     * Create a classroom.
     * @param {number} maxStudentsSize - The maximum number of students allowed in the class.
     */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
