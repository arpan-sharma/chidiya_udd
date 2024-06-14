import React from 'react';
import EntityDisplay from './EntityDisplay';
import ScoreDisplay from './ScoreDisplay';
import Timer from './Timer';
import UddButton from './UddButton';
import NotUddButton from './NotUddButton';

const GameScreen = () => {
  return (
    <div>
      <Timer />
      <ScoreDisplay />
      <EntityDisplay />
      <UddButton />
      <NotUddButton />
    </div>
  );
};

export default GameScreen;
