<template>
  <div>
    <Block :block="block" :top="blockDropboxTop" :ref="'block'" :index="index" :isPaused="isPaused"></Block>
  </div>
</template>

<script>
import Block from './Block';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "ReadyBlocks",
  props: {
    block: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    },
    timeOut: {
      type: Number
    }
  },
  components: {
    Block
  },
  data() {
    return {
      blockWindowBottom: 0,
      blockDropboxTop: this.block.height,
      timer: 0
    }
  },
  computed: {
    ...mapGetters([
      'isPaused',
      'stickBending'
    ]),
    blockFinalPosition() {
      const { top, bottom } = this.getStickCoords();
      return this.stickBending >= 0 ? top + ((bottom - top) / 2) * (1 - this.block.offset / (10 / 2))
        : bottom - ((bottom - top) / 2) * (1 - this.block.offset / (10 / 2))
    }
  },
  methods: {
    ...mapMutations({
      togglePause: 'togglePause'
    }),
    updateFunc () {
      if (this.isPaused) return clearTimeout(this.timer);
      if (this.index !== 0) return;

      this.blockWindowBottom = this.$refs.block.getBlockBottomCoord();
      this.timer = setTimeout(() => {
        if (this.blockWindowBottom >= this.blockFinalPosition - 20) {
          clearTimeout(this.timer);
          this.$store.dispatch('FinishFalling');
          this.$emit('finished-falling');
          return;
        }
        this.incrementBlockDropboxTop();
      }, this.timeOut)
    },
    getStickCoords() {
      const {top, bottom} = document.querySelector('.stick').getBoundingClientRect();
      return {
        top, bottom
      }
    },
    incrementBlockDropboxTop() {
      this.blockDropboxTop += 20;
    }
  },
  updated() {
    this.updateFunc()
  }
}
</script>

<style lang="scss" scoped>

</style>