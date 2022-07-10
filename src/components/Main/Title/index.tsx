import "./index.css"
import {api} from "../../../axios/api/commonApi";
import {useEffect, useState} from "react";


const Title = () => {
    const [firstTitle, setFirstTitle] = useState('');
    const [secondTitle, setSecondTitle] = useState('');

    useEffect(() => {
        let isContinue = true;
        const setRandomPoetry = () => {
            api.getRandomPoetry.then((res: { content: string, author: string }) => {
                while (res.content.length > 30 && isContinue) {
                    // 如果诗句过长会导致显示异常，做一下处理
                    setRandomPoetry();
                }
                // 去除诗句最后的'。'
                setFirstTitle(res.content.replace('。', ''))
                // 作者
                setSecondTitle(` -- ${res.author}`)
            });
        }
        setRandomPoetry();
        return () => {
            isContinue = false;
        }
    }, [])

    return (
        <div className={"title"}>
            <div className={"title-list"}>
                <div className={"first-title"}>
                    <span>{firstTitle}</span><span style={{fontSize: '30px'}}>{secondTitle}</span>
                </div>
            </div>
        </div>
    )
}

export default Title;