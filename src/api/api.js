

const URL = 'http://localhost:3001'

const HEADERS = {
    'Authorization': 'hsidy8s7d8ysdihs9du898s7ydh9',
    'Accept': 'application/json'
}

export const getCategories = () => {
    return fetch(`${URL}/categories`, {headers: HEADERS}).then(res=>res.json())
}

export const getAllPosts = () => {
    return fetch(`${URL}/posts`, {headers: HEADERS}).then(res=>res.json())
}

export const newPost = (post) => {
    return fetch(
        `${URL}/posts`, {
            method: 'POST',
            headers: { ...HEADERS,  'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        }
    )
}