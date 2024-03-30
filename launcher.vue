<template>
  <div class="website-grid">
    <website v-for="website in websites" :key="website.name" :website="website" />
  </div>
</template>

<script>
import website from './website.vue';

export default {
  name: 'launcher',
  components: {
    website,
  },
  props: {
    websites: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.website-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

/* Add other styles for the launcher here */
</style>
