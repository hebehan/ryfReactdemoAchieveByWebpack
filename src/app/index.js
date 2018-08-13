import React,{Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import List from "./components/List";

var style = require('./style/demo.css')

var items = [
    {
        className:"item",
        path:"/demo1",
        name:"demo1",
        comp:"Demo1"
    },
    {
        path:"/demo2",
        name:"demo2",
        comp:"Demo2"
    }
];
class App extends Component {
    render() {
        let itembean = [];
        for (let i = 1; i < 30; i++) {
            itembean.push(<li className="item"><Link to={"/demo"+i}>{"Demo"+i}</Link></li>)
        }
        // let itembean = items.map(function (item, index) {
        //     return <li className={}><Link to="/demo1">Demo1</Link></li>;
        // })
        return (
            <div>
                <header>
                    <ul>
                        {/*<li className="item"><Link to="/demo1">Demo1</Link></li>*/}
                        {/*<li className="item"><Link to="/demo2">Demo2</Link></li>*/}
                        {itembean}
                    </ul>
                </header>
                <main className="main">
                    <Switch>
                        <Route exact path='/' component={Demo1}/>
                        <Route path='/demo1' component={Demo1}/>
                        <Route path='/demo2' component={Demo2}/>
                        <Route path='*' component={Demo1}/>
                    </Switch>
                </main>
            </div>
        );
    }
};

class Demo1 extends Component {
    render() {
        return (
            <div>
                <h1>from demo1</h1>
            </div>
        );
    }
};
class Demo2 extends Component {
    render() {
        return (
            <div>
                <h1>from demo2</h1>
            </div>
        );
    }
};

render((
        <BrowserRouter >
            <Route path="/" component={App}/>
        </BrowserRouter>
    )
,document.querySelector('#app'))

