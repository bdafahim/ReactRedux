import React, { Component } from "react";
import { fetchAlbums } from "../actions/postActions";
import { connect } from "react-redux";

class Albums extends Component {
    componentWillMount() {
        this.props.fetchAlbums();
    }

    render() {
        const albumItems = this.props.posts.map(albums => (
            <div key={albums.id}>
                <h3>{albums.title}</h3>
            </div>
        ));
        return (
            <div>
                <h1>Albums</h1>
                {albumItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchAlbums })(Albums);
