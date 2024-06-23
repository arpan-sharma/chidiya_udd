import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GameScreen.css';
console.log(window.location.pathname);
const GameScreen = () => {
    const [entity, setEntity] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchGameState = () => {
            axios.get('http://127.0.0.1:8000/api/game-state/')
                .then(response => {
                    setEntity(response.data.entity);
                    setScore(response.data.score);
                })
                .catch(error => console.error('Error fetching game state:', error));
        };

         fetchGameState();
        // const interval = setInterval(fetchGameState, 1000);

        // return () => clearInterval(interval);
    }, [score]);

    const handleUserResponse = (response) => {
        axios.post('http://127.0.0.1:8000/api/update-game/', { response })
            .then(response => {
                setEntity(response.data.entity);
                setScore(response.data.score);
            })
            .catch(error => console.error('Error updating game state:', error));
    };

    return (
        <div className="game-screen">
            <h1>चिड़िया उड़</h1>
            {entity && (
                <div className="entity-display">
                    <img src={entity.symbol} alt={entity.name} />
                    <h2>{entity.name}</h2>
                    <audio src={`/${entity.sound}`} autoPlay />

                </div>
            )}
            <h2>स्कोर: {score}</h2>
            <div className="buttons">
                <button onClick={() => handleUserResponse('udd')}>उड़</button>
                <button onClick={() => handleUserResponse('not_udd')}>नहीं उड़</button>
            </div>
        </div>
    );
};

export default GameScreen;
