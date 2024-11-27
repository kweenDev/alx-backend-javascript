# 0x05. NodeJS Basics

![NodeJS Logo](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)

This project introduces the foundational concepts of Node.js, a powerful runtime for executing JavaScript outside the browser. The tasks cover basic JavaScript execution, working with Node.js modules, creating HTTP servers, and leveraging the Express.js framework for advanced routing.

## Table of Contents

- [Project Overview](#project-overview)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Setup](#setup)
- [Tasks](#tasks)
  - [Task 0: Executing Basic JavaScript](#task-0-executing-basic-javascript)
  - [Task 1: Using Process stdin](#task-1-using-process-stdin)
  - [Task 2: Reading Files Synchronously](#task-2-reading-files-synchronously)
  - [Task 3: Reading Files Asynchronously](#task-3-reading-files-asynchronously)
  - [Task 4: Simple HTTP Server](#task-4-simple-http-server)
  - [Task 5: Advanced HTTP Server](#task-5-advanced-http-server)
  - [Task 6: Express Server Basics](#task-6-express-server-basics)
  - [Task 7: Advanced Express Server](#task-7-advanced-express-server)

---

## Project Overview

This project covers the basics of Node.js and Express.js, focusing on:

1. Running JavaScript with Node.js.
2. Managing files with Node.js modules.
3. Building HTTP servers with Node's `http` module and Express.js.
4. Asynchronous programming and Promise usage.

---

## Learning Objectives

By completing this project, you will be able to:

- Execute JavaScript using Node.js.
- Use Node.js modules like `fs` and `process`.
- Read and manipulate files synchronously and asynchronously.
- Build HTTP servers with Node.js and Express.js.
- Write cleaner and more maintainable code using ES6.
- Improve development speed with tools like Babel and Nodemon.

---

## Requirements

- **OS**: Ubuntu 18.04 LTS
- **Node.js**: Version 12.x.x
- **Editor**: Visual Studio Code (recommended)
- **Linters**: ESLint
- **Testing**: Jest
- **Package Manager**: npm

---

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/alx-backend-javascript.git
   cd alx-backend-javascript/0x05-Node_JS_basic
   ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run ESLint checks:

    ```bash
    npm run lint
    ```

4. Run tests:

    ```bash
    npm run test
    ```

---

## Tasks

### Task 0: Executng Basic JavaScript

- **File:** `0-console.js`
- **Goal:** Create a function `displayMessage` that prints a string to STDOUT.

- *Example:*

    ```bash
    $ node 0-main.js
    Hello NodeJS!
    ```

### Task 1: Using Process stdin

- **File:** `1-stdin.js`
- **Goal:** Create a script that prompts the user for their name and displays a personalized message.

- *Example:*

    ```bash
    $ node 1-stdin.js
    Welcome to Holberton School, what is your name?
    Alice
    Your name is: Alice
    This important software is now closing
    ```

### Task 2: Reading Files Synchronously

- **File:** `2-read_file.js`
- **Goal:** Read a CSV file synchronously and display the total number of students and their details by field.

- *Example:*

    ```bash
    $ node 2-main_1.js
    Number of students: 10
    Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
    Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
    ```

### Task 3: Reading Files Asynchronously

- **File:** `3-read_file_async.js`
- **Goal:** Read a CSV file asynchronously and log student information.

- *Example:*

    ```bash
    $ node 3-main_1.js
    After!
    Number of students: 10
    Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
    Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
    Done!
    ```

### Task 4: Simple HTTP Server

- **File:** `4-http.js`
- **Goal:** Create an HTTP server using Node's `http` module. Respond with "Hello Holberton School!" for any endpoint.

- *Example:*

    ```bash
    $ curl localhost:1245
    Hello Holberton School!
    ```

### Task 5: Advanced HTTP Server

- **File:** `5-http.js`
- **Goal:** Extend the HTTP server to handle `/students` endpoint and display student details from the database.

- *Example:*

    ```bash
    $ curl localhost:1245/students
    This is the list of our students
    Number of students: 10
    Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
    Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
    ```

### Task 6: Express Server Basics

- **File:** `6-http_express.js`
- **Goal:** Create a basic Express server that responds with "Hello Holberton School!".

- *Example:*

    ```bash
    $ curl localhost:1245
    Hello Holberton School!
    ```

### Task 7: Advanced Express Server

- **File:** `7-http_express.js`
- **Goal:** Extend the Express server to handle `/students` endpoint with asynchronous file reading.

- *Example:*

    ```bash
    $ curl localhost:1245/students
    This is the list of our students
    Number of students: 10
    Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
    Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
    ```
