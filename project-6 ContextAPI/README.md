# Project - 6 : React Context API 

A simple React mini project built to understand and implement the **Context API** for global state management.

This project demonstrates how data can be **shared across multiple components** without prop drilling by using a centralized context.

---

## Project Overview :

The application contains two main components:

- **Login Component**  
  Sends user data (username & password) to the global context.

- **Profile Component**  
  Consumes user data from the context and displays a welcome message.

This flow helps visualize how Context API works in a real-world scenario.

---

## What I Learned

This project helped me gain hands-on understanding of **global state management** using React Context API.

### Core Concepts Learned

- Creating a context using `createContext`
- Providing data using `Context.Provider`
- Consuming data using `useContext`
- Avoiding prop drilling
- Centralizing application state

---

## React Hooks Used

- **`useState`**
  - Managing user input and authentication state

- **`useContext`**
  - Accessing shared state across components

---

## Application Flow

1. User enters credentials in the **Login** component
2. Login component updates the global context
3. Profile component reads data from context
4. UI updates automatically without passing props

---

## Tech Stack

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **Context API**
- **CSS / Tailwind (if used)**

---


