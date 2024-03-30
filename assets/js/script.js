// Function to fetch listings from listings.json file
async function fetchListings() {
    try {
      const response = await fetch('data/listings.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching listings:', error);
      return [];
    }
  }
  
  // Function to display listings on the website
  function displayListings() {
    const categories = ['communities', 'websites', 'tools']; // Add more categories if needed
  
    categories.forEach(async category => {
      const listings = await fetchListings();
      const categoryList = listings[category];
  
      if (categoryList && categoryList.length > 0) {
        const categoryContainer = document.getElementById(`${category}-list`);
  
        if (categoryContainer) {
          categoryList.forEach(item => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
  
            link.textContent = item.name;
            link.href = item.url;
            link.target = '_blank'; // Open link in a new tab
  
            listItem.appendChild(link);
            categoryContainer.appendChild(listItem);
          });
        }
      }
    });
  }
  
  // Call the displayListings function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', displayListings);
  