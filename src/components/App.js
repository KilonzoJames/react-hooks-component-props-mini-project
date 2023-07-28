import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


function App() {
  const blogs=blogData

  return (
    <div className="App">
     <Header name={blogs.name}/>
     <About about={blogs.about} image={blogs.image}/>
     <ArticleList posts={blogs.posts}/>
    </div>
  );
}

export default App;
