import { POST_DETAILS_RECEIVED, COMMENT_ADDED } from '../action_types';

const postReducer = (post={}, action) => {

    switch(action.type) {

        case POST_DETAILS_RECEIVED:
            return Object.assign({}, post, {...action.data});
        
        case COMMENT_ADDED:
            return Object.assign({}, post, { commentCount: post.commentCount+1});
        
            default:
                return post;
    }
}

export default postReducer;