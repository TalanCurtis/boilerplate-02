import React from 'react';
import Text from '../../componentsExamples/inputs/Text/Text';
import Email from '../../componentsExamples/inputs/Email/Email';

function Inputs (props) {
  return (
    <div className="Inputs">
      Inputs
      <Text label="Name" placeholder="Name"  value={"Johnny Rocket"} />
      <Email label="Email" placeholder="Email"  value={"JRock234@gmail.com"} />
    </div>
  )
}

export default Inputs;