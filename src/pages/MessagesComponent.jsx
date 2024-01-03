import React from 'react';
import { Card, CardContent, Typography } from "@mui/material";
import '../styles/message.css';

function MessagesComponent({ message, username }) {
  // Check if 'message' is undefined or null
  if (!message) {
    return null; // or return a placeholder, loading state, or an error message
  }

  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography
            style={{ color: "black" }}
            color="white"
            variant="h5"
            component="h2"
          >
            {message.username}:{message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default MessagesComponent;
