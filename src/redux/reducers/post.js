import { POST_DETAILS_RECEIVED, COMMENT_ADDED, POST_VOTED, COMMENT_DELETED } from '../action_types';

const postReducer = (post={}, action) => {

    switch(action.type) {

        case POST_DETAILS_RECEIVED:
            return Object.assign({}, post, {...action.data});
        
        case COMMENT_ADDED:
            return Object.assign({}, post, { commentCount: post.commentCount+1});
        
        case COMMENT_DELETED:
            return Object.assign({}, post, { commentCount: post.commentCount-1});
        
        case POST_VOTED:
            return Object.assign({}, post, {...action.data});
        
        default:
            return post;
    }
}

export default postReducer;