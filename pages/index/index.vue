<template>
	<view>
		<u-swiper :list="list2" keyName="image" showTitle :autoplay="true" circular :height="200"></u-swiper>
		<view>
			<u-grid :border="false" @click="click">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>
		<u-image :showLoading="true" src='https://cdn.uviewui.com/uview/album/1.jpg' width="80px" height="80px" @click="click"></u-image>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				list2: [{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}],
				baseList: [{
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
					{
						name: 'star',
						title: '星星'
					}, {
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
					{
						name: 'star',
						title: '星星'
					},
				]
			}
		},
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
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
</style>
