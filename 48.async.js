(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{GsTM:function(e,t,r){"use strict";var n=r("0ZgE"),a=r("VY4n");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("QTGI");var u=n(r("Th2E"));r("qV+p");var i=n(r("TsL4"));r("A1VQ");var l,o,d=n(r("vfEn")),f=n(r("TFzq")),c=n(r("DEU0")),g=n(r("+hkI")),s=n(r("54rf")),p=n(r("oHNe")),E=a(r("PQfD")),v=r("rAnT"),y=n(r("uUKN")),h=(l=(0,v.connect)(function(e){return{isloading:e.error.isloading}}),l(o=function(e){function t(){var e,r;(0,f.default)(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return r=(0,g.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(a))),r.state={isloading:!1},r.triggerError=function(e){r.setState({isloading:!0});var t=r.props.dispatch;t({type:"error/query",payload:{code:e}})},r}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this,t=this.state.isloading;return E.default.createElement(u.default,null,E.default.createElement(i.default,{spinning:t,wrapperClassName:y.default.trigger},E.default.createElement(d.default,{type:"danger",onClick:function(){return e.triggerError(401)}},"\u89e6\u53d1401"),E.default.createElement(d.default,{type:"danger",onClick:function(){return e.triggerError(403)}},"\u89e6\u53d1403"),E.default.createElement(d.default,{type:"danger",onClick:function(){return e.triggerError(500)}},"\u89e6\u53d1500"),E.default.createElement(d.default,{type:"danger",onClick:function(){return e.triggerError(404)}},"\u89e6\u53d1404")))}}]),t}(E.PureComponent))||o),k=h;t.default=k},uUKN:function(e,t,r){e.exports={trigger:"antd-pro\\pages\\-exception\\style-trigger"}}}]);