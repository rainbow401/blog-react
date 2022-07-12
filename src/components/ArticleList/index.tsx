import Article from "./Article";
import {useState} from "react";

import './index.css'

const ArticleList = () => {
    const articleList = [{id: 11, title: 'nihao1', content: 'sdsadsadsadas1'},{id: 22, title: 'nihao2', content: 'sdsadsadsadas2'},{id: 33, title: 'nihao3', content: 'sdsadsadsadas3'}]
    const [data] = useState(articleList);
    return (
        <div key={0} className={'article-list'}>
            {
                data.map((e: any, index: number) => {
                    return (
                        <Article key={e.id} title={e.title} content={e.content}></Article>
                    )
                })
            }
        </div>
    );
};
export default ArticleList;