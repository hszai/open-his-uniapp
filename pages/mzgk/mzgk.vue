<template>
	<view>
		<u-notice-bar icon="" text="请通过医院正规渠道挂号,如医生已满诊,可申请排队,将按排队顺序替补挂号。"></u-notice-bar>
		<u-scroll-list class="content" :indicator="false">
			<view v-for="(item, index) in list" :key="index">
				<view class="dataContent" :tabindex="index">
					<view>{{item.name}}</view>
					<view>{{item.data}}</view>
				</view>
			</view>
		</u-scroll-list>
		<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png">
		</u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '周日',
						data: 17
					},
					{
						name: '周一',
						data: 18
					},
					{
						name: '周二',
						data: 19
					},
					{
						name: '周三',
						data: 20
					},
					{
						name: '周四',
						data: 21
					},
					{
						name: '周五',
						data: 22
					},
					{
						name: '周六',
						data: 23
					}
				]
			}
		},
		methods: {
			click(name) {

			}
		}
	}
</script>

<style>
	.content {
		-moz-box-shadow: 0px 2px 3px #333333;
		-webkit-box-shadow: 0px 2px 3px #333333;
		box-shadow: 0px 2px 3px #333333;
	}

	.dataContent {
		margin-right: 10px;
		margin-left: 10px;
	}


	.dataContent:active {
		background: #F0AD4E;
		background-repeat: round;

	}

	.dataContent:focus {
		background: #F0AD4E;
		background-repeat: round;

	}
</style>
