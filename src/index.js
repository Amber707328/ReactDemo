import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "mobx-react";
//Provider相当于一个数据容器，将store注入APP组件中
import store from "./Store/index"
ReactDOM.render(
    <Provider {...store}>
    {/*Router作为一个容器，将根节点包起来，路由才能进行跳转*/}
    <Router>
    <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
