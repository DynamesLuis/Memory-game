# 📌  Memory Card

This is a practice project from The Odin Project curriculum.

---

## 🎯 Learning Objective  
The main objective of this project was to strengthen my React and JavaScript skills by building an interactive application from scratch.

I wanted to practice managing component state, handling user interactions, working with external APIs, and implementing game logic while keeping the application organized and maintainable.

---

## 🛠️ Technologies Used
- React – Building reusable components and managing application state.
- JavaScript (ES6+) – Implementing game logic, array manipulation, and data processing.
- Tailwind CSS – Styling the interface and creating responsive layouts.
- Vite – Development environment and build tool.
- Digi-API – Fetching Digimon data and images.
- Local Storage – Persisting high scores across browser sessions.

---

## 📷 Examples / Screenshots
# Home
<img width="1366" height="651" alt="home1" src="https://github.com/user-attachments/assets/b5ccdbf7-6d59-4f69-9b85-bc0703e11e56" />
# Game
<img width="1366" height="650" alt="game1" src="https://github.com/user-attachments/assets/2fa59f60-8cb3-4003-900d-e4a73730d0b8" />


---

## 📂 Project Structure
```
src/
├── assets/
│   └── img/
│   └── index.js
│
├── components/
│   └── game/
│   └── ui/
│
├── constants/
│   └── gameConfig.js
│
├── pages/
│   └── GamePage.jsx
│   └── HomePage.jsx
│
├── services/
│   └── digimonService.js
|
├── utils/
│   └── gameUtils.js
│   └── validateJSON.js
|
├── App.jsx
├── index.css
└── main.jsx
```

---

## 📚 Learnings
Throughout this project, I gained practical experience with:

- React State Management: Managing component state with useState and sharing state between components through props.
- React Hooks: Using useEffect for API requests and useRef for tracking animation transitions without triggering unnecessary renders.
- API Integration: Fetching external data, handling loading and error states, and processing API responses.
- Array Manipulation: Filtering, selecting, and shuffling elements using JavaScript array methods and the Fisher-Yates shuffle algorithm.
- Game Logic: Managing game states, tracking selected characters, detecting repeated selections, and implementing win and lose conditions.
- Data Persistence: Using localStorage to save and retrieve high scores.
- CSS Animations: Implementing 3D card flip animations with CSS transforms and transitions, coordinating multiple components using transitionend events.
- Component Architecture: Breaking the application into reusable components and separating game logic from presentation.

---

## 🔮 Possible Improvements
- Add sound effects and background music.
- Implement additional game modes and difficulty settings.
- Add more animations and visual feedback for game events.
- Improve accessibility, including keyboard navigation.
- Add unit tests for game logic and utility functions.
- Optimize API requests and improve data loading performance.
