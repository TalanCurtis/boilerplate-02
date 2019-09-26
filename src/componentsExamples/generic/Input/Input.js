import React from 'react';
import PropTypes from 'prop-types';

//-- Default Props and PropTypes Start --//
const _noop = () => { console.log("defaultFunction") };

Input.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
};

Input.defaultProps = {
  title: "defaultTitle",
  value: "defaultValue",
  placeholder:"placeholder",
  handleOnChange: _noop
};
//-- Default Props and PropTypes End --//

function Input (props) {
  return(
    <div className="Input">
      <div className="title">
        { props.title }
      </div>
      <div className="input-text">
        <input type="text" value={props.value} placeholder={props.placeholder} onChange={props.handleOnChange}/>
      </div>
    </div>
  )
}

export default Input;
