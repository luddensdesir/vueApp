webpackJsonp([1],{"/xP9":function(t,e){},0:function(t,e){},"07hb":function(t,e){},"0Bq1":function(t,e){},"1wJs":function(t,e){},"2Bxi":function(t,e,n){t.exports=n.p+"static/img/2.00c29d6.jpg"},"3kDZ":function(t,e){},"4ASm":function(t,e){},"6lUj":function(t,e){},Exij:function(t,e){},FDmO:function(t,e){},GvYg:function(t,e){},"LB+Z":function(t,e){},M1a8:function(t,e,n){t.exports=n.p+"static/img/7.db4a07b.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),o=n.n(r),a=n("NYxO"),s={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"menuButon"},on:{click:this.getMenu}},[this._v("\n  Menu\n")])},staticRenderFns:[]};var i={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"specialsButton"},on:{click:this.getSpecials}},[this._v("\n  Specials\n")])},staticRenderFns:[]};var c={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"popularButton"},on:{click:this.getPopular}},[this._v("\n  Popular\n")])},staticRenderFns:[]};var u={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"aboutButton"}},[this._v("\n  About\n")])},staticRenderFns:[]};var l={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"mapButton"},on:{click:this.getMapData}},[this._v("\n  Map\n")])},staticRenderFns:[]};var d={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"contactButton"},on:{click:this.emptyCart}},[this._v("\n  Contact\n")])},staticRenderFns:[]};var p={name:"Navbar",components:{Menu:n("VU/8")({name:"Menu",data:function(){return{}},computed:{},methods:{getMenu:function(){this.$store.dispatch("retrieveMainMenu")}},created:function(){}},s,!1,function(t){n("xBlA")},"data-v-6fe7293c",null).exports,Specials:n("VU/8")({name:"Specials",data:function(){return{}},computed:{},methods:{getSpecials:function(){this.$store.dispatch("retrieveSpeciallist")}},created:function(){}},i,!1,function(t){n("/xP9")},"data-v-0b9bc148",null).exports,Popular:n("VU/8")({name:"Popular",data:function(){return{}},computed:{},methods:{getPopular:function(){this.$store.dispatch("retrievePopularMenu")}},created:function(){}},c,!1,function(t){n("FDmO")},"data-v-40c04360",null).exports,About:n("VU/8")({name:"About",data:function(){return{}},computed:{},methods:{},created:function(){}},u,!1,function(t){n("jcoh")},"data-v-576d02cc",null).exports,MapInfo:n("VU/8")({name:"MapInfo",data:function(){return{}},computed:{},methods:{getMapData:function(){this.$store.dispatch("getMapData","map")}},created:function(){}},l,!1,function(t){n("1wJs")},"data-v-2334627b",null).exports,Contact:n("VU/8")({name:"Contact",data:function(){return{}},computed:{},methods:{emptyCart:function(){this.$store.commit("emptyCart")}},created:function(){}},d,!1,function(t){n("sXZY")},"data-v-5f35c9bf",null).exports},data:function(){return{}},computed:{cartItems:function(){return this.$store.getters.cart.content},total:function(){return this.$store.getters.cart.total}},methods:o()({},Object(a.b)(["retrieveMap"])),created:function(){}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav col1"},[n("Menu"),t._v(" "),n("Specials"),t._v(" "),n("Popular"),t._v(" "),n("MapInfo"),t._v(" "),n("About"),t._v(" "),n("Contact"),t._v(" "),n("ul",{staticClass:"cart"},[n("li",[n("p",{staticClass:"totalPrice"},[t._v("Total:")]),t._v(" "+t._s(t.total))])])],1)},staticRenderFns:[]};var f=n("VU/8")(p,m,!1,function(t){n("GvYg")},"data-v-222dfc32",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"tab-button",attrs:{id:"orderButton"},on:{click:this.setMainToCheckout}},[this._v("\n  "+this._s(this.total)+" items for $"+this._s(this.price)),e("br"),this._v("\n  Checkout \n")])},staticRenderFns:[]};var v=n("VU/8")({name:"Order",props:["total","price"],data:function(){return{}},computed:{},methods:{setMainToCheckout:function(){this.$store.commit("setMainView","checkout")}},created:function(){}},h,!1,function(t){n("0Bq1")},"data-v-4a27787a",null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"pastOrders"},on:{click:this.getPastOrders}},[this._v("\n  Past Orders\n")])},staticRenderFns:[]};var _={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"addressButton"},on:{click:this.updateAddress}},[this._v("\n  Account\n")])},staticRenderFns:[]};var b={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"emptyButton"},on:{click:this.emptyCart}},[this._v("\n  Empty Cart\n")])},staticRenderFns:[]};var C={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"registerButton"},on:{click:this.setMainToRegister}},[this._v("\n  Register\n")])},staticRenderFns:[]};var $={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"loginButton"},on:{click:this.setMainToLogin}},[this._v("\n  Login\n")])},staticRenderFns:[]};var M={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"tab-button",attrs:{id:"updateButton"},on:{click:this.setMainToUpdate}},[this._v("\n  Update Address\n")])},staticRenderFns:[]};var x={name:"Sidebar",data:function(){return{renderLists:1}},components:{Past:n("VU/8")({name:"Past",data:function(){return{}},computed:{},methods:{getPastOrders:function(){this.$store.dispatch("getPastOrders")}},created:function(){}},g,!1,function(t){n("gMHT")},"data-v-309a13ee",null).exports,Account:n("VU/8")({name:"Account",data:function(){return{}},computed:{},methods:{updateAddress:function(){this.$store.dispatch("updateAddress")}},created:function(){}},_,!1,function(t){n("07hb")},"data-v-869e7baa",null).exports,EmptyCart:n("VU/8")({name:"EmptyCart",data:function(){return{}},computed:{},methods:{emptyCart:function(){this.$store.commit("emptyCart")}},created:function(){}},b,!1,function(t){n("Exij")},"data-v-2cc889a8",null).exports,Register:n("VU/8")({name:"RegisterButton",data:function(){return{}},computed:{},methods:{setMainToRegister:function(){this.$store.commit("setMainView","register")}},created:function(){}},C,!1,function(t){n("XvpD")},"data-v-03ef7fe8",null).exports,Login:n("VU/8")({name:"LoginButton",data:function(){return{}},computed:{},methods:{setMainToLogin:function(){this.$store.commit("setMainView","login")}},created:function(){}},$,!1,function(t){n("pjBp")},"data-v-35e6947a",null).exports,Update:n("VU/8")({name:"UpdateButton",data:function(){return{}},computed:{},methods:{setMainToUpdate:function(){this.$store.commit("setMainView","update")}},created:function(){}},M,!1,function(t){n("6lUj")},"data-v-7e4ba50e",null).exports,Order:v},computed:{cartItems:function(){return this.$store.getters.cart.content},total:function(){return this.$store.getters.cart.content.length},price:function(){return this.$store.getters.cart.total}},beforeUpdate:function(){var t=this.cartItems.length;this.renderLists=t>5?2:t>10?3:1},methods:{getSpecialMenu:function(){console.log("retrieveSpecialist"),this.$store.dispatch("retrieveSpecialist")},testFunc:function(){console.log("test")},removeItem:function(t,e){var n={item:t,index:e};this.$store.dispatch("removeFromCart",n)}},created:function(){}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebarContainer"}},[n("div",{staticClass:"sidebar col1"},[n("Login"),t._v(" "),n("Update"),t._v(" "),n("Register"),t._v(" "),n("h3",[t._v("Account")]),t._v(" "),n("Past"),t._v(" "),n("Account"),t._v(" "),n("EmptyCart"),t._v(" "),n("ul",{staticClass:"cart"},t._l(t.cartItems,function(e,r){return n("li",{key:e.id},[n("span",[t._v(t._s(e.name)),n("br",{staticClass:"priceBreak"}),t._v("+"+t._s(e.price))]),n("div",{staticClass:"buttons"},[n("button",{staticClass:"updateItem"},[t._v("Update")]),n("button",{staticClass:"removeItem",on:{click:function(n){t.removeItem(e,r)}}},[t._v("x")]),n("div",{staticClass:"clear"})])])})),t._v(" "),n("Order",{attrs:{total:t.total,price:t.price}})],1)])},staticRenderFns:[]};var y=n("VU/8")(x,k,!1,function(t){n("q6uH")},"data-v-342872c2",null).exports,F=(n("mvHQ"),function(t,e){for(var n in console.log(e),t)t[n]=n===e;return t}),R=function(){return{token:localStorage.getItem("loginToken")}},U=function(t){for(var e=t.children,n={},r=0;r<e.length-1;r++)n[e[r].name]=e[r].value;return n},I={name:"UpdateInfo",data:function(){return{}},computed:{cartItems:function(){return this.$store.getters.cart.content},total:function(){return this.$store.getters.cart.total}},methods:{updatePersonalInfo:function(t){var e=U(t.target);this.$store.dispatch("updateAccountInfo",{newUserInfo:e,headers:R()})}},created:function(){}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"updateInfo"}},[n("div",[n("form",{staticClass:"signinForm",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.updatePersonalInfo(e)}}},[n("input",{attrs:{type:"text",maxlength:"50",placeholder:"name",name:"name"}}),t._v(" "),n("input",{staticClass:"address",attrs:{type:"text",maxlength:"50",placeholder:"address",name:"address"}}),t._v(" "),n("button",{staticClass:"button btn btn-default",attrs:{type:"Submit"}},[t._v("[confirm update]")])])])])},staticRenderFns:[]};var E=n("VU/8")(I,w,!1,function(t){n("3kDZ")},null,null).exports,P={name:"LoginForm",data:function(){return{}},computed:{},methods:{login:function(t){var e={username:t.target.children[0].value,password:t.target.children[1].value};this.$http.post("users/login",e).then(function(t){localStorage.setItem("loginToken",t.body.token),console.log("loginToken"),console.log(localStorage.getItem("loginToken"))})}},created:function(){}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loginForm"}},[n("div",[n("form",{staticClass:"signinForm",attrs:{id:"loginForm"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.login(e)}}},[n("input",{attrs:{type:"text",maxlength:"50",placeholder:"[login]",name:"login"}}),t._v(" "),n("input",{attrs:{type:"password",maxlength:"32",placeholder:"[password]",name:"password2"}}),t._v(" "),n("button",{staticClass:"button btn btn-default",attrs:{type:"Submit"}},[t._v("[login]")])])])])},staticRenderFns:[]};var A=n("VU/8")(P,S,!1,function(t){n("LB+Z")},null,null).exports,V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"registerForm"}},[n("div",[n("form",{staticClass:"signinForm",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.submitRegistration(e)}}},[n("input",{attrs:{type:"text",maxlength:"50",placeholder:"[name]",name:"name"}}),t._v(" "),n("input",{attrs:{type:"text",maxlength:"16",placeholder:"[username]",name:"username"}}),t._v(" "),n("input",{attrs:{type:"email",placeholder:"[email]",name:"email"}}),t._v(" "),n("input",{attrs:{type:"password",maxlength:"32",placeholder:"[password]",name:"password"}}),t._v(" "),n("input",{attrs:{type:"password",maxlength:"32",placeholder:"[password]",name:"password2"}}),t._v(" "),n("button",{staticClass:"button btn btn-default",attrs:{type:"Submit"}},[t._v("[register]")])])])])},staticRenderFns:[]};var T=n("VU/8")({name:"registerForm",data:function(){return{}},computed:{cartItems:function(){return this.$store.getters.cart.content},total:function(){return this.$store.getters.cart.total}},methods:{},created:function(){}},V,!1,function(t){n("rk1j")},null,null).exports,B={props:["tab"],name:"MenuItem",data:function(){return{}},computed:{},methods:{addToCart:function(t,e){var n=(new Date).getTime();e.date=n,this.$store.commit("addToCart",e)}},created:function(){}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"purchase"},[n("div",{staticClass:"pButton $color4",on:{click:function(e){t.addToCart(e,t.tab)}}},[n("span",[t._v("Add "+t._s(t.tab.name)+" To Cart, For "+t._s(t.tab.price))])])])},staticRenderFns:[]};var O=n("VU/8")(B,j,!1,function(t){n("Z3RE")},"data-v-7294439e",null).exports,L=n("tGse"),D=n.n(L),H=n("2Bxi"),Q=n.n(H),Z=n("lQgp"),q=n.n(Z),W=n("poA4"),N=n.n(W),Y=n("vGcb"),G=n.n(Y),X=n("k9Qt"),J=n.n(X),z=n("M1a8"),K=n.n(z),tt=n("Rc0q"),et=n.n(tt),nt={name:"Main",components:{MenuItem:O},data:function(){return{tabs:ot,currentTab:ot[0]}},methods:{submitRegistration:function(t){var e=this.formToJson(t.target);console.log(e),this.$http.post("users/register",e).then(function(t){utils.setAuthToken(t.body.token)})},updateVal:function(){this.$store.commit("changeValue")}},computed:{menuItems:function(){for(var t=this.$store.getters.menu,e=0;e<t.items.length;e++)t.items[e].image=ot[e].image;return t.items}},beforeCreate:function(){},created:function(){this.$store.dispatch("retrieveMainMenu")}};function rt(t,e){return{name:e,price:0,image:t}}var ot=[];ot.push(rt(D.a,"chicken")),ot.push(rt(Q.a,"happy tots")),ot.push(rt(q.a,"churros")),ot.push(rt(N.a,"sandwich")),ot.push(rt(G.a,"morning")),ot.push(rt(J.a,"ficken")),ot.push(rt(K.a,"strips")),ot.push(rt(et.a,"grilledcheese"));var at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"mainContainer"}},[n("div",{attrs:{id:"main"}},t._l(t.menuItems,function(e,r){return n("div",{key:e.name,class:["item",{col2:r%2==0,col2d:r%2!=0}],on:{click:function(n){t.currentTab=e}}},[n("MenuItem",{attrs:{tab:e}}),t._v(" "),n("img",{attrs:{src:e.image}})],1)}))])},staticRenderFns:[]};var st=n("VU/8")(nt,at,!1,function(t){n("ltpp")},null,null).exports,it={name:"Checkout",methods:{ppcheckout:function(){this.$http.post("checkout/paypal").then(function(t){console.log(t.body.success),window.open(t.body.success,"PayPal","width=420px, height=680px, top="+(window.innerHeight-"680px")/2+", left="+(window.innerWidth-"420px")/2)})},stripecheckout:function(){var t=this;this.$checkout.open({name:"Some sort of food order",currency:"USD",amount:99999,token:function(e){t.$http.post("checkout/stripe",e).then(function(t){console.log(t.body)})}})}},computed:{cartItems:function(){return this.$store.getters.cart.content}},created:function(){}},ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"checkout"}},[e("div",[e("button",{on:{click:this.stripecheckout}},[this._v("Pay With Card")]),this._v(" "),e("button",{on:{click:this.ppcheckout}},[this._v("PayPal")])])])},staticRenderFns:[]};var ut={name:"Map",methods:{},computed:{},beforeCreate:function(){},created:function(){var t=document.createElement("script");t.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=AIzaSyBBPbBPQZ9JIF6QIw3C3Hpqcg89LEzd9IE&callback=initMap&libraries=places"),document.head.appendChild(t)}},lt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"gMap"}})},staticRenderFns:[]};var dt={name:"Munchies",components:{UpdateInfo:E,Checkout:n("VU/8")(it,ct,!1,function(t){n("Sr1X")},null,null).exports,RegisterForm:T,Map:n("VU/8")(ut,lt,!1,function(t){n("c7/4")},null,null).exports,LoginForm:A,Main:st},computed:{checkingOut:function(){return this.$store.getters.selection.checkout},notRegistered:function(){return this.$store.getters.selection.register},notLoggedIn:function(){return this.$store.getters.selection.login},viewingMenu:function(){return this.$store.getters.selection.menu},viewingMap:function(){return this.$store.getters.selection.map},updatingInfo:function(){return this.$store.getters.selection.update}}},pt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("keep-alive",[n("div",{staticClass:"center col5"},[t.checkingOut?n("Checkout"):t._e(),t._v(" "),t.updatingInfo?n("UpdateInfo"):t._e(),t._v(" "),t.notLoggedIn?n("LoginForm"):t._e(),t._v(" "),t.notRegistered?n("RegisterForm"):t._e(),t._v(" "),t.viewingMenu?n("Main"):t._e(),t._v(" "),t.viewingMap?n("Map"):t._e()],1)])},staticRenderFns:[]};var mt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center contact"},[n("h1",[t._v("About Us")]),t._v(" "),n("p",[t._v("Created in 2017, we have never stopped dreaming upthe tastiest meals that everyone could enjoy without fear of being left unsatisfied. ")]),t._v(" "),n("h1",[t._v("Reach Out To Us")]),t._v(" "),n("input",{attrs:{placeholder:"Your name"}}),t._v(" "),n("input",{attrs:{placeholder:"Your email"}}),t._v(" "),n("input",{attrs:{placeholder:"Email subject"}}),t._v(" "),n("textarea",{attrs:{placeholder:"What would you like to tell us?"}})])}]};var ft={name:"App",data:function(){return{sendthis:"passtoChild",value:"0"}},components:{Navbar:f,Sidebar:y,Munchies:n("VU/8")(dt,pt,!1,function(t){n("WmTW")},null,null).exports,Contact:n("VU/8")({},mt,!1,function(t){n("4ASm")},null,null).exports},computed:{cart:function(){return this.$store.getters.cart}},methods:{}},ht={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("Navbar"),this._v(" "),e("Munchies")],1)},staticRenderFns:[]};var vt=n("VU/8")(ft,ht,!1,function(t){n("wv+0")},null,null).exports,gt=n("7+uW"),_t=n("8+8L"),bt=n("EATb");n.d(e,"store",function(){return Mt}),gt.a.config.productionTip=!1;var Ct={key:"pk_test_TQvyHRdUxoRorhFQOAHRNVdq",image:et.a,locale:"auto",currency:"USD",billingAddress:!0,panelLabel:"Subscribe {{amount}}"};function $t(t){return parseFloat(t.toFixed(2))}gt.a.use(a.a),gt.a.use(_t.a),gt.a.use(bt.a,Ct);var Mt=new a.a.Store({state:{cart:{total:0,content:[]},selected:{menu:!0,checkout:!1,register:!1,login:!1,map:!1,update:!1},specials:{meals:[],items:[]},menu:{items:[]}},getters:{selection:function(t){return t.selected},menu:function(t){return t.menu},cart:function(t){return t.cart}},mutations:{setMainView:function(t,e){t.selected=F(t.selected,e)},setupMap:function(t,e){t.selected=F(t.selected,e)},removeItem:function(t,e){t.cart.content.splice(e.index,1),t.cart.total-=$t(e.item.price)},addToCart:function(t,e){t.cart.content.push(e),t.cart.total+=$t(e.price)},emptyCart:function(t,e){t.cart.content=[],t.cart.total=0},changeValue:function(t){t.cart.content.forEach(function(t){t.num=t.num+15})},updateAllPrices:function(t,e){t.menu.items=e,t.selected=F(t.selected,"menu")},updateSpecials:function(t,e){t.selected=F(t.selected,"menu"),t.specials=e}},actions:{getMapData:function(t,e){return gt.a.http.get("/getmap").then(function(n){console.log("getMap"),console.log(n.body),t.commit("setupMap",e)})},updateAccountInfo:function(t,e){return console.log("confirm update"),console.log(e),gt.a.http.get("users/update",e).then(function(e){console.log(e.body),t.commit("confirmInfoUpdate",e.body)})},retrieveMenu:function(t,e){return gt.a.http.get("/menu").then(function(n){console.log(n.body),console.log("retrieveMenu"),t.commit("updateSpecials",e)})},getPastOrders:function(t,e){return gt.a.http.get("users/pastorders",{headers:R()}).then(function(n){console.log(n.body),console.log("getPastOrders"),t.commit("updateSpecials",e)})},retrievePopularOrders:function(t,e){return gt.a.http.get("/popular").then(function(n){console.log(n.body),console.log("retrievePopularOrders"),t.commit("updateSpecials",e)})},retrievePopularMenu:function(t){return gt.a.http.get("/menu/popular").then(function(t){console.log(t.body)})},retrieveMainMenu:function(t){return gt.a.http.get("/menu/all").then(function(e){console.log("retrieveMainMenu"),console.log(e.body),t.commit("updateAllPrices",e.body)})},retrieveSpeciallist:function(t,e){return gt.a.http.get("menu/specials").then(function(t){console.log("retrieveSpeciallist"),console.log(t.body)})},removeFromCart:function(t,e){t.commit("removeItem",e)}}});new gt.a({el:"#app",store:Mt,components:{App:vt},template:"<App/>"})},Rc0q:function(t,e,n){t.exports=n.p+"static/img/8.38ed1dc.jpg"},Sr1X:function(t,e){},WmTW:function(t,e){},XvpD:function(t,e){},Z3RE:function(t,e){},"c7/4":function(t,e){},gMHT:function(t,e){},jcoh:function(t,e){},k9Qt:function(t,e,n){t.exports=n.p+"static/img/6.bdfd13b.jpg"},lQgp:function(t,e,n){t.exports=n.p+"static/img/3.9d02dcd.jpg"},ltpp:function(t,e){},pjBp:function(t,e){},poA4:function(t,e,n){t.exports=n.p+"static/img/4.2bd80a4.jpg"},q6uH:function(t,e){},rk1j:function(t,e){},sXZY:function(t,e){},tGse:function(t,e,n){t.exports=n.p+"static/img/1.998d592.jpg"},vGcb:function(t,e,n){t.exports=n.p+"static/img/5.e629105.jpg"},"wv+0":function(t,e){},xBlA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.30f0bf4cc3d89209e560.js.map