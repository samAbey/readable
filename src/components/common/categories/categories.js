import React from 'react';
import * as styles from './categories.css';

import { connect } from 'react-redux';

import { fetchCategories } from '../../../redux/actions/categories';

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
                    {this.state.categories.map((item, index) => <li>{item.name}</li>)}        
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