import React from 'react';
import socket from '../socket';

const UddButton = () => {
  const handleUdd = () => {
    socket.emit('user_response', { response: 'udd' });
  };

  return <button onClick={handleUdd}>Udd</button>;
};

export default UddButton;
