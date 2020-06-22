import React , { Fragment} from 'react'
import Hero from '../layout/Hero';
import Header from '../layout/Header';
import {Link} from 'react-router-dom';


export const Profile = () => {


    return <Fragment>
       
        <Hero />
        <div className="container">
        <h1>Profile</h1> 

        <Link to="/editprofile">
            <button className="btn btn-md bt-success"> Edit Profile</button>
        </Link>
        </div>
    </Fragment>
}

export default Profile;