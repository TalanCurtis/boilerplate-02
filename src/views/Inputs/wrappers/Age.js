import React from 'react';
import { connect } from 'react-redux';
import { updateATestForm } from '../../../redux/reducers/aTestForm/aTestFormActions';
import InputNumber from '../../../componentsExamples/inputs/InputNumber/InputNumber';

function Age (props) {
    return (
      <div className="Age">
        <InputNumber label="Age" placeholder="Age" valueKey={"age"} value={props.aTestForm.age} handleOnChange={props.updateATestForm}/>
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

export default connect(mapStateToProps, reduxActions )(Age);