import React,{Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (

            <div>
                <header>
                    <ul>
                        <li><Link to="/demo1">Demo1</Link></li>
                        <li><Link to="/demo2">Demo2</Link></li>
                    </ul>
                </header>
                <main>
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
                <h1>fuck from demo1</h1>
            </div>
        );
    }
};
class Demo2 extends Component {
    render() {
        return (
            <div>
                <h1>fuck from demo2</h1>
            </div>
        );
    }
};

render((
    <BrowserRouter>
        <Route path='/' component={App}/>
    </BrowserRouter>
),document.querySelector('#app'))

