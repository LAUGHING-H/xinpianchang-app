<script>
	export default {
		data() {
			return {
				value6: 0,
			}
		},

		onLaunch: function() {
			console.log('App Launch')
			uni.hideTabBar({})
		},
		onShow: function() {
			console.log('App Show')
			uni.hideTabBar({})
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
</style>
