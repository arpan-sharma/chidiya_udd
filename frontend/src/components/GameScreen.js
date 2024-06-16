// src/components/GameScreen.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameScreen = () => {
    const [entity, setEntity] = useState('');
    const [score, setScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://127.0.0.1:8000/api/game-state/')
                .then(response => {
                    setEntity(response.data.entity.text);
                    setScore(response.data.score);
                })
                .catch(error => console.error('Error fetching game state:', error));
        }, 1000); // Poll every 1 second

        return () => clearInterval(interval);
    }, []);

    const handleUserResponse = (response) => {
        axios.post('http://127.0.0.1:8000/api/update-game/', { response })
            .then(response => {
                setEntity(response.data.entity.text);
                setScore(response.data.score);
            })
            .catch(error => console.error('Error updating game state:', error));
    };

    return (
        <div>
            <h1>Current Entity: {entity}</h1>
            <h2>Score: {score}</h2>
            <button onClick={() => handleUserResponse('udd')}>Udd</button>
            <button onClick={() => handleUserResponse('not_udd')}>Not Udd</button>
        </div>
    );
};

export default GameScreen;
