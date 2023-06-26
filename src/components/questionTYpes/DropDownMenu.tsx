import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DropDownMenuProps {
  disabled?: boolean;
}

const DropdownLabel = ({ disabled }: DropDownMenuProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const navigate = useNavigate();

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    navigate('/addQuestions', { state: { option: optionValue } });
  };

  return (
    <div>
      <select
        id="myDropdown"
        onChange={handleDropdownChange}
        className="card px-2 py-2"
        style={{
          fontSize: '23px',
          width: '250px',
          color: disabled ? 'lightgray' : 'initial',
          border: '2px solid hsl(48.24deg 58.62% 65.88%)',
          outline: 'none',
          backgroundColor: 'hsl(45deg 54.55% 95.69%)',
        }}
        value={selectedOption}
        disabled={disabled}
      >
        <option value="option1">Choose Question</option>
        <option value="option2">Single Choice</option>
        <option value="option3">Multiple Choice</option>
        <option value="option4">Short Question</option>
        <option value="option5">Long Question</option>
      </select>
    </div>
  );
};

export default DropdownLabel;
