import { POSTS_RECEIVED } from '../action_types';

const postsReducer = (posts=[], action) => {
    switch(action.type) {
        case POSTS_RECEIVED:
            return Object.assign([], [...action.data]);
        
            default:
                return posts;
    }
}

export default postsReducer;