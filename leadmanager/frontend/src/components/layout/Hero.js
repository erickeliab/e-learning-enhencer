import React, { Component, Fragment } from 'react';
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/posts';
import {getDiscussions} from '../../actions/discussions';
import Lead from '../../components/leads/Leads';

export  class Hero extends Component {

    componentWillMount(){
      this.props.getPosts()
    }

    render() {
        return (
          <Fragment>
            <Lead />

            <div className="card bg-light  d-block h-40">
<div class="card-body">
            <h4>Dashboard</h4>
            <div class="row">
              <div class="col-5 col-sm-3">
                <div class="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                  <Link to="/profile">
                  <a class="nav-link" id="vert-tabs-home-tab" data-toggle="pill" href="#vert-tabs-home" role="tab" aria-controls="vert-tabs-home" aria-selected="false">Profile</a>
                  </Link>
                  <Link to="/courses">
                  <a class="nav-link active" id="vert-tabs-profile-tab" data-toggle="pill" href="#vert-tabs-profile" role="tab" aria-controls="vert-tabs-profile" aria-selected="true">Enrolled Courses</a>


                  </Link>

                  <Link to="/discussions">


                  <a class="nav-link" id="vert-tabs-messages-tab" data-toggle="pill" href="#vert-tabs-messages" role="tab" aria-controls="vert-tabs-messages" aria-selected="false">Discussions</a>

                  </Link>
                  <Link to="/settings">

                  <a class="nav-link" id="vert-tabs-settings-tab" data-toggle="pill" href="#vert-tabs-settings" role="tab" aria-controls="vert-tabs-settings" aria-selected="false">Settings</a>

                  </Link>

                   <Link to="/about">

                  <a class="nav-link" id="vert-tabs-settings-tab" data-toggle="pill" href="#vert-tabs-settings" role="tab" aria-controls="vert-tabs-settings" aria-selected="false">About</a>

                  </Link>
                </div>
              </div>
              <div class="container row col-7 col-sm-9">
              <div class="info-box mb-4 bg-success m-2">
             
             
            </div>

            

              </div>
            </div>
            </div>

              </div>
          </Fragment>
          
        )
    }

    imageStyle = {
        "height" : "2 rem",
        
    }
}

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, { getPosts, getDiscussions})(Hero);