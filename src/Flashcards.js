import React from "react";

const Flashcards = ({ flashcards }) => {
  return (
    <div>
      <h2>Flashcards</h2>
      <ul>
        {flashcards.map((flashcard) => (
          <li key={flashcard.id}>
            <strong>Question:</strong> {flashcard.question} | <strong>Answer:</strong>{" "}
            {flashcard.answer} | <strong>Status:</strong> {flashcard.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Flashcards;
