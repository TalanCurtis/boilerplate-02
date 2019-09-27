import React, { Component }from 'react';
import { connect } from 'react-redux';
import { updateATestForm } from '../../redux/reducers/aTestForm/aTestFormActions';
import CheckmarkSvg from '../../assets/icons/CheckmarkSvg';


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
        <CheckmarkSvg fill={"blue"}/>
        <div className="boxes">
          <div style={{height: "20px", width:"20px", backgroundColor:"purple"}}></div>
          <div style={{height: "20px", width:"20px", backgroundColor:"yellow"}}></div>
          <div style={{height: "20px", width:"20px", backgroundColor:"green"}}></div>
        </div>
        <div>
          inputs: radial buttons, checkboxes, dropdown menus, type aheads / search bars, file tree, collapsible menus
        </div>
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
