import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Link, Router} from 'react-router-dom';
import List from "./components/List";
import Demo1 from './components/Demo1'
import Demo2 from './components/Demo2'
import {DatePicker} from 'antd';
import Demo3 from './components/Demo3';
import { Layout } from 'antd';
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
        for (let i = 0; i < items.length; i++) {
            itembean.push(
                <li className={items[i].className}>
                    <Link to={items[i].path}>{items[i].comp.name}</Link>
                </li>
            )

            routebean.push(
                // "<Route path='"+items[i].path+ "' component={"+items[i].comp+"}/>"
                <Route path={items[i].path} component={items[i].comp}/>
            )
        }
        // console.log(routebean)
        // let itembean = items.map(function (item, index) {     return <li
        // className={}><Link to="/demo1">Demo1</Link></li>; })
        return (

            

            <Layout>
            <Sider >
            <BrowserRouter >
                <div >

                    <ul className="twoline">
                        {/*<li className="item"><Link to="/demo1">Demo1</Link></li>*/}
                        {/*<li className="item"><Link to="/demo2">Demo2</Link></li>*/}
                        {itembean}
                    </ul>

                    <Switch >

                        {routebean}

                        {/* <Route exact path='/' component={Demo1}/>
                        <Route path='/demo1' component={Demo1}/>
                        <Route path='/demo2' component={Demo2}/>
                        <Route path='*' component={Demo1}/> */}

                    </Switch>
                </div>
            </BrowserRouter>
            </Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        );
    }
};

render(
    <App/>, document.querySelector('#app'))
