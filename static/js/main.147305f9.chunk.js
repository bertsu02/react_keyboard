(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),o=n(4),s=n(5),r=n(7),i=n(6),u=n(1),l=n.n(u),p=n(0),k=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={key:null},e.componentEventCallback=function(t){e.setState({key:t.key})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.componentEventCallback)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.componentEventCallback)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:this.state.key?"The last pressed key is [".concat(this.state.key,"]"):"Nothing was pressed yet"})})}}]),n}(l.a.PureComponent);n(13);c.a.render(Object(p.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.147305f9.chunk.js.map