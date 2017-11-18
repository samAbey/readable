import React from 'react';
import * as styles from './categories.css';

import { connect } from 'react-redux';

import { fetchCategories } from '../../../redux/actions/categories';

import { Link } from 'react-router-dom';

import { PropTypes } from 'prop-types';

class Categories extends React.Component {

    static propTypes = {
        categories: PropTypes.array.isRequired
    }


    componentDidMount = () => {
      this.props.getCategories()
    }
    

    render() {

        const { categories } = this.props;

        return(
            <nav {...styles.navbarStyles}>
                <ul {...styles.listStyles}>
                    <li key="all-cats"><Link to="/"> All</Link></li>
                    {categories?categories.map((item, index) => <li key={index}><Link to={item.path}>{item.name}</Link></li>):null}        
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