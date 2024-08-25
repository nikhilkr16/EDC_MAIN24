import React, { useState, useEffect } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.js"; 



function Dropdown() {
  // Define options for the dropdown
  const options = [
    { value: 'Television', label: 'Television' },
    { value: 'Mobiles/Phones', label: 'Mobiles/Phones' },
    { value: 'Microwaves', label: 'Microwaves' },
    { value: 'Washing Machine', label: 'Washing Machine' },
    { value: 'EV', label: 'EV' },
    { value: 'Raw Electronics', label: 'Raw Electronics' },
    { value: 'Others', label: 'Others' },
  ];

  // State to manage the selected value
  const [selectedOption, setSelectedOption] = useState('');
  const [otherText, setOtherText] = useState(''); // For the "Other" option

  // Handler for dropdown change
  const handleChange = async (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    // Automatically submit the selected option to Firebase
    if (value !== 'Others') {
      await handleSubmit(value);
    }
  };

  // Handler for the "Other" text input
  const handleTextChange = async (event) => {
    const value = event.target.value;
    setOtherText(value);

    // Automatically submit the custom text to Firebase
    await handleSubmit(value);
  };

  // Handler to submit the selected option to Firebase
  const handleSubmit = async (value) => {
    try {
      await addDoc(collection(db, "userSelections"), {
        selection: value,
      });
      console.log("Data successfully submitted to Firebase!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit data. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <label htmlFor="dropdown" className="block text-lg font-medium mb-2">
        Choose a category:
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 w-full"
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Show input field if "Others" is selected */}
      {selectedOption === 'Others' && (
        <div className="mt-4">
          <input
            type="text"
            value={otherText}
            onChange={handleTextChange}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Enter your option"
          />
        </div>
      )}
    </div>
  );
}

export default Dropdown;
