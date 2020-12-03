<template>
	<view class="loading">
		<view class="bar" ref='loadingBar'></view>
	</view>
</template>

<script>
	const animation = weex.requireModule('animation')
	export default {
		mounted() {
			animation.transition(this.$refs.loadingBar, {
			    styles: {
			        width: '0%',
			    },
			    duration: 4000, //ms
			    timingFunction: 'ease',
			    }, function () {
			    })
		}
	}
</script>

<style>
	.loading {
		overflow: hidden;
		width: 200rpx;
		height: 30rpx;
		margin-top: 80rpx;
		border-radius: 5rpx;
		background-color: #fff;
	}

	.bar {
		width: 100%;
		height: 100%;
		background-color: #E55A54;
		border-radius: 5rpx;
	}
</style>
