import React from 'react';

class Post extends React.Component {

    render () {
        return (
            <div>
                {this.props.path}
            </div>
        )
    }
}

export default Post;