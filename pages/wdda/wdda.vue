<template>
	<view class="warp">
		<u--form labelPosition="left" :model="model1" ref="form1" labelWidth="100">
			<u-form-item label="姓名" prop="userInfo.name" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.name" border="none"></u--input>
			</u-form-item>
			<u-form-item label="身份证号" prop="userInfo.id" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.id" border="none"></u--input>
			</u-form-item>
			<u-form-item label="电话" prop="userInfo.phone" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.phone" border="none"></u--input>
			</u-form-item>
			<u-form-item label="性别" prop="userInfo.sex" borderBottom ref="item1">
				<u-radio-group v-model="value" placement="row">
					<view class="radio-class">
						<u-radio label="男"></u-radio>
					</view>
					<view>
						<u-radio label="女"></u-radio>
					</view>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="地址信息" prop="userInfo.address" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.address" border="none"></u--input>
			</u-form-item>
			<u-form-item label="紧急联系人" prop="userInfo.jjlxr" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.jjlxr" border="none"></u--input>
			</u-form-item>
			<u-form-item label="紧急联系人姓名" prop="userInfo.jjlxrxm" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.jjlxrxm" border="none"></u--input>
			</u-form-item>
			<u-form-item label="过敏信息" prop="userInfo.gbxx" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.gbxx" border="none"></u--input>
			</u-form-item>
			<u-form-item label="左耳听力" prop="userInfo.zetl" borderBottom ref="item1">
				<u-radio-group v-model="value" placement="row">
					<view class="radio-class">
						<u-radio label="正常"></u-radio>
					</view>
					<view>
						<u-radio label="耳聋"></u-radio>
					</view>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="右耳听力" prop="userInfo.yetl" borderBottom ref="item1">
				<u-radio-group v-model="value" placement="row">
					<view class="radio-class">
						<u-radio label="正常"></u-radio>
					</view>
					<view>
						<u-radio label="耳聋"></u-radio>
					</view>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="身高" prop="userInfo.sg" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.sg" border="none"></u--input>
			</u-form-item>
			<u-form-item label="体重" prop="userInfo.tz" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.tz" border="none"></u--input>
			</u-form-item>
			<u-form-item label="血型" prop="userInfo.xx" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.xx" border="none"></u--input>
			</u-form-item>
			<u-form-item label="个人史" prop="userInfo.grs" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.grs" border="none"></u--input>
			</u-form-item>
			<u-form-item label="家族史" prop="userInfo.jzx" borderBottom ref="item1">
				<u--input v-model="model1.userInfo.jzx" border="none"></u--input>
			</u-form-item>
		</u--form>
		<u-button type="primary" text="确定" @click="showData"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model1: {
					userInfo: {
						name: 'uView UI',
						sex: '',
					},
				}
			};
		},
		methods: {
			showData(){
				//在这里调用联系人保存接口可以
				console.log(this.model1.userInfo)
			}
		},
	};
</script>
<style lang="scss" scoped>
	.warp {
		padding: 10rpx;
		margin-left: 20rpx;
	}
	.radio-class{
		margin-right: 100rpx;
	}
</style>
