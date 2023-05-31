import React from 'react'
import downArrow from './navImages/chevron-down.svg'
import userGear from './navImages/person-fill-gear.svg'
import user from './navImages/person-circle.svg'
import coin from './navImages/coin.svg'
import calander from './navImages/calendar2-week.svg'
import bell from './navImages/bell-fill.svg'

const NavBar = () => {
  return (
    <div>
      
      <div className="d-flex" style={{backgroundColor: 'hsl(215.48deg 75% 48.63%)', color: 'whitesmoke', fontSize: '23px'}}>
            <div className="p-2 flex-grow-1  text-end ">
            <div className='d-flex justify-content-end'>
                    <div className='d-flex p-2 m-2'>
                        <h5>Learn</h5>
                        <img src={downArrow} alt="" className='ps-4' />
                    </div>
                    <div className='d-flex p-2 m-2'>
                        <h5>Network</h5>
                        <img src={downArrow} alt="" className='ps-4' />
                    </div>
                    <div className='d-flex p-2 m-2'>
                        <h5>Evulate</h5>
                        <img src={downArrow} alt="" className='ps-4' />
                    </div>
                    <h5 className='p-2 m-2'> Jobs</h5>
                    <div className='d-flex'>
                        <img src={userGear} alt="" className='ps-4' style={{width: '50px'}} />
                        <div className=' m-2 text-start' >
                            <h5>1045</h5>
                            <p style={{fontSize: '10px'}}>Profile Score</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <img src={coin} alt="" className='ps-4' style={{width: '50px'}} />
                        <div className=' m-2 text-start' >
                            <h5>400</h5>
                            <p style={{fontSize: '10px'}}>Tokens</p>
                        </div>
                    </div>
                    <div className='d-flex m-2 ps-4'>
                           <img src={calander} alt="" style={{width: '30px'}}  />
                     </div>
                     <div className='d-flex m-2 ps-4'>
                           <img src={bell} alt="" style={{width: '30px'}}  />
                     </div>
                </div>
            </div>
            <div className=" flex-shrink-1 ">
               <div className='d-flex p-2 m-2'>
                        <img src={user} alt="" className='ps-3 ' style={{width: '50px'}} />
                        <div className=' d-flex p-1' >
                            <h5 className='px-2'>UserName</h5>
                            <img src={downArrow} alt="" />
                        </div>
                    </div>
               </div>
        </div>
    </div>
  )
}

export default NavBar
