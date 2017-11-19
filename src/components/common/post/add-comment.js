import React from 'react';

import { connect } from 'react-redux';

import { addCommentToPost, getComments } from '../../../redux/actions/comments';
import { getPost } from '../../../redux/actions/posts';
import uuid from 'uuid';


class AddComment extends React.Component {

    state = {
        body: '',
        author: ''
    }

    handleChange = (event) => {

        const { id, value } = event.target;

        this.setState({
            [id]: value
        });

    }


    addComment = event => {
        event.preventDefault ();

        this.props.addComment({
            id: uuid(Date.now()),
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            parentId: this.props.postid
        });

        this.refs.body.value = '';
        this.refs.author.value = '';

        this.props.getComments(this.props.postid)
    }

    

    render () {
        return (
            <div>
                <div>
                    <input ref="body" onChange={this.handleChange} id="body" placeholder="Comment" type="text" value={this.props.body} />
                </div>
                <div>
                    <input ref="author" onChange={this.handleChange} id="author" placeholder="Your Name" type="text" value={this.props.author} />
                </div>
                <div>
                    <a href="" onClick={this.addComment}>Add comment</a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: post => dispatch(addCommentToPost(post)),
        getComments: id => dispatch(getComments(id)),
        getPost: id => dispatch(getPost(id))
    }
}

export default connect (null, mapDispatchToProps)(AddComment);