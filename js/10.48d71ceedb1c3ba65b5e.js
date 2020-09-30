(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{112:function(e,n,t){"use strict";t.r(n);var r=t(137),a=t.n(r),c=t(22),o=t.n(c),u=t(0),i=t.n(u),s=t(47),l=t(35),p=t(103),d=t(126),f=t(124),b=t(125),m=t(104),v=t(133),y=t(134),O=Object(v.a)(),h={name:"sources",transformLabel:function(e,n){var t;return"".concat(e.name," (").concat((null==n||null===(t=n.find((function(n){return n.id===e.source_type_id})))||void 0===t?void 0:t.product_name)||e.source_type_id,")")},children:[{name:"service_offerings",label:"Service offerings",attributes:["name"]},{name:"service_plans",label:"Service plans",attributes:["name"]},{name:"service_instances",label:"Service instances",attributes:["name"]},{name:"service_inventories",label:"Service inventories",attributes:["name"]},{name:"service_instance_nodes",label:"Service instance nodes",attributes:["name"]},{name:"service_offering_nodes",label:"Service offering nodes",attributes:["name"]},{name:"vms",label:"Virtual machines",attributes:["name"],children:[{name:"network_adapters",label:"Network adapters"},{name:"security_groups",label:"Security groups",attributes:["name"]}]}]},g="{".concat(function e(n){return"".concat(n.name," {id,").concat(n.attributes?n.attributes:"",",").concat(n.children?n.children.map((function(n){return e(n)})):"","}")}(h),"}"),j=t(50),w=t(45),_=t(148),E=t(135),P=t.n(E),S=t(136),k=t.n(S),x=t(24);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q=t(127);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(e,n){var t=n.type,r=n.node,a=n.name;switch(t){case"loadingFinished":return L(L({},e),{},{loading:!1});case"openNode":return L(L({},e),{},{node:r,name:a,open:!0});case"closeNode":return L(L({},e),{},{open:!1})}};n.default=function(){var e=Object(s.d)((function(e){return e.sourcesReducer.isLoaded})),n=Object(u.useReducer)(A,function(e){return{loading:e,node:void 0,open:!1,name:void 0}}(!e)),t=a()(n,2),r=t[0],c=r.loading,E=r.name,S=r.node,D=r.open,N=t[1],T=Object(s.c)(),F=Object(s.d)((function(e){return e.sourcesReducer.sources}),s.b),J=Object(s.d)((function(e){return e.sourcesReducer.sourceTypes}),s.b),I=Object(s.d)((function(e){return e.sourcesReducer.details}),s.b);if(Object(u.useEffect)((function(){c&&(T(function(){var e=k()(P.a.mark((function e(n){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.a)().get("".concat(y.a,"/source_types"));case 3:return t=e.sent,e.abrupt("return",n({type:x.e,payload:t}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",n({type:x.f}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()),T(function(){var e=k()(P.a.mark((function e(n){var t,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("".concat(y.b,"/graphql"),{query:g}).then((function(e){return e.data}));case 2:return t=e.sent,e.next=5,a=t.sources.map((function(e){return e.id})),Object(v.a)().post("".concat(y.a,"/graphql"),{query:"{ sources( filter: { id: { eq: [".concat(a,"] } } )\n        { id, source_type_id, name }\n    }")}).then((function(e){return e.data}));case 5:return r=e.sent,e.abrupt("return",n({type:x.a,payload:{sources:t.sources.map((function(e){return R(R({},r.sources.find((function(n){return n.id===e.id}))),e)}))}}));case 7:case"end":return e.stop()}var a}),e)})));return function(n){return e.apply(this,arguments)}}()).then((function(){N({type:"loadingFinished"})})))}),[]),c)return i.a.createElement(j.a,null);var V=function e(n){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(Array.isArray(n))return n.map((function(n){return e(n,r,a)}));var c=[];null===(t=r.children)||void 0===t||t.forEach((function(t){var r,o;(null===(r=n[t.name])||void 0===r?void 0:r.length)>0&&c.push({name:t.label,id:t.name,children:null===(o=n[t.name])||void 0===o?void 0:o.map((function(n){return e(n,t,a)}))})}));var o=n.name||n.id;return r.transformLabel&&(o=r.transformLabel(n,a)),L(L({id:n.id,key:n.id,name:o},c.length>0?{children:c}:{}),{},{isSelectable:!0})}(F,h,J);return i.a.createElement(_.a,{open:D,data:I[S],node:S,close:function(){return N({type:"closeNode"})},name:E},i.a.createElement(p.a,null,i.a.createElement(d.a,null,i.a.createElement(f.a,null,i.a.createElement(b.a,null,i.a.createElement(l.b,{to:w.b.index},"Topology Inventory")),i.a.createElement(b.a,{isActive:!0},"Tree view"))),i.a.createElement(m.a,null,"Sources",i.a.createElement(q.a,{data:V,onSelect:function(e,n,t){if(n.isSelectable){var r=(null==t?void 0:t.id)||"sources";N({type:"openNode",name:n.name,node:"".concat(r,"-").concat(n.id)}),T(function(e,n){return function(){var t=k()(P.a.mark((function t(r,a){var c,u;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a(),!c.sourcesReducer.details["".concat(e,"-").concat(n)]){t.next=3;break}return t.abrupt("return",r({type:x.c}));case 3:return r({type:x.d}),t.prev=4,t.next=7,Object(v.a)().get("".concat(y.b,"/").concat(e,"/").concat(n));case 7:return u=t.sent,t.abrupt("return",r({type:x.c,payload:o()({},"".concat(e,"-").concat(n),u)}));case 11:return t.prev=11,t.t0=t.catch(4),t.abrupt("return",r({type:x.b}));case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(r,n.id))}}}))))}}}]);
//# sourceMappingURL=../sourcemaps/10.js.map