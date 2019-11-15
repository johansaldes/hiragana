import React from 'react';
import { backgroundImages } from '../components/Background';

export const initialState = {
  correct: 0,
  tries: 0,
  writingsystem: 'hiragana',
  background: backgroundImages[Math.floor(Math.random() * backgroundImages.length)],
};

export const ScoreContext = React.createContext();

export const scoreReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return { ...state, correct: state.correct + 1 };
    case 'INCREMENT_TRIES':
      return { ...state, tries: state.tries + 1 };
    case 'SET_WRITING_SYSTEM':
      return { ...state, writingsystem: action.writingsystem };
    case 'UPDATE_BACKGROUND':
      return {
        ...state,
        background: backgroundImages[Math.floor(Math.random() * backgroundImages.length)],
      };
    default:
      return state;
  }
};
