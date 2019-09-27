import React from 'react';
import PropTypes from 'prop-types';

//-- Default Props and PropTypes Start --//
const _noop = () => { console.log("defaultFunction") };

InputText.propTypes = {
  label: PropTypes.string,
  valueKey: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.oneOfType([PropTypes.string , PropTypes.number]),
  handleOnChange: PropTypes.func,
};

InputText.defaultProps = {
  label: "defaultLabel",
  valueKey: "defaultValueKey",
  value: "defaultValue",
  placeholder:"defaultPlaceholder",
  handleOnChange: _noop
};
//-- Default Props and PropTypes End --//

function InputText (props) {
  return(
    <div className="InputText inputs">
      <div className="label"> 
        { props.label }
      </div>
      <input type="text" placeholder={props.placeholder} data-key={props.valueKey} value={props.value}  onChange={(e)=>props.handleOnChange(e)}/>
    </div>
  )
}

export default InputText;
