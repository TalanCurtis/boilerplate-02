import React from 'react';
import { connect } from 'react-redux';
import { updateATestForm } from '../../../redux/reducers/aTestForm/aTestFormActions';
import InputText from '../../../componentsExamples/inputs/InputText/InputText';

function Name (props) {
    return (
      <div className="Name">
        <InputText label="Name" placeholder="Name" valueKey={"name"} value={props.aTestForm.name} handleOnChange={props.updateATestForm}/>
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

export default connect(mapStateToProps, reduxActions )(Name);