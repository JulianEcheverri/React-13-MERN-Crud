import React from 'react';
// For routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import PrivateRoute from './components/routes/PrivateRoute'; 
// Contexts
import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import WarningState from './context/warnings/WarningState';
import AuthState from './context/auth/AuthState';
import tokenAuth from './config/tokenAuth';

// Check if a token exits
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <WarningState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/new-account" component={NewAccount}></Route>
                <PrivateRoute exact path="/projects" component={Projects}></PrivateRoute>
              </Switch>
            </Router>
          </AuthState>
        </WarningState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
