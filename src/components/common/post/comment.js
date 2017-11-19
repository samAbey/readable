import React from 'react';
import { PropTypes } from 'prop-types';



class Comments extends React.Component {


    render () {

        let { comments } = this.props;
        console.log(comments)
        return (
            <ul>
                {comments?comments.map((comment, index)=> {
                    return (
                        !comment.deleted?
                        <div key={comment.id}>
                            {<p >{comment.body}</p>}
                        </div>:'This comment has been deleted'
                    )
                }):null}
            </ul>
        )
    }
}


export default Comments