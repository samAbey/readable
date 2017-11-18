import React from 'react';
import { connect } from 'react-redux';

class NewPost extends React.Component {

    render () {
        return (
            <div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div>
                    <label htmlFor="title">Post</label>
                    <textarea id="title" />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" />
                </div>
                <div>
                    <a href="#">Submit</a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    return {

    }
};

const mapStateToProps = () => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (NewPost);