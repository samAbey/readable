import { getCategories } from '../../api/api';

export const fetchCategories = () => {
    return dispatch => {

        dispatch ({
            type: 'GET_CATEGORIES'
        });

        getCategories().then(data => {
            dispatch ({
                type: 'DATA_RECEIVED',
                data
            })
        })

    }
}