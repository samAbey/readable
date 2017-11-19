import React, { Component } from 'react';
import './App.css';

import Header from './common/header/header';
import Categories from './common/categories/categories';
import Posts from './posts';
import NewPost from './new-post/new-post';
import PostDetails from './common/post/post-details';

import { PropTypes } from 'prop-types';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

class App extends Component {

  static propTypes = {
    categories: PropTypes.array.isRequired
  }

  render() {

    const { categories } = this.props;

    return (

      <Router>
        <div>
          
          <Header />
          <Categories />
          

          <Route
            exact
            path="/post"
            render={() => <NewPost />}
          />

          <Route
            exact
            path="/post/:postid"
            render={(props) => <PostDetails postid={props.match.params.postid}/>}
          />
          
          <Route 
            exact
            path="/"
            render={() => <Posts cat="all"/>}
          />

          {categories.map(({path, name}, index) => (
            <Route
              exact
              path={`/${path}`}
              render={()=><Posts cat={name}/>}
              key={path}
            />
          ))}
              
              

        </div>

      </Router>
    );
  }
}

const mapStateToProps = ({categories}) => {

  return {
    categories
  }
}

export default connect(mapStateToProps, null) (App);
