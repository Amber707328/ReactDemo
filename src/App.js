import React from 'react';
import './App.css';
// import CommentBox from './Comment/CommentBox'
import ProductList from './Product/ProductList'
function App() {
  // let commentArr=[{"author":"张三","date":"2020-9-9","content":"hahhahhha"},
  //   {"author":"李四","date":"2010-9-9","content":"hahhahhha"},
  //   {"author":"王五","date":"2000-9-9","content":"hahhahhha"},]
  return (
    <div className="App">
      <header className="App-header">
        {/*<CommentBox data={commentArr}/>*/}
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
