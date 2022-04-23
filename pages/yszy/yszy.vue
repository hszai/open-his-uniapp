<template>
	<view>
		<u-cell icon="setting-fill" title="个人设置">
			<u--image slot="icon" width="100px" height="100px" src="https://cdn.uviewui.com/uview/album/1.jpg"
				radius='2' />

		</u-cell>
		<table>
			<tr>
				<td class="td-class">挂号</td>
				<td class="td-class">介绍</td>
			</tr>
		</table>
		<u-cell title="date">
			<view @click="showtime" slot="value">更多时间</view>
		</u-cell>
		<u-datetime-picker :show="show" v-model="value1" mode="datetime"></u-datetime-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
					name: '挂号',
				}, {
					name: '介绍',
				}],
				show: false,
				value1: Number(new Date())

			}
		},
		methods: {
			showtime() {
				console.log("test")
				this.show = true
			}
		}
	}
</script>

<style>
	.td-class {
		margin-left: 20rpx;
		margin-right: 20rpx;
		font-size: 30rpx;
	}
</style>
