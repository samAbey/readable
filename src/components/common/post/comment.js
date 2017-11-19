import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

import { addCommentToPost, getComments } from '../../../redux/actions/comments';

import AddComment from './add-comment';

class Comments extends React.Component {

    
    addComment = (comment) => {
        console.log(comment, 'aaaa')
        this.props.addComment(comment)
        this.props.getComments(this.props.postid)
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
                        </div>
                        
                        :<div>This comment has been deleted'</div>
                    )
                }):null}
            </ul>
            <AddComment postid={this.props.postid} addComment={this.addComment} />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addComment: post => dispatch(addCommentToPost(post)),
        getComments: id => dispatch(getComments(id))
    }
}

export default connect (null, mapDispatchToProps)(Comments)