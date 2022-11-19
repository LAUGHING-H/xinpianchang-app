<template>
	<view class="my">
		<tabbar :current="4"></tabbar>
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
	.my {
		width: 100vw;
		height: 100vh;
		background-color: yellowgreen;
	}
</style>
