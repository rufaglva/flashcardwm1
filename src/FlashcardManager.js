import React, { useState } from "react";
import "./FlashcardManager.css";

const initialFlashcard = {
  id: null,
  question: "",
  answer: "",
  status: "Want to Learn",
  lastModified: null,
};

function FlashcardManager() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentFlashcard, setCurrentFlashcard] = useState(initialFlashcard);

  const addFlashcard = () => {
    setFlashcards((prevFlashcards) => [
      ...prevFlashcards,
      {
        ...currentFlashcard,
        id: new Date().getTime(),
        lastModified: new Date(),
      },
    ]);
    setCurrentFlashcard(initialFlashcard);
  };

  const editFlashcard = (id) => {
    const editedFlashcard = flashcards.find(
      (flashcard) => flashcard.id === id
    );
    setCurrentFlashcard(editedFlashcard);
  };

  const updateFlashcard = () => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.map((flashcard) =>
        flashcard.id === currentFlashcard.id
          ? {
              ...flashcard,
              ...currentFlashcard,
              lastModified: new Date(),
            }
          : flashcard
      )
    );
    setCurrentFlashcard(initialFlashcard);
  };

  const deleteFlashcard = (id) => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((flashcard) => flashcard.id !== id)
    );
  };

  return (
    <div className="flashcard-manager-container">
      <h1>Flashcard Manager</h1>
      <form className="flashcard-form">
        <label>
          Question:
          <input
            type="text"
            value={currentFlashcard.question}
            onChange={(e) =>
              setCurrentFlashcard({
                ...currentFlashcard,
                question: e.target.value,
                lastModified: new Date(),
              })
            }
          />
        </label>
        <label>
          Answer:
          <input
            type="text"
            value={currentFlashcard.answer}
            onChange={(e) =>
              setCurrentFlashcard({
                ...currentFlashcard,
                answer: e.target.value,
                lastModified: new Date(),
              })
            }
          />
        </label>
        <label>
          Status:
          <select
            value={currentFlashcard.status}
            onChange={(e) =>
              setCurrentFlashcard({
                ...currentFlashcard,
                status: e.target.value,
                lastModified: new Date(),
              })
            }
          >
            <option value="Learned">Learned</option>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Noted">Noted</option>
          </select>
        </label>
        <div className="form-group">
          {currentFlashcard.id ? (
            <button type="button" onClick={updateFlashcard}>
              Update Flashcard
            </button>
          ) : (
            <button type="button" onClick={addFlashcard}>
              Add Flashcard
            </button>
          )}
        </div>
      </form>
      <ul className="flashcard-list">
        {flashcards.map((flashcard) => (
          <li key={flashcard.id} className="flashcard-item">
            <div>
              <strong>Question:</strong> {flashcard.question}
            </div>
            <div>
              <strong>Answer:</strong> {flashcard.answer}
            </div>
            <div>
              <strong>Status:</strong> {flashcard.status}
            </div>
            <div>
              <strong>Last Modified:</strong>{" "}
              {flashcard.lastModified.toLocaleString()}
            </div>
            <div className="button-group">
              <button
                type="button"
                onClick={() => editFlashcard(flashcard.id)}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteFlashcard(flashcard.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlashcardManager;
