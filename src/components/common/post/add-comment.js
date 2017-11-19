import React from 'react';

import { connect } from 'react-redux';

import { getComments } from '../../../redux/actions/comments';
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

        let comment = {
            id: uuid(Date.now()),
            timestamp: Date.now(),
            body: this.state.body,
            author: this.state.author,
            parentId: this.props.postid
        };

        this.refs.body.value = '';
        this.refs.author.value = '';

        return comment
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
                    <a href="" onClick={event => {
                        this.props.addComment(this.constComment());
                        event.preventDefault ()
                        }}>Add comment</a>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
       
        getComments: id => dispatch(getComments(id))
    }
}

export default connect (null, mapDispatchToProps)(AddComment);