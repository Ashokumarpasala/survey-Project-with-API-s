import React, { useState } from 'react';
import book1 from './navImages/journal-bookmark-fill.svg';
import book2 from './navImages/journal-richtext.svg';

const SideBar = () => {
  const [activeLink, setActiveLink] = useState('mySurvey');

  const handleLinkClick = (linkName: React.SetStateAction<string>) => {
    setActiveLink(linkName === activeLink ? '' : linkName);
  };

  return (
    <div className="col-sm-2" style={{ height: '100vh', backgroundColor: 'hsl(0deg 0% 100%)', fontSize: '18px', color: 'grey' }}>
      <div className='m-3'>
        <h1 className='py-4' style={{ fontWeight: 'bolder', fontSize: '25px', borderBottom: '1px solid lightgrey' }}>Survey</h1>
      </div>

      {['mySurvey', 'requestedSurvey'].map((linkName) => (
        <div
          className={`d-flex my-5 ${activeLink === linkName ? 'active' : ''}`}
          style={{ height: '35px ', fontSize: '23px', borderLeft: activeLink === linkName ? '5px solid blue' : 'none' }}
          key={linkName}
        >
          <img src={linkName === 'mySurvey' ? book1 : book2} alt="" className={`px-3 ${activeLink === linkName ? 'active' : ''}`} />
          <h2 onClick={() => handleLinkClick(linkName)}>{linkName === 'mySurvey' ? 'My Survey' : 'Requested Survey'}</h2>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
