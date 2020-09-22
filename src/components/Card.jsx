import React, { useState, useContext, useCallback } from 'react';
import { getRandomCard, checkInputCorrect } from '../cards';
import { ScoreContext } from '../context/ScoreContext';

function Card() {
  const [{ writingsystem }, dispatch] = useContext(ScoreContext);
  /**
   * @desc Decides if card shows hiragana or romanji
   */
  const [view, setWritingSystem] = useState(writingsystem);

  /**
   * @desc Decides what flashcard to show
   */
  const [card, setCard] = useState(getRandomCard());

  const [correct, setCorrect] = useState('');

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

  const setBorderColor = (state) => {
    setCorrect(state);
    setTimeout(() => {
      setCorrect('');
    }, 1500);
  };

  const generateAnswers = () => [
    getRandomCard().romanji[0],
    getRandomCard().romanji[0],
    card.romanji[0],
  ].sort(() => Math.random() - 0.5);

  const sumbitAnswer = useCallback(
    (answer) => {
      if (checkInputCorrect(answer, card)) {
        setBorderColor('correctAnswer');
        setCard(getRandomCard());
        dispatch({ type: 'INCREMENT_SCORE' });
        dispatch({ type: 'UPDATE_BACKGROUND' });
      } else {
        setBorderColor('incorrectAnswer');
      }
      dispatch({ type: 'INCREMENT_TRIES' });
      setInputValue('');
    },
    [setBorderColor, setCard, dispatch, setInputValue, card, inputValue],
  );

  return (
    <div className={`Card ${correct}`}>
      <h1
        onMouseEnter={() => setWritingSystem('romanji')}
        onMouseLeave={() => setWritingSystem(writingsystem)}
        className="Hiragana"
      >
        {selectWritingSystem(view === 'romanji' ? view : writingsystem)}
      </h1>
      <div className="Answer">
        {generateAnswers().map((answer) => (
          <button
            className="AnswerBtn"
            type="button"
            onClick={() => sumbitAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Card;
