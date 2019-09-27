import React from 'react';
import PropTypes from 'prop-types';

//-- Default Props and PropTypes Start --//
const _noop = () => { console.log("defaultFunction") };

Email.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
};

Email.defaultProps = {
  label: "defaultlabel",
  value: "defaultValue",
  handleOnChange: _noop
};
//-- Default Props and PropTypes End --//

function Email (props) {
  return(
    <div className="Email inputs">
      <div className="label"> 
        { props.label }
      </div>
      <input type="email" placeholder={props.placeholder} value={props.value}/>
    </div>
  )
}

export default Email;
