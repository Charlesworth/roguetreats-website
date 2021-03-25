(this.webpackJsonpcookies=this.webpackJsonpcookies||[]).push([[0],{43:function(e,t,a){"use strict";a.r(t);var r,n=a(0),s=a(1),c=a.n(s),i=a(27),l=a.n(i),o=a(16),d=a(4),m=a(2),b=a.n(m),h=a(3),u=a(9),j=a(28),x=a(12),O=a(15),p=a(20),f=a(19);!function(e){e.NotEntered="NOT_ENTERED",e.Invalid="INVALID",e.Valid="VALID"}(r||(r={}));var g=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).state={autocomplete:null,autocompleteListener:null,validAddress:r.NotEntered,showArea:!1},n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=new google.maps.places.Autocomplete(document.getElementById("autocompleteAddress"),{types:["address"]});e.setFields(["geometry","formatted_address"]);var t=e.addListener("place_changed",this.isInDeliveryArea.bind(this));this.setState({autocomplete:e,autocompleteListener:t})}},{key:"componentWillUnmount",value:function(){this.state.autocompleteListener&&google.maps.event.removeListener(this.state.autocompleteListener)}},{key:"isInDeliveryArea",value:function(){if(this.state.autocomplete){var e=this.state.autocomplete.getPlace();if(e.geometry&&e.geometry.location&&e.formatted_address){var t=new google.maps.Polygon({paths:[{lng:-2.0119413,lat:51.4502812},{lng:-2.0185072,lat:51.4471873},{lng:-2.0200522,lat:51.4432821},{lng:-2.0249445,lat:51.4422389},{lng:-2.0242579,lat:51.4398582},{lng:-2.0229275,lat:51.4380926},{lng:-2.0162327,lat:51.4310028},{lng:-2.0101387,lat:51.4292637},{lng:-2.0034762,lat:51.4263587},{lng:-2.004002,lat:51.4249605},{lng:-2.0029183,lat:51.4229535},{lng:-2.0001503,lat:51.4224785},{lng:-1.9974788,lat:51.4221641},{lng:-1.9947644,lat:51.4223112},{lng:-1.9893249,lat:51.423676},{lng:-1.9812997,lat:51.4222711},{lng:-1.9782742,lat:51.4213478},{lng:-1.9745191,lat:51.4221774},{lng:-1.9738754,lat:51.4261245},{lng:-1.9750985,lat:51.4270209},{lng:-1.9803127,lat:51.4300579},{lng:-1.9836601,lat:51.4340979},{lng:-1.9880804,lat:51.4361312},{lng:-1.9881233,lat:51.4385924},{lng:-1.9875654,lat:51.4397159},{lng:-1.985205,lat:51.4419629},{lng:-1.9861492,lat:51.444718},{lng:-1.9888958,lat:51.4469381},{lng:-1.9887241,lat:51.4483289},{lng:-1.9913848,lat:51.4510568},{lng:-1.9906982,lat:51.4527149},{lng:-1.9914278,lat:51.455095},{lng:-1.9938739,lat:51.4552555},{lng:-1.9996675,lat:51.4543997},{lng:-2.0045599,lat:51.4535707},{lng:-2.0052894,lat:51.4530893},{lng:-2.0119413,lat:51.4502812}]});return void(google.maps.geometry.poly.containsLocation(e.geometry.location,t)?(this.setState({validAddress:r.Valid}),this.props.onValidAddressCallback(e.formatted_address)):this.setState({validAddress:r.Invalid}))}}throw new Error("Unable to load place lat lang and check within delivery poly")}},{key:"render",value:function(){var e,t=this;switch(this.state.validAddress){case r.Invalid:e=Object(n.jsxs)("div",{className:"alert alert-danger text-center",role:"alert",children:["Sorry, your not in our delivery area yet, but we are expanding quickly. Sign up for our mailing list \u2b07\ufe0f to get notified when our delivery zone expands.",Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){t.setState({showArea:!t.state.showArea})},children:"Show delivery area map"}),Object(n.jsx)("br",{}),this.state.showArea?Object(n.jsx)("img",{src:"https://cookieassets.s3.eu-west-2.amazonaws.com/deliveryArea3.png",className:"my-2",width:"100%"}):null]});break;case r.Valid:e=Object(n.jsx)("div",{className:"alert alert-success text-center",role:"alert",children:"\ud83c\udf89 Great, you're in our delivery area \ud83c\udf89"});break;case r.NotEntered:e=null}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{style:{width:"100%"},type:"text",id:"autocompleteAddress",placeholder:"Start typing your address...",defaultValue:this.props.initialAddress||""}),e]})}}]),a}(s.Component),v=a(6),y="07863056292",k="orders@roguetreats.com",w=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,r,n,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,a=[],r=Object(v.a)(t.freeTimeslots),e.prev=5,r.s();case 7:if((n=r.n()).done){e.next=15;break}if(s=n.value,c=Date.parse(s.date),!isNaN(c)){e.next=12;break}throw new Error("received an invalid timeslot");case 12:a.push({date:new Date(c),products:s.products,boxes:s.boxes});case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),r.e(e.t0);case 20:return e.prev=20,r.f(),e.finish(20);case 23:return e.abrupt("return",a);case 24:case"end":return e.stop()}}),e,null,[[5,17,20,23]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cookieapi.com/timeslots",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:return e.abrupt("return",Promise.reject(t.statusText));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).set("Content-Type","application/json"),e.next=4,fetch("https://cookieapi.com/mailinglist",{method:"POST",body:JSON.stringify({email:t}),headers:a});case 4:if((r=e.sent).ok){e.next=7;break}return e.abrupt("return",Promise.reject(r.statusText));case 7:return e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=a(31);function S(e){var t=Object(F.a)({defaultValues:{mailingList:!e.initialCustomerDetails||e.initialCustomerDetails.mailingList,name:e.initialCustomerDetails?e.initialCustomerDetails.name:"",phone:e.initialCustomerDetails?e.initialCustomerDetails.phone:"",note:e.initialCustomerDetails?e.initialCustomerDetails.note:"",email:e.initialCustomerDetails?e.initialCustomerDetails.email:""}}),a=t.register,r=t.handleSubmit,s=t.errors,c=r((function(t){e.callback(t)}));return Object(n.jsxs)("form",{onSubmit:c,children:[Object(n.jsx)("h3",{className:"mt-2",style:{fontFamily:"Permanent Marker"},children:"Who:"}),Object(n.jsx)("label",{htmlFor:"name",className:"form-label mt-2",children:"Name:"}),Object(n.jsx)("input",{className:"form-control ".concat(s.name?"is-invalid":""),id:"name",name:"name",ref:a({required:"Name required",maxLength:{value:50,message:"Too long!"}})}),s.name&&Object(n.jsx)("div",{className:"invalid-feedback",children:s.name.message}),Object(n.jsx)("label",{htmlFor:"phone",className:"form-label mt-2",children:"Phone Number:"}),Object(n.jsx)("input",{className:"form-control ".concat(s.phone?"is-invalid":""),id:"phone",name:"phone",ref:a({required:"Phone number required",maxLength:{value:12,message:"Too long"},minLength:{value:7,message:"Too short"}})}),s.phone&&Object(n.jsx)("div",{className:"invalid-feedback",children:s.phone.message}),Object(n.jsx)("label",{htmlFor:"note",className:"form-label mt-2",children:"Note to us (optional):"}),Object(n.jsx)("textarea",{className:"form-control ".concat(s.note?"is-invalid":""),id:"note",name:"note",ref:a({maxLength:{value:200,message:"Too long!"}}),placeholder:'e.g. "Write `Love from Mike` on the box", "Ring the buzzer"'}),s.note&&Object(n.jsx)("div",{className:"invalid-feedback",children:s.note.message}),Object(n.jsx)("label",{htmlFor:"email",className:"form-label mt-2",children:"Email:"}),Object(n.jsx)("input",{className:"form-control ".concat(s.email?"is-invalid":""),id:"email",name:"email",ref:a({required:"Email is required",pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:"Email is not valid"}})}),s.email&&Object(n.jsx)("div",{className:"invalid-feedback",children:s.email.message}),Object(n.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."}),Object(n.jsxs)("div",{className:"form-check mb-2",children:[Object(n.jsx)("input",{className:"form-check-input",type:"checkbox",name:"mailingList",id:"mailingList",ref:a}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:"mailingList",children:"Email me about new treats, delivery days and offers"})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-lg btn-success m-2",style:{fontFamily:"Permanent Marker",fontSize:"2em"},children:"Continue"}),(s.email||s.name||s.phone||s.note)&&Object(n.jsx)("b",{style:{color:"red"},children:" Please fill out the required fields \u2b06\ufe0f"})]})}var E=a(23);function A(e){return e.toDateString()}function T(e){var t=e.toTimeString().substring(0,5),a=new Date(e.getTime()+18e5).toTimeString().substring(0,5);return"".concat(t," - ").concat(a)}function M(e){var t=e.freeTimeSlots.map((function(e){var t=A(e.date),a=T(e.date);return Object(E.a)(Object(E.a)({},e),{},{day:t,time:a})})),a=e.initialOrderInfo?A(e.initialOrderInfo.date):t[0].day,r=e.initialOrderInfo?T(e.initialOrderInfo.date):t[0].time,s=e.initialOrderInfo?e.initialOrderInfo.boxes:1,c=t.map((function(e){return e.day})).filter((function(e,t,a){return t===a.indexOf(e)})),i=t.filter((function(e){return e.day===a})).map((function(e){return e.time})),l=t.filter((function(e){return e.day===a&&e.time===r})).reduce((function(e,t){return e+t.boxes}),0);if(!e.initialOrderInfo){var o=t.filter((function(e){return e.day===a&&e.time===r}));if(1!==o.length)throw new Error("multiple dates returned for a selected day and time");e.callback({boxes:s,date:o[0].date})}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"mt-2",style:{fontFamily:"Permanent Marker"},children:"When:"}),Object(n.jsx)(D,{availableDays:c,selectedDay:a,selectedDayCallback:function(a){var r=t.filter((function(e){return e.day===a}));e.callback({date:r[0].date,boxes:1})}}),Object(n.jsx)(I,{availableTimes:i,selectedTime:r,selectedTimeCallback:function(r){var n=t.filter((function(e){return e.day===a&&e.time===r}));e.callback({date:n[0].date,boxes:1})}}),Object(n.jsx)("h3",{className:"mt-3",style:{fontFamily:"Permanent Marker"},children:"How many Cookies:"}),Object(n.jsx)("h3",{children:"Giant Milk Chocolate Chip"}),Object(n.jsxs)("p",{children:["Allergens: ",Object(n.jsx)("b",{children:"Egg, Milk, Soy, Gluten"}),Object(n.jsx)("div",{id:"emailHelp",className:"form-text",children:"\xa310 per box with free delivery!"})]}),Object(n.jsx)(P,{availableBoxes:l,selectedBoxes:s,selectedBoxesCallback:function(n){var s=t.filter((function(e){return e.day===a&&e.time===r}));e.callback({date:s[0].date,boxes:n})}})]})}function I(e){var t,a=[],r=Object(v.a)(e.availableTimes);try{for(r.s();!(t=r.n()).done;){var s=t.value;a.push(Object(n.jsx)("option",{value:s,children:s},s))}}catch(c){r.e(c)}finally{r.f()}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{htmlFor:"timeSelect",className:"form-label mt-2",children:"Time:"}),Object(n.jsx)("select",{id:"timeSelect",className:"form-select",onChange:function(t){return e.selectedTimeCallback(t.target.value)},value:e.selectedTime,children:a})]})}function D(e){var t,a=[],r=Object(v.a)(e.availableDays);try{for(r.s();!(t=r.n()).done;){var s=t.value;a.push(Object(n.jsx)("option",{value:s,children:s},s))}}catch(c){r.e(c)}finally{r.f()}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{htmlFor:"daySelect",className:"form-label mt-2",children:"Day:"}),Object(n.jsx)("select",{id:"daySelect",className:"form-select",onChange:function(t){return e.selectedDayCallback(t.target.value)},value:e.selectedDay,children:a})]})}function P(e){for(var t=[],a=function(a){t.push(Object(n.jsxs)("button",{className:"btn btn-lg m-2 btn-"+(e.selectedBoxes===a?"primary":"secondary"),onClick:function(){return e.selectedBoxesCallback(a)},children:[a," ",1===a?"box":"boxes",Object(n.jsx)("br",{}),"(",4*a," cookies)"]},a))},r=1;r<=e.availableBoxes;r++)a(r);return Object(n.jsx)(n.Fragment,{children:t})}var z,L=a(29);!function(e){e.ChocChipCookie="CHOC_CHIP_COOKIE",e.AppleCake="APPLE_CAKE",e.AppleBerryCrumbleCookie="APPLE_BERRY_CRUMBLE_COOKIE",e.WhiteChocCranberryCookie="WHITE_CHOC_CRANBERRY_COOKIE"}(z||(z={}));var _,R=function e(t){var a=this;Object(x.a)(this,e),this.stripe=void 0,this.publicKey=void 0,this.init=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)(a.publicKey);case 2:if(null!==(t=e.sent)){e.next=5;break}throw new Error("Unable to load Stripe integration");case 5:a.stripe=t;case 6:case"end":return e.stop()}}),e)}))),this.checkout=function(){var e=Object(h.a)(b.a.mark((function e(t){var r,n,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new Headers).set("Content-Type","application/json"),e.next=4,fetch("https://cookieapi.com/create-session",{method:"POST",body:JSON.stringify({timeslot:t.timeslot.toISOString(),products:[z.ChocChipCookie],boxes:[t.boxes],address:t.address,name:t.name,phone:t.phone,note:t.note,email:t.email,mailingList:t.mailingList}),headers:r});case 4:return n=e.sent,e.next=7,n.json();case 7:if(s=e.sent,null!==a.stripe){e.next=10;break}throw new Error("Stripe didn't init");case 10:return e.next=12,a.stripe.redirectToCheckout({sessionId:s.id});case 12:if(!(c=e.sent).error){e.next=15;break}throw new Error(c.error.message);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.publicKey=t,this.stripe=null};function V(){var e=Object(s.useState)(_.Loading),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(!1),i=Object(u.a)(c,2),l=i[0],o=i[1],d=Object(s.useState)([]),m=Object(u.a)(d,2),j=m[0],x=m[1],O=Object(s.useState)(void 0),p=Object(u.a)(O,2),f=p[0],v=p[1],C=Object(s.useState)(void 0),N=Object(u.a)(C,2),F=N[0],E=N[1],A=Object(s.useState)(void 0),T=Object(u.a)(A,2),I=T[0],D=T[1];switch(Object(s.useEffect)((function(){w().then((function(e){0!=e.length?(x(e),r(_.TimeSlotForm)):r(_.NoFreeTimeslots)})).catch((function(e){console.error("Unable to get free timeslots from cookie API",e),r(_.GetTimeSlotError)}))}),[]),a){case _.Loading:return Object(n.jsx)(K,{});case _.TimeSlotForm:return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(M,{freeTimeSlots:j,callback:function(e){v(e)},initialOrderInfo:f}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-lg btn-success m-2",style:{fontFamily:"Permanent Marker",fontSize:"2em"},onClick:Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=4;break}return e.next=3,B();case 3:o(!0);case 4:r(_.AddressForm);case 5:case"end":return e.stop()}}),e)}))),children:"Continue"})]});case _.AddressForm:return window.location.hash="order_form",Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{htmlFor:"timeSlot",className:"form-label",children:Object(n.jsx)("h3",{className:"mt-2",style:{fontFamily:"Permanent Marker"},children:"Where:"})}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"Address",className:"form-label mt-2",children:"Address:"}),Object(n.jsx)(g,{onValidAddressCallback:function(e){E(e)},onInvalidAddressCallback:function(){console.log("Unable to deliver to this address")},initialAddress:F}),Object(n.jsx)("br",{}),F?null:Object(n.jsx)("b",{className:"mx-2",style:{color:"red"},children:" Add an address to continue"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-lg btn-success m-2",style:{fontFamily:"Permanent Marker",fontSize:"2em"},disabled:void 0===F,onClick:function(){F&&r(_.CustomerForm)},children:"Continue"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-lg btn-secondary m-2",style:{fontFamily:"Permanent Marker"},onClick:function(){return r(_.TimeSlotForm)},children:"Back"})]});case _.CustomerForm:return window.location.hash="order_form",Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{callback:function(e){D(e),r(_.Checkout)},initialCustomerDetails:I}),Object(n.jsx)("button",{className:"btn btn-lg btn-secondary m-2",style:{fontFamily:"Permanent Marker"},onClick:function(){return r(_.AddressForm)},children:"Back"})]});case _.NoFreeTimeslots:return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h3",{style:{fontFamily:"Permanent Marker"},children:"Sorry, we're fully booked week!"}),Object(n.jsxs)("p",{children:["Check back next week for more delivery slots",Object(n.jsx)("br",{}),"\u2b07\ufe0f In the mean time why not sign up for our mailing list for delicious new treat updates \u2b07\ufe0f"]})]});case _.GetTimeSlotError:return Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12 text-center",children:[Object(n.jsx)("h3",{children:"Sorry, the order form isn't working right now, we're having some technical issues!"}),"In the mean time contact us by phone on ",Object(n.jsx)("a",{href:y,children:y})," or email ",Object(n.jsx)("a",{href:k,children:k})," to place an order."]})});case _.Checkout:if(window.location.hash="order_form",!f||!F||!I)throw new Error("Missing order details");return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(q,{orderInfo:f,address:F,customerDetails:I}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-lg btn-success m-2",style:{fontFamily:"Permanent Marker",fontSize:"2em"},onClick:Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:return t=e.sent,e.next=5,t.checkout({timeslot:f.date,boxes:f.boxes,address:F,name:I.name,phone:I.phone,note:I.note,email:I.email,mailingList:I.mailingList});case 5:case"end":return e.stop()}}),e)}))),children:"Checkout"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-lg btn-secondary m-2",style:{fontFamily:"Permanent Marker"},onClick:function(){return r(_.CustomerForm)},children:"Back"})]})}}function B(){return H.apply(this,arguments)}function H(){return(H=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new j.a({apiKey:"AIzaSyAyUpor6TH4ZMVMAjcxfmgTfNRye-mmxco",version:"weekly",libraries:["places","geometry"]}),e.next=3,t.load();case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return G.apply(this,arguments)}function G(){return(G=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new R("pk_live_2ckF2vhFx7O8WUPrBipS2zu3006dxzGcfU"),e.next=3,t.init();case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){e.Loading="LOADING",e.TimeSlotForm="TIMESLOT_FORM",e.AddressForm="ADDRESS_FORM",e.CustomerForm="CUSTOMER_FORM",e.NoFreeTimeslots="NO_FREE_TIMESLOTS",e.GetTimeSlotError="GET_TIME_SLOT_ERROR",e.Checkout="CHECKOUT"}(_||(_={}));var U,K=function(){return Object(n.jsx)("div",{className:"spinner-border",role:"status",children:Object(n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})};function q(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"mt-2",style:{fontFamily:"Permanent Marker"},children:"Your Order:"}),"".concat(e.orderInfo.boxes," ").concat(1===e.orderInfo.boxes?"box":"boxes"," of Giant Milk Chocolate Chip Cookies"),Object(n.jsx)("br",{}),"".concat(e.orderInfo.boxes," x \xa310 per box"),Object(n.jsx)("br",{}),"Total: \xa3".concat(10*e.orderInfo.boxes),Object(n.jsx)("hr",{}),"Delivery date: ".concat(e.orderInfo.date.toDateString()),Object(n.jsx)("br",{}),"Delivery time: ".concat(e.orderInfo.date.toLocaleTimeString()),Object(n.jsx)("br",{}),"Name: ".concat(e.customerDetails.name),Object(n.jsx)("br",{}),"Address: ".concat(e.address),Object(n.jsx)("br",{}),"Phone: ".concat(e.customerDetails.phone),Object(n.jsx)("br",{}),"Email: ".concat(e.customerDetails.email),Object(n.jsx)("br",{}),""!==e.customerDetails.note?'Delivery note: "'.concat(e.customerDetails.note,'"'):null,Object(n.jsx)("br",{})]})}!function(e){e.Empty="EMPTY",e.Invalid="INVALID",e.Valid="VALID",e.Error="ERROR",e.Added="ADDED"}(U||(U={}));var J=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(x.a)(this,a),(r=t.call(this,e)).handleOnChange=function(e){var t=e.target.value;""!==t?!function(e){return/\S+@\S+\.\S+/.test(e)}(t)?r.setState({validEmail:U.Invalid,email:t}):r.setState({validEmail:U.Valid,email:t}):r.setState({validEmail:U.Empty,email:t})},r.state={email:"",validEmail:U.Empty},r}return Object(O.a)(a,[{key:"addToList",value:function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(this.state.email);case 3:this.setState({validEmail:U.Added}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.setState({validEmail:U.Error});case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t="",a=null,r="dark";switch(this.state.validEmail){case U.Empty:break;case U.Invalid:t="is-invalid",a="Please enter a valid email address",r="danger";break;case U.Valid:t="is-valid",r="success";break;case U.Error:return Object(n.jsx)("h3",{style:{fontFamily:"Permanent Marker",color:"red"},children:"Error, please try again later"});case U.Added:return Object(n.jsx)("h3",{style:{fontFamily:"Permanent Marker",color:"green"},children:"Email added, thank you!"})}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"input-group mb-3",children:[Object(n.jsx)("input",{type:"text",onBlur:this.handleOnChange,onChange:this.handleOnChange,className:"form-control "+t,placeholder:"Your email here...","aria-describedby":"button-mailingList"}),Object(n.jsx)("button",{className:"btn btn-"+r,style:{fontFamily:"Permanent Marker"},type:"button",id:"button-mailingList",disabled:this.state.validEmail!==U.Valid,onClick:Object(h.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.addToList();case 2:case"end":return t.stop()}}),t)}))),children:"Join"})]}),Object(n.jsx)("div",{className:"form-text",style:{color:"#dc3545",fontFamily:"Permanent Marker"},children:a})]})}}]),a}(c.a.Component);var Y=function(){return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-12 py-2 mt-2 text-center border border-4 border-dark rounded bg-white",style:{fontFamily:"Permanent Marker"},children:[Object(n.jsxs)("h1",{children:[Object(n.jsx)("img",{src:"https://cookieassets.s3.eu-west-2.amazonaws.com/roguecookie.png",alt:"rogue cookie",width:"10%"})," ","Rogue Treats"," ",Object(n.jsx)("img",{src:"https://cookieassets.s3.eu-west-2.amazonaws.com/roguecookie.png",alt:"rogue cookie",width:"10%"})]}),Object(n.jsx)("h4",{children:"Delicious oven warm cookies delivered around Calne"}),Object(n.jsx)("a",{href:"https://www.instagram.com/roguetreats/",children:Object(n.jsxs)("button",{className:"btn btn-sm btn-primary",children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})," ","Instagram"]})}),Object(n.jsx)("a",{href:"https://www.facebook.com/RogueTreatsCalne",children:Object(n.jsxs)("button",{className:"btn btn-sm btn-primary mx-2",children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})," ","FaceBook"]})})]}),Object(n.jsx)("div",{className:"col-0 col-lg-2 text-center"}),Object(n.jsx)("div",{className:"col-12 col-lg-8 text-center",children:Object(n.jsx)("div",{id:"carouselExampleSlidesOnly",className:"mt-3 carousel slide","data-bs-ride":"carousel","data-bs-interval":"3000","data-bs-pause":"false","data-bs-touch":"true",children:Object(n.jsxs)("div",{className:"carousel-inner",children:[Object(n.jsx)("div",{className:"carousel-item active",children:Object(n.jsx)("img",{src:"https://cookieassets.s3.eu-west-2.amazonaws.com/splitAlpha.png",className:"d-block w-100",alt:"..."})}),Object(n.jsx)("div",{className:"carousel-item",children:Object(n.jsx)("img",{src:"https://cookieassets.s3.eu-west-2.amazonaws.com/boxAlpha.png",className:"d-block w-100",alt:"..."})}),Object(n.jsx)("div",{className:"carousel-item",children:Object(n.jsx)("img",{src:"https://cookieassets.s3.eu-west-2.amazonaws.com/wholeAlpha.png",className:"d-block w-100",alt:"..."})}),Object(n.jsx)("div",{className:"carousel-item",children:Object(n.jsx)("img",{src:"https://cookieassets.s3.eu-west-2.amazonaws.com/box2Alpha.png",className:"d-block w-100",alt:"..."})})]})})}),Object(n.jsxs)("div",{style:{backgroundColor:"rgb(255, 145, 145)"},className:"col-12 text-center mt-3 border border-4 border-dark rounded",children:[Object(n.jsxs)("h4",{style:{color:"black",fontFamily:"Permanent Marker"},children:["\ud83d\udea8 ",Object(n.jsx)("b",{children:"Warning:"})," These cookies are seriously chonky! \ud83d\udea8"]}),Object(n.jsxs)("b",{style:{color:"black"},children:["Enter a time and place and we'll deliver you the best oven fresh cookies in Calne.",Object(n.jsx)("br",{}),"Made with fairtrade, free range ingredients and recyclable packaging."]})]}),Object(n.jsxs)("div",{className:"mt-3 py-2 col-12 border border-4 border-dark rounded",style:{backgroundColor:"#deffd8"},children:[Object(n.jsx)("h2",{className:"text-center",id:"order_form",style:{color:"rgb(17, 147, 6)",fontFamily:"Permanent Marker"},children:"Deliveries on Fridays, order now!"}),Object(n.jsx)(V,{})]}),Object(n.jsxs)("div",{className:"mt-3 col-12 text-center",children:[Object(n.jsx)("img",{className:"mb-3",src:"https://cookieassets.s3.eu-west-2.amazonaws.com/wholeAlpha.png",alt:"One hella chonky cookie",width:"80px"}),Object(n.jsx)("img",{className:"mb-3",src:"https://cookieassets.s3.eu-west-2.amazonaws.com/wholeAlpha.png",alt:"One hella chonky cookie",width:"80px"}),Object(n.jsx)("img",{className:"mb-3",src:"https://cookieassets.s3.eu-west-2.amazonaws.com/wholeAlpha.png",alt:"One hella chonky cookie",width:"80px"})]}),Object(n.jsxs)("div",{className:"mt-3 py-2 col-12 border border-4 border-dark rounded bg-white text-center",children:[Object(n.jsx)("h2",{style:{fontFamily:"Permanent Marker"},children:"Join our mailing list"}),Object(n.jsx)("p",{style:{fontFamily:"Permanent Marker"},children:"We're busy working on expanding our delivery area and adding exciting new flavours. Follow us for updates!"}),Object(n.jsx)(J,{}),Object(n.jsx)("a",{href:"https://www.instagram.com/roguetreats/",children:Object(n.jsxs)("button",{className:"btn btn-lg btn-primary",children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 18 18",children:Object(n.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})," ","Instagram"]})}),Object(n.jsx)("a",{href:"https://www.facebook.com/RogueTreatsCalne",children:Object(n.jsxs)("button",{className:"btn btn-lg btn-primary mx-2",children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 18 18",children:Object(n.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})," ","Facebook"]})})]}),Object(n.jsxs)("div",{className:"mt-3 col-12 text-center",children:[Object(n.jsx)("img",{className:"mb-3",src:"https://cookieassets.s3.eu-west-2.amazonaws.com/wholeAlpha.png",alt:"One hella chonky cookie",width:"80px"}),Object(n.jsx)("img",{className:"mb-3",src:"https://cookieassets.s3.eu-west-2.amazonaws.com/wholeAlpha.png",alt:"One hella chonky cookie",width:"80px"}),Object(n.jsx)("img",{className:"mb-3",src:"https://cookieassets.s3.eu-west-2.amazonaws.com/wholeAlpha.png",alt:"One hella chonky cookie",width:"80px"})]}),Object(n.jsxs)("div",{className:"col-12 py-2 mt-2 border border-4 border-dark rounded bg-white",children:[Object(n.jsx)("h2",{className:"text-center",style:{fontFamily:"Permanent Marker"},children:"Details"}),Object(n.jsxs)("ul",{style:{fontFamily:"Permanent Marker"},children:[Object(n.jsx)("li",{children:"All of our dough is made from scratch and baked to order \ud83e\uddd1\u200d\ud83c\udf73"}),Object(n.jsx)("li",{children:"We deliver cookies warm and gooey, fresh from the oven \ud83d\udd25"}),Object(n.jsx)("li",{children:"We use fairtrade, freerange ingredients, sustainable products and recyclable packaging wherever possible \ud83c\udf0d"}),Object(n.jsx)("li",{children:"We're insured and registered with Wiltshire Council food safety and standards \ud83d\udccb"}),Object(n.jsxs)("li",{children:["Any Questions? Contact us by phone on ",Object(n.jsx)("a",{href:y,children:y})," or email ",Object(n.jsx)("a",{href:k,children:k})," \u2709\ufe0f"]}),Object(n.jsx)("li",{children:"Need a larger / special order for an event? Get in touch! \ud83d\ude0b"})]})]}),Object(n.jsxs)("div",{className:"mt-3 col-12 text-center",children:[Object(n.jsx)("img",{className:"mb-3",src:"https://cookieassets.s3.eu-west-2.amazonaws.com/roguecookie.png",alt:"One hella chonky cookie",width:"20%"}),Object(n.jsx)("h3",{style:{fontFamily:"Permanent Marker"},children:Object(n.jsx)("b",{children:"Rogue Treats 2021"})})]})]})},Q=function(){return Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12 py-2 mt-2 text-center border border-4 border-dark rounded bg-white",style:{fontFamily:"Permanent Marker"},children:[Object(n.jsx)("h1",{style:{color:"green"},children:"Order Success: Cookies Incoming!"}),Object(n.jsx)("h4",{children:"We've sent you an order confirmation email"}),Object(n.jsx)("a",{href:"https://www.instagram.com/roguetreats/",children:Object(n.jsxs)("button",{className:"btn btn-lg btn-primary",children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 18 18",children:Object(n.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})," ","Instagram"]})}),Object(n.jsx)("a",{href:"https://www.facebook.com/RogueTreatsCalne",children:Object(n.jsxs)("button",{className:"btn btn-lg btn-primary mx-2",children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"currentColor",viewBox:"0 0 18 18",children:Object(n.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})," ","Facebook"]})}),Object(n.jsx)("br",{}),Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-lg btn-secondary mt-1",children:"Go Home"})})]})})},Z=function(){return Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12 py-2 mt-2 text-center border border-4 border-dark rounded bg-white",style:{fontFamily:"Permanent Marker"},children:[Object(n.jsx)("h1",{style:{color:"red"},children:"Order Cancelled"}),Object(n.jsx)(o.b,{type:"button",className:"btn btn-success btn-lg mt-2",to:"/",children:"Go Home"})]})})};var $=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("main",{children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/success",children:Object(n.jsx)(Q,{})}),Object(n.jsx)(d.a,{path:"/cancelled",children:Object(n.jsx)(Z,{})}),Object(n.jsx)(d.a,{path:"/",children:Object(n.jsx)(Y,{})})]})})})})};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.0927c802.chunk.js.map