(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7c82"],{"7c82":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"table-responsive-md"},[a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.orders,function(e,s){return a("tr",{key:s},[a("td",[t._v("\n                        "+t._s(t._f("timeFilter")(1e3*e.create_at))+"\n                        "),a("div",{staticClass:"accordion"},[a("div",{staticClass:"collapse my-5",attrs:{id:e.id,"aria-labelledby":"headingOne"}},[a("tr",[t._v("\n                                    地址:"+t._s(e.user.address)+"\n                                ")])])])]),a("td",[t._v("\n                        "+t._s(e.id)+"\n                        "),a("div",{staticClass:"accordion"},[a("div",{staticClass:"collapse my-5",attrs:{id:e.id,"aria-labelledby":"headingOne"}},[a("tr",[t._v("\n                                    電話:"+t._s(e.user.tel)+"\n                                ")])])])]),a("td",{staticClass:"text-left",attrs:{width:"200"}},[t._v("\n                        "+t._s(e.user.name)+"\n                        "),a("div",{staticClass:"accordion"},[a("div",{staticClass:"collapse my-5",attrs:{id:e.id,"aria-labelledby":"headingOne"}},[a("tr",[t._v("\n                                    留言內容:"+t._s(e.message)+"\n                                ")])])])]),a("td",{attrs:{width:"200"}},[a("a",{staticClass:"btn text-primary",attrs:{"data-toggle":"collapse","data-target":"#"+e.id,"aria-expanded":"true","aria-controls":"collapseOne",id:"headingOne"},on:{click:function(a){t.getOneOrder(e.id)}}},[t._v("\n                            購物車細節 "),a("i",{staticClass:"fa fa-angle-down"})]),a("div",{staticClass:"accordion"},[a("div",{staticClass:"collapse",attrs:{id:e.id,"aria-labelledby":"headingOne"}},[t._l(e.products,function(e,s){return a("tr",{key:s},[a("p",[t._v("品名:"+t._s(e.product.title))]),a("p",[t._v("數量:"+t._s(e.qty))])])}),a("tr",[a("p",[t._v("總價:"+t._s(t._f("moneyFilter")(e.total)))])])],2)])]),a("td",[e.is_paid?a("p",{staticClass:"text-success"},[t._v("完成訂單")]):a("p",{staticClass:"text-danger"},[t._v("尚未完成")])]),a("td",[a("button",{staticClass:"btn btn-outline-secondary",on:{click:function(a){t.orderCheck(e.id)}}},[t._v("確認完成訂單")])])])}))])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("訂單時間")]),a("th",[t._v("訂單代碼")]),a("th",[t._v("姓名")]),a("th",{},[t._v("訂單細節")]),a("th",[t._v("付款狀態")]),a("th",{},[t._v("編輯")])])])}],r=(a("cadf"),a("551c"),a("097d"),a("1157")),n=a.n(r),o={data:function(){return{products:[],orders:[],OneOrders:[],orderID:[]}},methods:{getOrder:function(){var t="https://vue-course-api.hexschool.io/api/manias/orders",e=this;this.$http.get(t).then(function(t){e.orders=t.data.orders})},getOneOrder:function(t){console.log(t);var e="https://vue-course-api.hexschool.io/api/manias/order/".concat(t),a=this;this.$http.get(e).then(function(t){console.log(t.data.order),a.OneOrders=t.data.order})},getProducts:function(){var t="https://vue-course-api.hexschool.io/api/manias/products",e=this;e.isLoading=!0,this.$http.get(t).then(function(t){e.products=t.data.products,e.products.reverse()})},getOneProduct:function(t){n()("#shopCart").modal("hide");var e="https://vue-course-api.hexschool.io/api/manias/product/".concat(t.id),a=this;this.$http.get(e).then(function(t){a.oneProduct=t.data.product})},orderCheck:function(t){var e="https://vue-course-api.hexschool.io/api/manias/pay/".concat(t),a=this;this.$http.post(e).then(function(t){console.log(t.data),a.getOrder()})}},created:function(){var t=this;t.getOrder()}},d=o,c=a("2877"),l=Object(c["a"])(d,s,i,!1,null,null,null);l.options.__file="orderPage.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=7c82.4be63f95.js.map