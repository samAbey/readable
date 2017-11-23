import React from 'react';
import { editPostWrapperStyles } from './edit-post.css';

import { connect } from 'react-redux';
import { getPost, editSinglePost } from '../../redux/actions/posts';

import { Redirect } from 'react-router-dom';

class EditPost extends React.Component {


    state = {
        title: '',
        body: '',
        redirect: false
    }

    onChange = event => {
        
        let { id, value } = event.target;
        
        this.setState({
            [id]: value
        })

        
    }

    handleSubmit = (event) => {

        event.preventDefault();
        this.props.editPost(this.state, this.props.postId);


        this.setState ({
            redirect: true
        })

    }

    componentDidMount () {
        this.props.getPost (this.props.postId);
    }

    componentWillReceiveProps (nextProps) {

        let { title, body, id } = nextProps.post?nextProps.post:null;

        this.setState({
            title,
            body
        });
    }


    render () {

        let { categories } = this.props;


        return !this.state.redirect?(
            
            <div {...editPostWrapperStyles}>
                
                <div>
                    <input placeholder="Title" onChange={this.onChange} type="text" id="title" value={this.state.title} />
                </div>
                <div>
                    <textarea onChange={this.onChange} id="body" value={this.state.body} />
                </div>
                <div className="edit-post-link-wrapper">
                    <a onClick={this.handleSubmit} href="">Edit</a>
                </div>
            </div>
           
        ): <Redirect to={`/post/${this.props.postId}`}/>;
    }
}

const mapStateToProps = state => {

    let { post } = state;
    return {
        post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: id => dispatch(getPost(id)),
        editPost: (post, id) => dispatch(editSinglePost(post, id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (EditPost);