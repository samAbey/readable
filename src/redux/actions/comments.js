import { fetchComments, addComment } from '../../api/api';

import{ FETCH_COMMENTS, COMMENTS_RECEIVED, ADD_COMMENT } from '../action_types';


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

        addComment (comment).then((data) => {
            dispatch ({
                type: ADD_COMMENT,
                data
            })
        });
   }


}
