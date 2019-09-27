import React from 'react';
import PropTypes from 'prop-types';

//-- Default Props and PropTypes Start --//
const _noop = () => { console.log("defaultFunction") };

Text.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
};

Text.defaultProps = {
  label: "defaultlabel",
  value: "defaultValue",
  handleOnChange: _noop
};
//-- Default Props and PropTypes End --//

function Text (props) {
  return(
    <div className="Text inputs">
      <div className="label"> 
        { props.label }
      </div>
      <input type="text" placeholder={props.placeholder} value={props.value}/>
    </div>
  )
}

export default Text;
