<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  created () {
    this.$vuetify.theme.dark = false;
    this.$vuetify.rtl = false;
  },
  mounted () {
  }
};
</script>
<style lang="scss">
  @import './assets/scss/app.scss';
</style>