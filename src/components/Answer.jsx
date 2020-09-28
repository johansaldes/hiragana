import React, { useContext } from 'react';
import { DeckContext } from '../context/DeckContext';

const Answer = () => {
  const [{ currentCard, currentAnswers }, dispatch] = useContext(DeckContext);
  return (
    <div>
      
    </div>
  )
};

export default Answer;