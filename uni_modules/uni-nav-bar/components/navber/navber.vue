<template>
	<view>
		<view class="box-bg" >
			<!--
			导航栏左右侧的宽度
			leftWidth="0rpx" rightWidth="0rpx"
			-->
			<uni-nav-bar leftWidth="0rpx" rightWidth="0rpx" statusBar="true">
				<view class="input-view">
					<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
					<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词"/>
				</view>
				<view class="city">
					搜索
				</view>
			</uni-nav-bar>
		</view>
	</view>
</template>

<script> 
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			 
		}
	}
</script>

<style lang="scss">
	// 设定一个默认款段变量
	$nav-height: 30px;

	.box-bg {
		background-color: #F5F5F5;
	}

	.city {
		display: flex;
		align-items: center;
		margin-left:5px;
		margin-right: -6px;
	}

	.input-view {
		display: flex;
		// flex-direction: row;
		// width: 500rpx;
		flex: 1;
		background-color: #f8f8f8;
		height: $nav-height;
		// 圆角边框
		border-radius: 15px;
		padding: 0 15px;
		// flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
	}

	.input-uni-icon {
		line-height: $nav-height;
	}

	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		// width: 370rpx;
		padding: 0 5px;
		font-size: 12px;
		// background-color: #f8f8f8;
	}
</style>