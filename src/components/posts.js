import React from 'react';

import { connect } from 'react-redux';

import { PropTypes } from 'prop-types';

import { fetchAllPosts } from '../redux/actions/posts';

import Post from './common/post/post';


class Posts extends React.Component {

    static propTypes = {
        posts: PropTypes.array.isRequired
    }

    state = {
        posts: []
    }

    componentDidMount () {
      this.props.getAllPosts();
      
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            posts: nextProps.posts.sort((a, b) => b.voteScore - a.voteScore)
        });
    }
    

    render () {

        let { posts } = this.state;

        console.log(posts)

        return (
            <div>
                {posts.map((post, index) => <Post key={post.id} post={post}/>)}
                
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