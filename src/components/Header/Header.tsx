import React, {Component} from 'react';

import Menu from "./Menu/Menu";
import './Header.css'

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
                <Menu itemList={this.state.item}/>
            </div>
        );
    }
}

export default Header;