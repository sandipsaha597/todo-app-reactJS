(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},16:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),l=a.n(o),r=(a(15),a(2)),i=(a(16),a(3)),s=a(4),u=a(5),m=Object(n.createContext)();function d(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),o=(a[0],a[1],Object(n.useState)([{id:1,title:"Programmers count from Zero"},{id:2,title:"It has CRUD functionality."},{id:3,title:"It's a todo list app"}])),l=Object(r.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(i.length+1),d=Object(r.a)(u,2),b=(d[0],d[1],Object(n.useState)("")),p=Object(r.a)(b,2),f=(p[0],p[1],Object(n.useState)(!1)),j=Object(r.a)(f,2),v=(j[0],j[1],Object(n.useState)(0)),O=Object(r.a)(v,2);O[0],O[1];return c.a.createElement(m.Provider,{value:[i,s]},e.children)}var b=function(){var e=Object(n.useContext)(m),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),s=Object(r.a)(l,2),u=s[0],d=s[1],b=Object(n.useState)(a.length+1),p=Object(r.a)(b,2),f=p[0],j=p[1],v=document.querySelector(".sandip-btn");return c.a.createElement("div",{className:"data-submit"},c.a.createElement("input",{type:"text",placeholder:"What's your focus today",value:u,onChange:function(e){return d(e.target.value)}}),c.a.createElement("button",{className:"sandip-btn",onClick:function(e){j((function(e){return e+1})),o([].concat(Object(i.a)(a),[{id:f,title:u}])),d(""),function(e){var t=e.clientX-e.target.offsetLeft,a=e.clientY-e.target.offsetTop,n=document.createElement("span");v.appendChild(n),n.style.left=t+"px",n.style.top=a+"px",setTimeout((function(){n.remove()}),5e3)}(e)},disabled:!u.length},"Add"))};var p={hidden:{"pointer-events":"none",opacity:0,transform:"translate(-50%, -50%) scale(.8)"},show:{opacity:1,"pointer-events":"all",transform:"translate(-50%, -50%) scale(1)"}},f=function(){var e=Object(n.useContext)(m),t=Object(r.a)(e,2),a=t[0],o=t[1];console.log(a);var l=Object(n.useState)(""),d=Object(r.a)(l,2),f=(d[0],d[1],c.a.createElement(s.a,{icon:u.c})),j=c.a.createElement(s.a,{icon:u.a}),v=c.a.createElement(s.a,{icon:u.b}),O=Object(n.useState)(a.length+1),g=Object(r.a)(O,2),h=(g[0],g[1],Object(n.useState)("")),E=Object(r.a)(h,2),y=E[0],S=E[1],C=Object(n.useState)(!1),x=Object(r.a)(C,2),k=x[0],N=x[1],w=Object(n.useState)(0),Y=Object(r.a)(w,2),B=Y[0],T=Y[1],W=function(e){var t=Object(i.a)(a);t.splice(e.target.id,1),o(t)},I=function(e){N(!0),T(e.target.id),S(a[e.target.id].title)},R=document.querySelector(".edit-box button.sandip-btn");return c.a.createElement("div",{className:"todo"},c.a.createElement(b,null),c.a.createElement("ul",{className:"todo-list"},a.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("span",null,t," : ",e.title),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:W,id:t},f),c.a.createElement("button",{type:"button",id:t,onClick:I},j)))}))),c.a.createElement("div",{className:"edit-box",style:k?p.show:p.hidden},c.a.createElement("input",{type:"text",value:y,onChange:function(e){return S(e.target.value)}}),c.a.createElement("button",{className:"sandip-btn",onClick:function(e){!function(){var e=Object(i.a)(a);e[B].title=y,o(e),S(""),N(!1)}(),function(e){var t=e.clientX-e.target.getBoundingClientRect().left,a=e.clientY-e.target.getBoundingClientRect().top;console.log("ripple",e.clientX,e.clientY),console.log("ripple offset",e.target.offsetLeft,e.target.offsetTop);var n=document.createElement("span");R.appendChild(n),n.style.left=t+"px",n.style.top=a+"px",setTimeout((function(){n.remove()}),6e3)}(e)},disabled:!y.length},"Save"),c.a.createElement("button",{onClick:function(){return N(!1)},id:"close"},v)))};var j=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement("h2",null,"Welcome ",c.a.createElement("span",{className:""==a.trim()?"name-placeholder":"name"},""==a.trim()?"Your Name":a)),c.a.createElement("input",{type:"text",className:"name-input",placeholder:"Your name",value:a,onChange:function(e){return o(e.target.value)}}),c.a.createElement(d,null,c.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.dd149a4a.chunk.js.map