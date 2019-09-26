import React, { Component } from 'react';
import axios from 'axios';

class ATestButtonAxios extends Component {

  handleOnClick = () => {
    axios.get('/api/test')
      .then(res=>{console.log('res:', res.data)})
      .catch(err=>{ console.log('err: ', err)});
  }

  render(){
    return(
      <div className="ATestButtonAxios">
        <button onClick={this.handleOnClick}>
          ATestButtonAxios
        </button>
      </div>
    )
  }
}

export default ATestButtonAxios;