import React, { ChangeEvent, useContext, useState } from 'react';
import { FormDataContext } from '../../../addFormData';
import arrowRight from '../../navImages/arrow-right.svg';

const QuestionThree = () => {
  const [question, setQuestion] = useState('');
  const { questions, setQuestions } = useContext(FormDataContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuestion = event.target.value;
    setQuestion(newQuestion);
  };

  const addNewQuestion = () => {
    setQuestions((prevQuestions: any) => [...prevQuestions, { question }]);
    setQuestion(''); // Reset the question state to clear the input
  };

  return (
    <div>
      <p className='my-2'>Short Answer Question</p>
      <div className="input-group flex-nowrap">
        <input
          type="text"
          onChange={handleChange}
          value={question}
          placeholder='Type Your Question here'
          style={{
            width: '100%',
            outlineColor: 'none',
            fontWeight: 'bolder',
            borderBottom: '3px solid hsl(48.24deg 58.62% 65.88%)',
            fontSize: '22px',
            backgroundColor: 'hsl(0deg 0% 98.04%)'
          }}
          className='py-2'
        />
      </div>
      <div className="p-4 px-1" style={{ height: '15%', borderTop: '3px solid lightgrey', backgroundColor: 'hsl(0deg 0% 98.04%)', marginTop: '400px' }}>
        <div className='d-flex justify-content-between my-3'>
          <button className="d-flex px-4 py-3 p-2 btn btn-primary" onClick={addNewQuestion}>
            <h1 style={{ fontSize: '18px' }} >ADD NEW QUESTION</h1 >
            <img src={arrowRight} alt="" className='ps-5' style={{ height: '25px' }} />
          </button>
          <button className='d-flex px-4 py-3 text-center align-self-center btn btn-primary'>
            <h1 style={{ fontSize: '18px' }} >SHARE SURVEY   </h1 >
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionThree;
