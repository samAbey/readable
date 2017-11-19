import React from 'react';

import moment from 'moment';

import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { getPost } from '../../../redux/actions/posts'

class PostDetails extends React.Component {

    static propTypes = {
        postid: PropTypes.string.isRequired
    }

    componentDidMount () {
        this.props.getPost(this.props.postid);
    }

    render () {
        let { post } = this.props;
        console.log(post)
        return (
            <div>
                <h1>{post.title}</h1>
                <span>By {post.author} - {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span>
                <p>{post.body}</p>
                <p>Votes: {post.voteScore}</p>
                <p>Category: {post.category}</p>
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