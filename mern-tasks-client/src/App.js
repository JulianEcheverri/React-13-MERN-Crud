import React from 'react';
// For routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Components
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
// Contexts
import ProjectState from './context/projects/ProjectState'
import TaskState from './context/tasks/TaskState'
import WarningState from './context/warnings/WarningState'

function App() {
  return (
    <ProjectState>
      <TaskState>
        <WarningState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/new-account" component={NewAccount}></Route>
              <Route exact path="/projects" component={Projects}></Route>
            </Switch>
          </Router>
        </WarningState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
