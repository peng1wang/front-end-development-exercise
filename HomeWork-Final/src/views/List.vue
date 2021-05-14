<template>
<div class="list">
	<!-- 排序模块 -->
	<ul class="order">
		<li v-for="(item, index) in orders" @click="listOrder(item.id)" :key="index">
			<span>{{item.text}}</span>
			<span class="arrow"></span>
		</li>
	</ul>
	<!-- 定义商品列表 -->
	<Product v-for="(item, index) in dealList" :key="index" :data="item"></Product>
	<!-- 加载更多 -->
	<!-- showOthers改变了原始数据集中包含的商品数量 -->
	<div class="loader-more" @click="showOthers" v-show="others.length">
		<span>查看其它{{others.length}}条团购</span>
		<span class="arrow">
			<span class="arrow white"></span>
		</span>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>

@import "../base.scss";
.order {
	background: #fff;
	display: flex;
	li {
		flex: 1;
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		font-size: 12px;
		color: #666;
		text-align: center;
		line-height: 26px;
		&:last-child {
			border-right: none;
		}
		.arrow {
			@include arrow(4px, #666);
			position: relative;
			top: -2px;
			left: 2px;
		}
	}
}
.loader-more {
	background: #fff;
	border-bottom: 1px solid #ccc;
	font-size: 16px;
	color: $navColor;
	text-align: center;
	line-height: 40px;
	.arrow {
		@include arrow(8px, $navColor);
		position: relative;
		top: 1px;
		left: 2px;
		.white {
			border-top-color: #fff;
			position: absolute;
			top: -10px;
			left: -8px;
		}
	}
}
</style>
<script type="text/javascript">
// 引入组件
import Product from '../components/Product2';
export default {
	// 注册
	components: { Product },
	// 数据
	data() {
		return {
			// 排序数据
			orders: [
				{ text: '价格排序', id: 'price' },
				{ text: '销量排序', id: 'sales' },
				{ text: '好评排序', id: 'evaluate' },
				{ text: '优惠排序', id: 'discount' }
			],
			// 初始化
			list: [],
			// 存储未显示的
			others: []
		}
	},
	// 计算属性数据
	computed: {
		// 用store中的搜索词来处理
		dealList() {
			// 返回值是结果
			// 数组做过滤用filter方法
			// 过滤的是title，判断title是否包含search搜索词
			return this.list.filter(item => item.title.toUpperCase().indexOf(this.$store.state.search.toUpperCase()) >= 0);
		}
	},
	// 定义方法
	methods: {
		// 展示剩余的
		showOthers() {
			// 将others中的数据存储在list中
			this.list = this.list.concat(this.others);
			// 清空others
			this.others = [];
		},
		// 数据排序
		listOrder(id) {
			// 如果是优惠排序
			if (id === 'discount') {
				// 排序
				this.list.sort((a, b) => {
					return (b.originPrice - b.price) - (a.originPrice - a.price)
				})
				return ;
			}
			// 视图的排序就是对数据的排序，就是对数组的排序
			this.list.sort((a, b) => {
				// 返回值是排序的条件
				// 升序
				// return a[id] - b[id]
				// 降序
				return b[id] - a[id]
			})
		}
	},
	// 创建完成
	created() {
		// 发送请求
		this.$http
			// get请求
			.get('/data/list.json?id=' + this.$route.params.id)
			// 监听数据返回
			.then(({ data }) => {
				// 存储显示的数据
				this.list = data.slice(0, 3);
				// 存储未显示的数据
				this.others = data.slice(3);
			});
	}
}
</script>
