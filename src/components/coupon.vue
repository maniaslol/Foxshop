<template lang="">
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class='text-right mt-4'>
            <button href="#" class="btn btn-primary" @click="openModal(isNew=true)">增加優惠碼</button>
        </div>
        <div class="table-responsive-md">
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th width='150'>優惠名稱</th>
                        <th class="text-center">優惠折扣</th>
                        <th class="text-center">優惠碼</th>
                        <th width='100'>狀態</th>
                        <th class="text-center" width='100'>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(item,key) in coupons'>
                        <td>{{item.title}}</td>
                        <td class="text-center">{{item.percent}}%</td>
                        <td class="text-center">{{item.code}}</td>
                        <td>
                            <span v-if="item.is_enabled==1" class='text-success'>已啟用</span>
                            <span v-else class='text-secondary'>未啟用</span>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-outline-secondary" @click="openModal(isNew=false,item)">編輯</button>
                                <button class="btn btn-danger" @click="delopenModal(isNew=false,item)">刪除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- modal start -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增優惠碼</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="templateCoupon.title">
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category">優惠碼</label>
                                        <input type="text" class="form-control" id="category" placeholder="請輸入優惠碼"
                                            v-model="templateCoupon.code">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">折扣</label>
                                        <input type="unit" class="form-control" id="unit" placeholder="請輸入折扣" v-model="templateCoupon.percent">
                                    </div>
                                </div>
                                <!-- <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="origin_price">原價</label>
                                    <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                                        v-model="templateProduct.origin_price">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="price">售價</label>
                                    <input type="number" class="form-control" id="price" placeholder="請輸入售價" v-model="templateProduct.price">
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="description">產品描述</label>
                                <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                                    v-model="templateProduct.description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="content">說明內容</label>
                                <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容" v-model="templateProduct.content"></textarea>
                            </div> -->
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="is_enabled" v-model="templateCoupon.is_enabled"
                                            :ture-value="1" :false-value="0">
                                        <label class="form-check-label" for="is_enabled">
                                            是否啟用
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updatedCoupon()">確認</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger">{{ templateCoupon.title }}</strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="deleteCoupon()">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    export default {
        data() {
            return {
                coupons: [],
                templateCoupon: {},
                pagination: {},
                isNew: true,
                isLoading: false
            }
        },
        methods: {
            getCoupon() {
                const api = `https://vue-course-api.hexschool.io/api/manias/admin/coupons`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then(response => {
                    console.log(response.data.coupons);
                    vm.coupons = response.data.coupons;
                    vm.coupons.reverse();
                    vm.pagination = response.data.pagination;
                    vm.isLoading = false;
                });
            },
            updatedCoupon() {
                let api = `https://vue-course-api.hexschool.io/api/manias/admin/coupon`;
                const vm = this;
                if (vm.isNew) {
                    vm.isLoading = true;
                    $("#productModal").modal("hide");
                    this.$http.post(api, {
                        data: vm.templateCoupon
                    }).then(response => {
                        console.log(response.data);
                        vm.getCoupon();
                        vm.isLoading = false;
                    })
                } else {
                    api = `https://vue-course-api.hexschool.io/api/manias/admin/coupon/${vm.templateCoupon.id}`;
                    vm.isLoading = true;
                    $("#productModal").modal("hide");
                    this.$http.put(api, {
                        data: vm.templateCoupon
                    }).then(response => {
                        console.log(response.data);
                        vm.getCoupon();
                        vm.isLoading = false;
                    })
                }
            },
            deleteCoupon(){
                const vm = this;
                let api = `https://vue-course-api.hexschool.io/api/manias/admin/coupon/${vm.templateCoupon.id}`;
                $("#delProductModal").modal("hide");
                vm.isLoading = true;
                this.$http.delete(api, {
                        data: vm.templateCoupon
                    }).then(response => {
                        console.log(response.data);
                        vm.getCoupon();
                        vm.isLoading = false;
                    })
            },
            openModal(isNew, item) {
                const vm = this;
                vm.isNew = isNew;
                vm.templateCoupon = Object.assign({}, item); //新增物件也可拿來合併物件
                $("#productModal").modal("show");
            },
            delopenModal(isNew, item) {
                const vm = this;
                vm.templateCoupon = Object.assign({}, item);
                $("#delProductModal").modal("show");
            }
        },
        created() {
            this.getCoupon()
        },
    }
</script>