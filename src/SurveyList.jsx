import React from 'react';
import { useLocation } from 'react-router-dom';

const SurveyList = () => {
  const location = useLocation();
  const formData = location.state.formData;
  

  // Perform your logic here to store the form data or display it in the component
  const storeFormData = () => {
    // Store the form data in an array or make an API call to save it
    // For example, you can store it in local storage:
    const existingFormData = JSON.parse(localStorage.getItem('formData') || '[]');
    const updatedFormData = [...existingFormData, formData];
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  // Call the function to store the form data
  storeFormData();

  return (
    <div>
      <h1>Survey List</h1>
      {/* Display the form data */}
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default SurveyList;
