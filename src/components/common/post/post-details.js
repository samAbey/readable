import React from 'react';

import moment from 'moment';

import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { getPost } from '../../../redux/actions/posts';

import { postDetailsWrapperStyles } from './post-details.css';

class PostDetails extends React.Component {

    static propTypes = {
        postid: PropTypes.string.isRequired
    }

    componentDidMount () {
        this.props.getPost(this.props.postid);
    }

    render () {
        let { post } = this.props;
        return (
            <div {...postDetailsWrapperStyles}>
                <h1>{post.title}</h1>
                <span>By {post.author} - {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')} posted under <span style={{color: 'tomato'}}>{post.category}</span></span>
                <p class="post-body-text">{post.body}</p>
                <p>Votes: {post.voteScore}</p>
                <p>Comments: {post.commentCount?post.commentCount:'No comments yet'}</p>
            </div>
        );
    }
}

const mapStateToProps = ({post}) => {
    return {
        post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: id => dispatch(getPost(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (PostDetails);