import React, { useState, useContext, ReactNode } from 'react';
import book1 from './navImages/grid-fill.svg';
import book2 from './navImages/list-ul.svg';
import downArrow from './navImages/chevron-down.svg';
import { Link } from 'react-router-dom';
import { FormDataContext } from '../addFormData'; // Import the FormDataContext
import caltime from './navImages/calendar-icon-white-png-8.jpg'

const SurveyListPage = () => {
  const [activeIconIndex, setActiveIconIndex] = useState(1);
  const { formDataArray } = useContext(FormDataContext); // Access the formDataArray from context


  const handleIconClick = (index: React.SetStateAction<number>) => {
    setActiveIconIndex(index);
  };

  return (
    <>
      <div className="col-sm-12 card text-end" style={{ height: '100vh', backgroundColor: 'hsl(0deg 0% 98.04%)' }}>
        <div className="row m-4 py-3">
          <div className="row">
            <div className="col align-self-center">
              <div className="col text-start">
                <h1 style={{ fontWeight: 'bolder', fontSize: '30px' }}>My Surveys</h1>
              </div>
            </div>
            <div className="col-md-auto align-self-center">
              <div className="d-flex">
                <div className="card mx-5 px-3 py-3" style={{border: '2px solid hsl(48.24deg 58.62% 65.88%)'}}>
                  <div className="d-flex px-3">
                    <h3>Sort by: Date</h3>
                    <img src={downArrow} alt="" className="ps-5" />
                  </div>
                </div>
                <div className="card">
                  <div className="d-flex">
                    {[book1, book2].map((book, index) => (
                      <img
                        key={index}
                        src={book}
                        alt=""
                        style={{
                          width: '50px',
                          backgroundColor: activeIconIndex === index ? 'blue' : 'transparent',
                        }}
                        className="p-2"
                        onClick={() => handleIconClick(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 align-self-center ps-3">
              <Link to="/createSurvey">
                <button className="btn btn-primary py-2 px-4">CREATE SURVEY</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row py-2 px-3 text-center">
        {formDataArray.map((formData: {
          [x: string]: ReactNode; surveyName: string; description: string ; 
}, index: React.Key | null | undefined) => (
          <div key={index} className="row  m-2 mx-4 py-3" style={{ maxWidth: '95%', height: '165px', overflow: 'auto', backgroundColor: 'hsl(0deg 0% 100%)', borderRadius: "20px",     boxShadow: '0 2px 4px rgba(0.5, 0.2, 0.3, 0.2)', // Add box shadow
        }}>
              <div>
                <div className='d-flex justify-content-between p-3'>
                  <h1 style={{fontWeight: 'bolder', fontSize: '30px'}}>{formData.surveyName}</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                </div>           
                <div className='d-flex justify-content-between p-2'>
                  <div className='d-flex px-2'>
                  <img src={caltime} alt="" style={{width: '30px', height: '30px', marginRight: '10px'}} />
                  <h2 style={{fontWeight: 'bolder', color: 'gray', fontSize: '19px' }}>{formData.date} at <span>{formData.time}</span></h2> 
                  </div>
                  <button className='btn btn-primary py-2 px-3' style={{fontSize: '20px'}}>VIEW RESPONSE</button>             
                </div>
              </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default SurveyListPage;
