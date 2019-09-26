import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateATest } from '../../../redux/reducers/aTest/aTestActions';
import Input from '../../generic/Input/Input';

class WView01Input extends Component {

  handleOnChange = (e) => {
    let value = e.target.value;
    this.props.updateATest(value);
  }

  render(){
    return(
      <div className="WView01Input" style={{background: "lightblue"}}>
        same comps different functionality
        <Input 
          title={"updates Redux"}
          value={this.props.aTest.value}
          handleOnChange={ this.handleOnChange }
        />
        <Input 
          title={"This one does not"}
        />
      </div>
    )
  }
}

const reduxActions = {
  updateATest
}

function mapStateToProps(state){
  return {
    aTest: state.aTest
  }
}

export default connect(mapStateToProps, reduxActions )(WView01Input);
