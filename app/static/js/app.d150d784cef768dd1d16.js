webpackJsonp([1],{0:function(t,e){},"2Bxi":function(t,e,n){t.exports=n.p+"static/img/2.00c29d6.jpg"},"5pfn":function(t,e){},M1a8:function(t,e,n){t.exports=n.p+"static/img/7.db4a07b.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),o=n("NYxO"),r={name:"Navbar",data:function(){return{tabs:c,currentTab:c[0]}},computed:{cartItems:function(){return this.$store.getters.cart.content},total:function(){return this.$store.getters.cart.total}},methods:i()({},Object(o.b)(["retrieveMap"])),created:function(){}},c=[{name:"Menu",component:{template:"<div>Kart</div>"}},{name:"Location",component:{template:"<div>About</div>"}},{name:"Payment",component:{template:"<div>About</div>"}},{name:"Address",component:{template:"<div>About</div>"}},{name:"Contact",component:{template:"<div>About</div>"}},{name:"Order Now",component:{template:"<div>About</div>"}},{name:"Sign In",component:{template:"<div>About</div>"}}],s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("ul",t._l(t.tabs,function(e){return n("button",{key:e.name,class:["",{active:t.currentTab.name===e.name}],on:{click:t.retrieveMap}},[t._v(t._s(e.name)+"\n    ")])})),t._v(" "),n("ul",{staticClass:"cart"},[n("li",[t._v(t._s(t.cartItems.length))]),t._v(" "),n("li",[t._v(t._s(t.total))])])])},staticRenderFns:[]};var u=n("VU/8")(r,s,!1,function(t){n("WOOH")},null,null).exports,p={name:"Sidebar",data:function(){return{tabs:m,currentTab:m[0]}},computed:{cartItems:function(){return this.$store.getters.cart.content}},methods:{getSpecialMenu:function(){console.log("retrieveSpecialist"),this.$store.dispatch("retrieveSpecialist")},removeItem:function(t,e){var n={item:t,index:e};this.$store.dispatch("removeFromCart",n)}},created:function(){}},m=[{name:"Specials",component:{template:"<div >Delivery</div>"}},{name:"Past Orders",component:{template:"<div>Delivery</div>"}},{name:"Popular",component:{template:"<div>About</div>"}},{name:"Order Now",component:{template:"<div>Kart</div>"}},{name:"Empty Cart",component:{template:"<div>Kart</div>"}}],l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("h1",[t._v("Sidebar")]),t._v(" "),n("ul",t._l(t.tabs,function(e){return n("button",{key:e.name,class:["tab-button",{active:t.currentTab.name===e.name}],on:{click:t.getSpecialMenu}},[t._v(t._s(e.name)+"\n    ")])})),t._v(" "),n("ul",{staticClass:"cart"},t._l(t.cartItems,function(e,a){return n("li",{key:e.id},[t._v(t._s(e.name)+" + "+t._s(e.price)+"\n      "),n("button",{on:{click:function(n){t.removeItem(e,a)}}},[t._v("x")])])}))])},staticRenderFns:[]};var d=n("VU/8")(p,l,!1,function(t){n("5pfn")},"data-v-3096ad06",null).exports,v=n("tGse"),f=n.n(v),h=n("2Bxi"),g=n.n(h),b=n("lQgp"),_=n.n(b),x=n("poA4"),C=n.n(x),y=n("vGcb"),k=n.n(y),S=n("k9Qt"),A=n.n(S),M=n("M1a8"),T=n.n(M),$=n("Rc0q"),O=n.n($),I={name:"Munchies",data:function(){return{tabs:w,currentTab:w[0]}},computed:{menuItems:function(){for(var t=this.$store.getters.menu,e=0;e<t.items.length;e++)t.items[e].image=w[e].image;return t.items}},methods:{addToCart:function(t,e){var n=(new Date).getTime();e.date=n,this.$emit("itemToCart",e)},updateVal:function(){this.$store.commit("changeValue")}},created:function(){this.$http.get("http://localhost:3000/api/menu").then(function(t){this.$store.commit("updateAllPrices",t.body)})}};function j(t,e){return{name:e,price:0,image:t}}var w=[];w.push(j(f.a,"chicken")),w.push(j(g.a,"happy tots")),w.push(j(_.a,"churros")),w.push(j(C.a,"sandwich")),w.push(j(k.a,"morning")),w.push(j(A.a,"ficken")),w.push(j(T.a,"strips")),w.push(j(O.a,"grilledcheese"));var N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("keep-alive",[n("div",{attrs:{id:"center"}},[n("div",{attrs:{id:"albumcontainer"}},[n("div",{attrs:{id:"album"}},t._l(t.menuItems,function(e){return n("div",{key:e.name,class:["item",{active:t.currentTab.name===e.name}],on:{click:function(n){t.currentTab=e}}},[n("div",{staticClass:"purchase"},[n("div",{staticClass:"pButton",on:{click:function(n){t.addToCart(n,e)}}},[n("span",[t._v("Add "+t._s(e.name)+" To Cart, For"+t._s(e.price))])])]),t._v(" "),n("div",{staticClass:"image"},[n("img",{attrs:{src:e.image}})])])}))])])])},staticRenderFns:[]};var P={name:"App",data:function(){return{sendthis:"passtoChild",value:"0"}},components:{Navbar:u,Sidebar:d,Munchies:n("VU/8")(I,N,!1,function(t){n("yRlk")},null,null).exports},computed:{cart:function(){return this.$store.getters.cart}},methods:{toCart:function(t){this.$store.commit("addToCart",t)}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("Navbar"),this._v(" "),e("Munchies",{on:{itemToCart:this.toCart}})],1)},staticRenderFns:[]};var V=n("VU/8")(P,R,!1,function(t){n("rWen")},null,null).exports,F=n("7+uW"),E=n("8+8L");function W(t){var e=Math.pow(10,0);return Math.round(t*e)/e}n.d(e,"store",function(){return D}),F.a.config.productionTip=!1,F.a.use(o.a),F.a.use(E.a);var D=new o.a.Store({state:{cart:{total:0,content:[]},specials:{meals:[],items:[]},menu:{items:[]}},getters:{menu:function(t){return t.menu},cart:function(t){return t.cart}},mutations:{removeItem:function(t,e){console.log(e.index),t.cart.content.splice(e.index,1),t.cart.total-=W(e.item.price)},addToCart:function(t,e){t.cart.content.push(e),t.cart.total+=W(e.price)},changeValue:function(t){t.cart.content.forEach(function(t){t.num=t.num+15})},updateAllPrices:function(t,e){t.menu.items=e},updateSpecials:function(t,e){t.specials=e}},actions:{retrieveMap:function(t,e){return F.a.http.get("api/getmap").then(function(t){console.log("getMap"),console.log(t.body)})},retrieveMenu:function(t,e){return F.a.http.get("http://localhost:3000/api/menu").then(function(n){console.log(n.body),t.commit("updateSpecials",e)})},retrievePastOrders:function(t,e){return F.a.http.get("http://localhost:3000/api/pastorders").then(function(n){console.log(n.body),t.commit("updateSpecials",e)})},retrievePopularOrders:function(t,e){return F.a.http.get("http://localhost:3000/api/popular").then(function(n){console.log(n.body),t.commit("updateSpecials",e)})},retrieveSpecialist:function(t,e){return F.a.http.get("http://localhost:3000/api/specials").then(function(n){console.log(n.body),t.commit("updateSpecials",e)})},removeFromCart:function(t,e){t.commit("removeItem",e)},changeValue:function(t,e){}}});new F.a({el:"#app",store:D,components:{App:V},template:"<App/>"})},Rc0q:function(t,e,n){t.exports=n.p+"static/img/8.38ed1dc.jpg"},WOOH:function(t,e){},k9Qt:function(t,e,n){t.exports=n.p+"static/img/6.bdfd13b.jpg"},lQgp:function(t,e,n){t.exports=n.p+"static/img/3.9d02dcd.jpg"},poA4:function(t,e,n){t.exports=n.p+"static/img/4.2bd80a4.jpg"},rWen:function(t,e){},tGse:function(t,e,n){t.exports=n.p+"static/img/1.998d592.jpg"},vGcb:function(t,e,n){t.exports=n.p+"static/img/5.e629105.jpg"},yRlk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d150d784cef768dd1d16.js.map