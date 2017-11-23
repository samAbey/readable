import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { fetchAllPosts } from '../../redux/actions/posts';

import Post from '../common/post/post';
import SortBar from '../common/sort/sortbar';
import { postsStyles } from './posts.css';
import { withRouter } from 'react-router';


class Posts extends React.Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        cat: PropTypes.string.isRequired
    }

    state = {
        posts: []
    }

    componentDidMount () {
      this.props.getAllPosts();
      
    }

    componentWillReceiveProps (nextProps) {

        // By default sorty by vote (Highest first)

        let FilterdByCat = this.props.cat==='all'
            ? nextProps.posts
            : nextProps.posts.filter(post=>post.category === this.props.cat);

        this.setState({
            posts: FilterdByCat.sort((a, b) => b.voteScore - a.voteScore)
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
            <div {...postsStyles}>

                <SortBar 
                    voteUp={this.sortByVoteUp} 
                    voteDown={this.sortByVoteDown}
                    timestampUp={this.sortByTimestampUp}
                    timestampDown={this.sortByTimestampDown}
                />


                {posts.length?posts.map((post, index) => <Post key={post.id} post={post}/>):'No Posts Available'}
                
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Posts));