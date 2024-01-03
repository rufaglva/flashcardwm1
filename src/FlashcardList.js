import React, { useState } from "react";
import "./flashcardList.css";

const Flashcard = ({ question, answer, status }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="content">
        <div>
          <h3>{question}</h3>
        </div>
      </div>
      <div className="back">
        <p>{answer}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          question={flashcard.question}
          answer={flashcard.answer}
          status={flashcard.status}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
