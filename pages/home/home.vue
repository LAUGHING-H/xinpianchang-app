<template>
	<view class="home">
		<HomeTabBerComponent :tabberList="tabberList"></HomeTabBerComponent>
		<tabbar :current="0"></tabbar>
	</view>
</template>

<script>
	import {
		getTopTabBerData
	} from '@/api/home.js'

	import tabbar from '@/components/tabber/tabber.vue'
	import HomeTabBerComponent from '@/components/Home/HomeTabBerComponent.vue'
	export default {
		data() {
			return {
				show: false,
				tabberList: []
			}
		},

		components: {
			HomeTabBerComponent,
			tabbar
		},

		methods: {
			async getTopTabBerData() {
				await getTopTabBerData().then(({
					data
				}) => {
					console.log(data);
					this.tabberList = data.tab
				});
			}
		},

		created() {
			this.getTopTabBerData()
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		width: 100vw;
		height: 100vh;
	}
</style>
