import React from 'react';
import Card from './components/Card';
import './App.css';
import Background from './components/Background';
import Score from './components/Score';
import SelectWritingSystem from './components/SelectWritingSystem';

const initialState = {
  correct: 0,
  tries: 0,
  writingsystem: 'hiragana'
};

export const ScoreContext = React.createContext();

const scoreReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT_SCORE':
      return { ...state, correct: state.correct + 1 };
    case 'INCREMENT_TRIES':
      return { ...state, tries: state.tries + 1 }
    case 'SET_WRITING_SYSTEM':
      return { ...state, writingsystem: action.writingsystem }
    default:
      return state;
  }
}

function App() {
  return (
    <Background>
      <ScoreContext.Provider value={React.useReducer(scoreReducer, initialState)}>
        <Score />
        <SelectWritingSystem />
        <Card />
      </ScoreContext.Provider>
    </Background>
  );
}

export default App;
