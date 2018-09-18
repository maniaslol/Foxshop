<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="row">
            <div class="col-md-6">
                <div style="height: 400px; background-position:cover ; background-repeat:no-repeat; background-position: center;"
                    :style="{backgroundImage:`url(${oneProduct.image})`}" alt="Card image cap"></div>
            </div>
            <div class="col-md-6 mt-5">
                <h5 class="card-title text-left">{{oneProduct.title}}</h5>
                <p class="card-text text-left"><del class="text-left">NT{{oneProduct.origin_price | moneyFilter}}</del></p>
                <p class="card-text text-left">NT{{oneProduct.price | moneyFilter}}</p>
                <div class="btn-group">
                    <button class="btn btn-secondary" @click="cartNumMinus"><i data-feather="minus"></i></button>
                    <input type="number" v-model="shopCartNum">
                    <button class="btn btn-secondary" @click="cartNumPlus"><i data-feather="plus"></i></button>
                </div>
                <button href="#" class="btn btn-outline-info w-100 my-5">
                    <i data-feather="shopping-cart"></i> 加入購物車</button>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        data() {
            return {
                oneProduct: [],
                isLoading: false,
                shopCartNum:1,
            }
        },
        methods: {
            getOneProduct() {
                const id = this.$route.params
                console.log(id)
                const api = `https://vue-course-api.hexschool.io/api/manias/product/${id.id}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then(response => {
                    console.log(response.data)
                    vm.oneProduct = response.data.product;
                    vm.isLoading = false;
                });
            },
            cartNumPlus(){
                const vm = this;
                vm.shopCartNum=parseInt(vm.shopCartNum) + 1
            },
            cartNumMinus(){
                const vm = this;
                if(vm.shopCartNum<=1){return};
                vm.shopCartNum=parseInt(vm.shopCartNum) - 1
            },
        },
        updated() {
            feather.replace();
        },
        created() {
            this.getOneProduct()
        },
    }
</script>