(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"7Zm1":function(e,a,t){e.exports={trendItem:"antd-pro\\components\\-trend\\index-trendItem",down:"antd-pro\\components\\-trend\\index-down",up:"antd-pro\\components\\-trend\\index-up",trendItemGrey:"antd-pro\\components\\-trend\\index-trendItemGrey",reverseColor:"antd-pro\\components\\-trend\\index-reverseColor"}},"Umy/":function(e,a,t){"use strict";var l=t("0ZgE");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t("TFzq")),s=l(t("DEU0")),r=l(t("+hkI")),d=l(t("54rf")),i=l(t("oHNe")),u=l(t("PQfD")),f=t("KTCi"),c=function(e){function a(){var e,t;(0,n.default)(this,a);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return t=(0,r.default)(this,(e=(0,d.default)(a)).call.apply(e,[this].concat(s))),t.rendertoHtml=function(){var e=t.props.children;t.main&&(t.main.innerHTML=(0,f.yuan)(e))},t}return(0,i.default)(a,e),(0,s.default)(a,[{key:"componentDidMount",value:function(){this.rendertoHtml()}},{key:"componentDidUpdate",value:function(){this.rendertoHtml()}},{key:"render",value:function(){var e=this;return u.default.createElement("span",{ref:function(a){e.main=a}})}}]),a}(u.default.PureComponent);a.default=c},YR7N:function(e,a,t){"use strict";var l=t("0ZgE");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t("+wDg"));t("u4fl");var s=l(t("+W1U")),r=l(t("rFaQ")),d=l(t("zhVp")),i=l(t("PQfD")),u=l(t("iczh")),f=l(t("7Zm1")),c=function(e){var a,t=e.colorful,l=void 0===t||t,c=e.reverseColor,o=void 0!==c&&c,m=e.flag,p=e.children,g=e.className,E=(0,d.default)(e,["colorful","reverseColor","flag","children","className"]),y=(0,u.default)(f.default.trendItem,(a={},(0,r.default)(a,f.default.trendItemGrey,!l),(0,r.default)(a,f.default.reverseColor,o&&l),a),g);return i.default.createElement("div",(0,n.default)({},E,{className:y,title:"string"===typeof p?p:""}),i.default.createElement("span",{className:f.default.value},p),m&&i.default.createElement("span",{className:f.default[m]},i.default.createElement(s.default,{type:"caret-".concat(m)})))},o=c;a.default=o},ZOrW:function(e,a,t){"use strict";var l=t("0ZgE"),n=t("VY4n");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("z3i4");var s=l(t("SFPe"));t("tw0S");var r=l(t("hZ+Z"));t("QTGI");var d=l(t("Th2E"));t("hwZ5");var i=l(t("OxN4"));t("OHsu");var u=l(t("JNT/"));t("xUFJ");var f=l(t("UOYF"));t("f1Sq");var c=l(t("1lwM"));t("u4fl");var o=l(t("+W1U"));t("LqTR");var m=l(t("rOym")),p=l(t("TFzq")),g=l(t("DEU0")),E=l(t("+hkI")),y=l(t("54rf")),h=l(t("oHNe"));t("UhSA");var v=l(t("BHYQ"));t("Qqs0");for(var M,k,T=l(t("iLkw")),b=n(t("PQfD")),F=t("rAnT"),x=t("zccq"),C=t("KTCi"),N=l(t("YR7N")),D=l(t("LOQS")),S=l(t("BS6i")),w=l(t("v99g")),R=l(t("Umy/")),I=t("+n12"),P=l(t("lVjH")),B=T.default.TabPane,A=v.default.RangePicker,L=[],H=0;H<7;H+=1)L.push({title:"\u5de5\u4e13\u8def ".concat(H," \u53f7\u5e97"),total:323234});var V=(M=(0,F.connect)(function(e){var a=e.chart,t=e.loading;return{chart:a,loading:t.effects["chart/fetch"]}}),M(k=function(e){function a(e){var t;(0,p.default)(this,a),t=(0,E.default)(this,(0,y.default)(a).call(this,e)),t.state={salesType:"all",currentTabKey:"",rangePickerValue:(0,I.getTimeDistance)("year")},t.handleChangeSalesType=function(e){t.setState({salesType:e.target.value})},t.handleTabChange=function(e){t.setState({currentTabKey:e})},t.handleRangePickerChange=function(e){var a=t.props.dispatch;t.setState({rangePickerValue:e}),a({type:"chart/fetchSalesData"})},t.selectDate=function(e){var a=t.props.dispatch;t.setState({rangePickerValue:(0,I.getTimeDistance)(e)}),a({type:"chart/fetchSalesData"})},t.rankingListData=[];for(var l=0;l<7;l+=1)t.rankingListData.push({title:(0,x.formatMessage)({id:"app.analysis.test"},{no:l}),total:323234});return t.state={salesType:"all",currentTabKey:"",loading:!0,rangePickerValue:(0,I.getTimeDistance)("year")},t}return(0,h.default)(a,e),(0,g.default)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.dispatch;this.reqRef=requestAnimationFrame(function(){a({type:"chart/fetch"}),e.timeoutId=setTimeout(function(){e.setState({loading:!1})},600)})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"chart/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"isActive",value:function(e){var a=this.state.rangePickerValue,t=(0,I.getTimeDistance)(e);return a[0]&&a[1]&&a[0].isSame(t[0],"day")&&a[1].isSame(t[1],"day")?P.default.currentDate:""}},{key:"render",value:function(){var e,a=this,t=this.state,l=t.rangePickerValue,n=t.salesType,p=t.loading,g=t.currentTabKey,E=this.props,y=E.chart,h=E.loading,v=y.visitData,M=y.visitData2,k=y.salesData,F=y.searchData,I=y.offlineData,L=y.offlineChartData,H=y.salesTypeData,V=y.salesTypeDataOnline,O=y.salesTypeDataOffline,W=p||h;e="all"===n?H:"online"===n?V:O;var U=b.default.createElement(m.default,null,b.default.createElement(m.default.Item,null,"\u64cd\u4f5c\u4e00"),b.default.createElement(m.default.Item,null,"\u64cd\u4f5c\u4e8c")),K=b.default.createElement("span",{className:P.default.iconGroup},b.default.createElement(c.default,{overlay:U,placement:"bottomRight"},b.default.createElement(o.default,{type:"ellipsis"}))),q=b.default.createElement("div",{className:P.default.salesExtraWrap},b.default.createElement("div",{className:P.default.salesExtra},b.default.createElement("a",{className:this.isActive("today"),onClick:function(){return a.selectDate("today")}},b.default.createElement(x.FormattedMessage,{id:"app.analysis.all-day",defaultMessage:"All Day"})),b.default.createElement("a",{className:this.isActive("week"),onClick:function(){return a.selectDate("week")}},b.default.createElement(x.FormattedMessage,{id:"app.analysis.all-week",defaultMessage:"All Week"})),b.default.createElement("a",{className:this.isActive("month"),onClick:function(){return a.selectDate("month")}},b.default.createElement(x.FormattedMessage,{id:"app.analysis.all-month",defaultMessage:"All Month"})),b.default.createElement("a",{className:this.isActive("year"),onClick:function(){return a.selectDate("year")}},b.default.createElement(x.FormattedMessage,{id:"app.analysis.all-year",defaultMessage:"All Year"}))),b.default.createElement(A,{value:l,onChange:this.handleRangePickerChange,style:{width:256}})),z=[{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.table.rank",defaultMessage:"Rank"}),dataIndex:"index",key:"index"},{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.table.search-keyword",defaultMessage:"Search keyword"}),dataIndex:"keyword",key:"keyword",render:function(e){return b.default.createElement("a",{href:"/"},e)}},{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.table.users",defaultMessage:"Users"}),dataIndex:"count",key:"count",sorter:function(e,a){return e.count-a.count},className:P.default.alignRight},{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.table.weekly-range",defaultMessage:"Weekly Range"}),dataIndex:"range",key:"range",sorter:function(e,a){return e.range-a.range},render:function(e,a){return b.default.createElement(N.default,{flag:1===a.status?"down":"up"},b.default.createElement("span",{style:{marginRight:4}},e,"%"))},align:"right"}],Z=g||I[0]&&I[0].name,G=function(e){var a=e.data,t=e.currentTabKey;return b.default.createElement(u.default,{gutter:8,style:{width:138,margin:"8px 0"}},b.default.createElement(f.default,{span:12},b.default.createElement(D.default,{title:a.name,subTitle:b.default.createElement(x.FormattedMessage,{id:"app.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),gap:2,total:"".concat(100*a.cvr,"%"),theme:t!==a.name&&"light"})),b.default.createElement(f.default,{span:12,style:{paddingTop:36}},b.default.createElement(C.Pie,{animate:!1,color:t!==a.name&&"#BDE4FF",inner:.55,tooltip:!1,margin:[0,0,0,0],percent:100*a.cvr,height:64})))},Q={xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:24}};return b.default.createElement(w.default,null,b.default.createElement(u.default,{gutter:24},b.default.createElement(f.default,Q,b.default.createElement(C.ChartCard,{bordered:!1,title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.total-sales",defaultMessage:"Total Sales"}),action:b.default.createElement(i.default,{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.introduce",defaultMessage:"introduce"})},b.default.createElement(o.default,{type:"info-circle-o"})),loading:W,total:function(){return b.default.createElement(R.default,null,"126560")},footer:b.default.createElement(C.Field,{label:b.default.createElement(x.FormattedMessage,{id:"app.analysis.day-sales",defaultMessage:"Day Sales"}),value:"\uffe5".concat((0,S.default)(12423).format("0,0"))}),contentHeight:46},b.default.createElement(N.default,{flag:"up",style:{marginRight:16}},b.default.createElement(x.FormattedMessage,{id:"app.analysis.week",defaultMessage:"Weekly Changes"}),b.default.createElement("span",{className:P.default.trendText},"12%")),b.default.createElement(N.default,{flag:"down"},b.default.createElement(x.FormattedMessage,{id:"app.analysis.day",defaultMessage:"Daily Changes"}),b.default.createElement("span",{className:P.default.trendText},"11%")))),b.default.createElement(f.default,Q,b.default.createElement(C.ChartCard,{bordered:!1,loading:W,title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.visits",defaultMessage:"visits"}),action:b.default.createElement(i.default,{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.introduce",defaultMessage:"introduce"})},b.default.createElement(o.default,{type:"info-circle-o"})),total:(0,S.default)(8846).format("0,0"),footer:b.default.createElement(C.Field,{label:b.default.createElement(x.FormattedMessage,{id:"app.analysis.day-visits",defaultMessage:"Day Visits"}),value:(0,S.default)(1234).format("0,0")}),contentHeight:46},b.default.createElement(C.MiniArea,{color:"#975FE4",data:v}))),b.default.createElement(f.default,Q,b.default.createElement(C.ChartCard,{bordered:!1,loading:W,title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.payments",defaultMessage:"Payments"}),action:b.default.createElement(i.default,{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.introduce",defaultMessage:"Introduce"})},b.default.createElement(o.default,{type:"info-circle-o"})),total:(0,S.default)(6560).format("0,0"),footer:b.default.createElement(C.Field,{label:b.default.createElement(x.FormattedMessage,{id:"app.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),value:"60%"}),contentHeight:46},b.default.createElement(C.MiniBar,{data:v}))),b.default.createElement(f.default,Q,b.default.createElement(C.ChartCard,{loading:W,bordered:!1,title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.operational-effect",defaultMessage:"Operational Effect"}),action:b.default.createElement(i.default,{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.introduce",defaultMessage:"introduce"})},b.default.createElement(o.default,{type:"info-circle-o"})),total:"78%",footer:b.default.createElement("div",{style:{whiteSpace:"nowrap",overflow:"hidden"}},b.default.createElement(N.default,{flag:"up",style:{marginRight:16}},b.default.createElement(x.FormattedMessage,{id:"app.analysis.week",defaultMessage:"Weekly changes"}),b.default.createElement("span",{className:P.default.trendText},"12%")),b.default.createElement(N.default,{flag:"down"},b.default.createElement(x.FormattedMessage,{id:"app.analysis.day",defaultMessage:"Weekly changes"}),b.default.createElement("span",{className:P.default.trendText},"11%"))),contentHeight:46},b.default.createElement(C.MiniProgress,{percent:78,strokeWidth:8,target:80,color:"#13C2C2"})))),b.default.createElement(d.default,{loading:W,bordered:!1,bodyStyle:{padding:0}},b.default.createElement("div",{className:P.default.salesCard},b.default.createElement(T.default,{tabBarExtraContent:q,size:"large",tabBarStyle:{marginBottom:24}},b.default.createElement(B,{tab:b.default.createElement(x.FormattedMessage,{id:"app.analysis.sales",defaultMessage:"Sales"}),key:"sales"},b.default.createElement(u.default,null,b.default.createElement(f.default,{xl:16,lg:12,md:12,sm:24,xs:24},b.default.createElement("div",{className:P.default.salesBar},b.default.createElement(C.Bar,{height:295,title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.sales-trend",defaultMessage:"Sales Trend"}),data:k}))),b.default.createElement(f.default,{xl:8,lg:12,md:12,sm:24,xs:24},b.default.createElement("div",{className:P.default.salesRank},b.default.createElement("h4",{className:P.default.rankingTitle},b.default.createElement(x.FormattedMessage,{id:"app.analysis.sales-ranking",defaultMessage:"Sales Ranking"})),b.default.createElement("ul",{className:P.default.rankingList},this.rankingListData.map(function(e,a){return b.default.createElement("li",{key:e.title},b.default.createElement("span",{className:"".concat(P.default.rankingItemNumber," ").concat(a<3?P.default.active:"")},a+1),b.default.createElement("span",{className:P.default.rankingItemTitle,title:e.title},e.title),b.default.createElement("span",{className:P.default.rankingItemValue},(0,S.default)(e.total).format("0,0")))})))))),b.default.createElement(B,{tab:b.default.createElement(x.FormattedMessage,{id:"app.analysis.visits",defaultMessage:"Visits"}),key:"views"},b.default.createElement(u.default,null,b.default.createElement(f.default,{xl:16,lg:12,md:12,sm:24,xs:24},b.default.createElement("div",{className:P.default.salesBar},b.default.createElement(C.Bar,{height:292,title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.visits-trend",defaultMessage:"Visits Trend"}),data:k}))),b.default.createElement(f.default,{xl:8,lg:12,md:12,sm:24,xs:24},b.default.createElement("div",{className:P.default.salesRank},b.default.createElement("h4",{className:P.default.rankingTitle},b.default.createElement(x.FormattedMessage,{id:"app.analysis.visits-ranking",defaultMessage:"Visits Ranking"})),b.default.createElement("ul",{className:P.default.rankingList},this.rankingListData.map(function(e,a){return b.default.createElement("li",{key:e.title},b.default.createElement("span",{className:a<3?P.default.active:""},a+1),b.default.createElement("span",null,e.title),b.default.createElement("span",null,(0,S.default)(e.total).format("0,0")))}))))))))),b.default.createElement(u.default,{gutter:24},b.default.createElement(f.default,{xl:12,lg:24,md:24,sm:24,xs:24},b.default.createElement(d.default,{loading:W,bordered:!1,title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.online-top-search",defaultMessage:"Online Top Search"}),extra:K,style:{marginTop:24}},b.default.createElement(u.default,{gutter:68},b.default.createElement(f.default,{sm:12,xs:24,style:{marginBottom:24}},b.default.createElement(D.default,{subTitle:b.default.createElement("span",null,b.default.createElement(x.FormattedMessage,{id:"app.analysis.search-users",defaultMessage:"search users"}),b.default.createElement(i.default,{title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.introduce",defaultMessage:"introduce"})},b.default.createElement(o.default,{style:{marginLeft:8},type:"info-circle-o"}))),gap:8,total:(0,S.default)(12321).format("0,0"),status:"up",subTotal:17.1}),b.default.createElement(C.MiniArea,{line:!0,height:45,data:M})),b.default.createElement(f.default,{sm:12,xs:24,style:{marginBottom:24}},b.default.createElement(D.default,{subTitle:b.default.createElement(x.FormattedMessage,{id:"app.analysis.per-capita-search",defaultMessage:"Per Capita Search"}),total:2.7,status:"down",subTotal:26.2,gap:8}),b.default.createElement(C.MiniArea,{line:!0,height:45,data:M}))),b.default.createElement(r.default,{rowKey:function(e){return e.index},size:"small",columns:z,dataSource:F,pagination:{style:{marginBottom:0},pageSize:5}}))),b.default.createElement(f.default,{xl:12,lg:24,md:24,sm:24,xs:24},b.default.createElement(d.default,{loading:W,className:P.default.salesCard,bordered:!1,title:b.default.createElement(x.FormattedMessage,{id:"app.analysis.the-proportion-of-sales",defaultMessage:"The Proportion of Sales"}),bodyStyle:{padding:24},extra:b.default.createElement("div",{className:P.default.salesCardExtra},K,b.default.createElement("div",{className:P.default.salesTypeRadio},b.default.createElement(s.default.Group,{value:n,onChange:this.handleChangeSalesType},b.default.createElement(s.default.Button,{value:"all"},b.default.createElement(x.FormattedMessage,{id:"app.analysis.channel.all",defaultMessage:"ALL"})),b.default.createElement(s.default.Button,{value:"online"},b.default.createElement(x.FormattedMessage,{id:"app.analysis.channel.online",defaultMessage:"Online"})),b.default.createElement(s.default.Button,{value:"stores"},b.default.createElement(x.FormattedMessage,{id:"app.analysis.channel.stores",defaultMessage:"Stores"}))))),style:{marginTop:24,minHeight:509}},b.default.createElement("h4",{style:{marginTop:8,marginBottom:32}},b.default.createElement(x.FormattedMessage,{id:"app.analysis.sales",defaultMessage:"Sales"})),b.default.createElement(C.Pie,{hasLegend:!0,subTitle:b.default.createElement(x.FormattedMessage,{id:"app.analysis.sales",defaultMessage:"Sales"}),total:function(){return b.default.createElement(R.default,null,e.reduce(function(e,a){return a.y+e},0))},data:e,valueFormat:function(e){return b.default.createElement(R.default,null,e)},height:248,lineWidth:4})))),b.default.createElement(d.default,{loading:W,className:P.default.offlineCard,bordered:!1,bodyStyle:{padding:"0 0 32px 0"},style:{marginTop:32}},b.default.createElement(T.default,{activeKey:Z,onChange:this.handleTabChange},I.map(function(e){return b.default.createElement(B,{tab:b.default.createElement(G,{data:e,currentTabKey:Z}),key:e.name},b.default.createElement("div",{style:{padding:"0 24px"}},b.default.createElement(C.TimelineChart,{height:400,data:L,titleMap:{y1:(0,x.formatMessage)({id:"app.analysis.traffic"}),y2:(0,x.formatMessage)({id:"app.analysis.payments"})}})))}))))}}]),a}(b.Component))||k),O=V;a.default=O},lVjH:function(e,a,t){e.exports={iconGroup:"antd-pro\\pages\\-dashboard\\-analysis-iconGroup",rankingList:"antd-pro\\pages\\-dashboard\\-analysis-rankingList",rankingItemNumber:"antd-pro\\pages\\-dashboard\\-analysis-rankingItemNumber",active:"antd-pro\\pages\\-dashboard\\-analysis-active",rankingItemTitle:"antd-pro\\pages\\-dashboard\\-analysis-rankingItemTitle",salesExtra:"antd-pro\\pages\\-dashboard\\-analysis-salesExtra",currentDate:"antd-pro\\pages\\-dashboard\\-analysis-currentDate",salesCard:"antd-pro\\pages\\-dashboard\\-analysis-salesCard",salesBar:"antd-pro\\pages\\-dashboard\\-analysis-salesBar",salesRank:"antd-pro\\pages\\-dashboard\\-analysis-salesRank",salesCardExtra:"antd-pro\\pages\\-dashboard\\-analysis-salesCardExtra",salesTypeRadio:"antd-pro\\pages\\-dashboard\\-analysis-salesTypeRadio",offlineCard:"antd-pro\\pages\\-dashboard\\-analysis-offlineCard",trendText:"antd-pro\\pages\\-dashboard\\-analysis-trendText",rankingTitle:"antd-pro\\pages\\-dashboard\\-analysis-rankingTitle",salesExtraWrap:"antd-pro\\pages\\-dashboard\\-analysis-salesExtraWrap"}}}]);