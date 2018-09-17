import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Link, Router,HashRouter} from 'react-router-dom';
import List from "./components/List";
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'
import {DatePicker} from 'antd';
import Demo3 from './components/Demo3';
import { Layout } from 'antd';
import Demo01 from './components/Demo01';
import Demo02 from './components/Demo02';
import Demo03 from './components/Demo03';
import Demo04 from './components/Demo04';
import NotFoundPage from './components/NotFoundPage';
import DemoWrapper from './components/DemoWrapper';
const { Header, Footer, Sider, Content } = Layout;
var style = require('./style/demo.css')

var items = [
    {
        className: "item",
        path: "/demo1",
        comp: Demo1
    }, {
        className: "item",
        path: "/demo2",
        comp: Demo2
    },{
        className: "item",
        path: "/demo3",
        comp: Demo3
    },{
        className: "item",
        path: "/demo01",
        comp: Demo01
    },
    {
        className: "item",
        path: "/demo02",
        comp: Demo02
    },
    {
        className: "item",
        path: "/demo03",
        comp: Demo03
    },{
        className: "item",
        path: "/demo04",
        comp: Demo04
    },
    {
        className: "item",
        path: "/demowrapper",
        comp: DemoWrapper
    }
];
class App extends Component {
    render() {
        let itembean = [];
        let routebean = [];
        routebean.push(
            <Route exact path='/' component={items[0].comp}/>
        )
        // routebean.push(
        //     <Route path='*' component={items[0].comp}/>
        // )
        for (var i = 0; i < items.length; i++) {
            itembean.push(
                <li ke={i} className={items[i].className}>
                    {/* <Link className={items[i].className} to={items[i].path}>{items[i].comp.name}</Link> */}
                    {/* <Link className={items[i].className} to={items[i].path+"/"+i+"/name"}>{items[i].comp.name}</Link> */}
                    {/* <Link className={items[i].className} to={items[i].path+"?id="+i+"?name="+(i%2==0?"偶数":"奇数")}>{items[i].comp.name}</Link> */}
                    {/* <Link className={items[i].className} to={{pathname:items[i].path,query:{name:'fuck'}}}>{items[i].comp.name}</Link> */}
                    {/* <Link className={items[i].className} to={{pathname:items[i].path,state:{name:'fuck'}}}>{items[i].comp.name}</Link> */}
                    <Link className={items[i].className} to={{pathname:items[i].path,state:{name:'state'},query:{name:'query'}}}>{items[i].comp.name}</Link>
                </li>
            )

            routebean.push(
                // "<Route path='"+items[i].path+ "' component={"+items[i].comp+"}/>"
                // <Route path={items[i].path+"/:id/:name"} component={items[i].comp}/>
                <Route path={items[i].path} component={items[i].comp}/>
            )
        }
        // console.log(routebean)
        // let itembean = items.map(function (item, index) {     return <li
        // className={}><Link to="/demo1">Demo1</Link></li>; })
        return (

            

            <Layout>
            <Sider >
                <div >

                    <ul className="twoline">
                        {/*<li className="item"><Link to="/demo1">Demo1</Link></li>*/}
                        {/*<li className="item"><Link to="/demo2">Demo2</Link></li>*/}
                        {itembean}
                    </ul>

                    
                </div>
            </Sider>
            <Layout>
              <Content >
                  <Switch >
                        {routebean}
                        {/* <Route exact path='/' component={Demo1}/>
                        <Route path='/demo1' component={Demo1}/>
                        <Route path='/demo2' component={Demo2}/>
                        <Route path='*' component={Demo1}/> */}
                        <Route path='/404' component={NotFoundPage}/>
                        <Route path='*' component={NotFoundPage}/>
                        
                        
                    </Switch>
                </Content>
            </Layout>
          </Layout>
        );
    }
};

render((
    <HashRouter>
    <App/>
    </HashRouter>
), document.querySelector('#app'))
