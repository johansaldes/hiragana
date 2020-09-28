import React from 'react';

export const initialState = {
  currentCard: {},
  currentAnswers: [],
};

export const DeckContext = React.createContext();

export const deckReducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'SET_CURRENT_CARD':
      return { ...state, currentCard: action.card };
    case 'SET_CURRENT_ANSWERS':
      console.log({ answer: action.answer });
      return { ...state, currentAnswers: action.answer };
    default:
      return state;
  }
};
