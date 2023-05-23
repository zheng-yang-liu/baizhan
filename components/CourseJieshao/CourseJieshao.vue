<template>
	<view class="course_jieshao_box">
		<image src='@/static/java.jpg' :style="{ height:imageHeight + 'rpx' }"></image>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			images:{
				type:String,
				defualt:""
			},
			imageHeight:{
				type:String,
				default:""
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.course_jieshao_box{
		display: flex;
		box-sizing: box;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		image{
			width: 750rpx;
			
		}
	}
</style>