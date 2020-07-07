import React, { Component } from 'react';
import CourseItem from './CourseItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses } from '../../actions/courses';
import { Link } from 'react-router-dom';


export class Courselist extends Component {

    // componentDidMount(){
    //     this.props.getCourses(this.props.fetchedtoken,this.props.userid ? this.props.userid:0)
    // }

  
    render() {
        this.props.userid ? this.props.getCourses(this.props.fetchedtoken,this.props.userid ? this.props.userid:0) : console.log('none');

        const {courses} = this.props.courses;

       // this.props.userid ? console.log(this.props.userid) : console.log('none');
        
        
        return (
            <div className="container">
              
<div class={`container bg-${this.props.theme} text-${this.props.navtheme}`}>
        <div class={`row bg-${this.props.theme} text-${this.props.navtheme}`}>
{courses ? courses.map((course) => (
    <div class={`col-sm-6 col-md-4 col-lg-3 mt-4 bg-${this.props.theme} text-${this.props.navtheme}`}>
    <div class={`card border-secondary bg-${this.props.theme} text-${this.props.navtheme}`}>
        <div class="card-block">
          
            <h4 class={`card-title bg-${this.props.theme} text-${this.props.navtheme}`}>{course.shortname}</h4>
            <div class={`card-text bg-${this.props.theme} text-${this.props.navtheme}`}>
            {course.fullname}
            </div>
        </div>
        <div class={`card-footer border-secondary text-${this.props.navtheme}`}>
            <Link to={"/courses/"+course.id}>
            <button class="btn btn-primary btn-sm">Forums</button>
            </Link>
            
        </div>
    </div>
</div>
)): ''}
           
        </div>
</div> 
</div>   
        )
    }
}

const mapStateToProps = (state) => ({
courses : state.courses,
fetchedtoken: state.user.users.token_value,
userid : state.user.users.userid,
theme : state.theme.theme[0],
navtheme : state.theme.theme[1]
});

export default connect(mapStateToProps, {getCourses})(Courselist)