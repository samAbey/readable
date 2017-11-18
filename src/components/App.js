import React, { Component } from 'react';
import './App.css';

import Header from './common/header/header';
import Categories from './common/categories/categories';
import Posts from './posts';

import { PropTypes } from 'prop-types';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

class App extends Component {

  static propTypes = {
    categoryPaths: PropTypes.array.isRequired
  }

  render() {

    const { categoryPaths } = this.props;

    return (

      <Router>
        <div>
          
          <Header />
          <Categories />

              <Route 
                exact
                path="/"
                render={() => <Posts />}
              />
              
              

        </div>

      </Router>
    );
  }
}

const mapStateToProps = ({categories}) => {

  let categoryPaths = [];

  for (let cat of categories) {
    categoryPaths.push(cat.path);
  }

  return {
    categoryPaths
  }
}

export default connect(mapStateToProps, null) (App);
