<template>
  <h1 @click="handleClick">TRY ME!</h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      geoCode: 'geo/geo'
    })
  },
  methods: {
    handleClick() {
      console.log(this.geoCode);
    }
  }
}
</script>
