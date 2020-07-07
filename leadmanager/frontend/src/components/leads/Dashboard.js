import React, { Fragment, Component } from 'react';
import Form from './Form';
import Leads from './Leads';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Dashboard extends Component {
  render() { 
    // if (this.props.isAuthenticated) {
    //   return <Redirect to="/courses" />;
    // }
    return(
    <Fragment>
     
      <div className="container m-4 ">
        <h1>Home</h1>
      </div>
    </Fragment>
  );
  }
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Dashboard);