import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Footer extends Component {
   

    render() {
        return (
            <div class="">
                
        <hr />
        
        <div className="container row card-primary m-4">
         <div class="col-md-6 p-3">
        <h5>About this App</h5>
        <p className="bg-default card-text "> 
        There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable. If you are going
           to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
           embarrassing hidden in the middle of text. All the Lorem Ipsum generators
            on the Internet tend to repeat predefined chunks as necessary, making this 
            the first true generator on the Interne

        </p>

        <h5>Quick Help</h5>
        <p className="bg-default card-text"> 
        There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable. If you are going
           to use a passage of Lorem Ipsum, you need to be sure there isn't anything 
           embarrassing hidden in the middle of text. All the Lorem Ipsum generators
            on the Internet tend to repeat predefined chunks as necessary, making this 
            the first true generator on the Interne

        </p>
        </div>

        <div class="col-md-6 p-3">
        <h5>Contact Us</h5>
        <ul className="list-group">
            <li class="list-group-item">Phone : +255 754 385 888</li>
            <li class="list-group-item">Email : erickemmanuael@gmail.com</li>
            <li class="list-group-item">Location : Hailesalassie 450</li>
        </ul>

        <div class="col-md-12 p-3 container row">
       
            {/* <div class="col-md-4">
            <Link to="/">
            <a class="btn btn-primary btn-md text-light m-1">Home</a>

            </Link>
            </div> */}
            <div class="col-md-4">
            <Link to="/register">
            <a class="btn btn-primary btn-md text-light m-1">Registration</a>

            </Link>
            </div>
            {/* <div class="col-md-4">
            <Link to="/registraion">
            <a class="btn btn-primary btn-md text-light m-1">Log In</a>

            </Link>
            </div> */}
            
        </div>
        

        </div>
       
        </div>
        <nav class="navbar  mt-3">
                <center class="col-md-12">
                
                    <span class="right-50" id="">...</span>
                
                </center>
           
            </nav>
            <nav class="navbar navbar-light bg-primary mt-3 fixed-bottom">
                <center class="col-md-12">
                
                    <span class="right-50" id="">ElearningEnhancer@2020</span>
                
                </center>
           
            </nav>
            </div>
        )
    }
}

Footer.propTypes = {

}

export default Footer