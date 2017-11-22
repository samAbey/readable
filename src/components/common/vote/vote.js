import React from 'react';

import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down';

class Vote extends React.Component {

    render () {
        return (
            <div>
                <span onClick={()=>{this.props.upVote(this.props.id)}}><FaThumbsUp /></span>
                <span>{this.props.voteScore}</span>
                <span onClick={()=>{this.props.downVote(this.props.id)}}><FaThumbsDown /></span>
            </div>
        );
    }
}

export default Vote;