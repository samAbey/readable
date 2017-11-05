import { getCategories } from '../../api/api';

import { CATEGORIES_RECEIVED, FETCH_CATEGORIES } from '../action_types';

export const fetchCategories = () => {
    return dispatch => {

        dispatch ({
            type: FETCH_CATEGORIES
        });

        getCategories().then(data => {
            dispatch ({
                type: CATEGORIES_RECEIVED,
                data
            })
        })

    }
}