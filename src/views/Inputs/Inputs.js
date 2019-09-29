import React from 'react';
import Age from './wrappers/Age';
import Name from './wrappers/Name';
import Email from './wrappers/Email';
import Submit from './wrappers/Submit';

function Inputs (props) {
  return (
    <div className="Inputs">
      Inputs
      <Age />
      <Name />
      <Email />
      <Submit />
    </div>
  )
}

export default Inputs;