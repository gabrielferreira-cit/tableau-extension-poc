(this["webpackJsonpgdem-ext-poc"]=this["webpackJsonpgdem-ext-poc"]||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),s=(n(23),n(17)),i=n(2),u=n(11),d=n.n(u),l=n(16),h=n(1),b="All Team Memeber Engagement",j=function(){return Object(a.useEffect)((function(){tableau.extensions.initializeAsync().then((function(){console.info("PoC Extension Initialized!");var e=tableau.extensions.dashboardContent;if(!e)throw new Error("Couldn't load the dashboard content.");var t=e.dashboard.worksheets;if(!t)throw new Error("Couldn't load any worksheet.");var n=t.find((function(e){return e.name===b}));if(!n)throw new Error("Can't find the worksheet named \"".concat(b,'"'));n.addEventListener(tableau.TableauEventType.MarkSelectionChanged,function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"./update",e.next=3,tableau.extensions.ui.displayDialogAsync("./update","",{width:600,height:450});case 3:if(!e.sent){e.next=11;break}return e.next=7,t.worksheet.getDataSourcesAsync();case 7:e.sent[0].refreshAsync(),e.next=12;break;case 11:throw new Error("Error while loading data source.");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[]),Object(h.jsx)("h1",{children:"Initialized"})},x=function(){return Object(a.useEffect)((function(){tableau.extensions.initializeDialogAsync()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Hello from Update Window!"}),Object(h.jsx)("button",{type:"button",onClick:function(){tableau.extensions.ui.closeDialog("Closed Successful!")},children:"Close"})]})},f=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(s.a,{basename:"tableau-extension-poc",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:"/",children:Object(h.jsx)(j,{})}),Object(h.jsx)(i.b,{exact:!0,path:"/update",children:Object(h.jsx)(x,{})}),Object(h.jsx)(i.a,{to:"/"})]})})})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2c1ebe07.chunk.js.map