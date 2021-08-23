(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(21),s=n.n(o),i=(n(28),n(2)),c=n(6),u=n(4),l=n(3),h=(n(29),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={show:!1},e.handleButton=function(){e.setState((function(e){return{show:!e.show}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(h.jsxs)("div",{className:"Event",children:[Object(h.jsx)("h1",{className:"EventSummary",children:t.summary}),Object(h.jsx)("h2",{className:"EventLocation",children:t.location}),Object(h.jsxs)("h3",{className:"EventDate",children:["start: ",t.start.dateTime," - Time Zone: ",t.start.timeZone]}),!0===this.state.show&&Object(h.jsx)("p",{className:"EventDetails",children:t.description}),!1===this.state.show&&Object(h.jsx)("button",{className:"showMore",onClick:function(){return e.handleButton()},children:"Show details"}),!0===this.state.show&&Object(h.jsx)("button",{className:"showLess",onClick:function(){return e.handleButton()},children:"hide details"})]})}}]),n}(r.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(r.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color}},r.color=null,r}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).color="blue",r}return n}(v),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).color="red",r}return n}(v),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).color="#f8a01f",r}return n}(v),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;if(n<=0||n>99)return e.setState({errorText:"Please enter a number between 0 and 99",numberOfEvents:""});e.setState({numberOfEvents:n,errorText:""}),e.props.updateNumberOfEvents(t.target.value)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Number Of Events"}),Object(h.jsx)("input",{type:"number",id:"numberInput",value:this.state.numberOfEvents,className:"numberInput",onChange:function(t){return e.handleInputChanged(t)}}),Object(h.jsx)("div",{className:"errorText",children:Object(h.jsx)(m,{text:this.state.errorText})})]})}}]),n}(r.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,e.props.numberOfEvents)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(p,{text:this.state.infoText}),Object(h.jsx)("h3",{children:"Choose Your Nearest City"}),Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{className:"matchSuggestions",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{className:"seeAll",onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),w=n(7),O=n.n(w),y=n(8),x=n(23),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(11),T=n.n(S),E=n(9),C=n.n(E),N=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))},Z=function(){var e=Object(y.a)(O.a.mark((function e(){var t,n,r,a,o,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,T.a.get("https://raro370h4k.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",a&&B(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(y.a)(O.a.mark((function e(){var t,n,r,a,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",k);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),C.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,Z();case 10:if(!(n=e.sent)){e.next=20;break}return A(),r="https://raro370h4k.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,T.a.get(r);case 16:return(a=e.sent).data&&(o=N(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),C.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},B=function(){var e=Object(y.a)(O.a.mark((function e(t){var n,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://raro370h4k.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numberOfEvents:32,currentCity:"all"},e.updateEvents=function(t,n){W().then((function(r){var a="all"===t?r.slice(0,n):r.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:a.slice(0,n),currentCity:t})}))},e}return Object(c.a)(n,[{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=this,t=this.state.numberOfEvents;this.mounted=!0,W().then((function(n){e.mounted&&(e.setState({events:n.slice(0,t),locations:N(n)}),navigator.onLine?e.setState({networkText:""}):(e.setState({networkText:Object(h.jsx)("div",{className:"networkNotification",children:"'Network error, the events you are viewing may be out of date. To make sure you are viewing the latest information, make sure you are connected to the internet'"})}),console.log("offline mode")))}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this,t=this.state.networkText;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"MEET APP"}),Object(h.jsx)("div",{children:Object(h.jsx)(b,{text:t})}),Object(h.jsx)(g,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(h.jsx)(j,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),Object(h.jsx)("div",{className:"eventsBorder",children:Object(h.jsx)(f,{events:this.state.events})})]})}}]),n}(r.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))};n(22).config("534510a3e8a447959f0e433e4381fa47").install(),s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(t,e)}))}}(),J()}},[[50,1,2]]]);
//# sourceMappingURL=main.ba9a9f28.chunk.js.map