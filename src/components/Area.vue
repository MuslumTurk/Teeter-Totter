<template>
  <main class="gameArea">
    <TopBar></TopBar>
    <BottomBar></BottomBar>
  </main>
</template>

<script>
import TopBar from './GameComponents/TopBar'
import BottomBar from './GameComponents/BottomBar'

export default {
  components:{
    TopBar,
    BottomBar
  }
}
</script>