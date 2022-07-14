import User from "./User";
import * as React from "react";
import Info from "./Info";

const Other = () => {
    return (
        <div className={'other'}>
            <User name={'yanzhihao'} detail={'other'}></User>
            <Info></Info>
        </div>
    )
}

export default Other;