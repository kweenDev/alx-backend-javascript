// 5-typed_arrays.js
// Function to create a new Int8 typed array

/**
 * Function createInt8TypedArray
 * Creates a new ArrayBuffer and sets an Int8 value at a specific position
 * @param {Number} length - Length of the buffer
 * @param {Number} position - Position to insert value
 * @param {Number} value - Int8 value to insert
 * @returns {DataView} - A DataView of the buffer
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
