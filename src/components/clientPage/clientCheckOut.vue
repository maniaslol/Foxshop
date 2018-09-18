<template>
    <div>
        <h1 class="text-center mt-10">結帳</h1>
        <div class="row mb-5">
            <div class="col-md-4 offset-md-4 mt-3">
                <div class="text-center alert alert-info">請輸入訂單資料</div>
                <div class="text-center alert alert-danger" v-if="errorMessage">{{errorMessage}}</div>
            </div>
            <div class="col-md-8 offset-md-2">
                <div class="accordion" id="accordion">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0 row align-items-center">
                            <a class="btn text-primary col-2" data-toggle="collapse" data-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                購物車細節 <i class="fa fa-angle-down"></i>
                            </a>
                            <p class="col-2 ml-auto my-auto">{{final_total | moneyFilter}}</p>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                            <table class="table">
                                <tbody>
                                    <tr v-for="(item, index) in shopCartList" :key="index">
                                        <td><button class="btn btn-outline-danger" @click="removeCart(item.id)">刪除</button></td>
                                        <td>
                                            <a href="#" @click.prevent=getOneProduct(item.product)>
                                                <div style="height: 48px; width:56px; background-position:cover ; background-repeat:no-repeat; background-position: center;"
                                                    :style="{backgroundImage:`url(${item.product.image})`}" alt="Card image cap"></div>
                                            </a>
                                        </td>
                                        <td>{{item.product.title}}</td>
                                        <td>數量:{{item.qty}}</td>
                                         <td class="text-right"><del>NT{{item.product.price | moneyFilter}}</del> </td>
                                        <td class="text-right">NT{{item.product.price * item.qty | moneyFilter}}</td>
                                    </tr>
                                    <tr class="w-100" v-if="total!=0">
                                        <td>總價</td>
                                        <td class="text-right" colspan=5> {{total | moneyFilter}}</td>
                                    </tr>
                                    <tr>
                                        <td v-if="total!=final_total" class="text-success">優惠價</td>
                                        <td v-if="total!=final_total" colspan=5 class="text-right text-success">{{final_total
                                            | moneyFilter}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <h2 class="text-center mt-5">訂購人訊息</h2>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">姓名</label>
                            <input name="name" type="name" class="form-control" id="name" placeholder="姓名" v-model="name"
                                v-validate="'required'">
                            <span class="text-danger" v-if="errors.has('name')">姓名必須被輸入</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">信箱</label>
                            <input name="email" type="email" class="form-control" id="inputEmail4" placeholder="信箱"
                                v-model="email" v-validate="'required|email'" required>
                            <span class="text-danger">{{errors.first('email')}}</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputtel">電話</label>
                            <input name="tel" type="tel" class="form-control" id="inputtel" placeholder="電話" v-model="tel"
                                v-validate="'required|tel'">
                            <span class="text-danger" v-if="errors.has('tel')">請輸入電話</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="address">地址</label>
                            <input name="address" type="address" class="form-control" id="address" placeholder="地址"
                                v-model="address" v-validate="'required|address'">
                            <span class="text-danger" v-if="errors.has('address')">請輸入地址</span>
                        </div>
                        <div class="form-group col-md-12">
                            <input type="text" class="form-control" id="text" placeholder="留言給我們" v-model="message">
                        </div>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary" @click="checkOut()">送出訂單</button>
                    </div>
                </form>
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
                                    <p class="text-left">
                                        <del class="text-left">NT{{oneProduct.origin_price |moneyFilter}}</del>
                                    </p>
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

        <div class="modal fade" id="checkSuccess" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-body bg-dark text-white row">
                        <span class="col my-auto">送出訂單</span>
                        <button type="button" class="btn btn-secondary col-2 ml-auto" data-dismiss="modal">確定</button>
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
                shopCartList: [],
                oneProduct: [],
                total: "",
                final_total: "",
                shopCartNum: "1",
                name: "",
                email: "",
                tel: "",
                address: "",
                message: "",
                errorMessage: ""
            };
        },
        methods: {
            getCarts() {
                const api = `https://vue-course-api.hexschool.io/api/manias/cart`;
                const vm = this;
                this.$http.get(api).then(response => {
                    console.log(response.data);
                    vm.shopCartList = response.data.data.carts;
                    vm.total = response.data.data.total;
                    vm.final_total = response.data.data.final_total;
                });
            },
            getOneProduct(item) {
                console.log();
                const api = `https://vue-course-api.hexschool.io/api/manias/product/${
        item.id
      }`;
                const vm = this;
                this.$http.get(api).then(response => {
                    vm.oneProduct = response.data.product;
                    $("#productModal").modal("show");
                });
            },
            removeCart(id) {
                console.log(id);
                const api = `https://vue-course-api.hexschool.io/api/manias/cart/${id}`;
                const vm = this;
                this.$http.delete(api).then(response => {
                    console.log(response.data);
                    vm.getCarts();
                });
            },
            addCart(id, qty = 1) {
                $("#productModal").modal("hide");
                console.log(id, qty);
                const api = `https://vue-course-api.hexschool.io/api/manias/cart`;
                const vm = this;
                const cart = {
                    product_id: id,
                    qty
                };
                this.$http
                    .post(api, {
                        data: cart
                    })
                    .then(response => {
                        vm.getCarts();
                        $("#shopCart").modal("show");
                    });
            },
            cartNumPlus() {
                const vm = this;
                vm.shopCartNum = parseInt(vm.shopCartNum) + 1;
            },
            cartNumMinus() {
                const vm = this;
                if (vm.shopCartNum <= 1) {
                    return;
                }
                vm.shopCartNum = parseInt(vm.shopCartNum) - 1;
            },
            checkOut() {
                const vm = this;
                const api = "https://vue-course-api.hexschool.io/api/manias/order";
                let name = vm.name;
                let email = vm.email;
                let tel = vm.tel;
                let address = vm.address;
                let message = vm.message;
                const checkOutData = {
                    data: {
                        user: {
                            name,
                            email,
                            tel,
                            address
                        },
                        message
                    }
                };
                this.$validator.validate().then(result => {
                    if (!result) {
                        vm.errorMessage = "請填寫完整資料";
                    } else {
                        this.$http.post(api, checkOutData).then(response => {
                            console.log(response.data);
                            if (response.data.success) {
                                vm.getCarts();
                                $("#checkSuccess").modal("show");
                            } else {
                                vm.errorMessage = "購買失敗";
                            }
                        });
                    }
                });
            }
        },
        created() {
            this.getCarts();
        }
    };
</script>
<style>
    .mt-10 {
        margin-top: 150px;
    }
</style>