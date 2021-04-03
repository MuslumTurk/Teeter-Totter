<template>
  <div>
    <v-app-bar app dense elevation="0" height="50" :color="!$vuetify.theme.dark ? 'white' : '' ">
      <div style="cursor: pointer;margin-right: 110px" class="title ml-3 font-weight text-uppercase grey--text">
        <v-icon class="mr-2 mb-1">mdi-gamepad-variant-outline</v-icon>
        <span>- İnsider Game</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn v-if="isFinished" text outlined @click="reGame">
        Yeni Oyun Başlat
      </v-btn>
      <v-spacer></v-spacer>
      <div>
        <span class="mr-3"> {{ calcLeftWeight }} Puan</span>
        <v-btn icon @click="togglePause" :disabled="isFinished">
          <v-icon x-large> {{ isPaused ? 'mdi-play-circle-outline' : 'mdi-pause-circle-outline' }} </v-icon>
        </v-btn>
        <span class="ml-3"> {{ calcRightWeight }} Puan</span>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AppMain',
  data: () => ({
    profile_menu: false,
    services_list: []
  }),
  created () {
  },
  props: {
  },
  beforeMount() {
    this.initialReadyBlocks();
  },
  methods: {
    ...mapMutations({
      initialReadyBlocks: "initialReadyBlocks",
      togglePause: 'togglePause'
    }),
    reGame () {
      this.$store.dispatch('StartGame')
    }
  },
  mounted () {
  },
  computed: {
    isPaused() {
      return this.$store.state.app.isPaused
    },
    calcLeftWeight () {
      return this.leftBlocks.reduce(function(tot, arr) { 
        return tot + arr.weight;
      }, 0);
    },
    calcRightWeight () {
      return this.rightBlocks.reduce(function(tot, arr) { 
        return tot + arr.weight;
      }, 0);

    },  
    ...mapGetters([
      'leftBlocks',
      'rightBlocks',
      'calcBalance',
      'stickBending',
      'isFinished'
    ]) 
  },
  components: {
  },
  watch: {
  }
};
</script>
