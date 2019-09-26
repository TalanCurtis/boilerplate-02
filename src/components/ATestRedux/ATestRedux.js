import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateATest } from '../../redux/reducers/aTest/aTestActions';

class ATestRedux extends Component {

  handleOnClick = () => {
    console.log('redux', this.props);
  }

  handleOnChange = (e) => {
    let value = e.target.value
    this.props.updateATest( value )
  }

  render(){
    return(
      <div className="ATestRedux">
        <button onClick={this.handleOnClick}>
           Log Redux
        </button>
        <input type="text" 
          value={this.props.aTest.value}
          onChange={this.handleOnChange}/>
      </div>
    )
  }
}

const reduxActions = {
  updateATest
}

function mapStateToProps (state) {
  return {
    aTest: state.aTest
  }
}

export default connect(mapStateToProps, reduxActions )(ATestRedux);