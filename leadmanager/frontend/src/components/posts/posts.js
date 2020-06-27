import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';


export class Post extends Component{
  
    msg = this.props.pst.message;

    render(){
        console.log(this.props.pst.message.toString());
        return <Fragment>
          
          <div dangerouslySetInnerHTML={{__html: 
        this.msg}}></div>
        </Fragment>
    }
}

export default Post;

