import React, { Component } from 'react';
import CourseItem from './CourseItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Courselist extends Component {
  
    render() {
        return (
            <div className="container">
                <CourseItem />  
                <CourseItem />  
                <CourseItem />  
                <CourseItem />  
            </div>
        )
    }
}



export default Courselist;