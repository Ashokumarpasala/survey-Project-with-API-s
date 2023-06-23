import React, { ChangeEvent, useState } from 'react'
import InputQuestion from './InputQuestion'
import arrowRight from '../../navImages/arrow-right.svg'

const QuestionFour = () => {

  const [question, setQuestion] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };
  return (
    <div>
         <p className='my-2'>Long Answer Question</p>
         <div className="input-group flex-nowrap " >
            <input type="text" onChange={handleChange} value={question} placeholder='Type Your Question here' style={{width: '100%', outlineColor: 'none', fontWeight: 'bolder', borderBottom: '3px solid hsl(48.24deg 58.62% 65.88%)', fontSize: '22px ', backgroundColor: 'hsl(0deg 0% 98.04%)'}} className='py-2'/>
          </div>
      
                <div className="p-4 px-1 " style={{height: '15%', borderTop: '3px solid lightgrey',marginTop: '100px', backgroundColor: 'hsl(0deg 0% 98.04%)'}}>
                                <div className='d-flex justify-content-between my-3'>
                                        <button className='d-flex px-4 py-3 p-2 btn btn-primary'>
                                            <h1 style={{fontSize: '18px'}} >ADD NEW QUESTION</h1 >
                                            <img src={arrowRight} alt="" className='ps-5' style={{height: '25px'}} />
                                          </button>
                                          <button className='d-flex px-4 py-3 text-center align-self-center btn btn-primary'>
                                            <h1 style={{fontSize: '18px'}} >SHARE SURVEY   </h1 >
                                          </button>
                                  </div>
                            </div>  
    </div>
  )
}

export default QuestionFour
