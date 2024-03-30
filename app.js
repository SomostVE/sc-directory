// app.js
import websites from './websites.js';
import pages from './pages.js';

const app = Vue.createApp({
  data() {
    return {
      websites: websites,
      pages: pages,
      currentPage: 'websites', // Initially show the websites page
      filterText: '',
    };
  },
  computed: {
    filteredPages() {
      const filterText = this.filterText.toLowerCase();
      return this.pages.filter(page => {
        return (
          page.name.toLowerCase().includes(filterText) ||
          page.website.toLowerCase().includes(filterText)
        );
      });
    },
  },
  methods: {
    changePage(pageName) {
      this.currentPage = pageName;
    },
  },
});

app.component('website-card', {
  props: ['website'],
  template: `
    <div class="website-card" @click="openLink(website.url)">
      <img :src="website.logo" :alt="website.name + ' Logo'" />
      <p>{{ website.name }}</p>
    </div>
  `,
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
  },
});

app.component('page-item', {
  props: ['page'],
  template: `
    <div class="page-item">
      <p>{{ page.name }}</p>
      <p>{{ page.website }}</p>
      <p>{{ page.url }}</p>
    </div>
  `,
});

app.mount('#app');
