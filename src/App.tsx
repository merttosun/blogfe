import React from "react";
import NavBar from './components/NavBar/NavBar'
import "./App.css";
import {PostsProvider} from "./contexts/PostsContext";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <PostsProvider>
                <Posts/>
            </PostsProvider>
        </div>
    );
}

export default App;
