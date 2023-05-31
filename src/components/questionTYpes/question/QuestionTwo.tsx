import React, { useState } from 'react';
import cross from '../../navImages/x-circle-fill.svg'
import InputQuestion from './InputQuestion';

function QuestionTwo() {

const [options, setOptions] = useState<string[]>(['Option 1', 'Option 2']);

const addOption = () => {
    if (options.length < 6) {
        setOptions([...options, '']);
      }};

  return (
    <>
      <InputQuestion />
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '700px',
          gap: '30px',          
      }}
         className='my-5'
      >
      {options.map((option, index) => (
                <div key={index}>
                 <p className='m-1'>Option</p>
                 <div className='d-flex'>
                <input
                style={{outline: '2px solid hsl(48.24deg 58.62% 65.88%)', border: 'none', fontSize: '20px', backgroundColor: 'hsl(45deg 54.55% 95.69%)' }}
                type="text"
                className="card py-3 mr-5 px-3 "
                value={option}
                />
                <img src={cross} alt="" style={{width: '30px'}} />
                </div>
                </div>
            ))}
          </div>
        <button className='card px-5 p-3' style={{border: 'none', outline: '3px solid blue', color: 'blue'}} onClick={addOption}>ADD MORE OPTIONS</button>
    </>
  )
}

export default QuestionTwo
