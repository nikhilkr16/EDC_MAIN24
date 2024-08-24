import React, { useState } from 'react';

function TextBox() {
  // State to hold the value of the input
  const [text, setText] = useState('');

  // Handler function for input change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="number"
        value={text}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 w-full"
        placeholder=""
      />
      
    </div>
  );
}

export default TextBox;
