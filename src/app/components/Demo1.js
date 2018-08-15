import React, { Component } from 'react'
import { Button } from 'antd';
class Demo1 extends Component {

    onclick(value) {
        
        alert(document.getElementById("fuckyou").innerText)
    }
    render() {
        return (
            <div>
                <h1 id="demo">from demo1</h1>
                <Button id="fuckyou" type="primary" onClick={()=>this.onclick()}>Primary</Button>

                <input onClick={()=>this.onclick()} type="button" value="fuck"/>
                <input type="text" />
            </div>
        );
    }
};

export default Demo1;