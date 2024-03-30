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
        fetch('data/listings.json')
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
      }
    },
    template: `
      <div class="launcher-listings">
        <ul>
          <li v-for="item in filteredListings" :key="item.name">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </div>
    `
  });
  
  new Vue({
    el: '#app',
    data: {
      currentCategory: 'communities' // Default category
    },
    methods: {
      setCurrentCategory(category) {
        this.currentCategory = category;
      }
    }
  });
  