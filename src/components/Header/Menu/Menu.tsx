import React, {Component} from 'react';
import Item from "./Item/Item";

class Menu extends Component<any, any> {

    render() {
        const {itemList} = this.props
        return (
            <div>
                {
                    itemList.map((itemObj: any) => {
                        return <Item key={itemObj.id} label={itemObj.label}></Item>
                    })
                }
            </div>
        );
    }
}

export default Menu;