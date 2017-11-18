import React from 'react';

import { PropTypes } from 'prop-types';
import moment from 'moment';

import { postStyles } from './post.css'

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
                <p>{post.voteScore}</p>
                <p>{time}</p>
                <p>{post.commentCount===0?'No Comments Yet':`${post.commentCount} Comments`}</p>
            </div>:null
            
        )
    }
}


export default Post;