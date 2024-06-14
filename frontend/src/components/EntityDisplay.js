import React, { useState, useEffect } from 'react';

const entities = [
  { text: 'Chidiya', canFly: true },
  { text: 'Cheenti', canFly: false },
  // Add more entities
];

const EntityDisplay = () => {
  const [currentEntity, setCurrentEntity] = useState({});

  useEffect(() => {
    const entityInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * entities.length);
      setCurrentEntity(entities[randomIndex]);
    }, 2000); // Change interval time as needed

    return () => clearInterval(entityInterval);
  }, []);

  return (
    <div>
      <h1>{currentEntity.text}</h1>
    </div>
  );
};

export default EntityDisplay;
