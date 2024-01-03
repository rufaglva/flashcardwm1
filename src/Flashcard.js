import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options ? (
            flashcard.options.map((option, index) => (
              <div key={index} className="flashcard-option">
                {option}
              </div>
            ))
          ) : (
            <div>No options available</div>
          )}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}
