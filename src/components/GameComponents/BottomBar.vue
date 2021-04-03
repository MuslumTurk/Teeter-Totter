<template>
  <section class="bottombar">
    <Stick></Stick>
    <Triangle></Triangle>
  </section>
</template>

<script>
import Stick from './Stick'
import Triangle from './Triangle'

export default {
  name: "BottomBar",
  components: {
    Stick,
    Triangle
  }
}
</script>