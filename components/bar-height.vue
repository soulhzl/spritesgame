<template>
	<view :style="'height:'+statusBarHeight+'px'"></view>
</template>

<script>
	export default{
		data(){
			return {
				statusBarHeight: 0
			}
		},
		mounted() {
			this.statusBarHeight = plus.navigator.getStatusbarHeight()
		}
	}
</script>

<style>
</style>
