import React from 'react';
import PropTypes from 'prop-types';

//-- Default Props and PropTypes Start --//
const _noop = () => { console.log("defaultFunction") };

Button.propTypes = {
  label: PropTypes.string,
  handleOnClick: PropTypes.func,
};

Button.defaultProps = {
  label: "defaultLabel",
  handleOnClick: _noop
};
//-- Default Props and PropTypes End --//

function Button (props) {
  return(
    <div className="Button">
      <button  onClick={(e)=>props.handleOnClick(e)}> {props.label} </button>
    </div>
  )
}

export default Button;
