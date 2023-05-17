<template>
	<view class="coures_nav_con">
		<view class="coures_nav_info" v-for="(item,index) in list" :key="index" v-if="index<15" @click="courseItemHandel(item.id,item.course)">
			<text class="coures_nav_icon icon iconfont" :class="item.icon"></text>
			<view class="coures_info_text">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list:[]
			}
		},
		mounted() {
			uni.request({
				url:"http://html5.bjsxt.cn/api/index/nav",
				success:(res) => {
					// console.log(res.data)
					this.list = res.data.data
				}
			})
		},
		methods:{
			//刘政阳
			courseItemHandel(id,course){
				console.log(id,course);
				// 跳转
				uni.navigateTo({
		
					url:"/pages/course/courselntroduce/courselntroduce?id=" + id +"&course="+course
					
				})
				
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/font/iconfont.css";
	.coures_nav_con{
		display: flex;
		//盒子模型不撑开容器本身大小
		box-sizing: border-box;
		flex-direction: row;//指定 flex 容器中的项目排列方向为水平方向
		flex-wrap: wrap;//拆行或拆列
		padding: 15px 10px;
		.coures_nav_info{
			width: 20%;
			flex-direction: row;//指定 flex 容器中的项目排列方向为水平方向
			flex-wrap: wrap;//拆行拆列
			text-align: center;
			margin-bottom: 15px;
			.coures_nav_icon{
				font-size: 30px;
			}
			.icon-java{
				color: #2a83fe;
			}
			.icon-icon--{
				color: #fee94a;
			}
			.icon-houduan{
				color: #55aa7f;
			}
			.icon-zidonghua{
				color: #00aaff;
			}
			.icon-shujufenxi{
				color: #ffc738;
			}
			.icon-suanfaku{
				color: #7ca3fe;
			}
			.icon-h{
				color: #20fe11;
			}
			.icon-dashuju{
				color: #7ca3fe;
			}
			.icon-rengongzhineng{
				color: #2a00fe;
			}
			.icon-weifuwu{
				color: #dd57fe;
			}
			.icon-zuzhijiagou{
				color: #adfe42;
			}
			.icon-ruanjianceshi{
				color: #0cfe00;
			}
			.icon-huatong{
				color: #6b08ff;
			}
			.icon-bianchengshibaobiao_icon{
				color: #fe0000;
			}
			.icon-chuangye1 {
				color: #fe6568;
			}
			.icon-jianmo{
				color: #fe6568;
			}
			.coures_info_text{
				width: 100%;
				font-size: 13px;
				margin-top: 10px;
				white-space: nowrap;// 文宇部分不能超出，超出不出现
				text-overflow: ellipsis;//超出部分以...代替
				overflow: hidden;
			}
		}
	}
</style>