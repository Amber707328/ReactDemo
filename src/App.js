import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
// import CommentBox from './Comment/CommentBox'
import ProductList from './Product/ProductList'//导入商品列表
import About from './About/About'//关于我们
import Contact from  './Contact/Contact'//联系我们
import Home from './Home/Home'
import CommentList from './Comment/CommentBox'//留言板
import Erro404 from './Erro404'
import Nav from './Nav/Nav'
function App() {
  return (
    <div className="App">
        <Nav/>
        <Switch>
          <Route path="/Product" component={ProductList}></Route>
          <Route path="/Comment" component={CommentList}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/" exact component={Home}></Route>
          {/*<Route path="/" render={()=><Redirect to="/Home"/>}></Route>*/}
          <Route component={Erro404}></Route>
        </Switch>
    </div>
  );
}

export default App;
