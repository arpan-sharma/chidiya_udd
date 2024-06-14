import React, { useState } from 'react';

const ScoreDisplay = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Score: {score}</h2>
    </div>
  );
};

export default ScoreDisplay;
