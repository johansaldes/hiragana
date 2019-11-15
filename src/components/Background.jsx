import React from 'react';
import bg from '../images/bg.jpg';
import bg2 from '../images/bg2.jpg';
import bg3 from '../images/bg3.jpg';
import bg4 from '../images/bg4.jpg';
import bg5 from '../images/bg5.jpg';
import bg6 from '../images/bg6.jpg';
import { ScoreContext } from '../App';

export const backgroundImages = [bg, bg2, bg3, bg4, bg5, bg6];

function Background({children}) {
  const [{ background }] = React.useContext(ScoreContext);
  return (
    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      {children}
    </div>
  );
}

export default Background;