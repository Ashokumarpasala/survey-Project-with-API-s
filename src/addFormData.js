import React, { createContext, useState, useEffect } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formDataArray, setFormDataArray] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storedFormData = sessionStorage.getItem('formDataArray');
    if (storedFormData) {
      setFormDataArray(JSON.parse(storedFormData));
    }

    const storedQuestions = sessionStorage.getItem('questions');
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  const addFormData = (formData) => {
    setFormDataArray((prevFormDataArray) => [...prevFormDataArray, formData]);
  };

  useEffect(() => {
    sessionStorage.setItem('formDataArray', JSON.stringify(formDataArray));
  }, [formDataArray]);

  useEffect(() => {
    sessionStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  return (
    <FormDataContext.Provider value={{ formDataArray, setFormDataArray, addFormData, questions, setQuestions }}>
      {children}
    </FormDataContext.Provider>
  );
};
