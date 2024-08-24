import React from 'react';
import './MyButton.css';

function MyButton() {
  
  const handleClick = () => {
    console.log('Button clicked!');
  };

  // Return the JSX to render the button
  return (
    <button onClick={handleClick}>
      SUBMIT
    </button>
  );
}

export default MyButton;
