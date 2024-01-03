import React, { useState, useEffect, useRef } from 'react';

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState('initial');

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 200));
  }

  useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options]);
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  }, []);

  const handleStatusChange = (e) => {
    // Handle status change (you may want to update the status in your state)
    console.log(`Status changed to: ${e.target.value}`);
  };

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options ? (
            flashcard.options.map((option, index) => (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            ))
          ) : (
            <div>No options available</div>
          )}
          <label>Status:</label>
          <select value={flashcard.status} onChange={handleStatusChange}>
            <option value="Want to Learn">Want to Learn</option>
            <option value="Learned">Learned</option>
            <option value="Noted">Noted</option>
          </select>
        </div>
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}
