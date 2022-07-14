import "./global.css"
import './App.css';

import Header from "./components/Header";
import Main from "./components/Main";
import ArticleList from "./components/ArticleList";
import * as React from "react";
import Other from "./components/Other";

function App() {

    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <div className={"card-group"}>
                <ArticleList></ArticleList>
                <Other></Other>
            </div>
        </div>
    );
}

export default App;
