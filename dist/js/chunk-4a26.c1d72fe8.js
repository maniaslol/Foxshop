(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a26"],{"266e":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow text-center fixed-top"},[e("router-link",{staticClass:"mr-0 p-2 p-lg-4 navbar-brand col-md-4 col-lg-2",attrs:{to:"/"},on:{click:function(a){return a.preventDefault(),t.toHome(a)}}},[e("span",[t._v("小YUYU服飾")]),e("i",{staticClass:"ml-2 fab fa-firefox"})]),e("div",{staticClass:"navbar-nav px-3 d-flex mr-auto"},[e("div",{staticClass:"nav-item text-nowrap row"},[e("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.toHome(a)}}},[t._v("首頁")]),e("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.manCategory}},[t._v("男士")]),e("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.womanCategory}},[t._v("女士")]),e("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.hatCategory}},[t._v("帽子")]),e("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.headsetCategory}},[t._v("耳機")]),e("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.goodCategory}},[t._v("超級好棒棒")])])]),e("div",{staticClass:"input-group navbar-btn-hover"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWord,expression:"searchWord"}],staticClass:"h-100 navbar-btn-dnone",attrs:{type:"text",placeholder:"搜尋商品","aria-label":"search","aria-describedby":"basic-addon2"},domProps:{value:t.searchWord},on:{input:function(a){a.target.composing||(t.searchWord=a.target.value)}}}),e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.search}},[e("i",{staticClass:"fas fa-search"})])]),e("ul",{staticClass:"navbar-nav px-3"},[e("li",{staticClass:"nav-item text-nowrap"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/login",href:"#"}},[t._v("登入")])],1)])],1)])},r=[],o=(e("386d"),e("cadf"),e("551c"),e("097d"),e("1157")),i=e.n(o),n={name:"navbar",props:{msg:String},data:function(){return{searchWord:"",categorySearchWord:""}},methods:{search:function(){this.$emit("searchProp",this.searchWord),""!==this.searchWord&&this.toMain()},manCategory:function(){this.$router.push("/"),this.categorySearchWord="男士",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},womanCategory:function(){this.$router.push("/"),this.categorySearchWord="女士",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},hatCategory:function(){this.$router.push("/"),this.categorySearchWord="帽子",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},headsetCategory:function(){this.$router.push("/"),this.categorySearchWord="耳機",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},goodCategory:function(){this.$router.push("/"),this.categorySearchWord="超級好棒棒",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},signout:function(){var t="https://vue-course-api.hexschool.io/logout",a=this;a.$http.post(t).then(function(t){console.log(t.data),a.$router.push("/")})},toMain:function(){i()("html, body").animate({scrollTop:600},1e3)},toHome:function(){this.searchWord="",this.search(),i()("html, body").animate({scrollTop:0},1e3)}}},l=n,c=(e("70ee"),e("2877")),d=Object(c["a"])(l,s,r,!1,null,"629e898f",null);d.options.__file="clientNavbar.vue";a["a"]=d.exports},"386d":function(t,a,e){e("214f")("search",1,function(t,a,e){return[function(e){"use strict";var s=t(this),r=void 0==e?void 0:e[a];return void 0!==r?r.call(e,s):new RegExp(e)[a](String(s))},e]})},"70ee":function(t,a,e){"use strict";var s=e("77fa"),r=e.n(s);r.a},"77fa":function(t,a,e){},"7f7f":function(t,a,e){var s=e("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in r||e("9e1e")&&s(r,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},8160:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("navbar"),e("div",{staticClass:"container"},[e("checkOut")],1),e("footer",{staticClass:"text-sm-center bg-secondary p-5 mt-5 text-white"},[e("div",{staticClass:"border-dark-u"},[t._v("小YUYU購物網")]),t._m(0),e("p",[e("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.toTOP()}}},[t._v("Back to top")])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("a",{staticClass:"text-white",attrs:{href:"https://twitter.com/mdo"}},[t._v("聯絡我們")])])}],o=e("266e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"text-center mt-10"},[t._v("結帳")]),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-md-4 offset-md-4 mt-3"},[e("div",{staticClass:"text-center alert alert-info"},[t._v("請輸入訂單資料")]),t.errorMessage?e("div",{staticClass:"text-center alert alert-danger"},[t._v(t._s(t.errorMessage))]):t._e()]),e("div",{staticClass:"col-md-8 offset-md-2"},[e("div",{staticClass:"accordion",attrs:{id:"accordion"}},[e("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[e("h5",{staticClass:"mb-0 row align-items-center"},[t._m(0),e("p",{staticClass:"col-2 ml-auto my-auto"},[t._v(t._s(t._f("moneyFilter")(t.final_total)))])])]),e("div",{staticClass:"collapse show",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[e("div",{staticClass:"card-body"},[e("table",{staticClass:"table"},[e("tbody",[t._l(t.shopCartList,function(a,s){return e("tr",{key:s},[e("td",[e("button",{staticClass:"btn btn-outline-danger",on:{click:function(e){t.removeCart(a.id)}}},[t._v("刪除")])]),e("td",[e("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getOneProduct(a.product)}}},[e("div",{staticStyle:{height:"48px",width:"56px","background-position":"center","background-repeat":"no-repeat"},style:{backgroundImage:"url("+a.product.image+")"},attrs:{alt:"Card image cap"}})])]),e("td",[t._v(t._s(a.product.title))]),e("td",[t._v("數量:"+t._s(a.qty))]),e("td",{staticClass:"text-right"},[e("del",[t._v("NT"+t._s(t._f("moneyFilter")(a.product.price)))])]),e("td",{staticClass:"text-right"},[t._v("NT"+t._s(t._f("moneyFilter")(a.product.price*a.qty)))])])}),0!=t.total?e("tr",{staticClass:"w-100"},[e("td",[t._v("總價")]),e("td",{staticClass:"text-right",attrs:{colspan:"5"}},[t._v(" "+t._s(t._f("moneyFilter")(t.total)))])]):t._e(),e("tr",[t.total!=t.final_total?e("td",{staticClass:"text-success"},[t._v("優惠價")]):t._e(),t.total!=t.final_total?e("td",{staticClass:"text-right text-success",attrs:{colspan:"5"}},[t._v(t._s(t._f("moneyFilter")(t.final_total)))]):t._e()])],2)])])])]),e("h2",{staticClass:"text-center mt-5"},[t._v("訂購人訊息")]),e("form",[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"name"}},[t._v("姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"name",type:"name",id:"name",placeholder:"姓名"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t.errors.has("name")?e("span",{staticClass:"text-danger"},[t._v("姓名必須被輸入")]):t._e()]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputEmail4"}},[t._v("信箱")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{name:"email",type:"email",id:"inputEmail4",placeholder:"信箱",required:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))])]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputtel"}},[t._v("電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"},{name:"validate",rawName:"v-validate",value:"required|tel",expression:"'required|tel'"}],staticClass:"form-control",attrs:{name:"tel",type:"tel",id:"inputtel",placeholder:"電話"},domProps:{value:t.tel},on:{input:function(a){a.target.composing||(t.tel=a.target.value)}}}),t.errors.has("tel")?e("span",{staticClass:"text-danger"},[t._v("請輸入電話")]):t._e()]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"address"}},[t._v("地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"},{name:"validate",rawName:"v-validate",value:"required|address",expression:"'required|address'"}],staticClass:"form-control",attrs:{name:"address",type:"address",id:"address",placeholder:"地址"},domProps:{value:t.address},on:{input:function(a){a.target.composing||(t.address=a.target.value)}}}),t.errors.has("address")?e("span",{staticClass:"text-danger"},[t._v("請輸入地址")]):t._e()]),e("div",{staticClass:"form-group col-md-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{type:"text",id:"text",placeholder:"留言給我們"},domProps:{value:t.message},on:{input:function(a){a.target.composing||(t.message=a.target.value)}}})])]),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(a){t.checkOut()}}},[t._v("送出訂單")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card h-100 border-info"},[e("div",{staticStyle:{height:"300px","background-position":"center","background-repeat":"no-repeat"},style:{backgroundImage:"url("+t.oneProduct.image+")"},attrs:{alt:"Card image cap"}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"form-group"},[e("h2",{staticClass:"text-left"},[t._v(t._s(t.oneProduct.title))]),e("p",{staticClass:"text-left"},[e("del",{staticClass:"text-left"},[t._v("NT"+t._s(t._f("moneyFilter")(t.oneProduct.origin_price)))])]),e("h3",[t._v("產品描述")]),e("hr"),e("p",[t._v(t._s(t.oneProduct.content))]),e("hr"),e("p",{staticClass:"card-text text-left"},[t._v("NT"+t._s(t._f("moneyFilter")(t.oneProduct.price)))]),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-secondary",on:{click:t.cartNumMinus}},[e("i",{attrs:{"data-feather":"minus"}})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.shopCartNum,expression:"shopCartNum"}],attrs:{type:"number"},domProps:{value:t.shopCartNum},on:{input:function(a){a.target.composing||(t.shopCartNum=a.target.value)}}}),e("button",{staticClass:"btn btn-secondary",on:{click:t.cartNumPlus}},[e("i",{attrs:{"data-feather":"plus"}})])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.addCart(t.oneProduct.id,t.shopCartNum)}}},[t._v("新增至購物車")])])])])]),t._m(2)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"btn text-primary col-2",attrs:{"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                            購物車細節 "),e("i",{staticClass:"fa fa-angle-down"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增至購物車")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"checkSuccess",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[e("div",{staticClass:"modal-body bg-dark text-white row"},[e("span",{staticClass:"col my-auto"},[t._v("送出訂單")]),e("button",{staticClass:"btn btn-secondary col-2 ml-auto",attrs:{type:"button","data-dismiss":"modal"}},[t._v("確定")])])])])])}],l=(e("7f7f"),e("1157")),c=e.n(l),d={data:function(){return{shopCartList:[],oneProduct:[],total:"",final_total:"",shopCartNum:"1",name:"",email:"",tel:"",address:"",message:"",errorMessage:""}},methods:{getCarts:function(){var t="https://vue-course-api.hexschool.io/api/manias/cart",a=this;this.$http.get(t).then(function(t){console.log(t.data),a.shopCartList=t.data.data.carts,a.total=t.data.data.total,a.final_total=t.data.data.final_total})},getOneProduct:function(t){console.log();var a="https://vue-course-api.hexschool.io/api/manias/product/".concat(t.id),e=this;this.$http.get(a).then(function(t){e.oneProduct=t.data.product,c()("#productModal").modal("show")})},removeCart:function(t){console.log(t);var a="https://vue-course-api.hexschool.io/api/manias/cart/".concat(t),e=this;this.$http.delete(a).then(function(t){console.log(t.data),e.getCarts()})},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;c()("#productModal").modal("hide"),console.log(t,a);var e="https://vue-course-api.hexschool.io/api/manias/cart",s=this,r={product_id:t,qty:a};this.$http.post(e,{data:r}).then(function(t){s.getCarts(),c()("#shopCart").modal("show")})},cartNumPlus:function(){var t=this;t.shopCartNum=parseInt(t.shopCartNum)+1},cartNumMinus:function(){var t=this;t.shopCartNum<=1||(t.shopCartNum=parseInt(t.shopCartNum)-1)},checkOut:function(){var t=this,a=this,e="https://vue-course-api.hexschool.io/api/manias/order",s=a.name,r=a.email,o=a.tel,i=a.address,n=a.message,l={data:{user:{name:s,email:r,tel:o,address:i},message:n}};this.$validator.validate().then(function(s){s?t.$http.post(e,l).then(function(t){console.log(t.data),t.data.success?(a.getCarts(),c()("#checkSuccess").modal("show")):a.errorMessage="購買失敗"}):a.errorMessage="請填寫完整資料"})}},created:function(){this.getCarts()}},u=d,m=(e("fb20"),e("2877")),p=Object(m["a"])(u,i,n,!1,null,null,null);p.options.__file="clientCheckOut.vue";var h=p.exports,v={components:{checkOut:h,navbar:o["a"]},methods:{toTOP:function(){c()("html, body").animate({scrollTop:0},1e3)}}},f=v,g=Object(m["a"])(f,s,r,!1,null,null,null);g.options.__file="checkOut.vue";a["default"]=g.exports},a554:function(t,a,e){},fb20:function(t,a,e){"use strict";var s=e("a554"),r=e.n(s);r.a}}]);
//# sourceMappingURL=chunk-4a26.c1d72fe8.js.map