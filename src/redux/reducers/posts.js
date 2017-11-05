import { POSTS_RECEIVED } from '../action_types';

const posts = (posts=[], action) => {
    switch(action.type) {
        case POSTS_RECEIVED:
            return Object.assign([], posts, [...action.data]);
        
            default:
                return posts;
    }
}

export default posts;