import React from 'react';
import { ScoreContext } from '../App';

function Score() {
  const score = React.useContext(ScoreContext);
  const total = score.correct / score.tries || 0;
  return (
    <div className="Score">
      <h2 className="Percentage">{(total * 100).toFixed(0) || 0}%</h2>
    </div>
  )
}

export default Score;