import React , { Fragment} from 'react'
import Hero from '../layout/Hero';
import Header from '../layout/Header';
import PropTypes from 'prop-types';




export  class EditProfile extends React.Component {
  
    render(){
        return <Fragment>
            <Hero />
            <div className="container">
            <h1>Edit Profile</h1>

         </div>
        </Fragment>
    }
}

export default EditProfile;