import { COMMENTS_RECEIVED } from '../action_types';

const commentsReducer = (state=[], action) => {

    switch (action.type) {
        case COMMENTS_RECEIVED:
            return Object.assign([], [...action.data]);

        default:
            return state;
    }
}

export default commentsReducer;