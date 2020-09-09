import React from 'react';
// import Axios from "../Axios";//导入封装的axios
import api from "../Api";
import 'whatwg-fetch'
import {Link,Route} from "react-router-dom";
import ShowDetail from '../ShowDetail'
class ProductList extends React.Component {
    // 数据请求回来后，在构造函数里进行页面渲染
    constructor() {
        super();
        this.state={
            list:[]
        }
    }
    componentWillMount() {
        //加载前就先请求数据,Axios请求
        // Axios.post("/healthproject/admin/patientActivity/selectPatientActivityWhere")
        //     .then(res=>{
        //         console.log(res)
        //         // 页面渲染请求回来的数据,是数组形式
        //         this.setState({
        //             list:res.data.data.data
        //         })
        //     }).catch(err=>{
        //         console.log(err)
        // })

        //wahtwg-fetch请求
        fetch(`${api.baseUrl}/healthproject/admin/patientActivity/selectPatientActivityWhere`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json()
        }).then((json)=> {
            console.log("通过fetch请求的数据",json)
            //向页面渲染数据
            this.setState({
                list:json.data.data
            })
        }).catch(function (ex) {
            console.log(ex)
        })
    }
    render() {
        //把请求回来的数组里面的值显示出来，用map遍历每个数据。这样才能显示
        let list=this.state.list.map((item,index)=>{
            //点击每个项，进入ShowDetail组件。这里就需要传递当前点击的这个项的id（路由传值）
            //return <div key={index}><Link to={"/Product/ShowDetail/"+item.patientactivityTitle}>id:{item.patientactivityTitle}</Link>{item.cancelreason}</div>
            return <div key={index}><Link to={{pathname:"/Product/ShowDetail",query:{id:item.patientactivityTitle}}}>id:{item.patientactivityTitle}</Link>{item.cancelreason}</div>
        })
        return (
            <div>
                {list}
                {/*子路由的写法*/}
                <Route path="/Product/ShowDetail" component={ShowDetail}></Route>
            </div>
        );
    }
}

export { ProductList as default}