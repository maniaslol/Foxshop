<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div id="carouselExampleIndicators" class="carousel slide container mt-5" data-ride="carousel">
            <div class="row">
                <div class="col-12">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 carousel-hight " src="../../assets/img/大圖-adult-beanie-beautiful-206434.png"
                                alt="First slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h1>最棒的服飾商店</h1>
                                <p>應有盡有的款式</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 carousel-hight " src="../../assets/img/大圖-adult-businessman-checkered-936128.png"
                                alt="Second slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h2 class="h1">超帥穿衣搭配</h2>
                                <p>應有盡有的款式</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 carousel-hight " src="../../assets/img/大圖beautiful-beautiful-girl-book-864938.png"
                                alt="Second slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h2 class="h1">超美麗人生</h2>
                                <p>應有盡有的款式</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 carousel-hight " src="../../assets/img/大圖-pexels-photo-346748.png"
                                alt="Third slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h2 class="h1">最划算一次買到好</h2>
                                <p>應有盡有的款式</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </div>

        <!-- 大廣告螢幕 -->
        <div class="container">
            <div class="row">
                <div class="col-4 offset-4 text-center mt-5">
                    <div class="alert alert-info" v-if="error">{{error}}</div>
                </div>
            </div>    
        </div>
        <div class="shopcart">
            <button class="btn btn-info my-3" @click="getCarts"><i data-feather="shopping-cart"></i>購物車
                <span v-if="shopCartList.length>0">({{shopCartList.length}})</span>
            </button>
        </div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-3 mb-5" v-for="(item, index) in products" :key="index">
                    <div class="card border-info card-btn-hover">
                        <router-link :to="'/oneProduct/'+item.id">
                            <div class="card-img-u" style=" background-position:cover ; background-repeat:no-repeat; background-position: center;"
                                :style="{backgroundImage:`url(${item.image})`}" alt="Card image cap">
                            </div>
                        </router-link>
                        <div class="card-body text-center mt-auto">
                            <h5 class="card-title text-left">{{item.title}}</h5>
                            <p class="card-text text-left"><del class="text-left">NT{{item.origin_price | moneyFilter}}</del></p>
                            <p class="card-text text-left">NT{{item.price | moneyFilter}}</p>
                            <button href="#" class="btn btn-outline-info w-100 mt-4 card-btn-dnone" @click="getOneProduct(item)">
                                <i data-feather="shopping-cart"></i> 點選搶購
                            </button>
                        </div>
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
                                <div class="text-center">
                                    <span class="alert alert-danger" v-if="error">{{error}}</span>
                                </div>
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
                                            <td class="text-right">NT{{item.product.price | moneyFilter}}</td>
                                            <td class="text-right">NT{{item.product.price * item.qty | moneyFilter}}</td>
                                        </tr>
                                        <tr class="w-100" v-if="total!=0">
                                            <td>總價</td>
                                            <td class="text-right" colspan=5>{{total | moneyFilter}}</td>
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
    import Icons from "../../icon/feather.min.js";
    export default {
        props: ['searchWord'],
        data() {
            return {
                products: [],
                oneProduct: [],
                shopCartNum: 1,
                shopCartList: [],
                couponCode: '',
                total: "",
                final_total: '',
                pagination: {},
                isNew: false,
                error: '',
                isLoading: false,
                LoadingIcon: false
            };
        },
        methods: {
            getProducts() {
                if (this.searchWord !== '') {
                    const api = `https://vue-course-api.hexschool.io/api/manias/products/all`;
                    const vm = this;
                    vm.error=''
                    vm.isLoading = true;
                    vm.products = [];
                    this.$http.get(api).then(response => {
                        // vm.products = response.data.products;
                        response.data.products.forEach(function (item) {
                            if (item.title.includes(vm.searchWord)||item.category.includes(vm.searchWord)){
                                return vm.products.push(item)
                            }
                        });
                        if(vm.products.length==0){
                            vm.error='找不到此商品'
                        }
                        vm.products.reverse();
                        vm.pagination = response.data.pagination;
                        vm.isLoading = false;
                    });
                } else {
                    const api = `https://vue-course-api.hexschool.io/api/manias/products/all`;
                    const vm = this;
                    vm.isLoading = true;
                    this.$http.get(api).then(response => {
                        console.log(api)
                        vm.products = response.data.products;
                        vm.products.reverse();
                        vm.pagination = response.data.pagination;
                        vm.isLoading = false;
                    });
                }
            },
            getOneProduct(item) {
                $("#shopCart").modal("hide");
                const api = `https://vue-course-api.hexschool.io/api/manias/product/${item.id}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then(response => {
                    vm.oneProduct = response.data.product;
                    vm.isLoading = false;
                    $("#productModal").modal("show");
                });
            },
            getCartsList() {
                const api = `https://vue-course-api.hexschool.io/api/manias/cart`;
                const vm = this;
                vm.error = '';
                this.$http.get(api).then(response => {
                    console.log(response.data);
                    vm.shopCartList = response.data.data.carts;
                    vm.total = response.data.data.total;
                    vm.final_total = response.data.data.final_total;
                });
            },
            getCarts() {
                const api = `https://vue-course-api.hexschool.io/api/manias/cart`;
                const vm = this;
                vm.isLoading=true;
                vm.error = '';
                this.$http.get(api).then(response => {
                    console.log(response.data);
                    vm.shopCartList = response.data.data.carts;
                    vm.total = response.data.data.total;
                    vm.final_total = response.data.data.final_total;
                    vm.isLoading=false;
                    $("#shopCart").modal("show");
                });
            },
            addCart(id, qty = 1) {
                const api = `https://vue-course-api.hexschool.io/api/manias/cart`;
                const vm = this;
                $("#productModal").modal("hide");
                vm.isLoading=true;
                const cart = {
                    product_id: id,
                    qty
                };
                this.$http.post(api, {
                    data: cart
                }).then(response => {
                    console.log(response.data);
                    vm.getCarts();
                    vm.isLoading=false;
                    $("#shopCart").modal("show");
                });
            },
            removeCart(id) {
                vm.isLoading=true;
                const api = `https://vue-course-api.hexschool.io/api/manias/cart/${id}`;
                const vm = this;
                this.$http.delete(api).then(response => {
                    console.log(response.data);
                    vm.getCarts();
                    vm.isLoading=false;
                    $("#shopCart").modal("show");
                });
            },
            useCoupon() {
                const api = `https://vue-course-api.hexschool.io/api/manias/coupon`;
                const vm = this;
                const code = vm.couponCode;
                console.log(code);
                this.$http.post(api, {
                    data: {
                        code: code
                    }
                }).then(response => {
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
            toChickOut() {
                const vm = this;
                if (vm.shopCartList.length !== 0) {
                    $("#shopCart").modal("hide");
                    this.$router.push("/checkOut")
                } else {
                    vm.error = '還未選購商品'
                }

            }
        },
        watch: {
            searchWord: function () {
                this.getProducts()
            }
        },
        created() {
            this.getProducts();
            this.getCartsList()
        },
        updated() {
            feather.replace();
        },
        mounted() {}
    };
</script>
<style>
    .shopcart {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 10000;
    }

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

    .carousel-hight {
        margin-top:0px;
        max-height: 95vh
    }

    @media screen and (max-width: 450px) {
        .carousel-hight {
            margin-top: 110px;
        }
    }
    .card-btn-dnone{
    width: 32px !important; 
    height: 0;
    transition: ease-in-out 0.6s;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    position: absolute;
    transform: translate(-50%,-150%);
  }
  .card-btn-hover{
      height: 408px;
  }
  .card-btn-hover:hover .card-btn-dnone{
    width: 180px !important; 
    opacity: 1 !important;
    visibility:visible;
    height: 48px!important;
    position: absolute;
    transform: translate(-50%,-15%);
  }
  .card-img-u{
    transition: ease-in-out 0.7s;
    height: 250px ;
  }
  .card-btn-hover:hover .card-img-u{
    transition: ease-in-out 0.7s;
    height: 180px ;
  }
</style>