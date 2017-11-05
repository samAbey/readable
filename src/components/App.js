import React, { Component } from 'react';
import './App.css';

import Header from './common/header/header';
import Categories from './common/categories/categories';
import Posts from './posts';
import Post from './post';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

class App extends Component {

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
              
              {categoryPaths.map((path, index) => (
                <Route
                  exact
                  path={`/${path}`}
                  render={()=><Post path={path}/>}
                  key={path}
                />
              ))}

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
