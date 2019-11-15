import React, { useState, useContext } from 'react';
import { getRandomCard, checkInputCorrect } from '../cards';
import { ScoreContext } from '../context/ScoreContext';

function Card() {
  const [{ writingsystem }, dispatch] = useContext(ScoreContext);
  /**
   * @desc Decides if card shows hiragana or romanji
   */
  const [view, setView] = useState(writingsystem);

  /**
   * @desc Decides what flashcard to show
   */
  const [card, setCard] = useState(getRandomCard());

  const [inputValue, setInputValue] = useState('');

  const selectWritingSystem = (type) => {
    switch (type) {
      case 'hiragana':
        return card.hiragana;
      case 'katakana':
        return card.katakana;
      case 'romanji':
        return card.romanji[0];
      default:
        throw new Error('Invalid writing system.');
    }
  };

  return (
    <div className="Card">
      <h1
        onMouseEnter={() => setView('romanji')}
        onMouseLeave={() => setView(writingsystem)}
        className="Hiragana"
      >
        {selectWritingSystem(view === 'romanji' ? view : writingsystem)}
      </h1>
      <input
        value={inputValue}
        className="input"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (inputValue.length === 0) {
              return;
            }
            if (checkInputCorrect(inputValue.toLowerCase(), card)) {
              setCard(getRandomCard());
              dispatch({ type: 'INCREMENT_SCORE' });
              dispatch({ type: 'UPDATE_BACKGROUND' });
            }
            dispatch({ type: 'INCREMENT_TRIES' });
            setInputValue('');
          }
        }}
      />
    </div>
  );
}

export default Card;
