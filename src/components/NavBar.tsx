import React from 'react';
import downArrow from './navImages/chevron-down.svg';
import userGear from './navImages/person-fill-gear.svg';
import usericon from './navImages/person-circle.svg';
import coin from './navImages/coin.svg';
import calander from './navImages/calendar2-week.svg';
import bell from './navImages/bell-fill.svg';

const NavBar = () => (
  <div>
    <div className="d-flex" style={{ backgroundColor: 'hsl(215.48deg 75% 48.63%)', color: 'whitesmoke', fontSize: '23px' }}>
      <div className="p-2 flex-grow-1 text-end ">
        <div className='d-flex justify-content-end'>
          {['Learn', 'Network', 'Evulate'].map((text) => (
            <div className='d-flex p-2 m-2' key={text}>
              <h5>{text}</h5>
              <img src={downArrow} alt="" className='ps-4' />
            </div>
          ))}
          <h5 className='p-2 m-2'> Jobs</h5>
          {[
            { image: userGear, score: '1045', label: 'Profile Score' },
            { image: coin, score: '400', label: 'Tokens' },
            { image: calander, score: '', label: '' },
            { image: bell, score: '', label: '' },
          ].map(({ image, score, label }, index) => (
            <div
              className={`d-flex m-2 ps-4 px-${index === 2 || index === 3 ? '3' : '4'}`}
              style={{ borderLeft: '3px solid hsl(215.48deg 80.17% 54.51%)' }}
              key={index}
            >
              {score && (
                <><img src={image} alt="" className='ps-4' style={{ width: '65px' }} /><div className='m-2 text-start'>
                          <h5>{score}</h5>
                          <p style={{ fontSize: '10px' }}>{label}</p>
                      </div></>
              )}
              {!score && <img src={image} alt="" style={{ width: index === 2 ? '30px' : '30px', marginLeft: index === 3 ? '10px' : '0px' }} />}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex-shrink-1 ">
        <div className='d-flex m-3 ps-2 py-2'>
          <img src={usericon} alt="" className='ps-2 ' style={{ width: '50px' }} />
          <div className='d-flex p-1'>
            <h5 className='px-2'>SignIn</h5>
            <img src={downArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
