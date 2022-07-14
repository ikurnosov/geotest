<template>
  <h1 @click="handleClick">Check your location!</h1>
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
      alert(JSON.stringify(this.geoCode));
    }
  }
}
</script>
