<template>
  <div class="website-box" @click="openLink(website.url)">
    <img :src="website.logo" :alt="website.name + ' Logo'" />
    <p>{{ website.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'website',
  props: {
    website: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
.website-box {
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.website-box img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto 10px;
}

.website-box p {
  text-align: center;
  color: #fff;
}

.website-box:hover {
  background-color: #333;
}
</style>
