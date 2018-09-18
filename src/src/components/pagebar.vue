<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{'disabled': !propPagination.has_pre}" ><a class="page-link" href="#" @click.prevent="getPage(propPagination.current_page-1)">Previous</a></li>
            <li class="page-item" v-for="(index) in propPagination.total_pages" :key="index" :class='{"active":propPagination.current_page==index}'><a class="page-link" href="#" 
            @click.prevent="getPage(index)">{{ index }}</a></li>
            <li class="page-item" :class="{'disabled': !propPagination.has_next}"><a class="page-link" href="#" @click.prevent="getPage(propPagination.current_page+1)">Next</a></li>
        </ul>
    </nav>
</template>
<script>
export default{
    props:[
        'propPagination'
    ],
    // data(){
        
    // },
    methods: {
        getPage(index) {
            console.log(index);
            this.$emit('click-page', index)
        },
    }
}
</script>