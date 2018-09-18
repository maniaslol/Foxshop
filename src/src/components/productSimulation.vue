<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right">
            <button class="btn btn-primary my-3" @click="getCarts"><i data-feather="shopping-cart"></i>購物車</button>    
        </div>
        <div class="row">
            <div class="col-md-4 mb-3" v-for="(item, index) in products" :key="index">
                <div class="card h-100 border-info">
                    <router-link :to="'/admin/oneProduct/'+item.id">
                        <div style="height: 150px; background-position:cover ; background-repeat:no-repeat; background-position: center;"
                            :style="{backgroundImage:`url(${item.image})`}" alt="Card image cap"></div>
                    </router-link>
                    <div class="card-body text-center mt-auto">
                        <h5 class="card-title text-left">{{item.title}}</h5>
                        <p class="card-text text-left"><del class="text-left">NT{{item.origin_price | moneyFilter}}</del></p>
                        <p class="card-text text-left">NT{{item.price | moneyFilter}}</p>
                        <button href="#" class="btn btn-outline-info w-100" @click="getOneProduct(item)">
                            <i data-feather="shopping-cart"></i> 點選搶購</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增至購物車</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card h-100 border-info">
                                    <div style="height: 300px; background-position:cover ; background-repeat:no-repeat; background-position: center;"
                                        :style="{backgroundImage:`url(${oneProduct.image})`}" alt="Card image cap"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <h2 class="text-left">{{oneProduct.title}}</h2>
                                    <p class="text-left"><del class="text-left">NT{{oneProduct.origin_price |
                                            moneyFilter}}</del></p>
                                    <h3>產品描述</h3>
                                    <hr>
                                    <p>{{oneProduct.content}}</p>
                                    <hr>
                                    <p class="card-text text-left">NT{{oneProduct.price | moneyFilter}}</p>
                                    <div class="btn-group">
                                        <button class="btn btn-secondary" @click="cartNumMinus"><i data-feather="minus"></i></button>
                                        <input type="number" v-model="shopCartNum">
                                        <button class="btn btn-secondary" @click="cartNumPlus"><i data-feather="plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="addCart(oneProduct.id,shopCartNum)">新增至購物車</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- shopCart ----------------------------------------->

        <div class="modal fade" id="shopCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>購物車</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <!-- <div class="card h-100 border-info">
                                    <div style="height: 300px; background-position:cover ; background-repeat:no-repeat; background-position: center;"
                                        :style="{backgroundImage:`url(${shopCartList.product.image})`}" alt="Card image cap"></div>
                                </div> -->
                            </div>
                            <div class="col-md-12">
                                <table class="table">
                                    <tbody>
                                        <tr v-for="(item, index) in shopCartList" :key="index">
                                            <td><button class="btn btn-outline-danger" @click="removeCart(item.id)">刪除</button></td>
                                            <td>
                                                <a href="#"  @click.prevent=getOneProduct(item.product)>
                                                    <div style="height: 48px; width:56px; background-position:cover ; background-repeat:no-repeat; background-position: center;"
                                                    :style="{backgroundImage:`url(${item.product.image})`}" alt="Card image cap"></div>
                                                </a>
                                                
                                            </td>
                                            <td>{{item.product.title}}</td>
                                            <td>數量:{{item.qty}}</td>
                                            <td class="text-right">NT{{item.product.price | moneyFilter}}</td>
                                            <td class="text-right">NT{{item.product.price * item.qty | moneyFilter}}</td>
                                        </tr>
                                        <tr class="w-100" v-if="total!=0">
                                            <td>總價</td>
                                            <td class="text-right" colspan=5>{{total | moneyFilter}}</td>
                                        </tr>
                                        <tr>
                                            <td v-if="total!=final_total" class="text-success">優惠價</td>
                                            <td v-if="total!=final_total" colspan=5 class="text-right text-success">{{final_total | moneyFilter}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="form-group inline">
                           <label for="coupon">使用優惠券:</label> 
                        </div>
                        <div class="form-group inline">
                            <input type="text" class="form-control" id="coupon" v-model="couponCode" placeholder="優惠券代碼">   
                        </div>
                        <div class="form-group inline">
                            <button type="button" class="btn btn-outline-success" @click='useCoupon()'>套用優惠券</button>
                            <button type="button" class="btn btn-outline-secondary ml-2" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary ml-2" @click="toChickOut">確認購買</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import Icons from "../icon/feather.min.js";
    export default {
        data() {
            return {
                products: [],
                oneProduct: [],
                shopCartNum: 1,
                shopCartList: [],
                couponCode:'',
                total: "",
                final_total: '',
                pagination: {},
                isNew: false,
                isLoading: false,
                LoadingIcon: false
            };
        },
        methods: {
            getProducts() {
                const api = `https://vue-course-api.hexschool.io/api/manias/products`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then(response => {
                    vm.products = response.data.products;
                    vm.products.reverse();
                    vm.pagination = response.data.pagination;
                    vm.isLoading = false;
                });
            },
            getOneProduct(item) {
                $("#shopCart").modal("hide");
                console.log()
                const api = `https://vue-course-api.hexschool.io/api/manias/product/${item.id}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then(response => {
                    vm.oneProduct = response.data.product;
                    vm.isLoading = false;
                    $("#productModal").modal("show");
                });
            },
            getCarts() {
                const api = `https://vue-course-api.hexschool.io/api/manias/cart`;
                const vm = this;
                this.$http.get(api).then(response => {
                    console.log(response.data);
                    vm.shopCartList = response.data.data.carts;
                    vm.total = response.data.data.total;
                    vm.final_total = response.data.data.final_total;
                    $("#shopCart").modal("show");
                });
            },
            addCart(id, qty = 1) {
                $("#productModal").modal("hide");
                console.log(id, qty)
                const api = `https://vue-course-api.hexschool.io/api/manias/cart`;
                const vm = this;
                const cart = {
                    product_id: id,
                    qty
                };
                this.$http.post(api, {
                    data: cart
                }).then(response => {
                    console.log(response.data);
                    vm.getCarts();
                    $("#shopCart").modal("show");
                });
            },
            removeCart(id) {
                console.log(id)
                const api = `https://vue-course-api.hexschool.io/api/manias/cart/${id}`;
                const vm = this;
                this.$http.delete(api).then(response => {
                    console.log(response.data);
                    vm.getCarts();
                    $("#shopCart").modal("show");
                });
            },
            useCoupon(){
                const api = `https://vue-course-api.hexschool.io/api/manias/coupon`;
                const vm = this;
                const code = vm.couponCode;
                console.log(code);
                this.$http.post(api,{data:{code:code}}).then(response => {
                    console.log(response.data);
                    vm.getCarts();
                })
            },
            cartNumPlus() {
                const vm = this;
                vm.shopCartNum = parseInt(vm.shopCartNum) + 1
            },
            cartNumMinus() {
                const vm = this;
                if (vm.shopCartNum <= 1) {
                    return
                };
                vm.shopCartNum = parseInt(vm.shopCartNum) - 1
            },
            toChickOut(){
                $("#shopCart").modal("hide");
                this.$router.push("/admin/checkOut")
            }
        },
        created() {
            this.getProducts();
        },
        updated() {
            feather.replace();
        },
        mounted() {}
    };
</script>
<style>
    .feather {
        width: 20px;
        height: 20px;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        margin: 0 4px;
    }
</style>