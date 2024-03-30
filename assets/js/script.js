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
  