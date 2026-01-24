# Start a React journey with basics, Learn all concepts by Small Projects 
---
# PROJECT-1 :  React Counter App

A simple and interactive **Counter Application** built using **React + Vite**.  
This project is created to understand and practice **state management in React** using the `useState` hook.
##  Features :

- ➕ Increase the counter value
- ➖ Decrease the counter value
- ⚡ Fast development with Vite
- 🎯 Beginner-friendly and clean UI

---
# PROJECT-2 : React Cards App (Props & Tailwind)

A simple React project where multiple **cards** are created using **reusable components**.  
Card data is dynamically passed using **props**, and styling is done with **Tailwind CSS**.

##  Key Learnings :

- Using **props** to pass dynamic data
- Creating **reusable & modular components**
- Tailwind CSS **configuration & utility classes**
- Clean component structure in React

---
# project - 3 :  Background Changer App

A basic React application built with **Vite** to understand **state management** in React.  
The app allows users to change the **background color** dynamically using React state.

##  Key Learnings :

- Managing state using `useState`
- Updating UI based on state changes
- Handling button click events
- Building a simple interactive UI with React
---
# project 4 : Password Generator 

A clean and minimal **Password Generator** built using **React + Vite**.  
This project was created as a learning exercise to understand **core React hooks**, state management, and performance optimization.


## Features :

- Generate secure and random passwords
- Adjustable password length using a slider
- Option to include:
  - Numbers
  - Special characters
- One-click copy to clipboard
- Clean, minimal, and responsive UI


## What I Learned :

This mini project helped me understand and practice the following **React concepts**:

- **`useState`**
  - Managing password value
  - Handling length, checkboxes, and UI state

- **`useEffect`**
  - Automatically regenerating password when dependencies change

- **`useCallback`**
  - Optimizing password generation logic
  - Preventing unnecessary function re-creation

- **`useRef`**
  - Copying password directly to clipboard
  - Accessing input field without re-render

---
# Project-5 : Currency Converter  

A modern and responsive **Currency Converter** built using **React + Vite**, focused on learning and implementing **Custom Hooks** for clean and reusable data-fetching logic.

This project demonstrates how to separate **business logic** from **UI components**, following real-world React best practices.


## Features : 

- Convert between multiple currencies
- Real-time exchange rates
- Swap currencies with one click
- Reusable input component
- Clean and modern UI (Tailwind CSS)
- Optimized and scalable React structure


## What I Learned : 

This mini project helped me deeply understand and apply **Custom Hooks** in React along with core hooks.

### Custom Hooks
- Created a reusable `useCurrencyInfo` hook
- Encapsulated API fetching logic
- Improved code reusability and readability
- Followed the Rules of Hooks

### React Hooks Used

- **`useState`**
  - Managing input values and selected currencies

- **`useEffect`**
  - Fetching currency data when selected currency changes

- **Custom Hook (`useCurrencyInfo`)**
  - Abstracting API logic away from components
  - Making the application easier to maintain and extend

---
# Project - 6 : React Context API 

A simple React mini project built to understand and implement the **Context API** for global state management.

This project demonstrates how data can be **shared across multiple components** without prop drilling by using a centralized context.


## Project Overview :

The application contains two main components:

- **Login Component**  
  Sends user data (username & password) to the global context.

- **Profile Component**  
  Consumes user data from the context and displays a welcome message.

This flow helps visualize how Context API works in a real-world scenario.


## What I Learned

This project helped me gain hands-on understanding of **global state management** using React Context API.

### Core Concepts Learned

- Creating a context using `createContext`
- Providing data using `Context.Provider`
- Consuming data using `useContext`
- Avoiding prop drilling
- Centralizing application state

---
# Project 7 : Theme Switcher using React Context API

A simple **Light / Dark Theme Switcher** built using **React + Vite** to understand the **React Context API** in a practical way.

This mini project focuses on managing **global state** and sharing data across components without using prop drilling.


## Project Objective

The main goal of this project is to:

- Learn the basics of **React Context API**
- Understand how to **create and provide context**
- Consume global state using `useContext`
- Implement a theme switcher (Light / Dark mode)
- Improve component communication and project structure


## Concepts Covered

- `createContext()`
- Context Provider
- `useContext()`
- Global state management
- Theme toggling logic
- Clean React folder structure

---
# Project - 8 : React Todo App – Context API + LocalStorage

A clean and scalable **Todo Application** built with **React + Vite**, focused on mastering **Context API** for global state management and **LocalStorage** for data persistence.

This project demonstrates how to manage shared state across components while ensuring todos remain saved even after refreshing the browser.


## Project Overview

The app allows users to:

- Add new todos
- Edit existing tasks
- Mark tasks as complete
- Delete tasks
- Persist todos using LocalStorage
- Share state globally using Context API


## What I Learned

This mini project helped me understand how to combine **global state management** with **browser persistence**.

### Core Learnings

- Implementing Context API for application-wide state
- Using `useContext` for consuming shared data
- Synchronizing React state with LocalStorage
- Hydrating state on app load
- Writing clean and modular component architecture
- Avoiding prop drilling

---
# Project - 9 : React Todo App – Redux Toolkit

A scalable and modern **Todo Application** built using **React + Redux Toolkit**, focused on understanding centralized state management, reducers, actions, and store configuration in a clean and efficient way.

This project demonstrates how Redux Toolkit simplifies traditional Redux patterns while keeping the codebase organized and maintainable.


## Project Overview

This app allows users to:

- Add new todos
- Edit existing todos
- Delete todos
- Manage state globally using Redux Toolkit


## What I Learned

Through this mini project, I gained practical experience with industry-standard state management.

### Key Learnings

- Setting up Redux store using `configureStore`
- Creating slices with `createSlice`
- Dispatching actions using `useDispatch`
- Accessing global state using `useSelector`
- Writing immutable logic using Immer
- Structuring Redux code in a scalable way
- Avoiding prop drilling

---




