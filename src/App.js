import React from 'react';
import Card from './components/Card';
import './App.css';
import Background from './components/Background';
import Score from './components/Score';

const initialState = {
  correct: 0,
  tries: 0
};

export const ScoreContext = React.createContext();

const scoreReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT_SCORE':
      return { ...state, correct: state.correct + 1 };
    case 'INCREMENT_TRIES':
      return { ...state, tries: state.tries + 1 }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(scoreReducer, initialState);
  return (
    <Background>
      <ScoreContext.Provider value={{ state, dispatch }}>
        <Score />
        <Card />
      </ScoreContext.Provider>
    </Background>
  );
}

export default App;
