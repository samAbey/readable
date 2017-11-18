import { POSTS_RECEIVED, FETCH_POSTS, CREATE_NEW_POST, NEW_POST_CREATED } from '../action_types';

import { getAllPosts, newPost } from '../../api/api';

export const fetchAllPosts = () => {
    return dispatch => {
        dispatch ({
            type: FETCH_POSTS
        });

        getAllPosts().then(data => {
            dispatch ({
                type: POSTS_RECEIVED,
                data
            });
        });
    }
}

export const createNewPost = post => {
    return dispatch => {

        dispatch ({
            type: CREATE_NEW_POST
        });

        newPost(post).then(data => {
            dispatch ({
                type: NEW_POST_CREATED,
                data
            });
        });

    }
}