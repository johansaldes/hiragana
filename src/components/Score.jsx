import React from 'react';
import { ScoreContext } from '../App';

function Score() {
  return (
    <ScoreContext.Consumer>
      {({ state: { correct, tries } }) => {
        const total = correct / tries || 0;
        return (
          <div className="Score">
            <h2 className="Percentage">
              {(total * 100).toFixed(0) || 0}%
            </h2>
          </div>
        )
      }}
    </ScoreContext.Consumer>
  )
}

export default Score;