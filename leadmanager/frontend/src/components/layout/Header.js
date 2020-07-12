import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import  { changeTheme } from '../../actions/theme';
import { LInk } from 'react-router-dom';

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  changeTheme = (e) => {
    e.preventDefault();
    if (this.props.theme == 'light'){
      this.props.changeTheme('dark')
    }else {
      this.props.changeTheme('light')
    }
  }
 

  render() {
    const { isAuthenticated, user } = this.props.auth;
    this.props.parentCallback(
      {
        theme : this.props.theme,
        navtheme : this.props.navtheme
      }
    );
    const authLinks = (
      <Fragment>
      


      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <Link to="/profile">
        <span className="navbar-text mr-3">
         
          <strong class={`text-${this.props.navtheme}`}> <i class="fa fa-user" aria-hidden="true"></i> {user ? ` ${user.username}` : ''}</strong>

        </span>
        </Link>
        <li className="nav-item">
          <button onClick={this.props.logout} className="nav-link btn btn-primary btn-md text-light p-2">
            Logout
          </button>
        </li>
       
      </ul>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
      

      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
      </Fragment>
     
    );


    return (

      <Fragment>
      <div  className={`sticky-top bg-${this.props.theme} mb-0`}>
      <nav className={`navbar navbar-expand-lg navbar-primary bg-${this.props.theme} mb-0`}>
      <a class="navbar-brand" href="#">E-learning Enhancer</a>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item theme" onClick={this.changeTheme}>
       - <i class="fa fa-sun" aria-hidden="true"></i> - 
        </li>
        
      </ul>

        {isAuthenticated ? authLinks : guestLinks}
       
        
      </nav>
     
      </div>
     </Fragment>
    );
  }
}



const mapStateToProps = (state) => ({
  auth: state.auth,
  theme: state.theme.theme[0],
  navtheme: state.theme.theme[1]
});

export default connect(mapStateToProps, { logout, changeTheme })(Header);
