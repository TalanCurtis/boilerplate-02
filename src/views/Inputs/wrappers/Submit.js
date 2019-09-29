import React from 'react';
import { connect } from 'react-redux';
import { updateATestForm } from '../../../redux/reducers/aTestForm/aTestFormActions';
import Button from '../../../componentsExamples/inputs/Button/Button';
import _ from 'lodash';

function Submit (props) {

  const validate= () => {
    let isError = false;
    return isError;
  }
  const handleSubmit = () => {
    console.log("handleSubmit");
    validate();
    // validate form
    // reset form
  }

  return (
    <div className="Submit">
      <Button label="Submit" handleOnClick={handleSubmit}/>
    </div>
  );
}

const reduxActions = {
  updateATestForm,
}

function mapStateToProps (state) {
  return {
    aTestForm: state.aTestForm
  }
}

export default connect(mapStateToProps, reduxActions )(Submit);