import React from 'react';
import NavBar from '../NavBar/NavBar';
import {Route} from 'react-router-dom';
import Coming from '../Coming/coming';
import Thanks from '../Thanks/thanks';

import './App.scss';


function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Route path="/" exact>
          <Coming />
        </Route>
        <Route path="/thanks" exact>
          <Thanks />
        </Route>
      </div>
    </>
  );
}

export default App;
