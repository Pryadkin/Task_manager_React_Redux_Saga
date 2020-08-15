import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage/TasksPage';
import TasksDetailsPage from './pages/TasksDetailsPage/TasksDetailsPage';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="base-container">
      <div className="wrapper">
        <Switch>
          <Route path="/" exact>
            <TasksPage />
          </Route>

          <Route path="/details/:id" exact>
            <TasksDetailsPage />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
