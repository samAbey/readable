import React from 'react';

import { PropTypes } from 'prop-types';
import moment from 'moment';

import { postStyles, postMetaStyles } from './post.css'
import { Link } from 'react-router-dom';

import Vote from './../vote/vote';
import { connect } from 'react-redux';
import { voteSinglePost } from '../../../redux/actions/votes';
import { fetchAllPosts } from '../../../redux/actions/posts';


class Post extends React.Component {

    static propTypes = {
        post: PropTypes.object.isRequired
    };

    upVotePost = () => {
        this.props.votePost(this.props.post.id, 'upVote');
        this.props.fetchAllPosts();
    }    
    downVotePost = () => {
        this.props.votePost(this.props.post.id, 'downVote');
        this.props.fetchAllPosts();
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
                <Vote upVotePost={this.upVotePost} downVotePost={this.downVotePost} voteScore={post.voteScore}/>
            </div>:null
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        votePost: (id, vote) =>  dispatch (voteSinglePost(id, vote)),
        fetchAllPosts: () => dispatch (fetchAllPosts())
    }
}
export default connect(null, mapDispatchToProps)(Post);