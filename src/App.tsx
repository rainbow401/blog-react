import "./global.css"
import './App.css';

import Header from "./components/Header";
import Main from "./components/Main";
import ArticleList from "./components/ArticleList";
import * as React from "react";

function App() {

    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <ArticleList></ArticleList>
        </div>
    );
}

export default App;
