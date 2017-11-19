import { combineReducers } from 'redux';

import categoriesReducer from './categories';
import postsReducer from './posts';
import postReducer from './post';
import commentsReducer from './comments';

export default combineReducers ({
    categories: categoriesReducer,
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer
})