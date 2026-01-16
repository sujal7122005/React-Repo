# project 4 : Password Generator 

A clean and minimal **Password Generator** built using **React + Vite**.  
This project was created as a learning exercise to understand **core React hooks**, state management, and performance optimization.

---

## Features :

- Generate secure and random passwords
- Adjustable password length using a slider
- Option to include:
  - Numbers
  - Special characters
- One-click copy to clipboard
- Clean, minimal, and responsive UI

---

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

## Tech Stack :

- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript (ES6+)**

---

## Project Setup :

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd password-generator

# Install dependencies
npm install

# Start development server
npm run dev
