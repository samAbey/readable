import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { addCommentToPost, getComments, editSingleComment, deleteComment } from '../../../redux/actions/comments';

import AddComment from './add-comment';

class Comments extends React.Component {


    state = {
        editCommentValues: {
            author: false,
            body: false,
            id: false
        },
        mode: 'add'
    }
    
    addComment = (comment) => {

        let { body } = comment;

        if (this.state.mode==='add') {
            this.props.addComment(comment)
        } else if (this.state.mode==='edit') {
            this.props.editComment(this.state.commentId, {body, timestamp: Date.now()});
            this.props.getComments(this.props.postid);
        }
    }

    deleteComment = (id) => {
        this.props.deleteComment(id);
    }

    editComment = (comment) => {
        this.setState({
            editCommentValues: comment,
            mode: 'edit',
            commentId: comment.id
        })
    }

    changeMode = () => {
        this.setState({
            mode: 'add'
        })
    }


    render () {

        let { comments } = this.props;
        

        return (
            <div>
            <ul>
                {comments?comments.map((comment, index)=> {
                    return (
                        !comment.deleted?

                        <div key={comment.id}>
                            <p >{comment.body}</p>
                            <span>By {comment.author} </span><span>{comment.voteScore} Thumbs up</span>
                            <a href="" onClick={(event) => {
                                event.preventDefault ();
                                this.editComment (comment);
                            }}>Edit</a>
                            <a href="#" onClick={(event) => {
                                event.preventDefault ();
                                this.deleteComment(comment.id)
                            }} >Delete</a>
                        </div>
                        
                        
                        :null
                    )
                }):'No comments yet!'}
            </ul>
            {this.state.mode === 'edit'?
                <AddComment 
                    postid={this.props.postid} 
                    addComment={this.addComment} 
                    editCommentValues={this.state.editCommentValues}
                    mode={this.state.mode}
                    changeMode={this.changeMode}
                    deleteComment={this.deleteComment}
                />:
                <AddComment 
                    postid={this.props.postid} 
                    addComment={this.addComment}
                    mode={this.state.mode}
                    editCommentValues={{
                        author: false,
                        body: false,
                        id: false
                    }}
                    changeMode={this.changeMode}
                    deleteComment={this.deleteComment}
                />
            }
            </div>
        )
    }
}


const mapStateToProps = state => {
    let { comments } = state;
    return  {
        comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: post => dispatch(addCommentToPost(post)),
        getComments: id => dispatch(getComments(id)),
        editComment: (id, comment) => dispatch(editSingleComment(id, comment)),
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Comments);