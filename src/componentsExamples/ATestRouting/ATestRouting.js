import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ATestRouting extends Component {

  routeToAView01 = () => {
    this.props.history.replace('/')
  }

  routeToAView02 = () => {
    this.props.history.replace('/AView02')
  }

  logProps = () => {
    console.log({props: this.props});
  }

  render(){
    return(
      <div className="ATestRouting">
        <button onClick={this.logProps}>
          Props
        </button>
        <div>
          {/* routing through NavLinks */}
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/AView02"> AView02 </NavLink>
        </div>
        <div>
          {/* routing through buttons */}
          <button onClick={this.routeToAView01}>
            View 1 
          </button>
          <button onClick={this.routeToAView02}>
            View 2
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(ATestRouting);