(this["webpackJsonpsocket-client"]=this["webpackJsonpsocket-client"]||[]).push([[0],{206:function(e,t,a){e.exports=a(337)},333:function(e,t){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(104),i=a(17),u=a(106),s=a(178),m=a(38),h=a(383),f=a(384),E=a(119),d=a(397),p=a(386),g=a(385),v=a(182),b=a.n(v),O=a(378),j=a(398),k=a(380),w=a(339),y=a(382),x=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},main:{marginTop:e.spacing(8)},list:{width:250},fullList:{width:"auto"}}}));function C(e){var t=x(),a=Object(i.g)(),c=Object(i.h)(),o=Object(n.useState)(""),l=Object(m.a)(o,2),v=l[0],O=l[1],C=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),A=Object(m.a)(C,2),S=A[0],F=A[1],N=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&F(Object(s.a)({},S,Object(u.a)({},e,t)))}};Object(n.useEffect)((function(){O(function(e){switch(e){case"/home":return"Home";case"/live":return"Live Chart";default:return"Home"}}(c.pathname))}),[c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(h.a,{position:"fixed"},r.a.createElement(f.a,{variant:"dense"},r.a.createElement(g.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:N("left",!0)},r.a.createElement(b.a,null)),r.a.createElement(E.a,{variant:"h6",color:"inherit"},v))),r.a.createElement(j.a,{anchor:"left",open:S.left,onClose:N("left",!1),onOpen:N("left",!0)},r.a.createElement("div",{className:t.list,role:"presentation",onClick:N("left",!1),onKeyDown:N("left",!1)},r.a.createElement(k.a,null,r.a.createElement(w.a,{button:!0,onClick:function(){a.push("/home")}},r.a.createElement(y.a,{primary:"Home"})),r.a.createElement(w.a,{button:!0,onClick:function(){a.push("/live")}},r.a.createElement(y.a,{primary:"Live Chart"})))))),r.a.createElement("main",{className:t.main},r.a.createElement(p.a,null,r.a.createElement(d.a,{my:1},e.children))))}var A=a(116),S=a(137),F=a.n(S),N=a(183),D=a(340),L=Object(O.a)({root:{backgroundColor:"#f2f2f5",alignItems:"center",height:"550px",display:"flex","& img":{margin:"0px auto"}}});function B(){var e=L();return r.a.createElement(D.a,{variant:"outlined",elevation:0,className:e.root},r.a.createElement("img",{alt:"loader",src:"/socket-client/loader.gif",width:"350"}))}var R=a(113),T=a(114),W=a(189),H=a(190),M=a(91),Y=a(33),X=a(118),I=a(138),J=a(117),P=a(87),_=a(185),G=a(186),K=a(139),V=a(187),$=a(4),q=a(134),z=a.n(q),Q=function(e){Object(H.a)(a,e);var t=Object(W.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){var e=Object(K.elderRay)(),t=Object(K.change)(),a=this.props,n=a.data,c=a.ratio,o=a.width,l=t(e(n)),i=_.discontinuousTimeScaleProvider.inputDateAccessor((function(e){return e.date}))(l),u=i.data,s=i.xScale,m=i.xAccessor,h=i.displayXAccessor,f=[m(Object($.last)(u)),m(u[Math.max(0,u.length-100)])];return r.a.createElement(X.b,{height:550,ratio:c,width:o,margin:{left:70,right:70,top:50,bottom:50},seriesName:"MSFT",data:u,xScale:s,xAccessor:m,displayXAccessor:h,xExtents:f,clamp:!0},r.a.createElement(X.a,{id:1,height:300,yExtents:function(e){return[e.high,e.low]},padding:{top:10,right:0,bottom:20,left:0}},r.a.createElement(J.YAxis,{axisAt:"left",orient:"left",ticks:5}),r.a.createElement(P.MouseCoordinateY,{at:"left",orient:"right",displayFormat:Object(M.b)(".2f")}),r.a.createElement(I.OHLCSeries,null),r.a.createElement(P.EdgeIndicator,{itemType:"last",orient:"right",edgeAt:"right",yAccessor:function(e){return e.close},fill:function(e){return+e.close>+e.open?"#6BA583":"#FF0000"}}),r.a.createElement(G.OHLCTooltip,{origin:[-40,-10]})),r.a.createElement(X.a,{id:2,height:150,yExtents:function(e){return e.volume},origin:function(e,t){return[0,t-150]}},r.a.createElement(J.YAxis,{axisAt:"left",orient:"left",ticks:5,tickFormat:Object(M.b)(".2s")}),r.a.createElement(J.XAxis,{axisAt:"bottom",orient:"bottom"}),r.a.createElement(P.MouseCoordinateY,{at:"left",orient:"right",displayFormat:Object(M.b)(".4s")}),r.a.createElement(P.MouseCoordinateX,{at:"bottom",orient:"bottom",displayFormat:Object(Y.b)("%Y-%m-%d")}),r.a.createElement(I.BarSeries,{yAccessor:function(e){return e.volume},fill:function(e){return+e.close>+e.open?"#6BA583":"#FF0000"},opacity:.4})),r.a.createElement(z.a,null))}}]),a}(r.a.Component);Q.defaultProps={type:"svg"};var U=Q=Object(V.fitWidth)(Q),Z=a(389),ee=a(393),te=a(392),ae=a(388),ne=a(390),re=a(391),ce=Object(O.a)({table:{minWidth:650},red:{backgroundColor:"#6BA583a8"},green:{backgroundColor:"#FF0000a8"}});function oe(e){var t=e.data,a=ce();return r.a.createElement(ae.a,{component:D.a},r.a.createElement(Z.a,{className:a.table,"aria-label":"simple table"},r.a.createElement(ne.a,null,r.a.createElement(re.a,null,r.a.createElement(te.a,null,"Date"),r.a.createElement(te.a,{align:"right"},"Open (Rs)"),r.a.createElement(te.a,{align:"right"},"High (Rs)"),r.a.createElement(te.a,{align:"right"},"Low (Rs)"),r.a.createElement(te.a,{align:"right"},"Close (Rs)"),r.a.createElement(te.a,{align:"right"},"Volume (Rs)"))),r.a.createElement(ee.a,null,t.map((function(e,t){return r.a.createElement(re.a,{key:t,className:+e.close<+e.open?a.green:a.red},r.a.createElement(te.a,{component:"th",scope:"row"},new Date(e.date).toLocaleDateString()),r.a.createElement(te.a,{align:"right"},+e.open),r.a.createElement(te.a,{align:"right"},+e.high),r.a.createElement(te.a,{align:"right"},+e.low),r.a.createElement(te.a,{align:"right"},+e.close),r.a.createElement(te.a,{align:"right"},+e.volume))})))))}function le(e){var t=e.split(",");t.pop();var a=Object(m.a)(t,6),n=a[0],r=a[1],c=a[2],o=a[3],l=a[4],i=a[5];this.date=new Date(+n),this.open=+r,this.high=+c,this.low=+o,this.close=+l,this.volume=+i}function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=fetch("http://kaboom.rksv.net/api/historical?interval=".concat(e)).then((function(e){return e.text()})).then((function(e){return JSON.parse(e).map((function(e){return new le(e)}))}));return t}var ue=a(394),se=a(402),me=a(396),he=a(395),fe=Object(O.a)((function(e){return{formControlWrapper:{display:"flex",flexDirection:"row-reverse"},formControl:{margin:e.spacing(1),minWidth:120}}})),Ee=function(){var e=Object(N.a)(F.a.mark((function e(t){var a,n,r=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,ie(a);case 3:n=e.sent,t(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),c=a[0],o=a[1],l=fe(),i=r.a.useState(1),u=Object(m.a)(i,2),s=u[0],h=u[1];return Object(n.useEffect)((function(){Ee(o)}),[]),c?r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{variant:"outlined",elevation:0},r.a.createElement(U,{data:c}),r.a.createElement("div",{className:l.formControlWrapper},r.a.createElement(ue.a,{variant:"outlined",className:l.formControl},r.a.createElement(se.a,null,"Data Limit"),r.a.createElement(me.a,{value:s,onChange:function(e){var t=e.target.value;h(t),Ee(o,t)},label:"Data Limit"},r.a.createElement(he.a,{value:1},"200"),r.a.createElement(he.a,{value:2},"400"),r.a.createElement(he.a,{value:3},"600"),r.a.createElement(he.a,{value:4},"800"),r.a.createElement(he.a,{value:5},"1000"),r.a.createElement(he.a,{value:6},"1200"),r.a.createElement(he.a,{value:7},"1400"),r.a.createElement(he.a,{value:8},"1600"),r.a.createElement(he.a,{value:9},"1800"))))),r.a.createElement(oe,{data:Object(A.a)(c).reverse()})):r.a.createElement(B,null)},pe=a(188),ge=a.n(pe),ve=new(function(){function e(){var t=this;Object(R.a)(this,e),this.socket=ge()("http://kaboom.rksv.net/watch"),this.socket.on("connect",(function(){t.socket.emit("sub",{state:!0})}))}return Object(T.a)(e,[{key:"listenToSocket",value:function(e){var t=[];this.socket.on("data",(function(a,n){t.push(new le(a)),e(t),n(1)}))}},{key:"unsubscribe",value:function(){this.socket.emit("unsub",{state:!1})}}]),e}());function be(e){return{data:e}}function Oe(e,t){switch(t.type){case"receive_data":return{data:t.data};default:throw ve.unsubscribe(),new Error("Something went wrong :( !!!")}}var je=function(e){var t=Object(n.useReducer)(Oe,[],be),a=Object(m.a)(t,2),c=a[0],o=a[1],l=function(e){o({type:"receive_data",data:e})};return Object(n.useEffect)((function(){ve.listenToSocket(l)}),[]),c.data.length>10?r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{variant:"outlined",elevation:0},r.a.createElement(U,{data:c.data})),r.a.createElement(oe,{data:Object(A.a)(c.data).reverse()})):r.a.createElement(B,null)};function ke(){return r.a.createElement(l.a,null,r.a.createElement(C,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/home",component:de}),r.a.createElement(i.b,{exact:!0,path:"/live",component:je}),r.a.createElement(i.a,{from:"/",to:"/home"}))))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.6d2ce0cd.chunk.js.map