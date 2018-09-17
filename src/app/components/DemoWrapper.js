import React, { Component } from 'react'
class HelloMessage extends Component {
    render(){
        return (
            <div>
                <h1>demo4 props</h1>
            <p>Hello {this.props.name}</p>
            </div>

        )
    }
}

class ChildCom extends Component {
    render(){
        // var childs = [];
        // if (Array.isArray(this.props.children)){
        //     this.props.children.forEach((c)=>{
        //         console.log(c)
        //     })
        // }else{
        //     console.log("false" +this.props.children)
        // }
        return (
            <div>
                <h1>demo5 children</h1>
            <ol>
                {
                    React.Children.map(this.props.children,(child)=>{
                        return <li>{child}</li>
                    })
                    //等价 底下一个child会报错
                    // this.props.children.map((child)=>{
                    //     return <li>{child}</li>
                    // })
                }
            </ol>
            </div>


        )
    }
};

class Demo6 extends Component{
    propTypes:{
        title:React.propTypes.string.isRequired
    }

    // getDefaultProps: function (){
    //     return{
    //         title:'Default title'
    // };
    // }

    render(){
        return <div>
            <h1>Demo6 proptypes</h1>
            <p>{this.props.title}</p>
            </div>

    }
};
Demo6.defaultProps = {
    title: '默认属性'
};

function Test(props) {
    return (
        <div>
            <h1>from function Test </h1>
            <p>{props.test}</p>
        </div>
    )
}



class TestState extends Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }

    render(){
        return(
            <div>
                <h1>TestStateDemo</h1>
                <p>现在是 {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }

    componentDidMount(){
        this.timeID = setInterval(
            ()=> this.tick(),1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timeID)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return (
            <div>
                <h1>Clock Demo</h1>
                <p>现在是 {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

}

class StateAndProps extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"name",
            other:"hahha"
        }
    }

    render(){
        return(
            <div>
                <Name name={this.state.name}/>
                <Other other={this.state.other}/>
            </div>
        )
    }
}

class Name extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

class Other extends Component {
    render() {
        return (
            <div>
                <p>{this.props.other}</p>
            </div>
        );
    }
}

class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = {isToggle:true}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggle:!prevState.isToggle
        }))
    }
    render() {
        return (
            <div>
            <button onClick={this.handleClick}>
                {this.state.isToggle ? "ON":"OFF"}
            </button>
            </div>
        );
    }
}



class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        //  这个语法确保了 `this` 绑定在  handleClick 中
        return (
            <button onClick={() => this.handleClick()}>
                Click me
            </button>
        );
    }
}

function FLoginButton(props) {
    return <button onClick={props.onClick}>click</button>
}
class LoginControl extends Component {

    constructor(props){
        super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.state = {isLog:true}
    }
    login(){
        this.setState({isLog:true})
        console.log("login:"+this.state.isLog)
    }
    logout(){
        this.setState({isLog:false})
        console.log("logout:"+this.state.isLog)
    }


    render() {
        const islog = this.state.isLog;
        console.log(islog)
        let button = null;
        if (islog){
            button = <FLoginButton onClick={this.logout}/>
        } else {
            button = <FLoginButton onClick={this.login}/>
        }
        return (
            <div>
                <h1>{this.state.isLog?"已登录":"未登录"}</h1>
                {button}
            </div>
        );
    }
}

class Visibily extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div>
            <h1>
                Visibily 1
            </h1>
            </div>
        );
    }
}

class VWeight extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}


class DemoWrapper extends Component {

  render() {
    return (
      <div>
        <HelloMessage name="hello"/>
        <ChildCom >
        <p>hello</p>
        <p>world</p>
        </ChildCom>
          <Demo6 />
          <Demo6 title={"自定义属性"}/>
          <Test test={"test"}/>
          <TestState/>
          <Clock/>
          <StateAndProps/>
          <Toggle/>
          <LoggingButton/>
          <LoginControl />
      </div>
    )
  }
}
export default DemoWrapper;
