import React from 'react';
import Card from './components/Card';
import './App.css';
import Background, { backgroundImages } from './components/Background';
import Score from './components/Score';
import SelectWritingSystem from './components/SelectWritingSystem';

const initialState = {
  correct: 0,
  tries: 0,
  writingsystem: 'hiragana',
  background: backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
};

export const ScoreContext = React.createContext();

const scoreReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT_SCORE':
      return { ...state, correct: state.correct + 1 };
    case 'INCREMENT_TRIES':
      return { ...state, tries: state.tries + 1 };
    case 'SET_WRITING_SYSTEM':
      return { ...state, writingsystem: action.writingsystem };
    case 'UPDATE_BACKGROUND':
      return { ...state, background: backgroundImages[Math.floor(Math.random() * backgroundImages.length)] }
    default:
      return state;
  }
}

function App() {
  return (
    <ScoreContext.Provider value={React.useReducer(scoreReducer, initialState)}>
      <Background>
        <Score />
        <SelectWritingSystem />
        <Card />
      </Background>
    </ScoreContext.Provider>
  );
}

export default App;
