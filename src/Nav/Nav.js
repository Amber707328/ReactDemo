import React from 'react';

import {Link} from 'react-router-dom'
class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/Product">产品</Link></li>
                    <li><Link to="/Comment">留言板</Link></li>
                    <li><Link to="/About">关于我们</Link></li>
                    <li><Link to="/Contact">联系我们</Link></li>
                    <li><Link to="/Home">首页</Link></li>
                </ul>
            </div>
        )
    }
}

export {Nav as default}