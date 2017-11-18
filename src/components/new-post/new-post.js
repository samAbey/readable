import React from 'react';
import { connect } from 'react-redux';

class NewPost extends React.Component {

    state = {
        title: '',
        post: '',
        author: ''

    }
    

    render () {

        let { title, author, post } = this.state;

        return (
            <div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} />
                </div>
                <div>
                    <label htmlFor="post">Post</label>
                    <textarea id="title" value={post} />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" value={author} />
                </div>
                <div>
                    <a href="#">Submit</a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
};

const mapStateToProps = state => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (NewPost);