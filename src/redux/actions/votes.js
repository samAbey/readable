import { votePost } from '../../api/api';

import { VOTE_POST, POST_VOTED } from '../action_types';

export const voteSinglePost = (id, vote) => {
    return dispatch => {

        dispatch ({
            type: VOTE_POST
        });

        votePost(id, vote).then (response => response.json()).then(data => {
            dispatch({
                type: POST_VOTED,
                data
            });
        });
    }
} 