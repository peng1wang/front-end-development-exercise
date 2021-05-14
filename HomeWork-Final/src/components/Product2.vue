<template>
    <div class="product">
        <router-link tag="div" :to="'/detail/' + data.id" class="product-inner">
            <div class="content1" style="display:inline">
                <img :src="'/img/list/' + data.img" alt="">
                <h3>{{data.title}}</h3>
                <p>{{data.discription}}</p>
                <p>
                    <span v-if ="data.is_food" class="price">{{data.price}}元 | </span>
                    <span v-if ="data.is_food" class="origin-price">门市价:{{data.originPrice}}元 | </span>
                    <span v-if ="data.is_food" class="sales">销量{{data.sales}}</span>
                    <span v-if ="!data.is_food" class="price">{{data.price}}元起 | </span>
                    <span v-if ="!data.is_food" class="origin-price">{{data.score}}分 | </span>
                    <span v-if ="!data.is_food" class="sales">{{data.people}}人想看</span>
                </p>
            </div>
        </router-link>
    </div>

</template>

<style type="text/css" lang="scss">
    @import "../base.scss";
    .product {
        background: #fff;
    .product-inner {
        margin: 20px 0px;
        padding: 10px 0;
        display: flex;
    }
    img {
        width: 400px;

    }
    .content1 {
        flex: 1;
        padding-right: 200px;
        padding-left: 380px;
    }
    h3 {
        font-size: 14px;
        min-height: 44px;
    }
    p {
        font-size: 12px;
        color: #666;
    }
    .price {
        /*color: $navColor;*/
        margin-right: 5px;
    }
    .sales {
        float: center;
    }
    }
</style>
<script type="text/javascript">
    export default {
        // 接收数据
        props: ['data'],
    }
</script>
