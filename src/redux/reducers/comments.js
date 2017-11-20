import { COMMENTS_RECEIVED, COMMENT_ADDED } from '../action_types';

const commentsReducer = (state=[], action) => {

    switch (action.type) {
        case COMMENTS_RECEIVED:
            return [...action.data];

        case COMMENT_ADDED:
           
            return [action.data, ...state]

        default:
            return state;
    }
}

export default commentsReducer;