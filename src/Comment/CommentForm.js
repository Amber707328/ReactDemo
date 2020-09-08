import React from 'react';

class CommentForm extends React.Component {
    addComment(){
        /*提交事件的处理程序：通过refs来获取用户输入的数据*/
        let name = this.refs.txtName.value;
        let content = this.refs.txtContent.value;
        // 把获取到的数据，组装成一个对象
        var obj = {"author":name,"date":(new Date()).toLocaleDateString(),"content":content}
        console.log(obj)
        // 调用父组件box定义的事件处理程序，把obj传到box组件。
        this.props.onAddContent(obj)
    }
    render() {
        return (
            <div className="addForm">
                {/*
                传值通过ref
                步骤：1，输入评论，点击提交
                    2.获取用户输入的数据，组装成一个对象
                    3.将组成的对象，传入box父组件
                    4.向box中的数组添加此对象
                    5.重新渲染组件
                */}
                <input type="text" ref="txtName" placeholder="请输入姓名"/>
                <br/>
                <textarea ref="txtContent" name="txtContent" id="txtContent" cols="20" rows="10"></textarea>
                <br/>
                {/*在js中，class的方法默认不会绑定this，如果忘记绑定，并把this传入了事件处理程序中，当调用的时候，this的值就是undefined*/}
                <button onClick={this.addComment.bind(this)}>提交</button>
            </div>
        )
    }
}

export {CommentForm as default}