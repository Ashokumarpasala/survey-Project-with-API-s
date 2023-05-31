import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DropdownLabel() {
  const [selectedOption, setSelectedOption] = useState('');

  const naviagte = useNavigate()
  
  const handleDropdownChange = (event: { target: { value: React.SetStateAction<string>}}) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    naviagte('/addQuestions', {state: {option: optionValue}})
  };


  return (
    <div>
      <select
        id="myDropdown"
        onChange={handleDropdownChange}
        className="card px-3 py-2"
        style={{ fontSize: '23px', width: '300px', border: '2px solid yellow', outline: 'none' }}
        value={selectedOption}
      >
        <option value="option1">---Select Choises---</option>
        <option value="option2">Single Choice</option>
        <option value="option3">Multiple Answer</option>
        <option value="option4">Short Answer</option>
        <option value="option5">Long Answer</option>
      </select>
    </div>
  );
}

export default DropdownLabel;



