(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s,a,n=c(9),l=c.n(n),i=c(4),r=c(2),o=c(1),d=c.n(o),j=(c(15),c(16),c(8)),u=c.n(j),b=c(3),O=c(0);function h(e,t){switch(t.type){case s.SET_LIST:return Object(b.a)(Object(b.a)({},e),{},{list:t.payload});case s.SET_VISIBLE_LIST:return Object(b.a)(Object(b.a)({},e),{},{visibleList:t.payload});case s.SET_SEARCH_VALUE:return Object(b.a)(Object(b.a)({},e),{},{searchValue:t.payload});case s.SORT:return Object(b.a)(Object(b.a)({},e),{},{sortBy:t.payload});case s.SET_TODO:return Object(b.a)(Object(b.a)({},e),{},{selectedTodo:t.payload});default:return e}}!function(e){e.SET_LIST="setList",e.SET_VISIBLE_LIST="setVisibleList",e.SET_SEARCH_VALUE="setSearchValue",e.SORT="sortBy",e.SET_TODO="setTodo"}(s||(s={})),function(e){e.SEARCH="Search",e.ALL="All",e.ACTIVE="Active",e.COMPLITED="Completed"}(a||(a={}));var x={list:[],visibleList:[],sortBy:"All",searchValue:"",selectedTodo:{}},m=d.a.createContext(x),f=d.a.createContext((function(e){})),p=function(e){var t=e.children,c=Object(o.useReducer)(h,x),s=Object(r.a)(c,2),a=s[0],n=s[1];return Object(O.jsx)(f.Provider,{value:n,children:Object(O.jsx)(m.Provider,{value:a,children:t})})},y=function(e){var t=e.todo,c=Object(o.useState)(!1),a=Object(r.a)(c,2),n=a[0],l=a[1],i=Object(o.useContext)(f),d=Object(o.useContext)(m).selectedTodo;return Object(O.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(O.jsx)("td",{className:"is-vcentered",children:t.id}),Object(O.jsx)("td",{className:"is-vcentered"}),Object(O.jsx)("td",{className:"is-vcentered is-expanded",children:Object(O.jsx)("p",{className:u()({"has-text-success":!0===t.completed,"has-text-danger":!1===t.completed}),children:t.title})}),Object(O.jsx)("td",{className:"has-text-right is-vcentered",children:Object(O.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){i({type:s.SET_TODO,payload:t}),l(!n)},children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:u()("far fa-eye",{"far fa-eye-slash":d.id})})})})})]})},v=function(e){var t=e.list;return Object(O.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:"fas fa-check"})})}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:" "})]})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsx)(y,{todo:e},e.id)}))})]})},N=c(10),S=c.n(N),T=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(o.useContext)(f);function l(e){n({type:s.SET_SEARCH_VALUE,payload:e})}var i=Object(o.useCallback)(S()(l,1e3),[]);return Object(O.jsxs)("form",{className:"field has-addons",children:[Object(O.jsx)("p",{className:"control",children:Object(O.jsx)("span",{className:"select",children:Object(O.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return function(e){n({type:s.SORT,payload:e.target.value})}(e)},children:[Object(O.jsx)("option",{value:"All",children:"All"}),Object(O.jsx)("option",{value:"Active",children:"Active"}),Object(O.jsx)("option",{value:"Completed",children:"Completed"})]})})}),Object(O.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(O.jsx)("input",{"data-cy":"searchInput",type:"text",value:c,className:"input",placeholder:"Search...",onChange:function(e){return function(e){a(e.target.value),i(e.target.value)}(e)}}),Object(O.jsx)("span",{className:"icon is-left",children:Object(O.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(O.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(O.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a(""),l("")}})})]})]})};function E(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(19);var g=function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(O.jsx)("div",{className:"Loader__content"})})},C=function(){var e=Object(o.useContext)(f),t=Object(o.useContext)(m).selectedTodo,c=Object(o.useState)({}),a=Object(r.a)(c,2),n=a[0],l=a[1],i=Object(o.useState)(!1),d=Object(r.a)(i,2),j=d[0],u=d[1];return Object(o.useEffect)((function(){var e;return u(!0),(e=t.id,E("/users/".concat(e))).then((function(e){return l(e)})).catch((function(e){return console.log(e)})).finally((function(){return u(!1)})),function(){l({})}}),[]),Object(O.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(O.jsx)("div",{className:"modal-background"}),j?Object(O.jsx)(g,{}):Object(O.jsxs)("div",{className:"modal-card",children:[Object(O.jsxs)("header",{className:"modal-card-head",children:[Object(O.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(O.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){e({type:s.SET_TODO,payload:{}})}})]}),Object(O.jsxs)("div",{className:"modal-card-body",children:[Object(O.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(O.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(O.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(O.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(O.jsx)("a",{href:"mailto:Sincere@april.biz",children:n.name})]})]})]})]})},_=function(){var e=Object(o.useContext)(m),t=e.visibleList,c=e.sortBy,a=e.searchValue,n=Object(o.useContext)(f),l=Object(o.useState)(!1),d=Object(r.a)(l,2),j=d[0],u=d[1],b=Object(o.useContext)(m).selectedTodo,h=[];(0===a.length&&"All"===c&&(h=Object(i.a)(t)),0===a.length&&"Completed"===c&&(h=Object(i.a)(t.filter((function(e){return e.completed})))),0===a.length&&"Active"===c&&(h=Object(i.a)(t.filter((function(e){return!e.completed})))),a.length>0&&"All"===c&&(h=Object(i.a)(t.filter((function(e){return e.title.includes(a)})))),a.length>0&&"Completed"===c)&&(h=Object(i.a)(t.filter((function(e){return e.completed}))).filter((function(e){return e.title.includes(a)})));a.length>0&&"Active"===c&&(h=Object(i.a)(t.filter((function(e){return!e.completed}))).filter((function(e){return e.title.includes(a)})));return Object(o.useEffect)((function(){u(!0),E("/todos").then((function(e){n({type:s.SET_LIST,payload:e}),n({type:s.SET_VISIBLE_LIST,payload:e})})).catch((function(){return console.log("error")})).finally((function(){return u(!1)}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("h1",{className:"title",children:"Todos:"}),Object(O.jsx)("div",{className:"block",children:Object(O.jsx)(T,{})}),Object(O.jsxs)("div",{className:"block",children:[j&&Object(O.jsx)(g,{}),Object(O.jsx)(v,{list:h})]})]})})}),b.id&&Object(O.jsx)(C,{})]})};l.a.render(Object(O.jsx)(p,{children:Object(O.jsx)(_,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b108fa32.chunk.js.map