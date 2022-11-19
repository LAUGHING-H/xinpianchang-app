<template>
	<view class="class-room">
		<tabbar :current="3"></tabbar>
	</view>
</template>

<script>
	import tabbar from '@/components/tabber/tabber.vue'
	export default {
		data() {
			return {

			}
		},

		components: {
			tabbar
		},

	}
</script>

<style lang="scss">
	.class-room {
		width: 100vw;
		height: 100vh;
		background-color: green;
	}
</style>
