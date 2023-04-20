<template>
	<view class="home">
		<Navber />
		<!-- 
			 indicator-dots显示指示点
			 indicator-color指示点颜色
			 indicator-active-color当前选中的指示点颜色
			 autoplay是否 自动播放
			 interval自动切换的时间
			 duration滑动的时长
			 -->
		<!-- 轮播图 -->
		<view class="index_banner_box">
			<swiper class="swiper"  :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in topBanner" :key="index">
					<image :src="item.img_url" class="banner"></image>
					
				</swiper-item>
			</swiper>
		</view>
		<!-- 课程列表 -->
		<coursenav />
		<!-- 限时免费-->
		<view class="online_box">
			<image :src="index_banner.img_url" class="online_img"></image>
		</view>
		<view class="free_box">
			<!-- 公共样式 -->
			<view class="free_T_box public_tow_box">
				<view class="public_T">
					限时免费
				</view>
			</view>
			<!-- 插入出列表；实现一个课程列表效果 -->
			<FreeCard />
		</view>
		 
	</view>
</template>

<script>
	// 课程列表
	import Navber from"@/uni_modules/uni-nav-bar/components/navber/navber.vue"
	import coursenav from"@/uni_modules/coursenav/course.vue"
	import FreeCard from"@/compoment/free-card/free-card.vue"
	export default {
		data() {
			return {
				topBanner:[],
				index_banner:{}
			}
		},
		methods: {
			
		},
		mounted(){
			console.log('打印')
			//进行网页请求，获取数据
			uni.request({
				// response:响应
				url: 'http://html5.bjsxt.cn/api/index/banner', //仅为示例，并非真实接口地址。
				//回调函数·（访问成功后进行的操作）`
				success: (res) => {
					console.log(res.data);
					// 更新数据
					// console.log(res.data.top_banner);
					this.topBanner=res.data.top_banner;
					// topBnner数组元素
					// console.log(res.data.index_banner);
					this.index_banner=res.data.index_banner;
				}
			});
		},
		components: {
			 Navber,
			 coursenav,
			 FreeCard
		}
	}
</script>
<style lang="scss">
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.index_banner_box {
			display: flex;
			width: 100%;
			padding: 10px;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			overflow: hidden;
			.swiper{
				width: 100%;
				height: 260rpx;
				.banner{
					width: 700rpx;
					height: 260rpx;
				}
			}
		}
		.online_box{
			display: flex;
			width: 724rpx;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			overflow: hidden;
			margin-bottom: 15px;
			
			.online_img{
				width: 724rpx;
				height: 132rpx;
			}
			
		}
		.public_tow_box{
			display: flex;
			width: 100%;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			overflow: hidden;
			padding: 0 15px;
			justify-content: space-between;
			align-content: space-between;
			flex-wrap: wrap;
			.public_T{
				font-size: 20px;
				font-weight: 700;
			}
		}
		.public_title{
			width: 100%;
			display: flex;
			padding: 0 15px;
			flex-direction: column;
			.public_class_t{
				font-size: 22px;
				font-weight: 700;
				margin-bottom: 15px;
			}
		}
		.recommed_T_box{
			margin-bottom: 25px;
		}
		
		.daotu_box{
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			.daotu_T{
				font-size: 18px;
				font-weight: 700;
				margin: 15px ;
			}
			image{
				width: 699rpx;
				height: 634rpx;
				margin: 0 0 15px 0;
			}
		}
	}
</style>

