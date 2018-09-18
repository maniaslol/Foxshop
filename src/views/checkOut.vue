<template>
    <div>
        <navbar></navbar>
        <div class="container">
            <checkOut></checkOut>
        </div>
        <footer class="text-sm-center bg-secondary p-5 mt-5 text-white">
            <div class="border-dark-u">小YUYU購物網</div>
            <p>
                <a class="text-white" href="https://twitter.com/mdo">聯絡我們</a>
            </p>
            <p>
                <a class="text-white" href="#" @click.prevent='toTOP()'>Back to top</a>
            </p>
        </footer>
    </div>
</template>
<script>
    import navbar from "../components/clientPage/clientNavbar.vue";
    import checkOut from "../components/clientPage/clientCheckOut.vue";
    import $ from 'jquery';
    export default {
        components: {
            checkOut,
            navbar
        },
        methods: {
            toTOP() {
                $("html, body").animate({
                        scrollTop: 0
                    },
                    1000
                );
            }
        },
    };
</script>