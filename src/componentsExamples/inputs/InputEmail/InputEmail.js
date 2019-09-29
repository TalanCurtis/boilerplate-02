import React from 'react';
import PropTypes from 'prop-types';

//-- Default Props and PropTypes Start --//
const _noop = () => { console.log("defaultFunction") };

InputEmail.propTypes = {
  label: PropTypes.string,
  valueKey: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.oneOfType([PropTypes.string , PropTypes.number]),
  handleOnChange: PropTypes.func,
  errors: PropTypes.array
};

InputEmail.defaultProps = {
  label: "defaultLabel",
  valueKey: "defaultValueKey",
  value: "defaultValue",
  placeholder:"defaultPlaceholder",
  handleOnChange: _noop,
  errors:["defaultError1", "defaultError2"]
};
//-- Default Props and PropTypes End --//

function InputEmail (props) {
  let errors = props.errors.map( ( error, i )=>{
    return(
      <div className="error" key={i}>{ error }</div>
    );
  });
  return(
    <div className="InputEmail inputs">
      <div className="label"> 
        { props.label }
      </div>
      <input type="email"  placeholder={props.placeholder} data-key={props.valueKey}  value={props.value} onChange={(e)=>props.handleOnChange(e)}/>
      {errors}
    </div>
  )
}

export default InputEmail;
