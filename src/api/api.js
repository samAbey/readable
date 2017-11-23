

const URL = 'http://localhost:3001'

const HEADERS = {
    'Authorization': 'hsidy8s7d8ysdihs9du898s7ydh9',
    'Accept': 'application/json'
}

export const getCategories = () => {
    return fetch (`${URL}/categories`, {headers: HEADERS}).then(res=>res.json())
}

export const getAllPosts = () => {
    return fetch (`${URL}/posts`, {headers: HEADERS}).then(res=>res.json())
}

export const newPost = (post) => {
    return fetch (
        `${URL}/posts`, {
            method: 'POST',
            headers: { ...HEADERS,  'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        }
    )
}

export const fetchPost = id => {
    return fetch (`${URL}/posts/${id}`, {headers: HEADERS}).then(res=>res.json());
}

export const fetchComments = id => {
    return fetch (`${URL}/posts/${id}/comments`, {headers: HEADERS}).then(res=>res.json());
}

export const editPost = (post, id) => {
    return fetch (
        `${URL}/posts/${id}`, {
            method: 'PUT',
            headers: { ...HEADERS,  'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        }
    )
}


export const deletePost = (id) => {
    return fetch (
        `${URL}/posts/${id}`, {
            method: 'DELETE',
            headers: { ...HEADERS,  'Content-Type': 'application/json'},
            body: JSON.stringify({deleted: true, parentDeleted: true})
        }
    )
}

export const addComment = (comment) => {
    return fetch (`${URL}/comments`, {
        method: 'POST',
        headers: { ...HEADERS,  'Content-Type': 'application/json'},
        body: JSON.stringify(comment)
    });
}

export const editComment = (id, comment) => {
    return fetch (
        `${URL}/comments/${id}`, {
            method: 'PUT',
            headers: { ...HEADERS,  'Content-Type': 'application/json'},
            body: JSON.stringify(comment)
        }
    )
}

export const deleteCommentfromPost = (id) => {
    return fetch (
        `${URL}/comments/${id}`, {
            method: 'DELETE',
            headers: { ...HEADERS,  'Content-Type': 'application/json'},
            body: JSON.stringify({deleted: true})
        }
    )
}

export const votePost = (id, vote) => {

    return fetch (
        `${URL}/posts/${id}`,  {
            method: 'POST',
            headers: {...HEADERS, 'Content-Type': 'application/json'},
            body: JSON.stringify({option: vote})
        }
    );
    
}

export const voteComment = (id, vote) => {
    
    return fetch (
        `${URL}/comments/${id}`,  {
            method: 'POST',
            headers: {...HEADERS, 'Content-Type': 'application/json'},
            body: JSON.stringify({option: vote})
        }
    );
    
}