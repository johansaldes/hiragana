import React, { useState } from 'react';
import { getRandomCard, checkInputCorrect } from '../cards';

function Card({ updateScore, updateTries }) {
  /**
   * @desc Decides if card shows hiragana or romanji
   */
  let [view, setView] = useState(true);

  /**
   * @desc Decides what flashcard to show
   */
  let [card, setCard] = useState(getRandomCard());

  let [inputValue, setInputValue] = useState('');
  const hiraganaOrRomanji = (type) => type ? card.hiragana : card.romanji[0];
  return (
    <div className="Card">
      <h1
        onMouseEnter={() => setView(!view)}
        onMouseLeave={() => setView(!view)}
        className="Hiragana"
      >
        {hiraganaOrRomanji(view)}
      </h1>
      <input 
        value={inputValue} 
        className="input" 
        type="text"
        autoFocus
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (inputValue.length === 0) {
              return;
            }
            if (checkInputCorrect(inputValue.toLowerCase(), card)) {
              card = setCard(getRandomCard());
              updateScore();
            }
            updateTries();
            setInputValue('');
          }
        }} 
      />
    </div>
  );
}

export default Card;