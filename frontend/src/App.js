// src/App.js
import React from 'react';
import GameScreen from './components/GameScreen';
import './App.css';  // Ensure you create and style this CSS file
import './components/GameScreen.js'

function App() {
  return (
    <div className="App">
      <GameScreen />
    </div>
  );
}

export default App;
