import React from 'react';

import { connect } from 'react-redux';
import { getPost, editSinglePost } from '../../redux/actions/posts';

class EditPost extends React.Component {


    state = {
        title: '',
        body: ''
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

    }

    componentDidMount () {
        this.props.getPost (this.props.postId);
    }

    componentWillReceiveProps (nextProps) {

        let { title, body, id } = nextProps.post?nextProps.post:null;

        this.setState({
            title,
            body
        })
    }


    render () {

        let { categories } = this.props;


        return (
            
            <div>
                
                <div>
                    <input placeholder="Title" onChange={this.onChange} type="text" id="title" value={this.state.title} />
                </div>
                <div>
                    <textarea onChange={this.onChange} id="body" value={this.state.body} />
                </div>
                <div>
                    <a onClick={this.handleSubmit} href="">Edit</a>
                </div>
            </div>
           
        );
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