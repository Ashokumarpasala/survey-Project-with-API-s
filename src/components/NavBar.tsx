import React, { useState } from 'react';
import { getAuth, signOut } from '@firebase/auth';
import downArrow from './navImages/chevron-down.svg';
import userGear from './navImages/person-fill-gear.svg';
import usericon from './navImages/person-circle.svg';
import coin from './navImages/coin.svg';
import calander from './navImages/calendar2-week.svg';
import bell from './navImages/bell-fill.svg';



interface NavBarProps {
  username: string;
  avatar: string;
  email?:string;
}


const NavBar: React.FC<NavBarProps> = ({ username, avatar, email }) => {
  const [imgError, setImgError] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);



  const handleImgError = () => {
    setImgError(true);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };


  const handleSignOut = async () => {
    const auth = getAuth();
  
    try {
      await signOut(auth);
      console.log('User signed out successfully');
      setTimeout(() => {
        setShowDropdown(false);
      }, 3000);
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };
  
  

  return (
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
          ].map(({ image, score, label }, index) => (
            <div
              className={`d-flex m-2 ps-3 px-${index === 2 || index === 3 ? '2' : '3'}`}
              style={{ borderLeft: '3px solid hsl(215.48deg 80.17% 54.51%)' }}
              key={index}
            >
              {score && (
                <>
                  <img src={image} alt="" className='ps-4' style={{ width: '65px' }} />
                  <div className='m-2 text-start'>
                    <h5>{score}</h5>
                    <p style={{ fontSize: '10px' }}>{label}</p>
                  </div>
                </>
              )}
              {!score && <img src={image} alt="" style={{ width: index === 2 ? '30px' : '30px', marginLeft: index === 3 ? '10px' : '0px' }} />}
            </div>
          ))}
        </div>
      </div>
        <img src={bell} alt="" className='my-3 m-2' style={{borderLeft: '3px solid hsl(215.48deg 80.17% 54.51%)', borderRight: '3px solid hsl(215.48deg 80.17% 54.51%)', width:"70px", padding:"17.5px"}} />
        <div className='d-flex m-4'  >
       { (imgError || !avatar || (typeof avatar === 'string' && !avatar.startsWith('http'))) ? (
                <img src={usericon} alt="" className="py-1" style={{ width: '60px', height: '50px' }} />
              ) : (
                <img
                  src={avatar}
                  alt=""
                  // className="ps-3 px-4"
                  style={{ width: '55px',border:"2px solid black", height: '55px',borderRadius:"50%", objectFit: 'cover' }}
                  onError={handleImgError}
                />
              )}

            <h5 className='py-2 pr-3 px-3' style={{ fontSize: "25px" }}>{username ? username : email ? email : 'User'}</h5>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
                        <img src={downArrow} className='py-3' alt="" onClick={() => handleDropdownToggle()} />
                        { showDropdown && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '100%',
                              right: 10,
                              backgroundColor: 'white',
                              borderRadius: '5px',
                              color:"black"
                            }}
                          >
                            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, width: '90px', fontSize: '18px' }}>
                              <li>
                                  <button onClick={() => handleSignOut()} className='btn btn-primary py-2'>Sign Out</button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
          </div>
        </div>
  </div>
)};

export default NavBar;


