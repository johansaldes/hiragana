import React, { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

function Score() {
  const [{ correct, tries }] = useContext(ScoreContext);
  const total = correct / tries || 0;
  return (
    <div className="Score">
      <h2 className="Percentage">{(total * 100).toFixed(0) || 0}%</h2>
    </div>
  );
}

export default Score;
