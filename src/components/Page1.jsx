import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurveyListPage from './SurveyListPage';
import CreateSurveyPage from "./CreateSurveyPage";
import SingleQuestion from './questionTYpes/SingleQuestion';
import { FormDataProvider } from '../addFormData';

const Page1 = () => {
  
  return (
    
    <>
     <NavBar />
    {/* _____________________section page______________________________________ */}
        <div className="row">
            <SideBar />
            <div className='col'>
               <Router>
                      <FormDataProvider>
                    <Routes>
                        <Route exact path='/' element={<SurveyListPage />} />
                        <Route exact path="/createSurvey" element={<CreateSurveyPage />} />
                        <Route exact path='/addQuestions' element={<SingleQuestion />} />
                    </Routes>
                     </FormDataProvider>
                </Router>
            </div>
        </div>
    </>
  )
}

export default Page1
