<template>
	<view class="tabber">
		<u-tabbar :value="current ? current : 0" @change="tabbarChange" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true" activeColor="#000000" inactiveColor="#A3A3A3">

			<u-tabbar-item text="首页">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/images/home (1).png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/images/home.png"></image>
			</u-tabbar-item>

			<u-tabbar-item text="手记">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/images/qS.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/images/_w.png"></image>
			</u-tabbar-item>

			<u-tabbar-item text="搜索">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/images/Ze.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/images/KJ.png"></image>
			</u-tabbar-item>

			<u-tabbar-item text="课堂">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/images/sK.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/images/Zs.png"></image>
			</u-tabbar-item>

			<u-tabbar-item text="我的">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/images/u-.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/images/hV.png"></image>
			</u-tabbar-item>

		</u-tabbar>
	</view>
</template>

<script>
	export default {
		props: {
			current: Number
		},
		data() {
			return {
				list: [{
						path: "pages/home/home"
					}, {
						path: "pages/notes/notes"
					},
					{
						path: 'pages/search/search'
					},
					{
						path: "pages/classroom/classroom"
					},
					{
						path: "pages/my/my"
					}
				]
			};
		},
		methods: {
			tabbarChange(e) {
				uni.switchTab({
					url: '/' + this.list[e].path
				})
			}
		}
	}
</script>

<style lang="scss">
	.tabber {
		width: 100%;
		height: 100%;

		.u-page {
			padding: 0;

			&__item {

				&__title {
					color: $u-tips-color;
					background-color: $u-bg-color;
					padding: 15px;
					font-size: 16px;

					&__slot-title {
						color: $u-primary;
						font-size: 14px;
					}
				}

				&__slot-icon {
					width: 20px;
					height: 20px;
					margin-bottom: 3px;
				}
			}
		}
	}
</style>
