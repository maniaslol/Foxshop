<template>
    <div>
        <div class="table-responsive-md">
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th>訂單時間</th>
                        <th>訂單代碼</th>
                        <th>姓名</th>
                        <th class="">訂單細節</th>
                        <th>付款狀態</th>
                        <th class="">編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(item,key) in orders' :key='key'>
                        <td>
                            {{item.create_at*1000 | timeFilter}}
                            <div class="accordion">
                                <div :id="item.id" class="collapse my-5" aria-labelledby="headingOne">
                                    <tr>
                                        地址:{{item.user.address}}
                                    </tr>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{item.id}}
                            <div class="accordion">
                                <div :id="item.id" class="collapse my-5" aria-labelledby="headingOne">
                                    <tr>
                                        電話:{{item.user.tel}}
                                    </tr>
                                </div>
                            </div>
                        </td>
                        <td width='200' class="text-left">
                            {{item.user.name}}
                            <div class="accordion">
                                <div :id="item.id" class="collapse my-5" aria-labelledby="headingOne">
                                    <tr>
                                        留言內容:{{item.message}}
                                    </tr>
                                </div>
                            </div>
                        </td>
                        <td width='200'>
                            <a class="btn text-primary" data-toggle="collapse" :data-target="'#'+item.id"
                                aria-expanded="true" aria-controls="collapseOne" id="headingOne" @click="getOneOrder(item.id)">
                                購物車細節 <i class="fa fa-angle-down"></i>
                            </a>
                            <div class="accordion">
                                <div :id="item.id" class="collapse" aria-labelledby="headingOne">
                                    <tr v-for="(item, index) in item.products" :key="index">
                                        <p>品名:{{item.product.title}}</p>
                                        <p>數量:{{item.qty}}</p>
                                    </tr>
                                    <tr>
                                        <p>總價:{{item.total | moneyFilter}}</p>
                                    </tr>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p v-if="item.is_paid" class="text-success">完成訂單</p>
                            <p v-else class="text-danger">尚未完成</p>
                        </td>
                        <td>
                            <button class="btn btn-outline-secondary" @click="orderCheck(item.id)">確認完成訂單</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    export default {
        data() {
            return {
                products: [],
                orders: [],
                OneOrders: [],
                orderID:[]
            };
        },
        methods: {
            getOrder() {
                let api = `https://vue-course-api.hexschool.io/api/manias/orders`;
                const vm = this;
                this.$http.get(api).then(response => {
                    vm.orders = response.data.orders;
                });
            },
            getOneOrder(id) {
                console.log(id);
                const api = `https://vue-course-api.hexschool.io/api/manias/order/${id}`;
                const vm = this;
                this.$http.get(api).then(response => {
                    console.log(response.data.order)
                    vm.OneOrders = response.data.order;
                });
            },
            getProducts() {
                const api = `https://vue-course-api.hexschool.io/api/manias/products`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then(response => {
                    vm.products = response.data.products;
                    vm.products.reverse();
                });
            },
            getOneProduct(item) {
                $("#shopCart").modal("hide");
                const api = `https://vue-course-api.hexschool.io/api/manias/product/${item.id}`;
                const vm = this;
                this.$http.get(api).then(response => {
                    vm.oneProduct = response.data.product;
                });
            },
            orderCheck(id){
                const api = `https://vue-course-api.hexschool.io/api/manias/pay/${id}`;
                const vm = this;
                this.$http.post(api).then(response => {
                    console.log(response.data)
                    vm.getOrder();
                });
            }
        },
        created() {
            const vm = this;
            vm.getOrder();
        }
    };
</script>