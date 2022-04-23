<template>
	<view>
		<view class="user-box">
			<u-row justify="space-around" customStyle="margin-bottom: 10px">
				<u-avatar :src="pic" size="80"></u-avatar>
				<view class="mc">
					<view>uView ui</view>
					<view>微信号:helang_uView</view>
				</view>
			</u-row>
			
		</view>

	
		<view>
			<u-cell-group>
				<u-cell icon="star" title="收藏"></u-cell>
				<u-cell icon="photo" title="相册"></u-cell>
				<u-cell icon="coupon" title="卡券"></u-cell>
				<u-cell icon="heart" title="关注"></u-cell>
			</u-cell-group>
		</view>
		
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic: 'https://uviewui.com/common/logo.png',
				show: true
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}

	.user-box {
		background-color: #fff;
	}
</style>
