// main.js
(function() {
    const websites = [
      {
        name: "SC Trade Tools",
        url: "https://sc-trade.tools/home",
        logo: "https://via.placeholder.com/150",
      },
      {
        name: "Fleetyards",
        url: "https://fleetyards.net",
        logo: "https://via.placeholder.com/150",
      },
      {
        name: "UEX Corporation",
        url: "https://uexcorp.space",
        logo: "https://via.placeholder.com/150",
      },
      // Add more websites as needed
    ];
  
    const app = {
      data() {
        return {
          websites: websites,
        };
      },
    };
  
    Vue.createApp(app)
      .component('launcher', {
        props: ['websites'],
        template: `
          <div class="website-grid">
            <website v-for="website in websites" :key="website.name" :website="website" />
          </div>
        `
      })
      .component('website', {
        props: ['website'],
        template: `
          <div class="website-box" @click="openLink(website.url)">
            <img :src="website.logo" :alt="website.name + ' Logo'" />
            <p>{{ website.name }}</p>
          </div>
        `,
        methods: {
          openLink(url) {
            window.open(url, '_blank');
          },
        },
      })
      .mount('#app');
  })();
  