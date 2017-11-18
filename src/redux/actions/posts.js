import { POSTS_RECEIVED, FETCH_POSTS, CREATE_NEW_POST, NEW_POST_CREATED, GET_POST, POST_DETAILS_RECEIVED } from '../action_types';

import { getAllPosts, newPost, fetchPost } from '../../api/api';

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

export const getPost = id => {
    return dispatch => {

        dispatch ({
            type: GET_POST
        });

        fetchPost(id).then(data => {
            dispatch ({
                type: POST_DETAILS_RECEIVED,
                data
            });
        });

    }
}