import React from 'react';
import { connect } from 'react-redux';
import { updateATestForm } from '../../../redux/reducers/aTestForm/aTestFormActions';
import InputEmail from '../../../componentsExamples/inputs/InputEmail/InputEmail';

function Email (props) {
    return (
      <div className="Email">
        <InputEmail label="Email" placeholder={"Email"} valueKey={"email"} value={props.aTestForm.email} handleOnChange={props.updateATestForm}/>
      </div>
    );
}

const reduxActions = {
  updateATestForm
}

function mapStateToProps (state) {
  return {
    aTestForm: state.aTestForm
  }
}

export default connect(mapStateToProps, reduxActions )(Email);