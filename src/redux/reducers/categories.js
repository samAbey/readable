import { CATEGORIES_RECEIVED } from '../action_types';

const categories = (state=[], action) => {
    switch (action.type) {
        case CATEGORIES_RECEIVED:
            return action.data.categories;

        default:
            return state
    }
}

export default categories;