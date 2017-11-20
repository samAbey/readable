import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { addCommentToPost, getComments, editSingleComment } from '../../../redux/actions/comments';

import AddComment from './add-comment';
import { comment } from '../../../../../../../../../Users/sameera/Library/Caches/typescript/2.6/node_modules/postcss';

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
        console.log(comment);
        let { body } = comment;
        if (this.state.mode==='add') {
            this.props.addComment(comment)
        } else if (this.state.mode==='edit') {
            this.props.editComment(this.state.commentId, {body, timestamp: Date.now()});
        }
        
        this.props.getComments(this.props.postid)
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
                        </div>
                        
                        
                        :<div>This comment has been deleted'</div>
                    )
                }):null}
            </ul>
            {this.state.mode === 'edit'?
                <AddComment 
                    postid={this.props.postid} 
                    addComment={this.addComment} 
                    editCommentValues={this.state.editCommentValues}
                    mode={this.state.mode}
                    changeMode={this.changeMode}
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
                />
            }
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addComment: post => dispatch(addCommentToPost(post)),
        getComments: id => dispatch(getComments(id)),
        editComment: (id, comment) => dispatch(editSingleComment(id, comment))
    }
}

export default connect (null, mapDispatchToProps)(Comments)