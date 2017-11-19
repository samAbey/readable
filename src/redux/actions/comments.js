import { fetchComments } from '../../api/api';

import{ FETCH_COMMENTS, COMMENTS_RECEIVED } from '../action_types';


export const getComments = id => {


    return dispatch => {
        dispatch ({
            type: FETCH_COMMENTS
        });

        fetchComments(id).then (data => {

            dispatch({
                type: COMMENTS_RECEIVED,
                data
            });
        });
    }

}
