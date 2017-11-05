import React from 'react';

import { PropTypes } from 'prop-types';

class Post extends React.Component {

    static propTypes = {
        path: PropTypes.string.isRequired
    };

    render () {
        return (
            <div>
                {this.props.path}
            </div>
        )
    }
}


export default Post;