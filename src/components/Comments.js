import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions/postActions";

class Comments extends Component {
    componentWillMount() {
        this.props.fetchComments();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const commentItems = this.props.posts.map(comment => (
            <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Comments</h1>
                {commentItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchComments })(Comments);
