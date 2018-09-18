<template lang="">
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class='text-right mt-4'>
            <button href="#" class="btn btn-primary" @click="openModal(isNew=true)">增加產品</button>
        </div>
        <div class="table-responsive-md">
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th width='150'>分類</th>
                        <th class="text-center">品名</th>
                        <th class="text-center" width='100'>原價</th>
                        <th class="text-center" width='100'>售價</th>
                        <th width='100'>狀態</th>
                        <th class="text-center" width='100'>編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='(item,key) in products'>
                        <td>{{item.category}}</td>
                        <td class="text-center">{{item.title}}</td>
                        <td class="text-right">{{item.origin_price | moneyFilter}}</td>
                        <td class="text-right">{{item.price | moneyFilter}}</td>
                        <td>
                            <span v-if="item.is_enable" class='text-success'>已啟用</span>
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
        <!-- <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled': !pagination.has_pre}" ><a class="page-link" href="#" @click.prevent="getProducts(pagination.current_page-1)">Previous</a></li>
                <li class="page-item" v-for="(index) in pagination.total_pages" :key="index" :class='{"active":pagination.current_page==index}'><a class="page-link" href="#" 
                @click.prevent="getProducts(index)">{{ index }}</a></li>
                <li class="page-item" :class="{'disabled': !pagination.has_next}"><a class="page-link" href="#" @click.prevent="getProducts(pagination.current_page+1)">Next</a></li>
            </ul>
        </nav> -->
            <pagebar class="row justify-content-md-center" @click-page='getProducts':prop-pagination="pagination"></pagebar>    
        <!-- modal start -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for="image">輸入圖片網址</label>
                                    <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結" v-model="templateProduct.image">
                                </div>
                                <div class="form-group">
                                    <label for="customFile">或 上傳圖片
                                        <i class="fas fa-spinner fa-spin" v-if="LoadingIcon"></i>
                                    </label>
                                    <input name="file" type="file" id="customFile" class="form-control" ref="files"
                                        @change="uploadImg">
                                </div>
                                <img :src="templateProduct.image" class="img-fluid" alt="">
                            </div>
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="title">標題</label>
                                    <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="templateProduct.title">
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category">分類</label>
                                        <input type="text" class="form-control" id="category" placeholder="請輸入分類"
                                            v-model="templateProduct.category">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">單位</label>
                                        <input type="unit" class="form-control" id="unit" placeholder="請輸入單位" v-model="templateProduct.unit">
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="origin_price">原價</label>
                                        <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                                            v-model="templateProduct.origin_price">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price">售價</label>
                                        <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                                            v-model="templateProduct.price">
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
                                    <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                                        v-model="templateProduct.content"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="is_enabled" v-model="templateProduct.is_enable"
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
                        <button type="button" class="btn btn-primary" @click="updatedProduct()">確認</button>
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
                        是否刪除 <strong class="text-danger">{{ templateProduct.title }}</strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="deleteProduct()">確認刪除</button>
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
                products: [],
                templateProduct: {
                    image: ""
                },
                pagination: {},
                isNew: false,
                isLoading: false,
                LoadingIcon: false
            };
        },
        methods: {
            getProducts(index) {
                const api = `https://vue-course-api.hexschool.io/api/manias/products?page=${index}`;
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then(response => {
                    console.log(response.data.products);
                    vm.products = response.data.products;
                    vm.products.reverse();
                    vm.pagination = response.data.pagination;
                    vm.isLoading = false;
                });
            },
            updatedProduct() {
                let api = "https://vue-course-api.hexschool.io/api/manias/admin/product";
                const vm = this;
                if (vm.isNew) {
                    $("#productModal").modal("hide");
                    this.$http.post(api, {
                            data: vm.templateProduct
                        })
                        .then(response => {
                            console.log(response.data);
                            if (response.data.success) {
                                vm.getProducts();
                            } else {
                                console.log("新增失敗");
                            }
                        });
                } else {
                    api = api + "/" + vm.templateProduct.id;
                    $("#productModal").modal("hide");
                    this.$http.put(api, {
                            data: vm.templateProduct
                        })
                        .then(response => {
                            console.log(response.data);
                            if (response.data.success) {
                                vm.getProducts();
                            } else {
                                console.log("更新失敗");
                            }
                        });
                }
            },
            deleteProduct() {
                let api = "https://vue-course-api.hexschool.io/api/manias/admin/product";
                const vm = this;
                api = api + "/" + vm.templateProduct.id;
                $("#delProductModal").modal("hide");
                this.$http
                    .delete(api, {
                        data: vm.templateProduct
                    })
                    .then(response => {
                        console.log(response.data);
                        if (response.data.success) {
                            vm.getProducts();
                        } else {
                            console.log("刪除失敗");
                        }
                    });
            },
            uploadImg(e) {
                console.log(e);
                const vm = this;
                const formData = new FormData();
                let uploadFile = e.target.files[0];
                // vm.$refs.files.files[0]
                console.log(uploadFile);
                formData.append("file-to-upload", uploadFile);
                const api = "https://vue-course-api.hexschool.io/api/manias/admin/upload";
                vm.LoadingIcon = true;
                this.$http
                    .post(api, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    .then(response => {
                        if (response.data.success) {
                            vm.templateProduct.image = response.data.imageUrl;
                            vm.LoadingIcon = false;
                        } else {
                            console.log("上傳失敗");
                            vm.LoadingIcon = false;
                        }
                    });
            },
            openModal(isNew, item) {
                const vm = this;
                vm.isNew = isNew;
                vm.templateProduct = Object.assign({}, item); //新增物件也可拿來合併物件
                $("#productModal").modal("show");
            },
            delopenModal(isNew, item) {
                const vm = this;
                vm.templateProduct = Object.assign({}, item);
                $("#delProductModal").modal("show");
            }
        },
        created() {
            this.getProducts();
        }
    };
</script>