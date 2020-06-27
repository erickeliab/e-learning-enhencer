import React, { Component, Fragment } from 'react';
import Hero from '../layout/Hero';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getDiscussions } from '../../actions/discussions';
import { getPosts } from '../../actions/posts';
import { getUser, fetchToken } from '../../actions/user';
import Post from '../../components/posts/posts';


export  class Discussions extends Component {

    static propTypes = {
        discussions: PropTypes.array.isRequired,
        getDiscussions: PropTypes.func.isRequired,
       
      };
      

    componentWillMount(){
        this.props.fetchToken('blockresna','Mu12345678.');
        
      }


    componentDidMount(){
        this.props.getDiscussions();
        
    }

    render = () => {

        //console.log( this.props.posts.filter((post) => post.discussionid == 1));
       
        return <Fragment>
            <Hero />
         
            <div className="container">

                <h1>Discussions</h1>
               
                {this.props.discussions.discussions ? this.props.discussions.discussions.map((discussion) => (
                    <div>
             <p>{discussion.name}</p>
             {this.props.posts.filter((post) => post.discussionid == discussion.id).map((pst) => (
                <Post pst = {pst}/>
             ))}
            
           </div>
            )): null}
         
            </div>
        </Fragment>
    }
}

const mapStateToProps = (state) => ({
    discussions: state.discussions.discussions,
    posts : state.posts.posts.posts,
})

export default connect(mapStateToProps,{getDiscussions,fetchToken, getPosts})(Discussions);