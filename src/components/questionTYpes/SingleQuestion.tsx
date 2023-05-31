import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import arrowRight from '../navImages/arrow-right.svg'
import DropDownMenu from './DropDownMenu'
import SwitchComp from './SwitchComp'
import AllQuestions from './question/AllQuestions'


const SingleQuestion = () => {

  const [questionNumber, setQuestionNumber] = useState(1);

  const addNewQuestion = () => {
    setQuestionNumber((prevNumber: number) => prevNumber + 1);
  };
  
  return (
    <>
     <div className="d-flex flex-column mb-1" style={{height: '100vh'}}>

        <div className="p-3 px-5 py-2 card " style={{height: '10%'}}>
          <h1 style={{fontSize: '25px', color: 'blue', fontWeight: 'bolder', lineHeight: '40px'}}>Create Survey - <span>Survey Title</span></h1>
          <h4><Link to='/'>Home</Link> / My Surveys / <span style={{color: 'blue'}}>  Create Survey</span> </h4>
        </div>

        <div className=" mb-auto p-2 px-5 card" style={{height: '75%'}}>
           <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', gap: '2.5rem', height: '100%' }}>
                <div className='' style={{ gridColumn: 'span 14',  padding: '1rem' }}>

                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', gap: '1rem'}}>
                        <div className='' style={{ gridColumn: 'span 12',  padding: '1rem' }}>
                            <div className='d-flex justify-content-between py-1'>
                                <h2 style={{fontSize: '19px '}}>Question {questionNumber}</h2>
                                <div className='d-flex'>
                                <h1 style={{fontSize: '28px', fontWeight: 'bolder'}} className='px-4'>Requried </h1>
                                  <SwitchComp />
                                </div>
                            </div>
                        </div>

                        <div className="g-col-4 text-center mr-3 pr-3" style={{ gridColumn: 'span 6',  padding: '1rem' }}>
                           <DropDownMenu  />
                        </div>
                    </div>

                       <div>
                         <AllQuestions  />
                       </div>

                </div>
                <div className="g-col-4 card" style={{ gridColumn: 'span 4',  padding: '1rem' }}>
                  <div className='py-4 mx-2' style={{borderBottom: '2px solid lightgrey'}}>
                    <h3>QUESTIONS LIST</h3>

                    
                  </div>
                </div>
            </div>
        </div>


        <div className="p-4 px-5 card " style={{height: '15%', borderTop: '3px solid lightgrey'}}>
              <div className='d-flex justify-content-between'>
                       <button className='d-flex px-4 py-3 p-2 btn btn-primary' onClick={addNewQuestion}>
                           <h1 style={{fontSize: '18px'}} >ADD NEW QUESTION</h1 >
                           <img src={arrowRight} alt="" className='ps-5' style={{height: '25px'}} />
                         </button>
                         <button className='d-flex px-4 py-3 text-center align-self-center btn btn-primary'>
                           <h1 style={{fontSize: '18px'}} >SHARE SURVEY   </h1 >
                         </button>
                </div>
           </div>


      </div>
    </>
  )
}

export default SingleQuestion

