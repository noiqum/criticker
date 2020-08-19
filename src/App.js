import React from 'react';
import Navbar from './components/navbar/navbar';
import Auth from './components/auth/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'></Route>
          <Route path='/auth' component={Auth} ></Route>
          <Route path='/movies'></Route>
          <Route path='/allies'></Route>
          <Route path='/profile'></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
