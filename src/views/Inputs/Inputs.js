import React from 'react';
import Age from './wrappers/Age';
import Name from './wrappers/Name';
import Email from './wrappers/Email';

function Inputs (props) {
  return (
    <div className="Inputs">
      Inputs
      <Age />
      <Name />
      <Email />
    </div>
  )
}

export default Inputs;