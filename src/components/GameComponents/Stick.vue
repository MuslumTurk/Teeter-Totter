<template>
  <div class="stick" :style="StyleStick">
    <Block v-for="block in leftBlocks" :block="block" :key="block.id"></Block>
    <Block v-for="block in rightBlocks" :block="block" :side="true" :key="block.id"></Block>
  </div>
</template>

<script>
import Block from './Block';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "Stick",
  components: {
    Block
  },
  computed: {
    ...mapGetters([
      'rightBlocks',
      'leftBlocks',
      'stickBending'
    ]),
    StyleStick() {
      return {
        transform: `rotate(${this.stickBending / 6}deg)`
      }
    }
  },
  methods: {
    ...mapMutations({
      addRightBlock: 'addRightBlock',
    })
  },
  beforeMount() {
    this.addRightBlock()
  }
}
</script>