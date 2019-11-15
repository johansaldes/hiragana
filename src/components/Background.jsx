import React from 'react';
import bg from '../images/bg.jpg';
import bg2 from '../images/bg2.jpg';
import bg3 from '../images/bg3.jpg';
import bg4 from '../images/bg4.jpg';
import bg5 from '../images/bg5.jpg';
import bg6 from '../images/bg6.jpg';

function Background({children}) {
  const backgroundImages = [bg, bg2, bg3, bg4, bg5, bg6];
  const getBackgroundImage = () => backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <div className="background" style={{ backgroundImage: `url(${getBackgroundImage()})` }}>
      {children}
    </div>
  );
}

export default Background;