// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 20,
    location: "Los Angeles",
};

// Add students to the array
const studentsList: Student[] = [student1, student2];

// Vanilla JS to render a table in the DOM
const table = document.createElement('table');
studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});

document.body.appendChild(table);