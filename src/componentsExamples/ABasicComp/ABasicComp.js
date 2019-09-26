import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ABasicComp extends Component {
  //-- Default Props and PropTypes Start --//
  static _noop = () => { console.log("defaultFunction") };
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    handleOnChange: PropTypes.func,
  };
  
  static defaultProps = {
    name: "defaultName",
    value: "defaultValue",
    handleOnChange: this._noop
  };
  //-- Default Props and PropTypes End --//
  render(){
    return(
      <div className="ABasicComp">
        <div>
          { this.props.name }
        </div>
        <button onClick={this.props.handleOnChange}>
          ABasicComp
        </button>
        <div>
          { this.props.value }
        </div>
      </div>
    )
  }
}

export default ABasicComp;

