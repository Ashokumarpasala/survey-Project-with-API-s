import React, { useState } from 'react'
import book1 from './navImages/journal-bookmark-fill.svg'
import book2 from './navImages/journal-richtext.svg'
import downArrow from './navImages/chevron-down.svg'
import { Link } from "react-router-dom";


const SurveyListPage = () => {

    const [activeIconIndex, setActiveIconIndex] = useState(1); // Initially set book2 as active

  const handleIconClick = (index: React.SetStateAction<number>) => {
    setActiveIconIndex(index);
  };
  return (
    <>
       <div className="col-sm-12 card text-end card" style={{height: '100vh'}}>
                    <div className="row m-4 py-4 card">
                    <div className="row">

                        <div className="col align-self-center">
                             <div className="col  text-start ">
                                 <h1 style={{fontWeight: 'bolder', fontSize: '30px'}}>My Surveys</h1>
                             </div>
                        </div>

                        <div className="col-md-auto align-self-center ">
                            <div className='d-flex'>
                                <div className='card mx-5 px-3 py-3'>
                                    <div className='d-flex px-3'>
                                    <h3>Sort by : Date   </h3>
                                    <img src={downArrow} alt="" className='ps-5' />
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='d-flex '>
                                        {[book1, book2].map((book, index) => (
                                        <img
                                            key={index}
                                            src={book}
                                            alt=""
                                            style={{
                                            width: '50px',
                                            backgroundColor: activeIconIndex === index ? 'blue' : 'transparent',
                                            }}
                                            className='p-2 '
                                            onClick={() => handleIconClick(index)}
                                        />
                                        ))}
                                    </div>
                                    </div>
                            </div>
                        </div>


                        <div className="col-2  align-self-center ps-3">
                            <button className='btn btn-primary py-2 px-4'>
                                <Link to='/createSurvey' >CREATE SURVEY</Link>
                            </button>
                        </div>
                    </div>
                    </div>


                    <div className="row m-4 py-4 text-center card" style={{height: '100vh'}}>
                       <div className='row card mx-5 ' style={{maxWidth: '90%', height: '25%'}}>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sint consequatur commodi eveniet pariatur eos deserunt nemo accusamus quisquam nesciunt?</p>
                        </div>    
                    </div>

                    
               </div>
    </>
  )
}

export default SurveyListPage
