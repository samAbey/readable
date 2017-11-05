import React from 'react';

import { connect } from 'react-redux';

import { PropTypes } from 'prop-types';

import { fetchAllPosts } from '../redux/actions/posts';

class Posts extends React.Component {

    static propTypes = {
        posts: PropTypes.array.isRequired
    }

    componentDidMount = () => {
      this.props.getAllPosts();
    }
    

    render () {

        let { posts } = this.props;

        return (
            <div>
                {posts.map((post, index) => <div key={post.id}>{post.title}</div>)}
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllPosts: () => {dispatch(fetchAllPosts())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts);