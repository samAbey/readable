import React from 'react';
import { connect } from 'react-redux';

import { createNewPost } from '../../redux/actions/posts';

import uuid from 'uuid';

import { newPostStyles } from './new-post.css';

class NewPost extends React.Component {

    state = {
        title: '',
        post: '',
        author: ''

    }

    onChange = event => {

        let { id, value } = event.target;
        
        this.setState({
            [id]: value
        })

        
    }
    
    handleSubmit = (event) => {

        event.preventDefault ();

        let {title, post, author} = this.state;
        this.props.createNewPost({
            title,
            id: uuid(Date.now()),
            timestamp: Date.now(),
            body: post,
            author,
            category: 'redux'
        });
    }

    render () {

        return (
            <div {...newPostStyles}>
                <div>
                    <input placeholder="Title" onChange={this.onChange} type="text" id="title" value={this.state.value} />
                </div>
                <div>
                    <textarea onChange={this.onChange} id="post" value={this.state.post} />
                </div>
                <div>
                    <input placeholder="Your name"  onChange={this.onChange} type="text" id="author" value={this.state.author} />
                </div>
                <div>
                    <a onClick={this.handleSubmit} href="">Submit</a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createNewPost: post => {dispatch(createNewPost(post))}
    }
};

const mapStateToProps = state => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (NewPost);