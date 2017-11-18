import React from 'react';

import { connect } from 'react-redux';

import { PropTypes } from 'prop-types';

import { fetchAllPosts } from '../redux/actions/posts';

import Post from './common/post/post';
import SortBar from './common/sort/sortbar';


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

        // By default sorty by vote (Highest first)
        this.setState({
            posts: nextProps.posts.sort((a, b) => b.voteScore - a.voteScore)
        });
    }


    sortByVoteUp = () => {
        this.setState({
            posts: this.state.posts.sort((a, b) => b.voteScore - a.voteScore)
        });
    }

    sortByVoteDown = () => {
        this.setState({
            posts: this.state.posts.sort((a, b) => a.voteScore - b.voteScore)
        });
    }

    sortByTimestampUp = () => {
        this.setState({
            posts: this.state.posts.sort((a, b) => b.timestamp - a.timestamp)
        });
    }

    sortByTimestampDown = () => {
        this.setState({
            posts: this.state.posts.sort((a, b) => a.timestamp - b.timestamp)
        });
    }
    

    render () {

        let { posts } = this.state;

        return (
            <div>

                <SortBar 
                    voteUp={this.sortByVoteUp} 
                    voteDown={this.sortByVoteDown}
                    timestampUp={this.sortByTimestampUp}
                    timestampDown={this.sortByTimestampDown}
                />


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