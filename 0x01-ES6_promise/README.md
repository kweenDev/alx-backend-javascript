# ES6 Promises Project

#### 0x01-ES6_promise

This project explores the use of JavaScript Promises using ES6 syntax. It demonstrates how to create, handle, and chain promises, as well as deal with various scenarios like resolving, rejecting, and handling errors in asynchronous code.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Concepts](#key-concepts)
  - [Promises](#promises)
  - [Promise Chaining](#promise-chaining)
  - [Error Handling](#error-handling)
- [Scripts Overview](#scripts-overview)
- [Testing](#testing)
- [Author](#author)

## Introduction

Promises are an essential part of modern JavaScript that help manage asynchronous operations such as API calls, file reading, and handling events. This project demonstrates various scenarios of promise handling using ES6 syntax. It includes examples of creating promises, chaining them, handling errors, and combining multiple promises.

## Prerequisites

To run this project, you'll need the following:

- **Node.js**: Version 12 or above
- **npm** (Node package manager): Installed along with Node.js
- **Babel**: To transpile ES6 code (already configured in the project)
- **Jest**: For unit testing

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/0x01-ES6_promise.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd 0x01-ES6_promise
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Transpile ES6 code (optional if you're using Node.js 12 or above):**
   ```bash
   npm run build
   ```

## Usage

Once the dependencies are installed, you can execute each script by running the following command:

```bash
node ./src/<script_name>.js
```

Replace `<script_name>` with the respective script you want to run.

## Project Structure

    ```plaintext
    ├── src/

│ ├── 0-promise.js # Basic promise creation
│ ├── 1-promise.js # Promise resolution and rejection
│ ├── 2-then.js # Handling promise response
│ ├── 3-all.js # Handling multiple promises
│ ├── 4-user.js # Resolving multiple promises
│ ├── 5-photo-reject.js # Handling promise rejection
│ ├── 6-final.js # Combining multiple promises
│ ├── 7-race.js # Promise race
│ ├── 8-error.js # Throwing errors in promises
├── tests/ # Jest test cases for the scripts
├── .babelrc # Babel configuration
├── .eslintrc.js # ESLint configuration
├── package.json # Project configuration and dependencies
└── README.md # Project documentation

    ```

## Key Concepts

### Promises

A promise represents the eventual completion (or failure) of an asynchronous operation. It can be in one of three states: - **Pending:** Initial state, neither fulfilled nor rejected. - **Fulfilled:** The operation completed successfully. - **Rejected:** The operation failed.

### Promise Chaining

Promise chaining allows you to handle the result of a promise and then pass it along to the next `.then()` block. It makes asynchronous code cleaner and more readable.

### Error Handling

Promises handle errors through `.catch()` and `throw` statements. Proper error handling is essential for ensuring that rejected promises don't break the entire flow of the program.

## Scripts Overview

1. **0-promise.js:**
   - Demonstrates the creation of a basic promise that always resolves.
2. **1-promise.js:**
   - Handles API response simulation with both resolved and rejected states.
3. **2-then.js:**
   - Shows how to attach `.then()` handlers to promises for processing results.
4. **3-all.js:**
   - Combines multiple promises using `Promise.all()`, handling success and errors.
5. **4-user.js:**
   - Resolves multiple promises representing different API calls (user and photo).
6. **5-photo-reject.js:**
   - Demonstrates handling of a rejected promise.
7. **6-final.js:**
   - Uses `Promise.allSettled()` to handle multiple promises with varying outcomes.
8. **7-race.js:**
   - Implements `Promise.race()` to return the first resolved promise.
9. **8-error.js:**
   - Demonstrates how to throw an error inside a promise and catch it using `catch()`.

## Testing

Unit tests have been written using Jest for each script. To run the test suite:

    ```bash
    npm test
    ```

Test coverage will ensure that all edge cases for promises, such as success, failure, and error handling, are thoroughly checked.

## Author

_Refiloe Radebe_
