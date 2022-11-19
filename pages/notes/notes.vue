<template>
	<view class="notes">
		<tabbar :current="1"></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabber/tabber.vue'
	export default {
		data() {
			return {

			};
		},

		components: {
			tabbar
		},
	}
</script>

<style lang="scss">
	.notes {
		width: 100vw;
		height: 100vh;
		background-color: orange;
	}
</style>
