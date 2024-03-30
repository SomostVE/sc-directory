Vue.component('sc-directory', {
    props: ['category'],
    data() {
      return {
        listings: [],
        filteredListings: []
      };
    },
    mounted() {
      this.fetchListings();
    },
    watch: {
      category: function() {
        this.filterListings();
      }
    },
    methods: {
      fetchListings() {
        fetch('../data/listings.json')
          .then(response => response.json())
          .then(data => {
            this.listings = data[this.category];
            this.filterListings();
          })
          .catch(error => {
            console.error('Error fetching listings:', error);
          });
      },
      filterListings() {
        this.filteredListings = this.listings;
      },
      goToWebsite(url) {
        window.open(url, '_blank');
      }
    },
    template: `
      <div>
        <!-- Main Page - Website List with Logos -->
        <div v-if="currentCategory === 'websites'" class="website-grid">
          <div v-for="item in filteredListings" :key="item.name" class="website-box" @click="goToWebsite(item.url)">
            <img :src="item.logo" :alt="item.name + ' Logo'">
            <p>{{ item.name }}</p>
          </div>
        </div>
  
        <!-- Pages List -->
        <div v-if="currentCategory === 'pages'" class="pages-list">
          <ul>
            <li v-for="item in filteredListings" :key="item.name">
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    `
  });
  
  new Vue({
    el: '#app',
    data: {
      currentCategory: 'websites' // Default category: Websites
    },
    methods: {
      setCurrentCategory(category) {
        this.currentCategory = category;
      }
    }
  });
  