import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formDataArray, setFormDataArray] = useState([]);
  const [questions, setQuestions] = useState([]);

//   console.log(formDataArray)
  console.log(questions)

  const addFormData = (formData) => {
    setFormDataArray((prevFormDataArray) => [...prevFormDataArray, formData]);
  };

  return (
    <FormDataContext.Provider value={{ formDataArray, addFormData, questions, setQuestions }}>
      {children}
    </FormDataContext.Provider>
  );
};
