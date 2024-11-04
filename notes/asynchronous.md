# Asynchronous JavaScript

## Overview
Asynchronous JavaScript refers to the ability of JavaScript to perform tasks without blocking the main thread of execution. This is essential for building responsive and efficient web applications, as it allows JavaScript to handle tasks that may take time to complete, such as network requests, file I/O, or timers, without freezing or slowing down the user interface

## Key Concepts

### 1. The Event Loop
- JavaScript runs in a single-threaded environment but uses an *event loop* to handle asynchronous operations.
- The event loop monitors the call stack and task queue, pushing tasks from the queue to the stack when it's empty.

### 2. Callbacks
- A **callback** is a function passed as an argument to another function to be executed later.
- Example:
  ```javascript
  console.log("Start");
  setTimeout(() => {
    console.log("This runs after 2 seconds");
  }, 2000);
  console.log("End");
