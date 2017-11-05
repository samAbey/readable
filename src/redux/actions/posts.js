import { FETCH_POSTS } from '../action_types';
import { POSTS_RECEIVED } from '../action_types';

import { getAllPosts } from '../../api/api';

export const fetchAllPosts = () => {
    return dispatch => {
        dispatch({
            type: FETCH_POSTS
        })

        getAllPosts().then(data => {
            dispatch ({
                type: POSTS_RECEIVED,
                data
            })
        })
    }
}