import React , { Fragment} from 'react';
import { Link } from 'react-router-dom'
import Hero from '../layout/Hero';
import {connect } from 'react-redux';
import Header from '../layout/Header';
import PropTypes from 'prop-types';




export  class EditProfile extends React.Component {
   
    render() {
        const appuser = this.props.auth.user;

      return (
          <Fragment>

              <Hero />
            <div class="container row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-12">
                <div class="image-flip " >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-header">
                                    <h3>App User Account</h3>
                                </div>
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image" /></p>
                       {appuser ? 
                           <Link to="/editprofile">
                           <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-md"><i class="fa fa-user"></i></a>    <button className="btn btn-primary btn-sm"> Logged In</button>
                           </Link>
                       : 
                       <Link to="/editprofile">
                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-md"><i class="fa fa-user"></i></a>    <button className="btn btn-primary btn-sm">Not Logged In</button>
                        </Link>} 
                        <br /><br />
                    {appuser ? <h4 class="card-title text-primary">Username :  {appuser.username}</h4> : '' }
                    {appuser ? <h4 class="card-title">Email Adress : {appuser.email}</h4> : '' }
                
                                    
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                {appuser ? <h4 class="card-title">Username :  {appuser.username}</h4> : '' }
                                {appuser ? <h4 class="card-title">Email Adress :  {appuser.email}</h4> : '' }
                                <br />
                                <center> <h4 className="card-text">Account Description</h4> </center>
                                    <p class="card-text">This account type is the one you use to get access to our application, explore our features and configure the elearning account on the settings.</p>
                                    <p class="card-text">It is the one you registered with in the first place, and logged in with. Keep your credentials by your self becaouse anyone with your username and password could gain access</p>
     
                                            <Link to="/profile">
                                   <button className="btn btn-primary btn-sm">Back to Profiles</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-12">
          <div className="card card-body">
            <h2 className="text-center">Edit Your Profile</h2>
            <form >
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                 
                  value=''
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                 
                  value=''
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  
                  value=''
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  
                  value=''
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                 Update
                </button>
              </div>
             
            </form>
          </div>
        </div>
        </div>
          </Fragment>
      
      )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth,
    }
}

export default connect(mapStateToProps)(EditProfile)