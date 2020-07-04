import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Hero from '../layout/Hero';
import getForums from '../../actions/forums';
import { Link } from 'react-router-dom';

class Forums extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        this.props.getForums(this.props.match.params.id);
        return (
            <Fragment>
                <Hero />
            <h1>Forums</h1>

            <div className="container row col-md-12">
           
          
           <div className="col-md-10 col-12">

           {this.props.forums ? this.props.forums.map((forum) => (

           <div class="col-md-12 m-0">
       <div class="card card-default">
         <div class="card-header">
           <h3 class="card-title">
           
           {forum.name}
           </h3>
         </div>

         <Link to={"/forums/"+forum.id}>
            <button class="btn btn-info btn-sm">Discussions</button>
            </Link>
       </div>
   
     </div>
      )): null}
  
  

          

           </div>
       </div>
            </Fragment>
        )
    }
}

Forums.propTypes = {

}

const mapStateToProps = (state) => ({
    forums : state.forums.forums
})

export default connect(mapStateToProps,{getForums})(Forums);