import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.author}<span className="date">{this.props.date}</span></p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export {Comment as default}