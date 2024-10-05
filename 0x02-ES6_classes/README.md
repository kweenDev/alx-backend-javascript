# ES6 Classes - JavaScript Project

Welcome to the **ES6 Classes** project repository! This project is part of the `alx-backend-javascript` curriculum and focuses on the implementation of classes using ES6 syntax. It covers essential concepts such as inheritance, encapsulation, and object-oriented programming principles.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Author](#author)

## Overview

In this project, we implement several JavaScript classes to explore object-oriented programming (OOP) using ES6 syntax. Classes such as `Car` and `EVCar` demonstrate how inheritance, encapsulation, and method overriding work.

Each task builds on top of the previous one, ensuring that concepts are progressively understood and implemented. The final product is a functional codebase that models car objects and their electric variants.

## Features

- Define a `Car` class with properties such as `brand`, `motor`, and `color`.
- Create an `EVCar` class inheriting from `Car`, with additional attributes like `range`.
- Use method overriding to implement specific behavior in `EVCar` and clone a parent class object.
- Leverage ES6 class syntax for concise and modern JavaScript code.

## Technologies

- **JavaScript (ES6)**: Using the latest ECMAScript standards for class-based object-oriented programming.
- **Node.js**: Environment for executing JavaScript code outside the browser.
- **Babel**: A JavaScript compiler used to transpile ES6+ code into a format compatible with older environments.

## Installation

To get started with the project locally, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/alx-backend-javascript.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd 0x02-ES6_classes
   ```

3. **Install dependencies:**
   If your project requires any dependencies, use:

   ```bash
   npm install
   ```

4. **Run the code:**
   To run any of the JavaScript files:
   ```bash
   node filename.js
   ```

## Usage

- \*\*Example for `Car` class:

  ```js
  import Car from "./10-car.js";

  const myCar = new Car("Toyota", "V6", "Blue");
  console.log(myCar.toString()); // Output: Car { brand: Toyota, motor: V6, color: Blue }
  ```

- \*\*Example for `EVCar` class:

  ```js
  import EVCar from "./11-ev_car.js";

  const myEV = new EVCar("Tesla", "Electric", "Red", "500km");
  console.log(myEV.toString()); // Output: EVCar { brand: Tesla, motor: Electric, color: Red, range: 500km }

  const clonedCar = myEV.cloneCar();
  console.log(clonedCar.toString()); // Output: Car { brand: Tesla, motor: Electric, color: Red }
  ```

**Running Tests**
If you have written unit tests for your classes (highly recommended), run them using:

```bash
npm test
```

Ensure all test files follow the convention `*.test.js` for consistency.

## Project Structure

```plaintext
├── 0x02-ES6_classes/
│   ├── 10-car.js         # Car class definition
│   ├── 11-ev_car.js      # EVCar class inheriting from Car
│   ├── README.md         # Project documentation
│   └── tests/            # Directory containing test files
```

## Author

_Refiloe Radebe_
