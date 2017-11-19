import React from 'react';
import { PropTypes } from 'prop-types';



class Comments extends React.Component {


    render () {

        let { comments } = this.props;
        

        return (
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
        )
    }
}


export default Comments