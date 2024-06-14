import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div>
      <h2>Time Left: {timeLeft}</h2>
    </div>
  );
};

export default Timer;
