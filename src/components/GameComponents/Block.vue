<template>
	<div :class="blockClass" :style="blockStyle" ref="block">
		<p :style="block.type == 1 ? 'width: 80px' : ''" :class="block.type == 1 ? 'ml-n10' : ''">{{ block.weight }}</p>
	</div>
</template>

<script>
export default {
	props: {
		block: {
			type: Object,
			required: true
		},
		side: {
			type: Boolean
		},
		top: {
			type: Number
		}
	},
	methods: {
		roundUp(number) {
			return Math.round(number * 100) / 100
		},
		getBlockBottomCoord() {
			const domElement = this.$refs.block;
			return domElement.getBoundingClientRect().bottom;
		}
	},
	computed: {
		blockClass() {
			switch (this.block.type) {
				case 0:
					return 'b-circle';
				case 1:
					return 'b-triangle';
				case 2:
					return 'b-rectangle'
			}
		},
		blockStyle() {
			const { offset, type, height } = this.block;
			const { side, roundUp, top } = this;

			const topOffset = top || 0;
			const leftOffset = side ? 50 + offset * 10 : 50 - offset * 10;
			const blockHeight = type !== 1 ?
				{
					height: `${roundUp(height)}px`,
					width: `${roundUp(height)}px`,
					lineHeight: `${roundUp(height)}px`
				}
				:
				{
					borderWidth: `0 ${roundUp(height)}px ${roundUp(height)}px ${roundUp(height)}px`,
					lineHeight: `${roundUp(height * 1.2)}px`
				};

			return {
				top: `${topOffset}px`,
				left: `${leftOffset}%`,
				...blockHeight
			}
		}
	},
}
</script>