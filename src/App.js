import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home/Home';
import Details from './views/Detail/Detail';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        {/* <Link to={'/country'} className="nav-link">About</Link> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/country" component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;