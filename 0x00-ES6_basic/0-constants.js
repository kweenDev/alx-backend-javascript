// 0-constants.js
/**
* Task 0: Demonstrates the use of const and let for variable declaration.
* @returns {string} task - The task string.
* @returns {string} combination - The combination string modified by let.
*/

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}