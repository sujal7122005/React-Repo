# Project-5 : Currency Converter  

A modern and responsive **Currency Converter** built using **React + Vite**, focused on learning and implementing **Custom Hooks** for clean and reusable data-fetching logic.

This project demonstrates how to separate **business logic** from **UI components**, following real-world React best practices.

---

## Features : 

- Convert between multiple currencies
- Real-time exchange rates
- Swap currencies with one click
- Reusable input component
- Clean and modern UI (Tailwind CSS)
- Optimized and scalable React structure

---

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

## Tech Stack : 

- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Public Currency Exchange API**

---

## Project Structure

```text
src/
 ├─ hooks/
 │   └─ useCurrencyInfo.js
 ├─ components/
 │   └─ CurrencyInput.jsx
 ├─ App.jsx
 ├─ main.jsx
