// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any; // To allow dynamic properties like 'contract'
}

// Create a teacher object with dynamic properties
const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
};

console.log(teacher3);

// Extending the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a director object
const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Define the function type interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}, ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// Interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the classs
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName());