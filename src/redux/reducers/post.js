import { POST_DETAILS_RECEIVED } from '../action_types';

const post = (post={}, action) => {

    switch(action.type) {

        case POST_DETAILS_RECEIVED:
            return Object.assign({}, post, {...action.data});
        
            default:
                return post;
    }
}

export default post;