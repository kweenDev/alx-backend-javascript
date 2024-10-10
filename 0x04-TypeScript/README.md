# 0x04. TypeScript

This project is an exploration of TypeScript, focusing on concepts such as interfaces, classes, functions, and working with the DOM using TypeScript. By the end of this project, you will have a solid understanding of TypeScript's basic types, generic types, namespaces, declaration merging, and more.

## Learning Objectives

At the end of this project, you should be able to:

- Understand and use basic types in TypeScript
- Work with Interfaces, Classes, and Functions in TypeScript
- Manipulate the DOM with TypeScript
- Implement and use Generic types
- Utilize namespaces in TypeScript
- Merge declarations effectively
- Import external libraries using an ambient namespace
- Understand basic nominal typing with TypeScript

---

## Requirements

- **Editors:** vi, vim, emacs, Visual Studio Code
- All files must end with a new line.
- The TypeScript scripts will be transpiled on **Ubuntu 18.04**.
- Code should be checked using **jest** (version 24.9.\*).
- A **README.md** file at the root of the folder is mandatory.
- Code should use the `.ts` extension where applicable.
- The TypeScript compiler should not show any warnings or errors.

---

## Configuration Files

For each task, the following configuration files should be used:

- **package.json** - Handles package management.
- **.eslintrc.js** - Configuration for linting the code.
- **tsconfig.json** - Configuration for the TypeScript compiler.
- **webpack.config.js** - Configures Webpack for bundling.

---

## Tasks Overview

### 0. Creating an Interface for a Student

- **Objective**: Create an interface named `Student` with properties `firstName`, `lastName`, `age`, and `location`.
- **Additional Instructions**:
  - Create two students.
  - Render a table using Vanilla JavaScript with the student data.

**Code Example**:

```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};
const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];
```

### 1. Let's Build a Teacher Interface

- **Objective**: Define a `Teacher` interface with properties such as `firstName`, `lastName`, `fullTimeEmployee`, and optional `yearsOfExperience`.

**Code Example**:

```typescript
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows any additional property
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: false, // Additional property
};
```

### 2. Extending the Teacher Interface

- **Objective**: Extend the `Teacher` interface to create a new interface `Directors` that include `numberOfReports`.

**Code Example**:

```typescript
interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 5,
};
```

### 3. Printing Teachers

- **Objective**: Write a function `printTeacher` that accepts a teacher's `firstName` and `lastName` and returns the formatted name.

**Code Example**:

```typescript
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

console.log(printTeacher("John", "Doe")); // J. Doe
```

### 4. Writing a Class

- **Objective**: Write a class `StudentClass` with methods `workOnHomework` and `displayName`.

**Code Example**:

```typescript
class StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // John
```

---

**Advanced Types**

### 5. Director and Teacher Interfaces

- **Objective**: Implement advanced types for `DirectorInterface` and `TeacherInterface`, with methods related to their tasks.

### 6. Employee Creation and Work Execution

- **Objective**: Implement the `createEmployee` function that returns either a `Teacher` or `Director` based on salary input.

### 7. String Literal Types

- **Objective**: Create a `Subjects` type allowing either `Math` or `History`, and a function `teachClass` to return to the appropriate message.

**Code Example**:

```typescript
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") return "Teaching Math";
  return "Teaching History";
}

console.log(teachClass("Math")); // Teaching Math
```

---

**Ambient Namespaces and CRUD Operations**

### 8. Using an External Library

- **Objective**: Create an ambient namespace to declare types for a CRUD library and use it to insert, update, and delete rows in a table.

### 9. Namespace & Declaration Merging

- **Objective**: Use declaration merging to add additional attributes to the `Teacher` interface and create classes for different subjects like `Cpp`, `React`, and `Java`.

---

**Brand Convention and Nominal Typing**

### 10. Nominal Typing with Major and Minor Credits

- **Objective**: Implement `MajorCredits` and `MinorCredits` interfaces to handle credit summation with nominal typing.

---

## Author

_Refiloe Radebe_

_This project was developed as part of the **ALX Backend Specialization**. It focuses on key TypeScript concepts and includes various exercises to deepen understanding._
