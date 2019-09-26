import React from 'react';
import PropTypes from 'prop-types';

//-- Default Props and PropTypes Start --//
const _noop = () => { console.log("defaultFunction") };

ABasicStatelessComp.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  handleOnChange: PropTypes.func,
};

ABasicStatelessComp.defaultProps = {
  name: "defaultName",
  value: "defaultValue",
  handleOnChange: _noop
};
//-- Default Props and PropTypes End --//

function ABasicStatelessComp (props) {
  return(
    <div className="ABasicStatelessComp">
      <div>
        { props.name }
      </div>
      <button onClick={props.handleOnChange}>
        ABasicStatelessComp
      </button>
      <div>
        { props.value }
      </div>
    </div>
  )
}

export default ABasicStatelessComp;
