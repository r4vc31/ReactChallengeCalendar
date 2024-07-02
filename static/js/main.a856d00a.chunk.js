(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),i=n.n(c),s=n(24),o=n(64),u=n(17),l=n(60),d={},j=[l.a],b=u.d.apply(void 0,[u.a.apply(void 0,j)].concat([]));var h=Object(u.c)({}),m=n(63),O=n(3),f=n(4),v=n(61),g=n.n(v),x=n(1);var p=function(e){var t=e.onClick,n=e.children;return Object(x.jsx)("button",{onClick:t,children:n})};var y=function(e){var t=e.limit,n=r.a.useState(0),a=Object(f.a)(n,2),c=a[0],i=a[1],s=!!t&&c===t;return Object(x.jsxs)("div",{className:"counter",children:[Object(x.jsxs)("h3",{children:["Counter: ",c]}),Object(x.jsx)(p,{onClick:function(){s||i(c+1)},children:"Increment"}),Object(x.jsx)(p,{onClick:function(){i(c-1)},children:"Decrement"}),s&&Object(x.jsx)("span",{children:"You reached the limit!"})]})};var C=function(){var e=Object(a.useState)(null),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/Jobsity/ReactChallenge/main/README.md",{mode:"cors"}).then((function(e){return e.text()})).then((function(e){r("".concat(e,"\n        \n## About Unit Tests:\nThe component below has a suite of tests to that could serve as guidance to unit test the calendar functionality, tests are located at `src/components/Counter.test.jsx`\n        \n"))}))}),[]),Object(x.jsxs)("div",{className:"readme",children:[Object(x.jsx)(g.a,{allowDangerousHtml:!0,children:n}),n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{limit:3}),Object(x.jsx)("h2",{children:"Use our existing route to create you calendar!"}),Object(x.jsx)(s.b,{to:"/calendar",children:"Go to Calendar page"})]})]})};var D=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(C,{})})},S=n(22),_=n(65),w=n(7),k=n.n(w);var E=function(e){for(var t=e.currentDate,n=e.reminders,a=e.selectedDay,r=e.onDayClick,c=new Date(t.getFullYear(),t.getMonth(),1),i=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),s=[],o=0;o<c.getDay();o++)s.push(Object(x.jsx)("div",{className:k.a["empty-day"]},"empty-".concat(o)));for(var u=function(e){var c=new Date(t.getFullYear(),t.getMonth(),e),i=n.filter((function(e){return e.date.toDateString()===c.toDateString()})).length>0;s.push(Object(x.jsxs)("div",{onClick:function(){return r(c)},className:"".concat(k.a.day," ").concat((null===a||void 0===a?void 0:a.toDateString())===c.toDateString()?k.a.selected:""," ").concat(i?k.a.hasReminders:""),children:[e,i&&Object(x.jsx)("span",{className:k.a["reminder-text"],children:"Has reminders"})]},e))},l=1;l<=i;l++)u(l);return Object(x.jsx)("div",{className:k.a.grid,children:s.map((function(e){return e}))})},F=n(13),T=n.n(F),R=n(21),M=["Azuay","Bol\xedvar","Ca\xf1ar","Carchi","Chimborazo","Cotopaxi","El Oro","Esmeraldas","Gal\xe1pagos","Guayas","Imbabura","Loja","Los R\xedos","Manab\xed","Morona Santiago","Napo","Orellana","Pastaza","Pichincha","Santa Elena","Santo Domingo de los Ts\xe1chilas","Sucumb\xedos","Tungurahua","Zamora Chinchipe"];function N(e){var t=document.createElement("div");t.textContent=e,t.setAttribute("style"," width: 50vw; margin: 0 auto; color: white; padding: 8px; text-align: center; font-size: 18px; font-weight: bold; background-color: red; border-radius: 25px;"),document.body.appendChild(t),setTimeout((function(){document.body.removeChild(t)}),3e3)}var L=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());return t.setDate(t.getDate()+1),t},P=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(t,"/").concat(n.toISOString(),"?key=FRFPMDB8VFDFZTPME23QVBYP7"));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",(null===r||void 0===r?void 0:r.days[0].conditions)||"Unknown");case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var I=function(e){var t=e.onAddReminder,n=e.mostrarMensaje,r=e.cities,c=e.normalizeDate,i=Object(a.useState)(""),s=Object(f.a)(i,2),o=s[0],u=s[1],l=Object(a.useState)(new Date),d=Object(f.a)(l,2),j=d[0],b=d[1],h=Object(a.useState)(""),m=Object(f.a)(h,2),O=m[0],v=m[1],g=Object(a.useState)(""),p=Object(f.a)(g,2),y=p[0],C=p[1],D=Object(a.useState)(null),S=Object(f.a)(D,2),_=S[0],w=S[1];return Object(a.useEffect)((function(){y&&j?function(){var e=Object(R.a)(T.a.mark((function e(){var t,n,a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(y,"/").concat(j.toISOString(),"?key=FRFPMDB8VFDFZTPME23QVBYP7"),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,w(null===(n=r.days[0])||void 0===n?void 0:n.conditions),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Error fetching weather:",e.t0),w("Error fetching weather");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()():w(null)}),[y,j]),Object(x.jsxs)("div",{className:k.a["reminder-form"],children:[Object(x.jsx)("input",{type:"text",maxLength:"30",placeholder:"Reminder",value:o,onChange:function(e){return u(e.target.value)}}),Object(x.jsx)("input",{type:"date",onChange:function(e){return b(new Date(e.target.value))}}),Object(x.jsx)("input",{type:"time",value:O,onChange:function(e){return v(e.target.value)}}),Object(x.jsxs)("select",{value:y,onChange:function(e){return C(e.target.value)},children:[Object(x.jsx)("option",{value:"",children:"Select City"}),r.map((function(e){return Object(x.jsx)("option",{value:e,children:e},e)}))]}),_&&Object(x.jsxs)("div",{className:k.a.weather,children:["Weather for ",y," on ",c(j).toDateString(),": ",_]}),Object(x.jsx)("button",{onClick:function(){if(o&&j&&O&&y){var e=o.slice(0,30),a={date:c(j),time:O,city:y,text:e};t(a),u(""),b(new Date),v(""),C(""),w(null)}else n("\xa1Campos Incompletos!")},children:"Add Reminder"})]})},Y=n(62);var z=function(e){var t=e.selectedDay,n=e.reminders,r=e.editingReminder,c=e.editText,i=e.editDate,s=e.editTime,o=e.editCity,u=e.setEditingReminder,l=e.setEditText,d=e.setEditDate,j=e.setEditTime,b=e.setEditCity,h=e.handleSaveReminder,m=e.handleEditReminder,O=e.cities,v=Object(a.useState)({}),g=Object(f.a)(v,2),p=g[0],y=g[1];return Object(a.useEffect)((function(){(function(){var e=Object(R.a)(T.a.mark((function e(){var t,a,r,c,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},a=Object(Y.a)(n),e.prev=2,a.s();case 4:if((r=a.n()).done){e.next=13;break}if(c=r.value,i="".concat(c.date.toDateString(),"-").concat(c.city),p[i]){e.next=11;break}return e.next=10,P(c.city,c.date);case 10:t[i]=e.sent;case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),a.e(e.t0);case 18:return e.prev=18,a.f(),e.finish(18);case 21:y((function(e){return Object(S.a)(Object(S.a)({},e),t)}));case 22:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})));return function(){return e.apply(this,arguments)}})()()}),[n,p]),Object(x.jsxs)("div",{className:k.a.remindersList,children:[Object(x.jsxs)("h3",{children:["Reminders for ",t.toDateString(),":"]}),Object(x.jsx)("ul",{children:n.filter((function(e){return e.date.toDateString()===t.toDateString()})).map((function(e,t){return Object(x.jsx)("li",{children:r===e?Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)}}),Object(x.jsx)("input",{type:"date",value:i.toISOString().slice(0,10),onChange:function(e){return d(new Date(e.target.value))}}),Object(x.jsx)("input",{type:"time",value:s,onChange:function(e){return j(e.target.value)}}),Object(x.jsxs)("select",{value:o,onChange:function(e){return b(e.target.value)},children:[Object(x.jsx)("option",{value:"",children:"Select City"}),O.map((function(e){return Object(x.jsx)("option",{value:e,children:e},e)}))]}),Object(x.jsx)("button",{onClick:function(){return h(e)},children:"Save"}),Object(x.jsx)("button",{onClick:function(){return u(null)},children:"Cancel"})]}):Object(x.jsxs)("div",{children:[e.time," - ",e.text," (",e.city,")"," - ",p["".concat(e.date.toDateString(),"-").concat(e.city)]||"Loading...",Object(x.jsx)("button",{onClick:function(){return m(e)},children:"Edit"})]})},t)}))})]})};var A=[{path:"/",component:D},{path:"/calendar",component:function(){var e=Object(a.useState)(new Date),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(f.a)(c,2),s=i[0],o=i[1],u=Object(a.useState)(null),l=Object(f.a)(u,2),d=l[0],j=l[1],b=Object(a.useState)(null),h=Object(f.a)(b,2),m=h[0],O=h[1],v=Object(a.useState)(""),g=Object(f.a)(v,2),p=g[0],y=g[1],C=Object(a.useState)(new Date),D=Object(f.a)(C,2),w=D[0],F=D[1],T=Object(a.useState)(""),R=Object(f.a)(T,2),Y=R[0],A=R[1],B=Object(a.useState)(""),V=Object(f.a)(B,2),W=V[0],G=V[1],Z=n.toLocaleString("default",{month:"long",year:"numeric"});return Object(x.jsxs)("div",{className:k.a.calendar,children:[Object(x.jsxs)("div",{className:k.a.header,children:[Object(x.jsx)("button",{onClick:function(){r(new Date(n.getFullYear(),n.getMonth()-1))},children:"<"}),Object(x.jsx)("h2",{children:Z}),Object(x.jsx)("button",{onClick:function(){r(new Date(n.getFullYear(),n.getMonth()+1))},children:">"})]}),Object(x.jsx)("div",{className:k.a.weekdays,children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((function(e){return Object(x.jsx)("div",{children:e},e)}))}),Object(x.jsx)(E,{currentDate:n,reminders:s,selectedDay:d,onDayClick:function(e){j((null===d||void 0===d?void 0:d.toDateString())===e.toDateString()?null:e)}}),Object(x.jsx)(I,{onAddReminder:function(e){o([].concat(Object(_.a)(s),[e]))},mostrarMensaje:N,cities:M,normalizeDate:L}),d&&Object(x.jsx)(z,{selectedDay:d,reminders:s,editingReminder:m,editText:p,editDate:w,editTime:Y,editCity:W,setEditingReminder:O,setEditText:y,setEditDate:F,setEditTime:A,setEditCity:G,handleSaveReminder:function(e){o(s.map((function(t){return t===e?Object(S.a)(Object(S.a)({},t),{},{date:L(w),time:Y,city:W,text:p}):t}))),O(null),y(""),F(new Date),A(""),G("")},cities:M,getWeatherForecast:P,handleEditReminder:function(e){O(e),y(e.text),F(e.date),A(e.time),G(e.city)}})]})}}];var B,V=Object(O.f)((function(){return Object(x.jsx)("div",{className:"main",children:Object(m.a)(A)})})),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(156);i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(o.a,{store:(B=h,Object(u.e)(B,d,b)),children:Object(x.jsx)(s.a,{children:Object(x.jsx)(V,{})})})}),document.getElementById("root")),W()},7:function(e,t,n){e.exports={calendar:"Calendar_calendar__z0c8Q",header:"Calendar_header__2zkCG",weekdays:"Calendar_weekdays__2WNlk",grid:"Calendar_grid__3VmLs",day:"Calendar_day__2Z_Tf","empty-day":"Calendar_empty-day__1vikq",today:"Calendar_today__2bhcs","reminders-container":"Calendar_reminders-container__39Vgv",reminder:"Calendar_reminder__2tlAl",message:"Calendar_message__1_sBg","reminder-form":"Calendar_reminder-form__t8vjP","reminder-text":"Calendar_reminder-text__2aInG",selected:"Calendar_selected__y6Zp6",remindersList:"Calendar_remindersList__2ufnr"}}},[[157,1,2]]]);
//# sourceMappingURL=main.a856d00a.chunk.js.map