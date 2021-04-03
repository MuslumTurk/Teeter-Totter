<template>
  <v-app :style="$vuetify.theme.dark ? '' : 'background-color: #eef5f9'">
    <app-bar></app-bar>
    <v-main>
      <router-view ref="sub_page"></router-view>
    </v-main>
    <v-footer app elevation="3" inset style="z-index: 4;">
      <span class="ml-1">
        <span class="title font-weight text-uppercase grey--text">Oyun Biter: </span>
        -80 < ( 
          <span class="title font-weight text-uppercase" >{{ stickBending }}</span> ) > 80 
        veya ( 
          <span class="title font-weight text-uppercase">{{ leftBlocks.length ? calcBalance : 0 }}</span> ) > 45
      </span>

      <v-spacer></v-spacer>
      Müslüm Türk
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from 'insider-components/Layout/AppBar';
import { mapGetters } from 'vuex';

export default {
  name: 'AppMain',
  data: () => ({
  }),
  created () {
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'leftBlocks',
      'calcBalance',
      'stickBending'
    ]) 
  },
  mounted () {
  },
  components: {
    'app-bar': AppBar
  },
  watch: {
  }
};
</script>
<style lang="scss">
</style>
