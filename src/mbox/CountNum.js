import React from 'react';
import {inject,observer} from "mobx-react";
@inject("user")//注入数据
@observer//服务于谁
class CountNum extends React.Component {
    addNum(){
        this.props.user.changeNum()
    }
    render() {
        return (
            <div >
                <h2>计数器</h2>
                {this.props.user.num}
                <button onClick={this.addNum.bind(this)}>+</button>
            </div>
        )
    }
}

export {CountNum as default}