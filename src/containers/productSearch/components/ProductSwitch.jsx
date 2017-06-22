import React from 'react';
import {observer} from 'mobx-react';
import productState from '../productSearch.state';

import './components.scss';
@observer
class ProductSwitch extends React.Component {
    constructor() {
        super()
    }

    //switch选中与否
    handleClick(e) {
        if(e.target.getAttribute('for')=='checked1'){
            productState.container.checked1=(!productState.container.checked1)
        }else if(e.target.getAttribute('for')=='checked2') {
            productState.container.checked2=(!productState.container.checked2)
        }
    }

    render() {
        var id = this.props.id;
        return (
            <div className='switch'>
                <input type="checkbox" id={id} checked={this.props.checked} />
                <label htmlFor={id} onClick={this.handleClick.bind(this)}></label>
            </div>
        )
    }
}

export default ProductSwitch;