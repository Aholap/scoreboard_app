(this.webpackJsonpscoreboard=this.webpackJsonpscoreboard||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(3),l=n.n(u),s=n(14),i=n(2),p=n(21),m=function(){Object(a.useEffect)((function(){w().then((function(e){return o(e.data)}))}),[]);var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),u=Object(i.a)(c,2),m=u[0],f=u[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),h=b[0],v=b[1],C=Object(a.useState)("score"),y=Object(i.a)(C,2),E=y[0],g=y[1],w=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("http://localhost:3000/Players");case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){if(n.filter((function(e){return e.name.toUpperCase()===m.toUpperCase()})).length){if(window.confirm("Player already in scoreboard, do you want to update score?")){o(n.filter((function(e){return e.name.toUpperCase()!=m.toUpperCase()})).concat({name:m.charAt(0).toUpperCase()+m.slice(1),score:h}));var e=n.filter((function(e){return e.name.toUpperCase()===m.toUpperCase()}))[0].id;console.log(m),console.log(e),m&&h?p.put("http://localhost:3000/Players/"+e,{score:h}):window.confirm("player needs a name and a score")}}else m&&h?(o(n.concat({name:m.charAt(0).toUpperCase()+m.slice(1),score:h})),p.post("http://localhost:3000/Players",{name:m.charAt(0).toUpperCase()+m.slice(1),score:h})):window.confirm("player needs a name and a score");f(""),v("")};return n.length?r.a.createElement("div",null,"Players:",r.a.createElement("button",{onClick:function(){return"score"===E&&n.sort((function(e,t){return e.score>t.score?1:-1})),"name"===E&&n.sort((function(e,t){return e.name>t.name?1:-1})),void g("score"==E?"name":"score")}}," Sort by ",E," "),n.map((function(e){return r.a.createElement("p",null,"Player ",e.name,"  ",e.score," points")})),r.a.createElement("div",null,"Name",r.a.createElement("input",{value:m,onChange:function(e){return f(e.target.value)}}),r.a.createElement("div",null,"Score",r.a.createElement("input",{value:h,onChange:function(e){return v(e.target.value)}})),r.a.createElement("button",{type:"submit",onClick:function(){return j()}},"Click to add player"))):r.a.createElement("div",null,"Name",r.a.createElement("input",{value:m,onChange:function(e){return f(e.target.value)}}),r.a.createElement("div",null,"Score",r.a.createElement("input",{value:h,onChange:function(e){return v(e.target.value)}})),r.a.createElement("button",{type:"submit",onClick:function(){return j()}},"Click to add player"))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.17c87869.chunk.js.map