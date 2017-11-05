import React from 'react';
import * as styles from './header.css';

import { Link } from 'react-router-dom';


const Header = () => {
    return <header {...styles.headerStyles}>
        <h1><Link to="/">Readable</Link></h1>
    </header>
}

export default Header;