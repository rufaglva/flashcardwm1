import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";
import axios from "axios";
import FlashcardManager from "./FlashcardManager";
import Messages from "./Messages";
import Flashcards from "./Flashcards";
import "./flashcardList.css";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]); // Added initialization
  const [data, setData] = useState({ messages: [], flashcards: [] });
  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios.get('./flashcards.json')
      .then((res) => {
        setData(res.data);

        // Assuming categories are available in the response
        setCategories(res.data.categories || []);

        setFlashcards(res.data.flashcards.map((flashcard, index) => ({
          id: `${index}-${Date.now()}`,
          question: flashcard.question,
          answer: flashcard.answer,
          options: flashcard.options ? flashcard.options.sort(() => Math.random() - 0.5) : [],
          status: flashcard.status,
        })));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error if needed
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  function decodeString(str) {
    const textArea = document.createElement(`textarea`);
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
      <div className="App">
        <FlashcardManager />
      </div>
    </>
  );
}

export default App;
