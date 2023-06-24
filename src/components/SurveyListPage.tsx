import React, { useState, useContext, ReactNode } from 'react';
import { Link } from 'react-router-dom';
// import { FormDataContext } from '../addFormData'; // Import the FormDataContext
import book1 from './navImages/grid-fill.svg';
import book2 from './navImages/list-ul.svg';
import downArrow from './navImages/chevron-down.svg';
// import caltime from './navImages/calendar-icon-white-png-8.jpg';
// import edit from './navImages/edit.svg';
// import trash from './navImages/trash-fill.svg';
// import pensil from './navImages/pencil-square.svg';
import BoxSurveyListPage from './BoxSurveyListPage';
import GridSurveyListPage from './GridSurveyListPage';

const SurveyListPage = () => {
  const [activeIconIndex, setActiveIconIndex] = useState(1);
  // const { formDataArray, setFormDataArray } = useContext(FormDataContext); // Access the formDataArray from context
  // const [activeDropdownIndex, setActiveDropdownIndex] = useState(-1);
  // const [showDropdown, setShowDropdown] = useState(false);

  const handleIconClick = (index: number) => {
    setActiveIconIndex(index);
  };

  // const handleEditClick = (index: number) => {
  //   setActiveDropdownIndex(activeDropdownIndex === index ? -1 : index);
  //   setShowDropdown(true);

  //   setTimeout(() => {
  //     setShowDropdown(false);
  //   }, 5000);
  // };

  // const handleDeleteClick = (index: number) => {
  //   setFormDataArray((prevFormDataArray: any[]) => {
  //     return prevFormDataArray.filter((_: any, i: number) => i !== index);
  //   });
  // };

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
                <div className="card mx-5 px-3 py-3" style={{ border: '2px solid hsl(48.24deg 58.62% 65.88%)' }}>
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


        <div className="row py-3 px-3 text-center" style={{overflow: "auto"}}>
          {activeIconIndex === 0 ? <GridSurveyListPage /> : <BoxSurveyListPage />}
        </div>


      </div>
    </>
  );
};

export default SurveyListPage;
