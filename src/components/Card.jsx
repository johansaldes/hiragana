import React, { useState, useContext, useCallback, useMemo } from 'react';
import { getRandomCard, checkInputCorrect } from '../cards';
import { ScoreContext } from '../context/ScoreContext';

function Card() {
  const [{ writingsystem }, dispatch] = useContext(ScoreContext);

  /**
   * @desc Decides what flashcard to show
   */
  const [card, setCard] = useState(getRandomCard());

  const [correct, setCorrect] = useState('');

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

  const generateAnswers = useCallback(() => {
    if (card) {
      return [
        getRandomCard(card.romanji[0]).romanji[0],
        getRandomCard(card.romanji[0]).romanji[0],
        card.romanji[0],
      ].sort(() => Math.random() - 0.5);
    }
    return [];
  }, [card]);

  const sumbitAnswer = useCallback(
    (answer) => {
      if (checkInputCorrect(answer, card)) {
        setCard(getRandomCard());
        setBorderColor('correctAnswer');
        dispatch({ type: 'INCREMENT_SCORE' });
        dispatch({ type: 'UPDATE_BACKGROUND' });
      } else {
        setBorderColor('incorrectAnswer');
      }
      dispatch({ type: 'INCREMENT_TRIES' });
    },
    [setBorderColor, setCard, dispatch, card],
  );

  const SelectAnswer = useMemo(() => {
    if (card) {
      return generateAnswers().map((answer) => (
        <button
          className="AnswerBtn"
          type="button"
          onClick={() => sumbitAnswer(answer)}
        >
          {answer}
        </button>
      ));
    }
    return <div />
  }, [card]);

  return (
    <div className={`Card ${correct}`}>
      <h1 className="Hiragana">
        {selectWritingSystem(writingsystem)}
      </h1>
      <div className="Answer">
        {SelectAnswer}
      </div>
    </div>
  );
}

export default Card;
