import React, {Component} from 'react';

class Item extends Component<any, any> {
    render() {
        const {label} = this.props
        return (
            <div>
                <li>{label}</li>
            </div>
        );
    }
}

export default Item;