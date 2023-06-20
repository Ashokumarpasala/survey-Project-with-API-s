import React, { useContext, useState } from 'react';
import { FormDataContext } from '../../addFormData';
import { Link } from 'react-router-dom'
// import arrowRight from '../navImages/arrow-right.svg'
import DropDownMenu from './DropDownMenu'
import SwitchComp from './SwitchComp'
import AllQuestions from './question/AllQuestions'


const SingleQuestion = () => {

  const [questionNumber, setQuestionNumber] = useState(1);
  const { questions } = useContext(FormDataContext);


  

  // const addNewQuestion = () => {
  //   setQuestionNumber((prevNumber: number) => prevNumber + 1);
  // };
  
  return (
    <>
     <div className="d-flex flex-column " style={{height: '100vh', color: 'grey'}}>

        <div className="p-3 px-5 py-2  " style={{height: '10%', backgroundColor: 'hsl(0deg 0% 92.16%)'}}>
          <h1 style={{fontSize: '25px', color: 'blue', fontWeight: 'bolder', lineHeight: '40px'}}>Create Survey - <span>Survey Title</span></h1>
          <h4><Link to='/'>Home</Link> / My Surveys / <span style={{color: 'blue'}}>  Create Survey</span> </h4>
        </div>

        <div className=" mb-auto pt-4 p-2 px-5 " style={{height: '90%', backgroundColor: 'hsl(0deg 0% 98.04%)'}}>
           <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', gap: '2.5rem', height: '100%' }}>
                <div className='' style={{ gridColumn: 'span 14',  padding: '1rem' }}>

                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', gap: '1rem'}}>
                        <div className='' style={{ gridColumn: 'span 12',  padding: '1rem' }}>
                            <div className='d-flex justify-content-between py-1'>
                                <h2 style={{fontSize: '17px '}}>Question {questionNumber}</h2>
                                <div className='d-flex'>
                                <h1 style={{fontSize: '24px', fontWeight: 'bolder'}} className='px-4'>Requried </h1>
                                  <SwitchComp />
                                </div>
                            </div>
                        </div>

                        <div className="g-col-4 text-center mr-3 pr-3" style={{ gridColumn: 'span 6',  padding: '1rem' }}>
                           <DropDownMenu  />
                        </div>
                    </div>

                     <div style={{paddingBottom: '100px'}}>
                         <AllQuestions  />
                      </div>
                      <div>
                          {/* <div className="p-4 px-1 " style={{height: '15%', borderTop: '3px solid lightgrey', backgroundColor: 'hsl(0deg 0% 98.04%)'}}>
                                <div className='d-flex justify-content-between my-3'>
                                        <button className='d-flex px-4 py-3 p-2 btn btn-primary' onClick={addNewQuestion}>
                                            <h1 style={{fontSize: '18px'}} >ADD NEW QUESTION</h1 >
                                            <img src={arrowRight} alt="" className='ps-5' style={{height: '25px'}} />
                                          </button>
                                          <button className='d-flex px-4 py-3 text-center align-self-center btn btn-primary'>
                                            <h1 style={{fontSize: '18px'}} >SHARE SURVEY   </h1 >
                                          </button>
                                  </div>
                            </div>                 */}
                       </div>

                </div>
                <div className="g-col-4 card mt-4" style={{ gridColumn: 'span 4',  padding: '1rem' }}>
                  <div className='py-4 mx-2' style={{borderBottom: '2px solid lightgrey', marginBottom: '20px'}}>
                    <h3>QUESTIONS LIST</h3>
                  </div>
                  {questions.map((question: { question: string ; }, index: React.Key | null | undefined) => (
                      <div className='card my-2' style={{ width: '100%' }} key={index}>
                        <p className='p-2'>{question.question}</p>
                      </div>
                  ))}

                 
                </div>
                    
            </div>
        </div>

{/* 
        <div className="p-4 px-5  " style={{height: '15%', borderTop: '3px solid lightgrey', backgroundColor: 'hsl(0deg 0% 98.04%)'}}>
              <div className='d-flex justify-content-between my-3'>
                       <button className='d-flex px-4 py-3 p-2 btn btn-primary' onClick={addNewQuestion}>
                           <h1 style={{fontSize: '18px'}} >ADD NEW QUESTION</h1 >
                           <img src={arrowRight} alt="" className='ps-5' style={{height: '25px'}} />
                         </button>
                         <button className='d-flex px-4 py-3 text-center align-self-center btn btn-primary'>
                           <h1 style={{fontSize: '18px'}} >SHARE SURVEY   </h1 >
                         </button>
                </div>
           </div> */}


      </div>
    </>
  )
}

export default SingleQuestion

