import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/Home/Home';
import Details from './views/Detail/Detail';
import './App.css'
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/country/:id" component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;