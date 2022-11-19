<template>
	<view class="top-bar">
		<u-tabs :list="tabberList" keyName="title">
			<view slot="right" style="padding-left: 4px;" class="tab-right">
				<view class="tab-right">
					<view class="img">
						<img class="img-auto" src="@/static/images/AB.png" alt="">
					</view>
					<view class="img">
						<img class="img-auto" src="@/static/images/铃铛.png" alt="">
					</view>
				</view>

			</view>
		</u-tabs>
	</view>
</template>

<script>
	export default {
		props: {
			tabberList: Array
		},

		data() {
			return {}
		},

	}
</script>

<style lang="scss" scoped>
	.top-bar {
		width: 100%;

		.img-auto {
			width: 100%;
			height: 100%;
			display: block;
		}

		.tab-right {
			height: 100%;
			display: flex;
			padding-left: 10px;
			box-sizing: border-box;
			align-items: center;
			justify-content: center;

			.img {
				width: 20px;
				height: 20px;
				margin-right: 10px;
			}
		}
	}
</style>
