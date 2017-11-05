

const URL = 'http://localhost:3001'

const HEADERS = {
    'Authorization': 'hsidy8s7d8ysdihs9du898s7ydh9'
}

export const getCategories = () => {
    return fetch(`${URL}/categories`, {headers: HEADERS}).then(res=>res.json())
}

export const getAllPosts = () => {
    return fetch(`${URL}/posts`, {headers: HEADERS}).then(res=>res.json())
}