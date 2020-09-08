import React from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import './Comment.css'
class CommentBox extends React.Component {
    constructor(props) {
        // 构造函数要使用props属性，必须带props参数。否则this.props是取不到值的
        super(props);
        this.state = {
            commentList: this.props.data
        }
    }
    addContent(obj){
        // obj应该是CommentForm传过来的对象
        console.log("组装好的数据",obj)
        // 点击提交，把获取到的obj添加到CommentList数组里
        // this.props.data.push(obj)
        // console.log("app里存的数据",this.props.data)。props是只读的

        //页面渲染获取到的数据
        this.setState({
            commentList:[...this.state.commentList,obj]
        })
    }
    render() {
        return (
            <div className="box">
                <CommentList data={this.state.commentList}/>
                <CommentForm onAddContent={this.addContent.bind(this)}/>
            </div>
        )
    }
}

export {CommentBox as default}