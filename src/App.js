import React from 'react';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          {routes}
        </div>
      </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(App);
