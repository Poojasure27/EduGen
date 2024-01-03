import React from 'react';
import MessagesComponent from './pages/MessagesComponent'; // Rename the import to avoid conflict

const Messages = () => {
  return (
    <>
      <MessagesComponent /> {/* Use the renamed component */}
    </>
  );
};

export default Messages;
