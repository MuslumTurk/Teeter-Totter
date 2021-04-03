<template>
  <section class="topbar">
    <ReadyBlocks v-for="(block, index) in readyBlocks"
      :block="block"
      :index="index"
      :timeOut="timeOut"
      @finished-falling="onFinishFalling"
      :key="block.id"
    >
    </ReadyBlocks>
  </section>
</template>

<script>
import ReadyBlocks from './ReadyBlocks'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "Dropbox",
  components: {
    ReadyBlocks
  },
  data() {
    return {
      timeOut: 300,
      iteration: 0
    }
  },
  computed: {
    ...mapGetters([
      'readyBlocks'
    ])
  },
  methods: {
    ...mapMutations({
      moveRight: "moveRight",
      moveLeft: "moveLeft",
    }),
    onKeyDown(ev) {
      if (ev.keyCode === 39) this.moveRight();
      if (ev.keyCode === 37) this.moveLeft();
    },
    onFinishFalling() {
      this.iteration++;
      if (this.iteration === 5) {
        this.timeOut -= 50;
        this.iteration = 0;
      }
    }
  },
  beforeMount() {
    window.addEventListener('keydown', this.onKeyDown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKeyDown)
  }
}
</script>