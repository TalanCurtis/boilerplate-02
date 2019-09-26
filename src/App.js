import React from 'react';
import './styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

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

export default App;
