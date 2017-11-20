import { COMMENTS_RECEIVED, COMMENT_ADDED, COMMENT_DELETED } from '../action_types';

const commentsReducer = (state=[], action) => {

    switch (action.type) {
        case COMMENTS_RECEIVED:
            return [...action.data];

        case COMMENT_ADDED:
            return [action.data, ...state];

        case COMMENT_DELETED:

            
            return state.filter((comment) => {
                return comment.id !== action.data.id;
            });

        default:
            return state;
    }
}

export default commentsReducer;