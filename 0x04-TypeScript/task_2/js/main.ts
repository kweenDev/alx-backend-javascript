// Director Interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director Class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from Home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher Class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Director and Teacher from Task 5
// Function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Define a string literal type for subjects
type Subjects = "Math" | "History";

// Function to teach class based on subject
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}

// Test cases
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(100)); // Director
console.log(createEmployee("$500")); // Director
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History