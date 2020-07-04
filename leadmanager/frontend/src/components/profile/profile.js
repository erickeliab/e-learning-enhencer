import React , { Fragment,Component} from 'react'
import { connect } from 'react-redux';
import Hero from '../layout/Hero';
import Header from '../layout/Header';
import {Link} from 'react-router-dom';




export class Profile extends Component{

   
    

    render () {
       
        const euser = this.props.euser;
        const appuser = this.props.auth.user;

        console.log(euser);
        console.log(appuser);
        return <Fragment>
       {appuser ? console.log(appuser) : console.log('123')}
        <Hero />
        <div className="container">
       

        <Link to="/editprofile">
            <button className="btn btn-md bt-success"> Edit Profile</button>
        </Link>


      
<section id="" class="pb-0 mt-0 pt-0 bg-white">
    <div class="container bg-white">
        <h5 class="section-title text-primary h1"></h5>
        <div class="row bg-white">
         
            <div class="col-xs-12 col-sm-6 col-md-6 col-12">
                <div class="image-flip" >
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
     
                                            <Link to="/editprofile">
                                   <button className="btn btn-primary btn-sm"> Edit Profile</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                            <div class="card-header">
                                    <h3>Elearning User Account</h3>
                                </div>
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src={euser.userpictureurl} alt="card image" /></p>
                                    {euser ? 
                           <Link to="/editprofile">
                           <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-md"><i class="fa fa-user"></i></a>    <button className="btn btn-primary btn-sm"> Accessed</button>
                           </Link>
                       : 
                       <Link to="/editprofile">
                        <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-md"><i class="fa fa-user"></i></a>    <button className="btn btn-primary btn-sm">Not Accessed </button>
                        </Link>} 

                        <br /><br />
                        {appuser ? <h4 class="card-title text-primary">Elearning Username :  {euser.username}</h4> : '' }
                        {appuser ? <h4 class="card-title">Full Name : {euser.fullname}</h4> : '' }
                            </div>
                            </div>
                        </div>
                        <div class="backside">
                        <div class="card">
                                <div class="card-body text-center mt-4">
                                {euser ? <h4 class="card-title">Elearning Username :  {euser.username}</h4> : '' }
                                {euser ? <h4 class="card-title">Elearning Fullrname :  {euser.fullname}</h4> : '' }
                                <br />
                                <center> <h4 className="card-text">Account Description</h4> </center>
                                    <p class="card-text">This account type is the elearning registered account that aims t access the contents related to the courses enrolled from the eleaarning system. To
                                    change any configuration about this account to match the elearning credentials  click the button below</p>
                                            <Link to="/settings">
                                   <button className="btn btn-primary btn-sm"> Edit Credentials</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        </div>
    </div>
</section>
</div>
        
    </Fragment>
    }
      
   
}
const mapStateToProps = (state) =>({
        auth : state.auth,
        euser : state.user.users
    });
   


export default connect(mapStateToProps)(Profile);
