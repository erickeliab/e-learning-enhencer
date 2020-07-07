import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Entry from './accounts/Entry';
import Register from './accounts/Register';
import Section from './courses/Section';
import Hero from './layout/Hero';
import Profile from './profile/profile';
import EditProfile from './profile/editprofile';
import PrivateRoute from './common/PrivateRoute';
import About from './pages/about';
import Settings from './pages/settings';
import Footer from './layout/footer';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import Discussions from './discussions/discussions';
import DiscussionList from './discussions/disccussionlist';
import Forums from "./forums/forumlist";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'middle',
};



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  state = { }
  callbackFunction = (childData) => {
  this.setState(childData)
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              
             
              <div className={`bg-${this.state.theme}  text-${this.state.navtheme}`}>
              <Header parentCallback={this.callbackFunction} />
              
              <Alerts />
                <Switch>
                  <PrivateRoute exact path="/leads" component={Dashboard} />
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/entry" component={Entry} />
                  <PrivateRoute exact path="/courses" component={Section} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <PrivateRoute exact path="/editprofile" component={EditProfile} />
                  <PrivateRoute exact path="/about" component={About} />
                  <PrivateRoute exact path="/settings" component={Settings} />
                  <PrivateRoute exact path="/discussions/:id" component={Discussions} />
                  <PrivateRoute exact path="/courses/:id" component={Forums} />
                  <PrivateRoute exact path="/forums/:id" component={DiscussionList} />
                </Switch>
              <Footer />
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}





ReactDOM.render(<App />, document.getElementById('app'));
