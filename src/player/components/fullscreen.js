import React from 'react';
import FullScreenIcon from '../../icons/components/fullscreen.js';
import './fullscreen.css';

const FullScreen = (props) => {
  return (
    <div 
      className="Fullscreen"
      onClick={props.handleFullScreenClick}
    >
    <FullScreenIcon
      size={25}
      color="white"
    />
  </div>  
  )
}

export default FullScreen;