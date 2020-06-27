import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Section from './courses/Section';
import Hero from './layout/Hero';
import Profile from './profile/profile';
import EditProfile from './profile/editprofile';
import PrivateRoute from './common/PrivateRoute';
import About from './pages/about';
import Settings from './pages/settings';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import Discussions from './discussions/discussions';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              
              <Alerts />
             
              <div className="">
                <Switch>
                  <PrivateRoute exact path="/leads" component={Dashboard} />
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/courses" component={Section} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/editprofile" component={EditProfile} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/discussions" component={Discussions} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
