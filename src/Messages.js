import React from "react";

const Messages = ({ messages }) => {
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>Subject:</strong> {message.subject} | <strong>Email:</strong>{" "}
            {message.email} | <strong>Content:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
