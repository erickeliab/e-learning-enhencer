import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { getUser, fetchToken } from '../../actions/user';


export class Entry extends Component {
  state = {
    username: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    //this.props.login(this.state.username, this.state.password);
    this.props.fetchToken(this.state.username, this.state.password);
    //this.props.getUser();
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (!this.props.tokenfetched == "") {
        return <Redirect to="/courses" />;
      }
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Provide Elearning Credentials</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
            <p>
             {/* Don't have an account? <Link to="/register">Register</Link> */}
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  tokenfetched : state.user.token_value
});

export default connect(mapStateToProps, { login, getUser,fetchToken })(Entry);
