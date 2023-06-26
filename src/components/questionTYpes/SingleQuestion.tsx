import React, { useContext, useState } from 'react';
import { FormDataContext } from '../../addFormData';
import { Link, useLocation } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import AllQuestions from './question/AllQuestions';
import '../questionTYpes/scrollbar.css';
import trashFill from '../navImages/trash3.svg';

const SingleQuestion = () => {
  const { questions, setQuestions } = useContext(FormDataContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchToggle = () => {
    setIsChecked(!isChecked);
  };

  const deleteQuestion = (index: any) => {
    const updatedQuestions = questions.filter((_: any, i: any) => i !== index);
    setQuestions(updatedQuestions);
  };

  const location = useLocation();
  const surveyName = location.state?.surveyName;

  return (
    <>
      <div className="d-flex flex-column" style={{ height: '100vh', color: 'grey' }}>
        <div className="p-3 px-5 py-2" style={{ height: '10%', backgroundColor: 'hsl(0deg 0% 92.16%)' }}>
          <h1 style={{ fontSize: '25px', color: 'blue', fontWeight: 'bolder', lineHeight: '40px', marginBottom: '10px' }}>
            Create Survey: <span>Survey Title - {surveyName}</span>
          </h1>
          <h4>
            <Link to="/">Home</Link> / My Surveys / <span style={{ color: 'blue' }}>Create Survey</span>
          </h4>
        </div>

        <div className="mb-auto pt-4 p-2 px-5" style={{ height: '90%', backgroundColor: 'hsl(0deg 0% 98.04%)' }}>
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', gap: '2.5rem', height: '100%' }}>
            <div className="" style={{ gridColumn: 'span 14', padding: '1rem' }}>
              <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', gap: '1rem' }}>
                <div className="" style={{ gridColumn: 'span 12', padding: '1rem' }}>
                  <div className="d-flex justify-content-between py-1">
                    <h2 style={{ fontSize: '17px' }}>Questions</h2>
                    <div className="d-flex">
                      <h1 style={{ fontSize: '24px', fontWeight: 'bolder' }} className="px-4">
                        Required
                      </h1>

                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          style={{ width: '45px', height: '25px' }}
                          role="switch"
                          id="flexSwitchCheckChecked"
                          checked={isChecked}
                          onChange={handleSwitchToggle}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="g-col-4 text-center mr-3 pr-3" style={{ gridColumn: 'span 6', padding: '1rem' }}>
                  <DropDownMenu disabled={!isChecked} />
                </div>
              </div>

              <div style={{ paddingBottom: '100px' }}>
                <AllQuestions />
              </div>
            </div>
            <div
              className="g-col-4 card mt-3 custom-scrollbar"
              style={{ gridColumn: 'span 4', padding: '1rem', height: '80vh', width: '450px', borderRadius: '25px' }}
            >
              <div className="py-4 mx-2" style={{ borderBottom: '2px solid lightgrey', marginBottom: '20px', fontWeight: 'bolder' }}>
                <h3>QUESTIONS LIST</h3>
              </div>
              <div className="custom-scrollbar" style={{ overflow: 'auto' }}>
                {questions.length === 0 ? (
                  <p style={{ color: 'lightgray', padding: '10px' }}>No Question Uploaded</p>
                ) : (
                  questions.map((question: { question: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                    <div
                      className="my-2 p-4 d-flex justify-content-between"
                      style={{
                        margin: '10px',
                        border: '2px solid hsl(48.24deg 58.62% 65.88%)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        backgroundColor: 'hsl(45deg 54.55% 95.69%)',
                      }}
                      key={index}
                    >
                      <div style={{ width: '90%' }}>
                        <p className="">{question.question}</p>
                      </div>
                      <div>
                        <img src={trashFill} alt="" onClick={() => deleteQuestion(index)} style={{ cursor: 'pointer' }} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleQuestion;
