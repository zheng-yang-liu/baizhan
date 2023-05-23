<template>
	<view class="home">
		<view class="courseIntroduce_box">
			<view class="courseIntroduce_des">
				<view class="courseIntroduce_info">{{ introduce }}</view>
			</view>
			<!-- 向组件传输数据 -->
			<CourseIntroduceData :msg="introduceList"/>
			<view class="question_line"></view>
			<view class="courseIntroduce_tab_box">
				<view class="courseIntroduce_tab_nav">
					<view v-for="(item,index) in items" :class="{ 'btna':count === index }" @tap="change(index)" :key="index">{{ item }}</view>
				</view>
				<view class="courseIntroduce_tab_con">
					<view class="discount_info" :class="{dis:count === 0}">
						<CourseList :videoList="Clist"/>
					</view>
					<view class="discount_info" :class="{dis:count === 1}">
						<CourseJieshao :images="imageT" :imageHeight="imageHeight"/>
					</view>
				</view>
				
			</view>
			
			
		</view>
		
	</view>
</template>

<script>
	import CourseIntroduceData  from"@/components/CourseIntroduceData/CourseIntroduceData.vue"
	import CourseList from"@/components/CourseList/CourseList.vue"
	import CourseJieshao from"@/components/CourseJieshao/CourseJieshao.vue"
	export default {
		data() {
			return {
				introduce:"",
				introduceList:[],
				items:["课程章节","课程介绍"],
				count:0,
				Clist:[],
				imageT:"@/static/java.jpg",
				imageHeight:""
			}
		},
		components:{
			CourseIntroduceData,
			CourseList,
			CourseJieshao
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
					this.Clist = res.data.data.Clist
					this.imageHeight = res.data.data.height
				}
			})
		},
		methods: {
			change(index){
				this.count = index;
			}
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