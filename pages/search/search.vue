<template>
	<view class="search">
		<tabbar :current="2"></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabber/tabber.vue'
	export default {
		data() {
			return {

			}
		},
		methods: {

		},

		components: {
			tabbar
		},

	}
</script>

<style lang="scss">
	.search {
		width: 100vw;
		height: 100vh;
		background-color: yellow;
	}
</style>
