import React, { ChangeEvent, useContext, useState } from 'react';
import { FormDataContext } from '../../../addFormData';
import cross from '../../navImages/x-circle-fill.svg';
import arrowRight from '../../navImages/arrow-right.svg';

function QuestionOne() {
  const options = ['Option 1', 'Option 2'];
  const [question, setQuestion] = useState('');
  const { questions, setQuestions } = useContext(FormDataContext);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuestion = event.target.value;
    setQuestion(newQuestion);
  };
  

 

  return (
    <>
      <div className="input-group flex-nowrap">
        <input
          type="text"
          onChange={handleChange}
          value={question}
          placeholder="Type Your Question here"
          style={{
            width: '100%',
            outlineColor: 'none',
            fontWeight: 'bolder',
            borderBottom: '3px solid hsl(48.24deg 58.62% 65.88%)',
            fontSize: '22px',
            backgroundColor: 'hsl(0deg 0% 98.04%)',
          }}
          className="py-2"
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '700px',
          gap: '30px',
        }}
        className="my-5"
      >
        {options.map((option, index) => (
          <div key={index}>
            <p className="m-1">Option {index + 1}</p>
            <div className="d-flex">
              <input
                style={{
                  outline: '2px solid hsl(48.24deg 58.62% 65.88%)',
                  border: 'none',
                  fontSize: '20px',
                  backgroundColor: 'hsl(45deg 54.55% 95.69%)',
                }}
                type="text"
                className="card py-3 mr-5 px-3"
                value={option}
              />
              <img src={cross} alt="" style={{ width: '30px' }} />
            </div>
          </div>
        ))}
      </div>

      <div
        className="p-4 px-1"
        style={{ height: '15%', borderTop: '3px solid lightgrey', backgroundColor: 'hsl(0deg 0% 98.04%)' }}
      >
        <div className="d-flex justify-content-between my-3">
        <button className="d-flex px-4 py-3 p-2 btn btn-primary" onClick={() => setQuestions((prevQuestions: any) => [...prevQuestions, { question }])}>
          <h1 style={{ fontSize: '18px' }}>ADD NEW QUESTION</h1>
          <img src={arrowRight} alt="" className="ps-5" style={{ height: '25px' }} />
        </button>


          <button className="d-flex px-4 py-3 text-center align-self-center btn btn-primary">
            <h1 style={{ fontSize: '18px' }}>SHARE SURVEY</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default QuestionOne;
