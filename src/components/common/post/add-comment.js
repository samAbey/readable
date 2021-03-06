import React from 'react';
import { commentsWrapperStyles } from './add-comment.css';

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


    constComment = () => {

        let comment = this.props.mode==='add'?{
            id: uuid(Date.now()),
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            parentId: this.props.postid
        }:{body: this.state.body};
        

        this.refs.body.value = '';
        this.refs.author.value = '';

        this.setState({
            body: '',
            author: ''
        });

        return comment
    }

    componentWillReceiveProps (nextProps) {

        if (nextProps.mode==='edit') {
            this.setState({
                body: nextProps.editCommentValues.body,
                author: nextProps.editCommentValues.author
            })
            this.refs.body.value = nextProps.editCommentValues.body;
            this.refs.author.value = nextProps.editCommentValues.author;
        } else if (nextProps.mode==='add') {
            this.setState({
                body:'',
                author: ''
            })
            this.refs.body.value = '';
            this.refs.author.value = '';
        }

    } 

    

    render () {
        return (
            <div {...commentsWrapperStyles}>
                <div>
                    <input ref="body" onChange={this.handleChange} id="body" placeholder="Comment" type="text" value={this.props.body} />
                </div>
                <div style={{display: this.props.mode==='add'?'block':'none'}}>
                    <input ref="author" onChange={this.handleChange} id="author" placeholder="Your Name" type="text" value={this.props.author} />
                </div>
                <div>
                    <a href="" onClick={event => {
                        this.props.addComment(this.constComment());
                        this.props.changeMode();
                        event.preventDefault ();
                        }}>{this.props.mode==='add'?'Add':'Edit'} comment</a>
                    
                </div>
            </div>
        )
    }
}


export default AddComment;