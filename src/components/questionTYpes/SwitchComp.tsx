import React, { useState } from 'react';

function SwitchComp() {
  const [isChecked, setIsChecked] = useState(true);

  const handleSwitchToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="form-check form-switch ">
      <input className="form-check-input" type="checkbox"  style={{width: '45px', height: '25px'}} role="switch" id="flexSwitchCheckChecked" checked={isChecked} onChange={handleSwitchToggle} />
    </div>
  );
}

export default SwitchComp;
