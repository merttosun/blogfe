import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PostsProvider } from "./contexts/PostsContext";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </div>
  );
}

export default App;
