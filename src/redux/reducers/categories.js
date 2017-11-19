import { CATEGORIES_RECEIVED } from '../action_types';

const categoriesReducer = (state=[], action) => {
    switch (action.type) {
        case CATEGORIES_RECEIVED:
            return Object.assign([], state, [...action.data.categories]);

        default:
            return state
    }
}

export default categoriesReducer;