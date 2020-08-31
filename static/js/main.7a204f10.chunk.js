(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__1TYy6",card:"Cards_card__BemK8",infected:"Cards_infected__28UJc",recovered:"Cards_recovered__hq8Ck",deaths:"Cards_deaths__3ksNh"}},201:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(64),o=a.n(c),s=a(5),u=a.n(s),i=a(13),l=a(65),d=a(66),m=a(76),f=a(74),p=a(215),v=a(218),h=a(217),E=a(219),b=a(26),y=a.n(b),x=a(27),_=a.n(x),g=a(11),k=a.n(g),C=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return void 0===a?"loading..":n.a.createElement("div",{className:k.a.container},n.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:_()(k.a.card,k.a.infected)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(E.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:_()(k.a.card,k.a.recovered)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(E.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:_()(k.a.card,k.a.deaths)},n.a.createElement(h.a,null,n.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(E.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(E.a,{variant:"body2"},"Number of deaths caused by COVID-19")))))},w=a(75),O=a(38),D=a.n(O),j="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,r,n,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get(j);case 3:return t=e.sent,a=t.data,r=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:r,recovered:n,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(j,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=a(71),B=a(72),U=a.n(B),J=function(){var e=Object(r.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var o=a.length?n.a.createElement(I.Line,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return n.a.createElement("div",{className:U.a.container},o)},V=function(){return n.a.createElement("h1",null,"CountryPicker")},A=a(73),T=a.n(A),q=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return n.a.createElement("div",{className:T.a.container},n.a.createElement(C,{data:e}),n.a.createElement(J,null),n.a.createElement(V,null))}}]),a}(n.a.Component);o.a.render(n.a.createElement(q,null),document.getElementById("root"))},72:function(e,t,a){e.exports={container:"Chart_container__1m1k5"}},73:function(e,t,a){e.exports={container:"App_container__3IoTZ"}},78:function(e,t,a){e.exports=a(201)}},[[78,1,2]]]);
//# sourceMappingURL=main.7a204f10.chunk.js.map