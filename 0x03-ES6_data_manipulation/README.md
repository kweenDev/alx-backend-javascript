# 0x03. ES6 Data Manipulation

## Project Overview

This project focuses on data manipulation using ES6 features in JavaScript. It covers essential techniques such as using higher-order functions like `map`, `filter`, and `reduce`, as well as working with typed arrays and advanced data structures like `Set`, `Map`, and `WeakMap`.

## Learning Objectives

At the end of this project, you should be able to explain:

- How to use `map`, `filter`, and `reduce` on arrays.
- The concept of typed arrays.
- The `Set`, `Map`, and `WeakMap` data structures.

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All your files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- Your code needs to pass all the tests and lint. You can verify the entire project by running `npm run full-test`.
- All of your functions must be exported.

## Setup

### Install NodeJS 12.11.x

In your home directory, run:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Verify the installation:

```bash
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint using the supplied `package.json`:

```bash
npm install
```

### Configuration Files

Add the following configuration files to your project directory:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Don't forget to run:

```bash
npm install
```

when you have the `package.json`.

## Tasks

0. **Basic List of Objects**
   Mandatory
   Create a function named getListStudents that returns an array of objects. Each object should have three attributes: id (Number), firstName (String), and location (String).

**Example**:

```javascript
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());
```

**Output**:

```json
[
  { "id": 1, "firstName": "Guillaume", "location": "San Francisco" },
  { "id": 2, "firstName": "James", "location": "Columbia" },
  { "id": 5, "firstName": "Serena", "location": "San Francisco" }
]
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `0-get_list_students.js`

1. **More Mapping**
   Mandatory
   Create a function getListStudentIds that returns an array of IDs from a list of objects.

**Example**:

```javascript
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
```

**Output**:

```json
[]
[ 1, 2, 5 ]
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `1-get_list_student_ids.js`

2. **Filter**
   Mandatory
   Create a function getStudentsByLocation that returns an array of objects located in a specific city.

**Example**:

```javascript
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();
console.log(getStudentsByLocation(students, "San Francisco"));
```

Output:

```json
[
  { "id": 1, "firstName": "Guillaume", "location": "San Francisco" },
  { "id": 5, "firstName": "Serena", "location": "San Francisco" }
]
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `2-get_students_by_loc.js`

3. **Reduce**
   Mandatory
   Create a function getStudentIdsSum that returns the sum of all the student IDs.

**Example**:

```javascript
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);
console.log(value);
```

**Output**:

```json
8
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `3-get_ids_sum.js`

4. **Combine**
   Mandatory
   Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade.

**Example**:

```javascript
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(
  updateStudentGradeByCity(getListStudents(), "San Francisco", [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ])
);
```

**Output**:

```json
[
  {
    "id": 1,
    "firstName": "Guillaume",
    "location": "San Francisco",
    "grade": 86
  },
  { "id": 5, "firstName": "Serena", "location": "San Francisco", "grade": 97 }
]
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `4-update_grade_by_city.js`

5. **Typed Arrays**
   Mandatory
   Create a function createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

**Example**:

```javascript
import createInt8TypedArray from "./5-typed_arrays.js";
console.log(createInt8TypedArray(10, 2, 89));
```

Output:

```json
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `5-typed_arrays.js`

6. **Set Data Structure**
   Mandatory
   Create a function setFromArray that returns a Set from an array.

**Example**:

```javascript
import setFromArray from "./6-set.js";
console.log(setFromArray([12, 32, 15, 78, 98, 15]));
```

Output:

```json
Set { 12, 32, 15, 78, 98 }
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `6-set.js`

7. **More Set Data Structure**
   Mandatory
   Create a function hasValuesFromArray that returns a boolean if all elements in the array exist within the set.

**Example**:

```javascript
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
```

**Output**:

```json
true
false
false
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `7-has_array_values.js`

8. **Clean Set**
   Mandatory
   Create a function cleanSet that returns a string of all the set values that start with a specific string.

**Example**:

```javascript
import cleanSet from "./8-clean_set.js";

console.log(
  cleanSet(new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]), "bon")
);
console.log(
  cleanSet(new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]), "")
);
```

**Output:**

```json
"jovi, aparte, appétit"
""
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `8-clean_set.js`

9. **Map Data Structure**
   Mandatory
   Create a function setFromArray that returns a Map from an array.

**Example**:

```javascript
import mapFromArray from "./9-map.js";

console.log(
  mapFromArray([
    ["name", "Alice"],
    ["age", 25],
  ])
);
```

**Output**:

```json
Map { 'name' => 'Alice', 'age' => 25 }
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `9-map.js`

10. **More Map Data Structure**
    Mandatory
    Create a function getMapFromArray that returns a Map from an array.

**Example**:

```javascript
import getMapFromArray from "./10-get_map_from_array.js";

console.log(
  getMapFromArray([
    ["name", "Alice"],
    ["age", 25],
  ])
);
```

**Output**:

```json
Map { 'name' => 'Alice', 'age' => 25 }
```

**Repo**:

- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`
- File: `10-get_map_from_array.js`

## Testing

To test your code, use Jest:

```bash
npm run test
```

**Linting**
To lint your code, use ESLint:

```bash
npm run lint
```

## Author

_Refiloe Radebe_

## Acknowledgments

ALX Africa for providing the opportunity to learn and grow in software engineering.
The open-source community for their invaluable resources and contributions.
