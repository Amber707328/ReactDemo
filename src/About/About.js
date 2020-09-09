import React from 'react';
import CountNum from '../mbox/CountNum'
class About extends React.Component {
    render() {
        return (
            <div >
                <h2>关于我们</h2>
                <CountNum/>
                <CountNum/>
                <CountNum/>
            </div>
    )
    }
}

export {About as default}