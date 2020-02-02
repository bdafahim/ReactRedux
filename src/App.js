import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import Postfoorm from "./components/Postfoorm";
import store from "./store";
import Comments from "./components/Comments";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Postfoorm />
                        /<hr />
                        <Comments />
                        <hr />
                        <Posts />
                        <hr />
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </Provider>
        );
    }
}

export default App;
