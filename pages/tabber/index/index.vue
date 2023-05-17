<template>	<!-- 刘政阳 180121144 -->
	<view class="home">
		<Navbar />
		<view class="index_banner_box">
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
				<swiper-item v-for="(item,index) in topBanner" :key="index">
					<image class="banner" :src="item.img_url"></image>
				</swiper-item>
			</swiper>
		</view>
		<CourseNav />
		<view class="online_box">
			<!-- :src == v-bind:src 动态显示-->
			<image :src="index_banner.img_url" class="online_img"></image>
		</view>
		<view class="free_box">
			<view class="free_T_box public_tow_box">
				<view class="public_T">
					限时免费
				</view>
			</view>
			<FreeCard />
		</view>
		<!-- 课程推荐 -->
		<view class="public_title">
			<view class="public_class_t">
				零基础就业班
			</view>
			<JobScroll />
		</view>
		<!-- 推荐课程 -->
		<!-- 刘政阳 设置推荐课程文字及其盒子内容的样式-->
		 <view class="recommed_box">
			 <!-- 设置公共样式 --> 
			 <!-- 刘政阳 设置公共样式为‘推荐课程’文字添加样式-->
			<view class="recommed_T_box public_tow_box">
				<view class="public_T">
					推荐课程
				</view>
			</view>
			<courseCard />
		 </view>
		 <view class="daotu_box">
		 	<view class="daotu_T">驱动教学-贯穿教| 学 | 练 | 测 | 评 |</view>
		 	<img :src="fontBanner.img_url" >
		 </view>
	</view>
</template>

<script>
	import Navbar from"@/uni_modules/uni-nav-bar/components/navbar/navber.vue"
	import CourseNav from"@/components/coursenav/course.vue"
	import FreeCard from"@/components/free-card/free-card.vue"
	import JobScroll from"@/components/jobscroll/jobscroll.vue"
	import courseCard from"@/components/course_card/course_card.vue"
	export default {
		components:{
			Navbar,
			CourseNav,
			FreeCard,
			JobScroll,
			courseCard
		},
		data() {
			return {
				topBanner:[],
				index_banner:{}  ,//对象
				fontBanner:{},
			}
		},
		methods: {
			
		},
		mounted() {
			uni.request({
				url:"http://html5.bjsxt.cn/api/index/banner",
				success:(res)=> {
					// console.log("index")
					// console.log(res.data);
					this.fontBanner=res.data.foot_banner;
					this.topBanner=res.data.top_banner;
					this.index_banner = res.data.index_banner;
				}
			})
		},
		
	}
</script>

<style lang="scss">
	.home{
		display: flex;//弹性盒子
		flex-direction: column;//弹性盒子内容垂直排列方向
		flex: 1;//容器内容全屏
		overflow: hidden;//超出部分隐藏
		.index_banner_box{
			display: flex;
			width: 100%;
			padding: 10px;
			justify-content: center;//水平居中
			align-items: center;//垂直居中
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
			justify-content: center;//水平居中
			align-items: center;//垂直居中
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
			justify-content: space-between;//增大字间距
			align-content: space-between;//横向空隙增大
			flex-wrap: wrap;//竖向空隙增大
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
			img{
				width: 699rpx;
				height: 634rpx;
				margin: 0 0 15px 0;
			}
		}
		
	}
	
</style>
