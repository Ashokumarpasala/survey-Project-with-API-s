import React, { useContext, useState } from 'react';
import { FormDataContext } from '../addFormData'; // Import the FormDataContext
import image from './navImages/my_surveys_grid@3x.png'
import edit from './navImages/edit.svg'
import calender from './navImages/calendar-icon-white-png-8.jpg'
import trash from './navImages/trash-fill.svg';
import pensil from './navImages/pencil-square.svg';

function GridSurveyListPage() {
  const { formDataArray, setFormDataArray } = useContext(FormDataContext); // Access the formDataArray from context
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

    
    const handleEditClick = (index: number) => {
        setActiveDropdownIndex(activeDropdownIndex === index ? -1 : index);
        setShowDropdown(true);
    
        setTimeout(() => {
          setShowDropdown(false);
        }, 5000);
      };
    
      const handleDeleteClick = (index: number) => {
        setFormDataArray((prevFormDataArray: any[]) => {
          return prevFormDataArray.filter((_: any, i: number) => i !== index);
        });
      };
      
      
  return (
    <div className="row">
      {formDataArray.map((data: any, index: number) => (
        <div key={index} className="col-md-3 mb-4 px-2">
        <div className="box card p-3" style={{backgroundColor: "white"}}>
            <div className='p-3'>
                <img src={image} alt="" />
                <h1 style={{fontSize: "30px", fontWeight: "bolder", textAlign: "start"}} className="py-3">{data.surveyName}</h1>
            <div className='d-flex justify-content-between'>
              <div className='d-flex' style={{color: "gray"}}>
                <img src={calender} alt="" style={{width: "25px", height: '25px', color: "gray", marginRight: "10px"}} />
                <p>{data.date}</p>
              </div>


              <div style={{ position: 'relative', cursor: 'pointer' }}>
                        <img src={edit} alt="" onClick={() => handleEditClick(index)} />
                        {activeDropdownIndex === index && showDropdown && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '100%',
                              right: 0,
                              backgroundColor: 'white',
                              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                              borderRadius: '5px',
                              padding: '10px',
                            }}
                          >
                            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, width: '150px', fontSize: '18px' }}>
                              <li className="p-2">
                                <div className="d-flex justify-content-around">
                                  <button>Edit</button>
                                  <img src={pensil} alt="" />
                                </div>
                              </li>
                              <li>
                                <div className="d-flex justify-content-around">
                                  <button>Delete</button>
                                  <img src={trash} alt="" onClick={() => handleDeleteClick(index)} />
                                </div>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>


            </div>
            </div>
          <button className="btn btn-primary py-2 px-3" style={{ fontSize: '20px' }}>
            VIEW RESPONSE
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridSurveyListPage;
