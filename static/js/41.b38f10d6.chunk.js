(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1724:function(e,a,t){"use strict";t.r(a);var r=t(48),n=t.n(r),c=t(256),u=t(129),s=!1;a.default=Object(c.a)({namespace:"crud",state:{pageData:u.a.create(),employees:[]},subscriptions:{setup:function(e){var a=e.dispatch;e.history.listen(function(e){"/crud"!==e.pathname||s||(s=!0,a({type:"init"}))})}},effects:{init:n.a.mark(function e(a,t){var r,c,u,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.payload,t.call,r=t.put,c=t.select,e.next=4,c(function(e){return e.crud});case 4:return u=e.sent,s=u.pageData,e.next=8,r({type:"getPageInfo",payload:{pageData:s.startPage(1,10)}});case 8:return e.next=10,r({type:"getEmployees"});case 10:case"end":return e.stop()}},e)}),getPageInfo:n.a.mark(function e(a,t){var r,c,u;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.payload,t.call,c=t.put,u=r.pageData,e.next=5,c({type:"@request",payload:{valueField:"pageData",url:"/crud/getList",pageInfo:u}});case 5:case"end":return e.stop()}},e)}),save:n.a.mark(function e(a,t){var r,c,u,s,p,o,l,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.payload,t.call,c=t.put,u=t.select,s=t.take,p=r.values,o=r.success,e.next=5,u(function(e){return e.crud});case 5:return l=e.sent,i=l.pageData,e.next=9,c({type:"@request",payload:{notice:!0,url:"/crud/save",data:p}});case 9:return e.next=11,s("@request/@@end");case 11:return e.next=13,c({type:"getPageInfo",payload:{pageData:i}});case 13:o();case 14:case"end":return e.stop()}},e)}),update:n.a.mark(function e(a,t){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.payload,t.call,t.put;case 2:case"end":return e.stop()}},e)}),remove:n.a.mark(function e(a,t){var r,c,u,s,p,o,l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.payload,t.call,c=t.put,u=t.select,s=r.records,p=r.success,e.next=5,u(function(e){return e.crud});case 5:return o=e.sent,l=o.pageData,e.next=9,c({type:"@request",payload:{notice:!0,url:"/crud/bathDelete",data:s.map(function(e){return e.rowKey})}});case 9:return e.next=11,c({type:"getPageInfo",payload:{pageData:l}});case 11:p();case 12:case"end":return e.stop()}},e)}),getEmployees:n.a.mark(function e(a,t){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.payload,t.call,r=t.put,e.next=4,r({type:"@request",afterResponse:function(e){return e.data},payload:{valueField:"employees",url:"/crud/getWorkEmployee"}});case 4:case"end":return e.stop()}},e)})},reducers:{}})}}]);