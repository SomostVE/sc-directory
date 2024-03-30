Vue.component('sc-directory', {
    data() {
      return {
        currentCategory: 'Communities',
        listings: [],
        filteredListings: []
      };
    },
    mounted() {
      this.fetchListings();
    },
    methods: {
      fetchListings() {
        fetch('data/listings.json')
          .then(response => response.json())
          .then(data => {
            this.listings = data;
            this.filterListings('communities');
          })
          .catch(error => {
            console.error('Error fetching listings:', error);
          });
      },
      filterListings(category) {
        this.currentCategory = category;
        this.filteredListings = this.listings[category];
      }
    },
    template: `
      <section>
        <h2>{{ currentCategory }}</h2>
        <ul class="listings">
          <li v-for="item in filteredListings" :key="item.name">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </section>
    `
  });
  
  new Vue({
    el: '#app'
  });
  