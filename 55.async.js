(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{a4KE:function(e,t,a){"use strict";var s=a("VY4n"),i=a("0ZgE");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("zPQC");var n=i(a("fhRk")),r=i(a("TFzq")),d=i(a("DEU0")),l=i(a("+hkI")),u=i(a("54rf")),c=i(a("oHNe")),o=s(a("PQfD")),f=a("zccq"),m={strong:o.default.createElement("font",{className:"strong"},o.default.createElement(f.FormattedMessage,{id:"app.settings.security.strong",defaultMessage:"Strong"})),medium:o.default.createElement("font",{className:"medium"},o.default.createElement(f.FormattedMessage,{id:"app.settings.security.medium",defaultMessage:"Medium"})),weak:o.default.createElement("font",{className:"weak"},o.default.createElement(f.FormattedMessage,{id:"app.settings.security.weak",defaultMessage:"Weak"}),"Weak")},p=function(e){function t(){var e,a;(0,r.default)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return a=(0,l.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(i))),a.getData=function(){return[{title:(0,f.formatMessage)({id:"app.settings.security.password"},{}),description:o.default.createElement(o.Fragment,null,(0,f.formatMessage)({id:"app.settings.security.password-description"}),"\uff1a",m.strong),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.phone"},{}),description:"".concat((0,f.formatMessage)({id:"app.settings.security.phone-description"},{}),"\uff1a138****8293"),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.question"},{}),description:(0,f.formatMessage)({id:"app.settings.security.question-description"},{}),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.set",defaultMessage:"Set"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.email"},{}),description:"".concat((0,f.formatMessage)({id:"app.settings.security.email-description"},{}),"\uff1aant***sign.com"),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:(0,f.formatMessage)({id:"app.settings.security.mfa"},{}),description:(0,f.formatMessage)({id:"app.settings.security.mfa-description"},{}),actions:[o.default.createElement("a",null,o.default.createElement(f.FormattedMessage,{id:"app.settings.security.bind",defaultMessage:"Bind"}))]}]},a}return(0,c.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return o.default.createElement(o.Fragment,null,o.default.createElement(n.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return o.default.createElement(n.default.Item,{actions:e.actions},o.default.createElement(n.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(o.Component),g=p;t.default=g}}]);