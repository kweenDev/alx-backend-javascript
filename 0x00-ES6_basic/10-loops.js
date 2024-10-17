/**
* Iterates through the employees object and returns a concatenated string of employee names.
*/
export default function appendToEachArrayValue(array, appendString) {
  const arrayEnd = [];
  for (const idx of array) {
    arrayEnd.push(`${appendString}${idx}`);
  }

  return arrayEnd;
}
