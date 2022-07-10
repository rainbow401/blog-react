import Alert, {AlertColor} from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import {useState} from "react";
import {render} from "react-dom";

function Message(props: { content: string, duration: number, type: AlertColor }) {
    const {content, duration, type} = {...props}
    const [open, setOpen] = useState(true);

    const handleClose = (event: any, reason: any) => {
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={duration}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            onClose={handleClose}>
            <Alert severity={type}>
                {content}
            </Alert>
        </Snackbar>
    )
}


const message = {
    success(content: string, duration: number) {
        // 创建一个dom
        const dom = document.createElement('div');
        // 定义组件，
        const JSXDom = (<Message content={content} duration={duration} type='success'></Message>);
        // 渲染DOdM
        render(JSXDom, dom)
        // 置入到body节点下
        document.body.appendChild(dom);
    },
    error(content: string, duration: number) {
        const dom = document.createElement('div');
        const JSXDom = (<Message content={content} duration={duration} type='error'></Message>);
        render(JSXDom, dom)
        document.body.appendChild(dom);
    },
    warning(content: string, duration: number) {
        const dom = document.createElement('div');
        const JSXDom = (<Message content={content} duration={duration} type='warning'></Message>);
        render(JSXDom, dom)
        document.body.appendChild(dom);
    },
    info(content: string, duration: number) {
        const dom = document.createElement('div');
        const JSXDom = (<Message content={content} duration={duration} type='warning'></Message>);
        render(JSXDom, dom)
        document.body.appendChild(dom);
    }
};

export default message;