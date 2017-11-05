import React, { Component } from 'react';
import './App.css';

import Header from './common/header/header';
import Categories from './common/categories/categories';

class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <Categories />

        
      </div>
    );
  }
}

export default App;
