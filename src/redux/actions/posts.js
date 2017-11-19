import { POSTS_RECEIVED, 
    FETCH_POSTS, 
    CREATE_NEW_POST, 
    NEW_POST_CREATED, 
    GET_POST, 
    POST_DETAILS_RECEIVED,
    POST_EDITED,
    EDIT_POST,
    DELETE_POST,
    POST_DELETED } from '../action_types';

import { getAllPosts, newPost, fetchPost, editPost, deletePost } from '../../api/api';

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

export const editSinglePost = (post, id) => {
    return dispatch => {
        
        dispatch ({
            type: EDIT_POST
        });
        
        editPost(post, id).then (data => {
            dispatch ({
                type: POST_EDITED,
                data
            });
        });
    }
}

export const deleteSinglePost = (id) => {
    return dispatch => {
        
        dispatch ({
            type: DELETE_POST
        });
        
        deletePost(id).then (data => {
            dispatch ({
                type: POST_DELETED,
                data
            });
        });
    }
}