import React, { Component } from 'react';
import './App.css';

import Header from './common/header/header';
import Categories from './common/categories/categories';
import Posts from './posts';
import NewPost from './new-post';

import { PropTypes } from 'prop-types';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
            path="/new"
            render={() => <NewPost />}
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
