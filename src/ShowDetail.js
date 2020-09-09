import React from 'react';

class ShowDetail extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div >
                <h2>产品详情</h2>
            </div>
    )
    }
}

export {ShowDetail as default}