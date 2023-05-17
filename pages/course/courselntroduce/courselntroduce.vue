<template>
	<view class="home">
		<view class="courseIntroduce_box">
			<view class="courseIntroduce_des">
				<view class="courseIntroduce_info">{{ introduce }}</view>
			</view>
			<!-- 向组件传输数据 -->
			<CourseIntroduceData :msg="introduceList"/>
		</view>
	</view>
</template>

<script>
	import CourseIntroduceData  from"@/components/CourseIntroduceData/CourseIntroduceData.vue"
	export default {
		data() {
			return {
				introduce:"",
				introduceList:[]
			}
		},
		components:{
			CourseIntroduceData
		},
		onLoad(options){
			console.log(options);
			uni.request({
				url:"https://www.itbaizhan.cn/api/course/detail",
				// 参数
				data:{
					id:options.id,
					course:options.course
				},
				success:(res)=>{
					console.log(res);
					// 找不到intrduce
					this.introduce = res.data.data.introduce
					this.introduceList=res.data.data.introduceList
				}
			})
		},
		methods: {
			
		}
	}
</script>
<style lang="scss">
	.courseIntroduce_box {
		display: flex;
		box-sizing: box;
		flex-direction: column;
		margin-bottom: 90px;

		.courseIntroduce_des {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			background-color: #0c9c8f;
			padding: 0 10px 15px;
			overflow: hidden;

			.courseIntroduce_info {
				display: flex;
				box-sizing: box;
				width: 100%;
				color: #fff;
				font-size: 16px;
				line-height: 24px;
			}
		}

		//tab
		.courseIntroduce_tab_box {
			display: flex;
			box-sizing: border-box;
			flex-direction: column;

			.courseIntroduce_tab_nav {
				display: flex;
				box-sizing: border-box;
				flex-direction: row;
				background-color: #fff;
				border-bottom: 1px solid #e4e4e4;
				margin-bottom: 20px;

				view {
					height: 50px;
					line-height: 50px;
					font-size: 16px;
					flex-grow: 1;
					text-align: center;
					background-color: #fff;

				}
			}

			.discount_info {
				display: none;
			}

			.btna {
				display: flex;
				box-sizing: border-box;
				justify-content: center; //水平方向对齐
				color: #00b783;
				position: relative;
			}

			.btna::after {
				content: '';
				width: 40px;
				height: 3px;
				background-color:#00b783;
				position: absolute;
				bottom: 0;
				left: 50%;
				margin-left: -20px;
			}

			.dis {
				display: block;
			}
		}
	}
</style>
