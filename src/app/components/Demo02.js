import React, { Component } from 'react'

export default class Demo02 extends Component {
  render() {
      var names = ['AAA','BBB','CCC'];
    return (
      <div>
        {
            names.map((name)=>{
                return <p>{name}</p>;
            }   
            )
        }
      </div>
    )
  }
}
