(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1d0"],{2621:function(t,a){a.f=Object.getOwnPropertySymbols},7333:function(t,a,e){"use strict";var o=e("0d58"),s=e("2621"),n=e("52a7"),i=e("4bf8"),l=e("626a"),d=Object.assign;t.exports=!d||e("79e5")(function(){var t={},a={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach(function(t){a[t]=t}),7!=d({},t)[e]||Object.keys(d({},a)).join("")!=o})?function(t,a){var e=i(t),d=arguments.length,c=1,r=s.f,p=n.f;while(d>c){var u,m=l(arguments[c++]),v=r?o(m).concat(r(m)):o(m),C=v.length,b=0;while(C>b)p.call(m,u=v[b++])&&(e[u]=m[u])}return e}:d},d9c4:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(a){t.openModal(t.isNew=!0)}}},[t._v("增加優惠碼")])]),e("div",{staticClass:"table-responsive-md"},[e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.coupons,function(a,o){return e("tr",[e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.percent)+"%")]),e("td",{staticClass:"text-center"},[t._v(t._s(a.code))]),e("td",[1==a.is_enabled?e("span",{staticClass:"text-success"},[t._v("已啟用")]):e("span",{staticClass:"text-secondary"},[t._v("未啟用")])]),e("td",[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){t.openModal(t.isNew=!1,a)}}},[t._v("編輯")]),e("button",{staticClass:"btn btn-danger",on:{click:function(e){t.delopenModal(t.isNew=!1,a)}}},[t._v("刪除")])])])])}))])]),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.templateCoupon.title,expression:"templateCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.templateCoupon.title},on:{input:function(a){a.target.composing||t.$set(t.templateCoupon,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"category"}},[t._v("優惠碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.templateCoupon.code,expression:"templateCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入優惠碼"},domProps:{value:t.templateCoupon.code},on:{input:function(a){a.target.composing||t.$set(t.templateCoupon,"code",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("折扣")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.templateCoupon.percent,expression:"templateCoupon.percent"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入折扣"},domProps:{value:t.templateCoupon.percent},on:{input:function(a){a.target.composing||t.$set(t.templateCoupon,"percent",a.target.value)}}})])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.templateCoupon.is_enabled,expression:"templateCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","ture-value":1,"false-value":0},domProps:{checked:Array.isArray(t.templateCoupon.is_enabled)?t._i(t.templateCoupon.is_enabled,null)>-1:t.templateCoupon.is_enabled},on:{change:function(a){var e=t.templateCoupon.is_enabled,o=a.target,s=!!o.checked||0;if(Array.isArray(e)){var n=null,i=t._i(e,n);o.checked?i<0&&t.$set(t.templateCoupon,"is_enabled",e.concat([n])):i>-1&&t.$set(t.templateCoupon,"is_enabled",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.templateCoupon,"is_enabled",s)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                                        是否啟用\n                                    ")])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.updatedCoupon()}}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v("\n                    是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.templateCoupon.title))]),t._v(" 商品(刪除後將無法恢復)。\n                ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){t.deleteCoupon()}}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"150"}},[t._v("優惠名稱")]),e("th",{staticClass:"text-center"},[t._v("優惠折扣")]),e("th",{staticClass:"text-center"},[t._v("優惠碼")]),e("th",{attrs:{width:"100"}},[t._v("狀態")]),e("th",{staticClass:"text-center",attrs:{width:"100"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增優惠碼")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(e("f751"),e("1157")),i=e.n(n),l={data:function(){return{coupons:[],templateCoupon:{},pagination:{},isNew:!0,isLoading:!1}},methods:{getCoupon:function(){var t="https://vue-course-api.hexschool.io/api/manias/admin/coupons",a=this;a.isLoading=!0,this.$http.get(t).then(function(t){console.log(t.data.coupons),a.coupons=t.data.coupons,a.coupons.reverse(),a.pagination=t.data.pagination,a.isLoading=!1})},updatedCoupon:function(){var t="https://vue-course-api.hexschool.io/api/manias/admin/coupon",a=this;a.isNew?(a.isLoading=!0,i()("#productModal").modal("hide"),this.$http.post(t,{data:a.templateCoupon}).then(function(t){console.log(t.data),a.getCoupon(),a.isLoading=!1})):(t="https://vue-course-api.hexschool.io/api/manias/admin/coupon/".concat(a.templateCoupon.id),a.isLoading=!0,i()("#productModal").modal("hide"),this.$http.put(t,{data:a.templateCoupon}).then(function(t){console.log(t.data),a.getCoupon(),a.isLoading=!1}))},deleteCoupon:function(){var t=this,a="https://vue-course-api.hexschool.io/api/manias/admin/coupon/".concat(t.templateCoupon.id);i()("#delProductModal").modal("hide"),t.isLoading=!0,this.$http.delete(a,{data:t.templateCoupon}).then(function(a){console.log(a.data),t.getCoupon(),t.isLoading=!1})},openModal:function(t,a){var e=this;e.isNew=t,e.templateCoupon=Object.assign({},a),i()("#productModal").modal("show")},delopenModal:function(t,a){var e=this;e.templateCoupon=Object.assign({},a),i()("#delProductModal").modal("show")}},created:function(){this.getCoupon()}},d=l,c=e("2877"),r=Object(c["a"])(d,o,s,!1,null,null,null);r.options.__file="coupon.vue";a["default"]=r.exports},f751:function(t,a,e){var o=e("5ca1");o(o.S+o.F,"Object",{assign:e("7333")})}}]);
//# sourceMappingURL=chunk-f1d0.f6546688.js.map