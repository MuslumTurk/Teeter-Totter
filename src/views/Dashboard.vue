<template>
  <div style="height: 100%">
    <v-card style="height: 100%" class="px-5">
      <div style="height: calc(100% - 0px)">
        <Area></Area>
      </div>
    </v-card>
  </div>
</template>

<script>
import Area from 'insider-components/Area';

export default {
  data: () => ({
    is_loading: true
  }),
  created () {
  },
  computed: {
  },
  methods: {
  },
  components: {
    Area
  }
};
</script>
