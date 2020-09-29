import React from "react";
import Card from "./components/Card";
import "./App.css";
import Background from "./components/Background";
import Score from "./components/Score";
import SelectWritingSystem from "./components/SelectWritingSystem";
import {
  scoreReducer,
  initialState,
  ScoreContext,
} from "./context/ScoreContext";

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
