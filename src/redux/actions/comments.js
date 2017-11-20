import { fetchComments, addComment, editComment, deleteCommentfromPost } from '../../api/api';

import { 
    FETCH_COMMENTS, 
    COMMENTS_RECEIVED, 
    ADD_COMMENT, 
    COMMENT_ADDED, 
    EDIT_COMMENT, 
    COMMENT_EDITED,
    DELETE_COMMENT, 
    COMMENT_DELETED
} from '../action_types';


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

export const addCommentToPost = (comment) => {

   return dispatch => {
        dispatch ({
            type: ADD_COMMENT
        });

        addComment (comment).then(response=>response.json()).then((data) => {
            console.log('act', data)
            
            dispatch ({
                type: COMMENT_ADDED,
                data
            });
        });
   }


}

export const editSingleComment = (id, comment) => {
    return dispatch => {
        dispatch ({
            type: EDIT_COMMENT
        });

        editComment (id, comment).then(data => {
            
            dispatch ({
                type: COMMENT_EDITED,
                data
            });
        });
    }
}

export const deleteComment = (id) => {
    return dispatch => {
        dispatch ({
            type: DELETE_COMMENT
        });

        deleteCommentfromPost (id).then(response=>response.json()).then(data=> {
            dispatch ({
                type: COMMENT_DELETED,
                data
            });
        });
    }
}