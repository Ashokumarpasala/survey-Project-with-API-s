import React from 'react'
import { Link } from 'react-router-dom'
import arrowRight from './navImages/arrow-right.svg'

const CreateSurveyPage = () => {


  return (
    <>


     <div className="d-flex flex-column mb-3" style={{height: '100vh'}}>

        <div className="p-4 px-5 card " style={{height: '15%'}}>
          <h1 style={{fontSize: '25px', color: 'blue', fontWeight: 'bolder', lineHeight: '40px'}}>Create Survey</h1>
          <h4><Link to='/'>Home</Link> / My Surveys / <span style={{color: 'blue'}}>  Create Survey</span> </h4>
        </div>



        <div className="card p-4 px-5" style={{height: '70%'}}>
          <h1 style={{fontSize: '40px', fontWeight: 'bolder'}}>Survey Subject & Description</h1>
          <form action="">
          <div className="input-group flex-nowrap ">
            <input type="text" className=' my-5 p-3' style={{width: '250px', height : '60px', border: '1px solid lightgrey', borderRadius: '5px', fontWeight: 'bolder', fontSize: '20px' }} placeholder="Survey Name" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <div className="form">
            <textarea className="p-3" style={{width: '650px', height : '140px', border: '1px solid lightgrey', borderRadius: '5px', fontWeight: 'bolder', fontSize: '20px'  }} placeholder="Describe Your Survey" />
          </div>
          </form>
        </div>


        <div className="p-4 px-5 card" style={{height: '15%', borderTop: '2px solid lightgrey'}}>
              <div className='d-flex'>
                       <button className='d-flex px-5 py-3 p-2 btn btn-primary'>
                           <h1 style={{fontSize: '25px'}} >
                            <Link to='/addQuestions'>NEXT</Link>    
                           </h1 >
                           <img src={arrowRight} alt="" className='ps-5' style={{height: '25px'}} />
                         </button>
                </div>
           </div>


      </div>
    </>
  )
}

export default CreateSurveyPage
