import React from 'react';
import * as styles from './categories.css';

import { connect } from 'react-redux';

import { fetchCategories } from '../../../redux/actions/categories';

import { Link } from 'react-router-dom';

class Categories extends React.Component {

    state = {
        categories: []
    }

    componentDidMount = () => {
      this.props.getCategories()
    }
    

    render() {
        return(
            <nav {...styles.navbarStyles}>
                <ul {...styles.listStyles}>
                    {this.props.categories.map((item, index) => <li key={index}><Link to={item.path}>{item.name}</Link></li>)}        
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = ({categories}) => {
    return {
        categories: categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => { dispatch (fetchCategories())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Categories);