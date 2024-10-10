import { Cpp } from ".//Cpp";
import { Java } from ".//Java";
import { React } from ".//React";
import { Teacher } from ".//Teacher";

// Create constants for subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create a teacher with C++ experience
export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};

// Test Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Test Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Test React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());