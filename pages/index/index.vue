<template>
	<view>
		<u-swiper :list="list2" keyName="image" showTitle :autoplay="true" circular :height="200"></u-swiper>
		<view>
			<u-grid :border="false" @click="click">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex"
					:name="baseListItem.name">
					<u-image :showLoading="true" :src="baseListItem.src" width="55px" height="45px"></u-image>
					<!-- <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon> -->
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>
		<u-image class="img-class" src="https://images--typora.oss-cn-guangzhou.aliyuncs.com/下载.jpeg" width="440px"
			height="300px"></u-image>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				list2: [{
					image: 'https://img1.dxycdn.com/2019/0910/002/3367478239575747059-15.jpg',
					title: '睡觉时身体猛然抖一下，是大病的征兆？',
				}, {
					image: 'https://img1.dxycdn.com/2021/0630/407/0159159096690479843-22.jpg',
					title: '睡很久，为何还是犯困？'
				}, {
					image: 'http://img.dxycdn.com/dotcom/2015/07/13/19/fwiz1hzf.jpg',
					title: '多梦怎么办？6 招助你进入深度睡眠'
				}],
				baseList: [{
						src: "https://images--typora.oss-cn-guangzhou.aliyuncs.com/yygh.jpg",
						name: 'yygh',
						title: '预约挂号'
					},
					{
						src: "https://images--typora.oss-cn-guangzhou.aliyuncs.com/20220423015808.png",
						name: 'kscx',
						title: '科室查询'
					},
					{
						src: "https://images--typora.oss-cn-guangzhou.aliyuncs.com/wdda.jpg",
						name: 'wdda',
						title: '我的档案'
					}, {
						src: "https://images--typora.oss-cn-guangzhou.aliyuncs.com/ghjl.jpg",
						name: 'ghjl',
						title: '挂号记录'
					},
					{
						src: "https://images--typora.oss-cn-guangzhou.aliyuncs.com/jfjl.jpg",
						name: 'jfjl',
						title: '缴费记录'
					}, {
						src: 'https://images--typora.oss-cn-guangzhou.aliyuncs.com/bgcx.jpg',
						name: 'bgjl',
						title: '报告记录'
					},
					{
						src: 'https://images--typora.oss-cn-guangzhou.aliyuncs.com/20220423022020.png',
						name: 'jzjl',
						title: '就诊记录'
					},
					{
						name: 'yszy',
						title: '医生主页(test)'
					},
				]
			}
		},
		methods: {
			click(name) {
				if (name == 'yygh') {
					uni.$u.route('/pages/kslb/kslb');
				}
				if (name == 'kscx') {
					uni.$u.route('/pages/kscx/kscx');
				}
				if (name == 'wdda') {
					uni.$u.route('/pages/wdda/wdda');
				}
				if (name == 'ghjl') {
					uni.$u.route('/pages/ghjl/ghjl');
				}
				if (name == 'jfjl') {
					uni.$u.route('/pages/jfjl/jfjl');
				}
				if (name == 'yszy') {
					uni.$u.route('/pages/yszy/yszy');
				}
			}
		}
	}
</script>

<style lang="scss">
	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
	.img-class{
		margin-top: 90rpx;
	}
</style>
