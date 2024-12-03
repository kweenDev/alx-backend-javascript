
# 0x06. Unit Tests in JavaScript

## Description

This project focuses on unit testing in JavaScript using tools such as **Mocha**, **Chai**, and **Sinon**. It covers key testing concepts like writing test suites, using assertion libraries, working with spies, stubs, hooks, and asynchronous tests. Additionally, it includes integration testing for small Node.js servers.

---

## Learning Objectives

By the end of this project, you will be able to:

- Use **Mocha** to write a test suite.
- Apply different assertion libraries like Node's `assert` and Chai.
- Present long test suites in an organized manner using `describe` and `it`.
- Understand and use spies effectively.
- Implement stubs to simulate behavior in tests.
- Utilize hooks such as `beforeEach` and `afterEach`.
- Write unit tests for asynchronous functions.
- Perform integration testing with a small Node.js server.

## Requirements

- All code is executed on **Ubuntu 18.04** using **Node.js v12.x.x**.
- Use one of the following editors: `vi`, `vim`, `emacs`, or **Visual Studio Code**.
- All files should have a `.js` extension and end with a newline.
- Include a `README.md` file at the root of the folder (this file).
- Tests should run successfully using `npm test`.
- Ensure no warnings or errors when running tests.

## Tools and Libraries

- **Mocha**: Test framework for Node.js.
- **Chai**: Assertion library for behavior-driven development.
- **Sinon**: Utility library for spies, stubs, and mocks.
- **Express**: Web application framework for Node.js.

---

## Project Structure

```bash
alx-backend-javascript/ ├── 0x06-unittests_in_js/ │ ├── package.json │ ├── 0-calcul.js │ ├── 0-calcul.test.js │ ├── 1-calcul.js │ ├── 1-calcul.test.js │ ├── 2-calcul_chai.js │ ├── 2-calcul_chai.test.js │ ├── utils.js │ ├── 3-payment.js │ ├── 3-payment.test.js │ ├── 4-payment.js │ ├── 4-payment.test.js │ ├── 5-payment.js │ ├── 5-payment.test.js │ ├── 6-payment_token.js │ ├── 6-payment_token.test.js │ ├── README.md
```

---

## Tasks

### 0. Basic Test with Mocha and Node Assertion Library

- Implement a function that rounds two numbers and returns their sum.
- Write test cases using Node's `assert`.

### 1. Combining Descriptions

- Extend the function to handle operations (`SUM`, `SUBTRACT`, `DIVIDE`).
- Use `describe` for organizing test cases.

### 2. Basic Test Using Chai Assertion Library

- Rewrite the test suite using Chai’s `expect` for better readability.

### 3. Spies

- Use Sinon spies to validate calls to a utility function.

### 4. Stubs

- Stub a utility function to mock behavior and improve test efficiency.

### 5. Hooks

- Use `beforeEach` and `afterEach` hooks to manage test spies effectively.

### 6. Async Tests with `done`

- Write asynchronous tests for a function that returns a promise.

## Usage

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Run a specific test file:

    ```bash
    npm test <test-file>.test.js
    ```

3. Verify all tests:

    ```bash
    npm test
    ```

### Examples

- Test suite outputs will appear similar to the following:

    ```bash
    > task_0@1.0.0 test /root
    > mocha "0-calcul.test.js"

      calculateNumber
        ✓ should return correct sum for rounded values
        ✓ should handle edge cases correctly
        ...

       5 passing (35ms)
    ```

## Author

- **Refiloe Radebe**
