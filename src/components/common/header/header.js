import React from 'react';
import * as styles from './header.css';

import { Link } from 'react-router-dom';


const Header = () => {
    return <header {...styles.headerStyles}>
        <h1 style={{display: 'inline-block'}}><Link to="/">Readable</Link></h1>
        <Link to="/post" style={{textDecoration: 'none', padding: '10px 30px', marginLeft: '20px', color: '#fff', background: 'tomato'}}>+</Link>
    </header>
}

export default Header;