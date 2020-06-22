import React, { Component } from 'react';
import {Link } from 'react-router-dom';

export default class Hero extends Component {
    render() {
        return (
            <div className="card bg-dark  d-block h-40">
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
              <div class="col-7 col-sm-9">
                hhhhhhhhh
                <div class="tab-content" id="vert-tabs-tabContent">
                  <div class="tab-pane text-left fade" id="vert-tabs-home" role="tabpanel" aria-labelledby="vert-tabs-home-tab">



                  </div>
                  <div class="tab-pane fade active show" id="vert-tabs-profile" role="tabpanel" aria-labelledby="vert-tabs-profile-tab">


                  </div>
                  <div class="tab-pane fade" id="vert-tabs-messages" role="tabpanel" aria-labelledby="vert-tabs-messages-tab">


                  </div>
                  <div class="tab-pane fade" id="vert-tabs-settings" role="tabpanel" aria-labelledby="vert-tabs-settings-tab">


                  </div>
                </div>
              </div>
            </div>
            </div>

              </div>
        )
    }

    imageStyle = {
        "height" : "2 rem",
        
    }
}
