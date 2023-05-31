import React, { useState } from 'react';
import book1 from './navImages/journal-bookmark-fill.svg';
import book2 from './navImages/journal-richtext.svg';

const SideBar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName === activeLink ? '' : linkName);
  };

  return (
    <div className="col-sm-2 card" style={{ height: '100vh' }}>
      <div className='m-3'>
        <h1 className='py-4' style={{ fontWeight: 'bolder', fontSize: '25px', borderBottom: '1px solid lightgrey' }}>Survey</h1>
      </div>

      <div
        className={`d-flex my-3 ${activeLink === 'mySurvey' ? 'active' : ''}`}
        style={{ height: '25px ', borderLeft: activeLink === 'mySurvey' ? '3px solid blue' : 'none' }}
      >
        <img src={book1} alt="" className={`px-3 ${activeLink === 'mySurvey' ? 'active' : ''}`} />
        <h2
          onClick={() => handleLinkClick('mySurvey')}
        >My Survey</h2>
      </div>

      <div
        className={`d-flex ${activeLink === 'requestedSurvey' ? 'active' : ''}`}
        style={{ height: '25px ', borderLeft: activeLink === 'requestedSurvey' ? '3px solid blue' : 'none' }}
      >
        <img src={book2} alt="" className={`px-3 ${activeLink === 'requestedSurvey' ? 'active' : ''}`} />
        <h2
          onClick={() => handleLinkClick('requestedSurvey')}
        >Requested Survey</h2>
      </div>
    </div>
  );
};

export default SideBar;
