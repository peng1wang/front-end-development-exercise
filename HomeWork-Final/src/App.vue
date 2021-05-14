<template>
<div id="app">
	<div class="header">
		<div class="go-back" @click="goBack">
			<span class="arrow">
				<span class="arrow green"></span>
			</span>
		</div>
		<h1>美团网站</h1>
		<div class="login">登录</div>
	</div>
	<div class="search" v-show="$route.fullPath.indexOf('/detail/') !== 0">
		<input type="text" v-model="msg" @keyup.enter="showSearchResult" placeholder="请输入搜索关键字">
	</div>
	<router-view/>
</div>
</template>

<style lang="scss">

@import './base.scss';
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
html, body {
	background: #efefef;
}
.header {
	background:#FFCC00;
	height: 60px;
	line-height: 60px;
	text-align: center;
	color: #fff;
	display: flex;
	.go-back,
	.login {
		width: 60px;
	}
	.login {
		font-size: 14px;
	}
	.go-back {
		position: relative;
		.arrow {
			@include arrow(10px, #fff, right);
			position: absolute;
			top: 22px;
			left: 10px;
			.green {
				border-right-color:#666666;
				top: -10px;
				left: -8px;
			}
		}
	}
	h1 {
		flex: 1;
		font-size: 24px;
	}
}
.search {
	background: #fff;
	padding: 10px 20px;
	display: flex;
	input {
		font-size: 14px;
		background: #efefef;
		border: none;
		outline: none;
		padding: 10px 20px;
		border-radius: 18px;
		flex: 1;
	}
}
</style>
<script type="text/javascript">
export default {
	// 绑定数据
	data() {
		return {
			msg: ''
		}
	},
	// 方法
	methods: {
		// 展示搜索结果
		showSearchResult() {
			// 发布消息
			this.$store.commit('updateSearch', this.msg);
			// 清空数据
			this.msg = '';
		},
		// 返回上一个页面
		goBack() {
			// history.go(-1);
			// 建议使用路由提供的方法
			this.$router.go(-1);
		}
	}
}
</script>
