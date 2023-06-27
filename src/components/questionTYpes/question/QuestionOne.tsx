import React, { ChangeEvent, useContext, useState, useRef } from 'react';
import { FormDataContext } from '../../../addFormData';
import cross from '../../navImages/x-circle-fill.svg';
import arrowRight from '../../navImages/arrow-right.svg';
import emjoy from '../../navImages/images-removebg-preview.png'

function QuestionOne() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const { questions, setQuestions } = useContext(FormDataContext);
  const [showTransparentCover, setShowTransparentCover] = useState(false);
  const [surveyShared, setSurveyShared] = useState(false);
  const [peoples, setPeoples] = useState<string[]>([]);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuestion = event.target.value;
    setQuestion(newQuestion);
  };

  const handleOptionChange = (index: number, value: string) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  const addNewQuestion = () => {
    const newQuestion = {
      question,
      options,
    };
    setQuestions((prevQuestions: any) => [...prevQuestions, newQuestion]);
    setQuestion('');
    setOptions(['Option ', 'Option ']); // Reset the options array
  };

  const handleShareSurvey = () => {
    setSurveyShared(true)
  
    
  };

  const handleDeleteEmail = (index: number) => {
    setPeoples((prevPeoples) => {
      const newPeoples = [...prevPeoples];
      newPeoples.splice(index, 1);
      return newPeoples;
    });
  };

  const handleAddEmail = () => {
    if (emailInputRef.current && emailInputRef.current.value !== '') {
      const newEmail = emailInputRef.current.value.trim();
      setPeoples((prevPeoples) => [...prevPeoples, newEmail]);
      emailInputRef.current.value = ''; // Clear the input field
    }
  };

  return (
    <>
      {showTransparentCover && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            {surveyShared  ? (
              <div className="card text-center" style={{width:"450px", height:"380px", borderRadius:"30px"}}>
                <div className="card-body">
                <img src={emjoy} alt="" style={{width:"120px", position:"relative", left:"36%", bottom:"80px"}}/>
                  <h5 className="card-title" style={{fontSize:"25px", fontWeight:"bolder", color:"lightgreen"}}>Survey Sent Sucessusfully</h5>
                  <p className="card-text m-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-primary px-5 p-2" style={{color:"black", borderRadius:"30px", fontSize:"23px"}}>HURRY !</button>
                </div>
              </div>
            ) : (
              <div className="card text-center" style={{ width: '700px', height: '400px' }}>
                <div className="card-header d-flex justify-content-between p-4">
                  <h1 style={{ fontSize: '25px', fontWeight: 'bolder', color: 'black' }}>Share Survey Form With</h1>
                  <img src={cross} alt="" style={{ width: '25px' }} onClick={() => setShowTransparentCover(false)} />
                </div>
                <div className="card-body p-4">
                  <div className="form-outline text-left pt-4">
                    <label className="form-label" htmlFor="form14">
                      Peoples
                    </label>
                    <div className="d-flex align-items-center">
                      {peoples.map((email, index) => (
                        <div
                          key={index}
                          className="email-container"
                          style={{
                            backgroundColor: 'hsl(45deg 54.55% 95.69%)',
                            borderRadius: '5px',
                            padding: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: '5px',
                            marginBottom: '5px',
                          }}
                        >
                          <p style={{ marginRight: '5px' }}>{email}</p>
                          <img
                            src={cross}
                            alt=""
                            style={{ width: '15px', cursor: 'pointer' }}
                            onClick={() => handleDeleteEmail(index)}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="d-flex align-items-center">
                      <input
                        type="text"
                        ref={emailInputRef}
                        placeholder="Enter Names or Email addresses..."
                        id="form14"
                        className="form-control p-2"
                        style={{
                          outline: '2px solid hsl(48.24deg 58.62% 65.88%)',
                          backgroundColor: 'hsl(45deg 54.55% 95.69%)',
                          fontSize: '22.5px',
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer text-muted p-4">
                  <div className="text-right">
                    <button className="btn btn-primary mx-3 p-2 px-4" style={{ fontSize: '20px' }} onClick={handleAddEmail}>
                      ADD
                    </button>
                    <button className="btn btn-primary mx-3 p-2 px-4" style={{ fontSize: '20px' }} onClick={handleShareSurvey}>
                      SHARE
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
                  placeholder="Option"
                  type="text"
                  className="card py-3 mr-5 px-3"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
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
            <button className="d-flex px-4 py-3 p-2 btn btn-primary" onClick={addNewQuestion}>
              <h1 style={{ fontSize: '18px' }}>ADD NEW QUESTION</h1>
              <img src={arrowRight} alt="" className="ps-5" style={{ height: '25px' }} />
            </button>

            <button className="d-flex px-4 py-3 text-center align-self-center btn btn-primary" onClick={() => setShowTransparentCover(true)}>
              <h1 style={{ fontSize: '18px' }}>SHARE SURVEY</h1>
            </button>
          </div>
        </div>
      </>
    </>
  );
}

export default QuestionOne;
