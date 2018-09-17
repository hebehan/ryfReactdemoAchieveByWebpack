import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
          <p>404 未找到该页面</p>
        <Link className="item" to="/demo01">返回首页</Link>
      </div>
    )
  }
}
