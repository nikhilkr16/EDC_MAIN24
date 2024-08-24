import React, { useState } from 'react';

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

  // Handler for dropdown change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4">
      <label htmlFor="dropdown" className="block text-lg font-medium mb-2">
       
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
      {selectedOption === 'other' && (
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
