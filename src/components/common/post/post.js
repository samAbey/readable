import React from 'react';

import { PropTypes } from 'prop-types';
import moment from 'moment';

import { postStyles, postMetaStyles } from './post.css'
import { Link } from 'react-router-dom';

class Post extends React.Component {

    static propTypes = {
        post: PropTypes.object.isRequired
    };

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
            </div>:null
            
        )
    }
}


export default Post;