import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import moment from 'moment';

import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { getPost } from '../../../redux/actions/posts';
import { getComments } from '../../../redux/actions/comments';

import { postDetailsWrapperStyles } from './post-details.css';
import Comments from './comment';
import AddComment from './add-comment';
import { deleteSinglePost, fetchAllPosts } from '../../../redux/actions/posts';

class PostDetails extends React.Component {

    state = {
        redirect: false
    }

    static propTypes = {
        postid: PropTypes.string.isRequired
    }

    deletePost = (event) => {
        event.preventDefault();
        this.props.deletePost(this.props.postid);
        this.props.getAllPosts()
        this.setState({
            redirect: true
        });
    }

    componentDidMount () {
        this.props.getPost(this.props.postid);
        this.props.getComments(this.props.postid);
    }

    render () {
        let { post } = this.props;
        return this.state.redirect?<Redirect to="/" push={true} />:(
            <div {...postDetailsWrapperStyles}>
                <h1>{post.title}</h1>
                <span>By {post.author} - {moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')} posted under <span style={{color: 'tomato'}}>{post.category}</span></span>
                <p className="post-body-text">{post.body}</p>
                <p>Votes: {post.voteScore}</p>
                <p>{post.commentCount?`${post.commentCount} comments`:'No comments yet'}</p>
                <div>
                    {this.props.post?<Comments postid={this.props.postid} comments={this.props.comments}/>:null}
                </div>
                
                <div>
                    <Link to={{
                        pathname: `/post/edit/${post.id}`
                    }}>Edit</Link>
                    <a href="" onClick={this.deletePost}>Delete</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({post, comments}) => {

    comments = comments.sort ((a, b) => {
        return b.voteScore - a.voteScore;
    });

    return {
        post,
        comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: id => dispatch(getPost(id)),
        getComments: id => dispatch(getComments(id)),
        deletePost: id => dispatch(deleteSinglePost(id)),
        getAllPosts: () => dispatch(fetchAllPosts())
    }
}

export default withRouter(connect (mapStateToProps, mapDispatchToProps) (PostDetails));