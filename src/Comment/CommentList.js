import React from 'react';
import Comment from './Comment'
class CommentList extends React.Component {
    render() {
        console.log(this.props.data)
        let commentArr = this.props.data.map( (item,index)=> {
            let {author,content,date} = item
            return <Comment key={index} author={author} date={date}>
                    {content}
                    </Comment>
        })
        return (
            <div className="list">
                {commentArr}
            </div>
        )
    }
}

export {CommentList as default}