import React, { Component, Fragment } from 'react';
import {Link , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/posts';
import {getDiscussions} from '../../actions/discussions';
import Lead from '../../components/leads/Leads';

export  class Hero extends Component {

    componentWillMount(){
      this.props.getPosts()
    }

    render() {
      if (this.props.tokenfetched == "") {
        return <Redirect to="/entry" />;
      }
        return (
          <Fragment>
            <Lead />

            <div className={`card bg-${this.props.theme} d-block h-10 bg-  text-${this.props.navtheme}`}>
           <div class="card-body">
            <h4>Dashboard</h4>
            <div class="row">
              <div class="col-5 col-sm-3">
                <div class="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                  <Link to="/profile">
                  <a class="nav-link" id="vert-tabs-home-tab" data-toggle="pill" href="#vert-tabs-home" role="tab" aria-controls="vert-tabs-home" aria-selected="false">Profile</a>
                  </Link>
                  <Link to="/courses">
                  <a class="nav-link" id="vert-tabs-profile-tab" data-toggle="pill" href="#vert-tabs-profile" role="tab" aria-controls="vert-tabs-profile" aria-selected="true">Enrolled Courses</a>


                  </Link>

              
                  <Link to="/settings">

                  <a class="nav-link" id="vert-tabs-settings-tab" data-toggle="pill" href="#vert-tabs-settings" role="tab" aria-controls="vert-tabs-settings" aria-selected="false">Settings</a>

                  </Link>

                   <Link to="/about">

                  <a class="nav-link" id="vert-tabs-settings-tab" data-toggle="pill" href="#vert-tabs-settings" role="tab" aria-controls="vert-tabs-settings" aria-selected="false">Guide</a>

                  </Link>
                </div>
              </div>
              <div class={`container  row col-7 col-sm-9  rounded-3 p-3 bg-${this.props.theme}  text-${this.props.navtheme}`}>
             <div className={`container bg-${this.props.theme}  text-${this.props.navtheme}`} >

             <center>
             
            </center>
          
            <div class={`card card-primary d-block h-10 bg-${this.props.theme}  text-${this.props.navtheme}`}>
              <div class="card-header">
                <h3 class="card-title">Announcement</h3>
              </div>
              <div class={`card-body bg-${this.props.theme}  text-${this.props.navtheme}`}>
                <p>No Any announcement</p>
                </div>
            </div>
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
  tokenfetched : state.user.token_value,
  theme : state.theme.theme[0],
  navtheme : state.theme.theme[1]
});

export default connect(mapStateToProps, { getPosts, getDiscussions})(Hero);