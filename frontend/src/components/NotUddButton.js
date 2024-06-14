import React from 'react';
import socket from '../socket';

const NotUddButton = () => {
  const handleNotUdd = () => {
    socket.emit('user_response', { response: 'not_udd' });
  };

  return <button onClick={handleNotUdd}>Not Udd</button>;
};

export default NotUddButton;
