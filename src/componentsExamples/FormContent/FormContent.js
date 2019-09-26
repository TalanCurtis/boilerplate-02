import React, { Component }from 'react';
import { connect } from 'react-redux';
import { updateATestForm } from '../../redux/reducers/aTestForm/aTestFormActions';


class FormContent extends Component {
  handleOnChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    this.props.updateATestForm( key, value)
  }

  render(){
    return(
      <div className="FormContent">
        <input 
          type="text" 
          title="Text"
          name="text"
          placeholder="Enter Text"
          value={this.props.aTestForm.text} 
          onChange={this.handleOnChange} 
        />
        <input 
          type="number" 
          name="quantity"
          title="Quantity"
          value={this.props.aTestForm.quantity} 
          onChange={this.handleOnChange} 
        />
      </div>
    )
  }
}

const reduxActions = {
  updateATestForm
}

function mapStateToProps( state ){
  return {
    aTestForm: state.aTestForm
  }
}

export default connect(mapStateToProps, reduxActions)(FormContent);
