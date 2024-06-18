// src/components/EntityDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EntityDisplay.css';  // Ensure you create and style this CSS file

const EntityDisplay = ({ onUserResponse }) => {
  const [entity, setEntity] = useState(null);

  useEffect(() => {
    const fetchEntity = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/entity/');
      setEntity(response.data);
    };

    fetchEntity();
  }, []);

  if (!entity) return null;

  return (
    <div className="entity-display">
      <img src={entity.symbol} alt={entity.name} />
      <audio src={entity.sound} autoPlay />
    </div>
  );
};

export default EntityDisplay;
