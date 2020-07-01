import React, { Component, Fragment } from 'react'
import Hero from '../layout/Hero';
import {connect } from 'react-redux';
import {Link } from 'react-router-dom';


export class Settings extends Component {

    render(){

        const euser = this.props.euser[0];
        return <Fragment>
            <Hero />
            
            <div class="container row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-12">
              <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                            <div class="card-header">
                                    <h3>Elearning User Account</h3>
                                </div>
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg" alt="card image" /></p>
                                    {euser ? 
                           <Link to="/editprofile">
                           <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-md"><i class="fa fa-user"></i></a>    <button className="btn btn-primary btn-sm"> Accessed</button>
                           </Link>
                       : 
                       <Link to="/editprofile">
                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-md"><i class="fa fa-user"></i></a>    <button className="btn btn-primary btn-sm">Not Accessed </button>
                        </Link>} 

                        <br /><br />
                        {euser ? <h4 class="card-title text-primary">Elearning Username :  {euser.fullname}</h4> : '' }
                        {euser ? <h4 class="card-title">Email Adress : {euser.email}</h4> : '' }
                            </div>
                            </div>
                        </div>
                        <div class="backside">
                        <div class="card">
                                <div class="card-body text-center mt-4">
                                {euser ? <h4 class="card-title">Elearning Name :  {euser.fullname}</h4> : '' }
                                {euser ? <h4 class="card-title">Email Adress :  {euser.email}</h4> : '' }
                                <br />
                                <center> <h4 className="card-text">Account Description</h4> </center>
                                    <p class="card-text">This account type is the elearning registered account that aims t access the contents related to the courses enrolled from the eleaarning system. To
                                    change any configuration about this account to match the elearning credentials  click the button below</p>
                                            <Link to="/profile">
                                   <button className="btn btn-primary btn-sm">Back to profiles</button>
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
    }
}
const mapStateToProps = (state) => ({
    euser : state.user.users
});
        
    

export default connect(mapStateToProps)(Settings);