import React, { Component } from 'react';
import CourseItem from './CourseItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Courselist extends Component {
  
    render() {
        const {courses} = this.props.courses;

        courses ? console.log(courses) : console.log('none');
        
        
        return (
            <div className="container">
              
<div class="container">
        <div class="row">
{courses ? courses.map((course) => (
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
    <div class="card card-inverse card-info">
        {/* <img class="card-img-top" src="https://picsum.photos/200/150/?random" /> */}
        <div class="card-block">
            {/* <figure class="profile profile-inline">
                <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt="" />
            </figure> */}
            <h4 class="card-title">{course.shortname}</h4>
            <div class="card-text">
            {course.fullname}
            </div>
        </div>
        <div class="card-footer">
            <button class="btn btn-info btn-sm">More</button>
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
courses : state.courses
});

export default connect(mapStateToProps)(Courselist)