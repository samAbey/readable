const categories = (state=[], action) => {
    switch (action.type) {
        case 'DATA_RECEIVED':
            return action.data.categories;

        default:
            return state
    }
}

export default categories;