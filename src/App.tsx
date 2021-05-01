import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { PostsProvider } from "./contexts/PostsContext";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <PostsProvider>
          <Route path="/" exact component={Posts} />
        </PostsProvider>
        <Route path="/post/:id" exact component={PostDetail} />
      </Router>
    </div>
  );
}

export default App;
