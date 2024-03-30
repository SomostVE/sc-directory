<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">SC Directory Launcher</h1>
    <launcher :websites="websites" />
  </div>
</template>

<script>
import launcher from './launcher.vue';
import websites from './websites.js';

export default {
  name: 'app',
  components: {
    launcher,
  },
  data() {
    return {
      websites: websites,
    };
  },
};
</script>

<style>
/* Add your global styles here */
</style>
