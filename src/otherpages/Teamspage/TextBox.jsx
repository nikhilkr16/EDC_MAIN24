import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';  // Ensure this path is correct

function TextBox() {
  // State to hold the value of the input
  const [text, setText] = useState('');

  // Handler function for input change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Automatically submit data to Firestore when `text` changes
  useEffect(() => {
    const submitData = async () => {
      if (text !== '') {  // Ensure we only submit non-empty text
        try {
          const docRef = await addDoc(collection(db, 'userYears'), {
            years: text,
          });
          console.log('Document written with ID: ', docRef.id);
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      }
    };

    submitData();
  }, [text]);

  return (
    <div className="p-4">
      <input
        type="number"
        value={text}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 w-full"
        placeholder="Enter the data in years"
      />
    </div>
  );
}

export default TextBox;
