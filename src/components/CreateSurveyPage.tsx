import React, { useState, useContext  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import arrowRight from './navImages/arrow-right.svg';
import { FormDataContext } from '../addFormData'

const CreateSurveyPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ surveyName: '', description: '' });
  
  const { addFormData } = useContext(FormDataContext); // Access the addFormData function

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    // Get the current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    
    // Add time and date to the formData
    const formDataWithTimeAndDate = {
      ...formData,
      time: currentTime,
      date: currentDate,
    };
    
    addFormData(formDataWithTimeAndDate); // Add the updated formData to the context
    navigate('/addQuestions', { state: { surveyName: formData.surveyName } });
  };

  const isFormEmpty = formData.surveyName === '' || formData.description === '';



  return (
    <>
      <div className="d-flex flex-column mb-3" style={{ height: '100vh' }}>
        <div className="p-4 px-5" style={{ height: '15%', backgroundColor: 'hsl(0deg 0% 92.16%)' }}>
          <h1 style={{ fontSize: '25px', color: 'blue', fontWeight: 'bolder', lineHeight: '40px', marginBottom:"10px" }}>Create Survey</h1>
          <h4>
            <Link to="/">Home</Link> / My Surveys / <span style={{ color: 'blue' }}> Create Survey</span>
          </h4>
        </div>

        <div className=" p-4 px-5" style={{ height: '100%', backgroundColor: 'hsl(0deg 0% 98.04%)' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bolder' }}>Survey Subject & Description</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap">
              <input
                type="text"
                name="surveyName"

                className="my-5 p-3"
                style={{
                  width: '250px',
                  height: '60px',
                  border: '2px solid hsl(48.24deg 58.62% 65.88%)',
                  borderRadius: '5px',
                  fontWeight: 'bolder',
                  fontSize: '20px',
                }}
                placeholder="Survey Name"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={formData.surveyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form">
              <textarea
                className="p-3"
                name="description"
                style={{
                  width: '650px',
                  height: '140px',
                  border: '2px solid hsl(48.24deg 58.62% 65.88%)',
                  borderRadius: '5px',
                  fontWeight: 'bolder',
                  fontSize: '20px',
                }}
                placeholder="Describe Your Survey"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="p-4 px-5 " style={{ height: '15%', borderTop: '2px solid lightgrey', backgroundColor: 'hsl(0deg 0% 98.04%)', marginTop: '200px' }}>
              <div className="d-flex ">
              <Link
                    to="/addQuestions"
                    onClick={handleSubmit}
                  >
                  <button
                    className="d-flex px-4 py-3  btn btn-primary"
                    style={{ color: 'black', fontWeight: 'bolder', fontSize: '20px' }}
                    type="submit"
                    disabled={isFormEmpty} // Disable the button if the form is empty
                    >
                    NEXT
                    <img src={arrowRight} alt="" className="ps-4 mx-4" style={{ height: '25px' }} />
                  </button>
                </Link>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSurveyPage;
