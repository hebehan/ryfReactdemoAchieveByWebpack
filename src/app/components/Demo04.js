import React, { Component } from 'react'
export default class Demo04 extends Component {
  render() {

    //将URL中的UTF-8字符串转成中文字符串
	function getCharFromUtf8(str) {
		var cstr = "";
		var nOffset = 0;
		if (str == "")
			return "";
		str = str.toLowerCase();
		nOffset = str.indexOf("%e");
		if (nOffset == -1)
			return str;
		while (nOffset != -1) {
			cstr += str.substr(0, nOffset);
			str = str.substr(nOffset, str.length - nOffset);
			if (str == "" || str.length < 9)
				return cstr;
			cstr += utf8ToChar(str.substr(0, 9));
			str = str.substr(9, str.length - 9);
			nOffset = str.indexOf("%e");
		}
		return cstr + str;
	}
 
	//将编码转换成字符
	function utf8ToChar(str) {
		var iCode, iCode1, iCode2;
		iCode = parseInt("0x" + str.substr(1, 2));
		iCode1 = parseInt("0x" + str.substr(4, 2));
		iCode2 = parseInt("0x" + str.substr(7, 2));
		return String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));
	}
    //   var value = this.props.params.id
    var str = this.props.location.search;
    return (
      <div>
        <h1>这是通过/:xx来传参读取的{this.props.match.params.id}{this.props.match.params.name}</h1>
        <h1>这是通过link标签?xxx=xx来传参读取的{getCharFromUtf8(str)}</h1>
        <h1>这是通过link标签query来传参读取的{this.props.location.query.name}</h1>
        <h1>这是通过link标签state来传参读取的{this.props.location.state.name}</h1>
    
      </div>
    )
  }
  
}
