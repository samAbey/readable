import React from 'react';

import { PropTypes } from 'prop-types';
import moment from 'moment';

import { postStyles, postMetaStyles } from './post.css'
import { Link } from 'react-router-dom';

import Vote from './../vote/vote';
import { connect } from 'react-redux';
import { voteSinglePost } from '../../../redux/actions/votes';
import { fetchAllPosts, deleteSinglePost } from '../../../redux/actions/posts';



class Post extends React.Component {

    static propTypes = {
        post: PropTypes.object.isRequired
    };

    upVotePost = (id) => {
        this.props.votePost(id, 'upVote');
        this.props.fetchAllPosts();
    }    
    downVotePost = (id) => {
        this.props.votePost(id, 'downVote');
        this.props.fetchAllPosts();
    }

    deletePost = (event, id) => {
        event.preventDefault();
        this.props.deletePost(id);
        this.props.fetchAllPosts();
        this.setState({
            redirect: true
        });
    }

    render () {

        let { post } = this.props,
            time = moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a');

        return (

            !post.deleted?<div {...postStyles}>
                <h1>{post.title}</h1>
                <div {...postMetaStyles}>
                    <p>Votes: {post.voteScore}</p>
                    <p>{time}</p>
                    <p>{post.commentCount===0?'No Comments Yet':`${post.commentCount} Comments`}</p>
                </div>
                <Link to={{
                    pathname: `/post/${post.id}`
                }}>Read more</Link>

                <Vote id={post.id} upVote={this.upVotePost} downVote={this.downVotePost} voteScore={post.voteScore}/>

                <div>
                    <Link to={{
                        pathname: `/post/edit/${post.id}`
                    }}>Edit</Link>
                    <a href="" onClick={event=> {this.deletePost(event, post.id)}}>Delete</a>
                </div>
            </div>:null
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (id, vote) =>  dispatch (voteSinglePost(id, vote)),
        fetchAllPosts: () => dispatch (fetchAllPosts()),
        deletePost: id => dispatch(deleteSinglePost(id))
    }
}
export default connect(null, mapDispatchToProps)(Post);