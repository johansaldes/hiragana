import React, { useState, useContext } from 'react';
import { getRandomCard, checkInputCorrect } from '../cards';
import { ScoreContext } from '../App';

function Card() {
  const [{ writingsystem }, dispatch] = useContext(ScoreContext);
  /**
   * @desc Decides if card shows hiragana or romanji
   */
  let [view, setView] = useState(writingsystem);

  /**
   * @desc Decides what flashcard to show
   */
  let [card, setCard] = useState(getRandomCard());

  let [inputValue, setInputValue] = useState('');

  const selectWritingSystem = (type) => {
    switch(type) {
      case 'hiragana':
        return card.hiragana;
      case 'katakana':
        return card.katakana;
      case 'romanji':
        return card.romanji[0];
      default:
        console.log('Invalid writing system.')
    }
  }
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
        autoFocus
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (inputValue.length === 0) {
              return;
            }
            if (checkInputCorrect(inputValue.toLowerCase(), card)) {
              card = setCard(getRandomCard());
              dispatch({ type: 'INCREMENT_SCORE' })
              dispatch({ type: 'UPDATE_BACKGROUND' })
            }
            dispatch({ type: 'INCREMENT_TRIES' })
            setInputValue('');
          }
        }} 
      />
    </div>
  );
}

export default Card;