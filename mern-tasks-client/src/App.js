import React from 'react';
// For routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Components
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/new-account" component={NewAccount}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
    </Router>
  );
}

export default App;
