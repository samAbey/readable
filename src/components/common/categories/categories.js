import React from 'react';
import * as styles from './categories.css';

const Categories = () => {
    

    return (
        <nav {...styles.navbarStyles}>
            <ul {...styles.listStyles}>
                <li>Cat 1</li>
                <li>Cat 2</li>
                <li>Cat 3</li>        
            </ul>
        </nav>
    )
}

export default Categories;