(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec3"],{"266e":function(t,a,o){"use strict";var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("nav",{staticClass:"navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow text-center fixed-top"},[o("router-link",{staticClass:"mr-0 p-2 p-lg-4 navbar-brand col-md-4 col-lg-2",attrs:{to:"/"}},[o("span",[t._v("小YUYU服飾")]),o("i",{staticClass:"ml-2 fab fa-firefox"})]),o("div",{staticClass:"navbar-nav px-3 d-flex mr-auto"},[o("div",{staticClass:"nav-item text-nowrap row"},[o("router-link",{staticClass:"nav-link mx-3",attrs:{to:"/"}},[t._v("首頁123")]),o("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.manCategory}},[t._v("男士")]),o("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.womanCategory}},[t._v("女士")]),o("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.hatCategory}},[t._v("帽子")]),o("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.headsetCategory}},[t._v("耳機")]),o("a",{staticClass:"nav-link mx-3",attrs:{href:"#"},on:{click:t.goodCategory}},[t._v("超級好棒棒")])],1)]),o("div",{staticClass:"input-group navbar-btn-hover"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWord,expression:"searchWord"}],staticClass:"h-100 navbar-btn-dnone",attrs:{type:"text",placeholder:"搜尋商品","aria-label":"search","aria-describedby":"basic-addon2"},domProps:{value:t.searchWord},on:{input:function(a){a.target.composing||(t.searchWord=a.target.value)}}}),o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.search}},[o("i",{staticClass:"fas fa-search"})])]),o("ul",{staticClass:"navbar-nav px-3"},[o("li",{staticClass:"nav-item text-nowrap"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/login",href:"#"}},[t._v("登入")])],1)])],1)])},e=[],i=(o("cadf"),o("551c"),o("097d"),o("1157")),r=o.n(i),n={name:"navbar",props:{msg:String},data:function(){return{searchWord:"",categorySearchWord:""}},methods:{search:function(){this.$emit("searchProp",this.searchWord),""!==this.searchWord&&this.toMain()},manCategory:function(){this.$router.push("/"),this.categorySearchWord="男士",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},womanCategory:function(){this.$router.push("/"),this.categorySearchWord="女士",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},hatCategory:function(){this.$router.push("/"),this.categorySearchWord="帽子",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},headsetCategory:function(){this.$router.push("/"),this.categorySearchWord="耳機",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},goodCategory:function(){this.$router.push("/"),this.categorySearchWord="超級好棒棒",this.$emit("categoryProp",this.categorySearchWord),this.toMain()},signout:function(){var t="https://vue-course-api.hexschool.io/logout",a=this;a.$http.post(t).then(function(t){console.log(t.data),a.$router.push("/")})},toMain:function(){r()("html, body").animate({scrollTop:600},1e3)}}},c=n,l=(o("88e7"),o("2877")),d=Object(l["a"])(c,s,e,!1,null,"520b23f8",null);d.options.__file="clientNavbar.vue";a["a"]=d.exports},"7fcf":function(t,a,o){},"88e7":function(t,a,o){"use strict";var s=o("7fcf"),e=o.n(s);e.a},ad01:function(t,a,o){"use strict";o.r(a);var s=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("div",{staticClass:"shopcart"},[o("button",{staticClass:"btn btn-info my-3",on:{click:t.getCarts}},[o("i",{attrs:{"data-feather":"shopping-cart"}}),t._v("購物車\n            "),t.shopCartList.length>0?o("span",[t._v("("+t._s(t.shopCartList.length)+")")]):t._e()])]),o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticStyle:{height:"400px","background-position":"center","background-repeat":"no-repeat"},style:{backgroundImage:"url("+t.oneProduct.image+")"},attrs:{alt:"Card image cap"}})]),o("div",{staticClass:"col-md-6 mt-5"},[o("h5",{staticClass:"card-title text-left"},[t._v(t._s(t.oneProduct.title))]),o("p",{staticClass:"card-text text-left"},[o("del",{staticClass:"text-left"},[t._v("NT"+t._s(t._f("moneyFilter")(t.oneProduct.origin_price)))])]),o("p",{staticClass:"card-text text-left"},[t._v("NT"+t._s(t._f("moneyFilter")(t.oneProduct.price)))]),o("div",{staticClass:"btn-group"},[o("button",{staticClass:"btn btn-secondary",on:{click:t.cartNumMinus}},[o("i",{attrs:{"data-feather":"minus"}})]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.shopCartNum,expression:"shopCartNum"}],attrs:{type:"number"},domProps:{value:t.shopCartNum},on:{input:function(a){a.target.composing||(t.shopCartNum=a.target.value)}}}),o("button",{staticClass:"btn btn-secondary",on:{click:t.cartNumPlus}},[o("i",{attrs:{"data-feather":"plus"}})])]),o("button",{staticClass:"btn btn-outline-info w-100 my-5",attrs:{href:"#"},on:{click:function(a){t.addCart(t.oneProduct.id,t.shopCartNum)}}},[o("i",{attrs:{"data-feather":"shopping-cart"}}),t._v(" 加入購物車")])])])]),o("div",{staticClass:"modal fade",attrs:{id:"shopCart",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[o("div",{staticClass:"modal-content border-0"},[t._m(0),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"}),o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"text-center"},[t.error?o("span",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e()]),o("table",{staticClass:"table"},[o("tbody",[t._l(t.shopCartList,function(a,s){return o("tr",{key:s},[o("td",[o("button",{staticClass:"btn btn-outline-danger",on:{click:function(o){t.removeCart(a.id)}}},[t._v("刪除")])]),o("td",[o("a",{attrs:{href:"#"},on:{click:function(o){o.preventDefault(),t.getOneProduct(a.product)}}},[o("div",{staticStyle:{height:"48px",width:"56px","background-position":"center","background-repeat":"no-repeat"},style:{backgroundImage:"url("+a.product.image+")"},attrs:{alt:"Card image cap"}})])]),o("td",[t._v(t._s(a.product.title))]),o("td",[t._v("數量:"+t._s(a.qty))]),o("td",{staticClass:"text-right"},[t._v("NT"+t._s(t._f("moneyFilter")(a.product.price)))]),o("td",{staticClass:"text-right"},[t._v("NT"+t._s(t._f("moneyFilter")(a.product.price*a.qty)))])])}),0!=t.total?o("tr",{staticClass:"w-100"},[o("td",[t._v("總價")]),o("td",{staticClass:"text-right",attrs:{colspan:"5"}},[t._v(t._s(t._f("moneyFilter")(t.total)))])]):t._e(),o("tr",[t.total!=t.final_total?o("td",{staticClass:"text-success"},[t._v("優惠價")]):t._e(),t.total!=t.final_total?o("td",{staticClass:"text-right text-success",attrs:{colspan:"5"}},[t._v(t._s(t._f("moneyFilter")(t.final_total)))]):t._e()])],2)])])])]),o("div",{staticClass:"modal-footer"},[t._m(1),o("div",{staticClass:"form-group inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",id:"coupon",placeholder:"優惠券代碼"},domProps:{value:t.couponCode},on:{input:function(a){a.target.composing||(t.couponCode=a.target.value)}}})]),o("div",{staticClass:"form-group inline"},[o("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(a){t.useCoupon()}}},[t._v("套用優惠券")]),o("button",{staticClass:"btn btn-outline-secondary ml-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),o("button",{staticClass:"btn btn-primary ml-2",attrs:{type:"button"},on:{click:t.toChickOut}},[t._v("確認購買")])])])])])])],1)},e=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"modal-header bg-dark text-white"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[o("span",[t._v("購物車")])]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"form-group inline"},[o("label",{attrs:{for:"coupon"}},[t._v("使用優惠券:")])])}],i=(o("a481"),o("1157")),r=o.n(i),n=(o("266e"),{data:function(){return{products:[],oneProduct:[],shopCartNum:1,shopCartList:[],couponCode:"",total:"",final_total:"",pagination:{},isNew:!1,error:"",isLoading:!1,LoadingIcon:!1}},methods:{getOneProduct:function(){var t=this.$route.params;console.log(t);var a="https://vue-course-api.hexschool.io/api/manias/product/".concat(t.id),o=this;o.isLoading=!0,this.$http.get(a).then(function(t){console.log(t.data),o.oneProduct=t.data.product,o.isLoading=!1})},getCartsList:function(){var t="https://vue-course-api.hexschool.io/api/manias/cart",a=this;a.error="",this.$http.get(t).then(function(t){console.log(t.data),a.shopCartList=t.data.data.carts,a.total=t.data.data.total,a.final_total=t.data.data.final_total})},getCarts:function(){var t="https://vue-course-api.hexschool.io/api/manias/cart",a=this;a.error="",this.$http.get(t).then(function(t){console.log(t.data),a.shopCartList=t.data.data.carts,a.total=t.data.data.total,a.final_total=t.data.data.final_total,r()("#shopCart").modal("show")})},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;r()("#productModal").modal("hide"),console.log(t,a);var o="https://vue-course-api.hexschool.io/api/manias/cart",s=this,e={product_id:t,qty:a};this.$http.post(o,{data:e}).then(function(t){console.log(t.data),s.getCarts(),r()("#shopCart").modal("show")})},removeCart:function(t){console.log(t);var a="https://vue-course-api.hexschool.io/api/manias/cart/".concat(t),o=this;this.$http.delete(a).then(function(t){console.log(t.data),o.getCarts(),r()("#shopCart").modal("show")})},useCoupon:function(){var t="https://vue-course-api.hexschool.io/api/manias/coupon",a=this,o=a.couponCode;console.log(o),this.$http.post(t,{data:{code:o}}).then(function(t){console.log(t.data),a.getCarts()})},cartNumPlus:function(){var t=this;t.shopCartNum=parseInt(t.shopCartNum)+1},cartNumMinus:function(){var t=this;t.shopCartNum<=1||(t.shopCartNum=parseInt(t.shopCartNum)-1)},toChickOut:function(){var t=this;0!==t.shopCartList.length?(r()("#shopCart").modal("hide"),this.$router.push("/checkOut")):t.error="還未選購商品"}},updated:function(){feather.replace()},created:function(){this.getCartsList(),this.getOneProduct()}}),c=n,l=o("2877"),d=Object(l["a"])(c,s,e,!1,null,null,null);d.options.__file="clientOneProduct.vue";a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-4ec3.f99e572b.js.map