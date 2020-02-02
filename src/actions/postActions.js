import { FETCH_POSTS, NEW_POST, FETCH_COMMENTS, FETCH_ALBUMS } from "./types";

export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const createPost = postData => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post =>
            dispatch({
                type: NEW_POST,
                payload: post
            })
        );
};

export const fetchComments = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(comment =>
            dispatch({
                type: FETCH_COMMENTS,
                payload: comment
            })
        );
};

export const fetchAlbums = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(albums =>
            dispatch({
                type: FETCH_ALBUMS,
                payload: albums
            })
        );
};
