<template>
	<view class="monster position-relative flex justify-center align-center flex-column" :style="monsterwh" ref='monster'
	 @click="jump">
		<view class="eye flex justify-center align-center" :style="monsterEye">
			<view class="eyeball" :style="monsterEyeball" ref='eyeball'></view>
		</view>
		<view class="mouth" :style="monsterMouth"></view>
	</view>
</template>

<script>
	const animation = weex.requireModule('animation')
	export default {
		props: {
			width: {
				type: Number,
				default: 100
			},
			height: {
				type: Number,
				default: 100
			},
			animationStyle: {
				type: String,
				default: 'transform: scale(1,1);'
			},
			backgroundColor: {
				type: String,
				default: 'background-color:#e55A54;'
			},
			eyeColor: {
				type: String,
				default: 'background-color: #fff;'
			},
			eyeballColor: {
				type: String,
				default: 'background-color: #0C4475;'
			},
			mouthColor: {
				type: String,
				default: 'background-color: white;'
			},
			canClick: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				jumpStatus: false
			}
		},
		computed: {
			monsterwh() {
				return `width: ${this.width}rpx;height: ${this.height}rpx;${this.animationStyle}${this.backgroundColor}`
			},
			monsterEye() {
				return `width: ${this.width * 0.5}rpx;height: ${this.height * 0.5}rpx;${this.eyeColor}`
			},
			monsterEyeball() {
				return `width: ${this.width * 0.3}rpx;height: ${this.height * 0.3}rpx;${this.eyeballColor}`
			},
			monsterMouth() {
				let min = this.width > this.height ? this.height : this.width
				return `margin-top: ${this.width * 0.1}rpx;width: ${this.height * 0.4}rpx;height: ${this.height * 0.1}rpx;${this.mouthColor}`
			}
		},
		mounted() {
				animation.transition(this.$refs.eyeball, {
					styles: {
						transform: 'translateX(-' + this.width * 0.02 + 'rpx)'
					},
					duration: 1500, //ms
					timingFunction: 'ease',
				}, function() {})
				setTimeout(() => {
					animation.transition(this.$refs.eyeball, {
						styles: {
							transform: 'translateX(' + this.width * 0.02 + 'rpx)'
						},
						duration: 1500, //ms
						timingFunction: 'ease',
					}, function() {})
				}, 1500)
		},
		methods: {
			jump() {
				if (this.canClick && !this.jumpStatus) {
					let that = this
					this.jumpStatus = true
					animation.transition(this.$refs.monster, {
						styles: {
							transform: 'translateY(-50rpx)'
						},
						duration: 2000, //ms
						timingFunction: 'ease',
					}, function() {})
					setTimeout(() => {
						animation.transition(this.$refs.monster, {
							styles: {
								transform: 'translateY(0rpx)'
							},
							duration: 2000, //ms
							timingFunction: 'ease',
						}, function() {
							that.jumpStatus = false
						})
					}, 2000)
				}
			}
		}
	}
</script>

<style scoped>
	.monster {
		border-radius: 20rpx;
	}

	.eye {
		width: 15%;
		height: 15%;
		border-radius: 50%;
	}

	.eyeball {
		border-radius: 50%;
	}

	.mouth {
		border-radius: 12rpx;
	}
</style>
