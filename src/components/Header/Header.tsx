import React, {Component} from 'react';

// import Menu from "./Menu/Menu";
import './Header.css'

import { Button, Space } from '@arco-design/web-react';


class Header extends Component {
    state = {
        item: [
            {
                id: 1,
                label: '首页'
            }
        ]
    }

    render() {
        return (
            <div className='header'>
                {/*<Menu itemList={this.state.item}/>*/}
                <Space size='large'>
                    <Button type='primary'>Primary</Button>
                    <Button type='secondary'>Secondary</Button>
                    <Button type='dashed'>Dashed</Button>
                    <Button type='outline'>Outline</Button>
                    <Button type='text'>Text</Button>
                </Space>
            </div>
        );
    }
}

export default Header;