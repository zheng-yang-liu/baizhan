<template>
	<view>
		
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
		mounted(){
			uni.request({
				url:'http://html5.bjsxt.cn/api/index/course',
				success: (res) => {
					console.log('课程请求的数据');
					console.log(res.data)
				}
			})
		}
	}
</script>

<style>

</style>
