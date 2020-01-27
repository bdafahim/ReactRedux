import { FETCH_POSTS, NEW_POST, FETCH_COMMENTS } from "./types";

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
  console.log("action called");
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
  console.log("action comments called");
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(comment =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comment
      })
    );
};
