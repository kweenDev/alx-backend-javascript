import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRooms with predefined sizes.
 * @returns {ClassRoom[]} An array of 3 ClassRooms.
 */
export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
