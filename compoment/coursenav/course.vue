<template>
	<view class="course_nav_con">
		<!-- 循环输出list中的数据 -->
		<view class="course_nav_info" v-for="(item,index) in list" :key="index" v-if="index<15">
			<!-- 显示图标 -->
			<text class="course_nav_icon icon iconfont" :class="item.icon"></text>
			<!-- 显示list中的文本信息 -->
			<view class="course_nav_info_text">
				{{item.text}}
			</view>
		</view>
	</view>
</template>

<script>
	import icondata from"./icondata.json"
	
	export default{
		data(){
			return{
				// 盛放数据
				list:[], 
				data:[]
			}
		},
		
		created(){
			this.data=icondata.data
		},
		
		mounted(){
			uni.request({
				// http://html5.bjsxt.cn/api/index/nav
				url:"http://html5.bjsxt.cn/api/index/nav",
				success: (res) => {
					// console.log(res.data),
					this.list=res.data.data
				}
			})
		}
	}
</script>

<style lang="scss">
	// 同类别图标更改
	@import"@/common/font/iconfont.css";
	
	
	.course_nav_con{
		display: flex;//弹性盒子模型
		box-sizing: border-box;//盒子模型不撑开容器本身大小
		flex-direction: row;//指定 flex 容器中的项目排列方向为水平方向
		flex-wrap: wrap;//多出的内容自动显示到下一行
		padding: 15px 10px;
		.course_nav_info{
			width: 20%;
			flex-direction: row;
			flex-wrap: wrap;
			text-align: center;//文字居中·
			margin-bottom: 15px;
			.course_nav_icon{
				font-size: 30px;
			}
			.icon-java {
				color: #2a83fe;
			}
			// 微服务
			.icon-weifuwu {
				color: #fd3761;
			}
			// R7架构师
			.icon-zuzhijiagou {
				color: #2b91e2;
			}
			//大数据
			.icon-dashuju {
				color: #2a83fe;
			}
			// web前端
			.icon-h {
				color: #00b478;
			}
			// python
			.icon-icon-- {
				color: #fd6012;
			}
			// 人工智能
			.icon-rengongzhineng {
				color: #fe391f;
			}
			// 软件测试
			.icon-ruanjianceshi {
				color: #00b478;
			}
			// 7U职场
			.icon-huatong {
				color: #fea917;
			}
			// 毕业项目
			.icon-bianchengshibaobiao_icon {
				color: #8bfed8;
			}
			
			// 新建
			.icon-chuangye1{
				color: #a4957b;
			}
			.icon-suanfaku{
				color: #ac74c4;
			}
			.icon-houduan{
				color: #20d478;
			}
			.icon-zidonghua{
				color: #1531b2;
			}
			.icon-shujufenxi{
				color: #b41d6e;
			}
			
			
			
			
			.course_nav_info_text{
				width: 100%;
				font-size:13px;
				margin-top: 10px;
				//指定元素内部的空白字符不换行，强制在同一行内显示。这个属性常用于防止文本或块级元素因为太长而自动换行。
				white-space: nowrap;
				//指定当文本溢出容器时，使用省略号（...）显示
				text-overflow: ellipsis;
				//则超出的部分会被隐藏，不会显示在页面上。
				overflow: hidden;
			}
		}
	}
</style>