<template>
    <header class=" px-5 sm:px-10 md:px-15 lg:px-20" :class="headerClass">
      <nav class="flex justify-between items-center mx-auto py-[15px]  gap-2">
        <div class="flex justify-between">
          
            <img :src="logoSrc" alt="web-logo" >
          
          <h1 class=" whitespace-nowrap px-2">my Dream Place</h1>
        </div>
        <div
          ref="navLinks" 
          class=" md:static md:min-h-fit absolute  min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex items-center md:px-3 " 
        >
          <ul class="flex md:flex-row flex-col items-center md:gap-[2vw] gap-8 w-full ">
            <li v-for="(link, index) in links" :key="index">
            <a  :href="link.url">{{ link.text }}</a>
          </li>
          </ul>
        </div>
        <div class="flex items-center gap-4">
          <div>
            <button v-if="!userUUID" @click="navigateToLogin" class="bg-[#2F80ED] text-white w-[82px] h-[40px] rounded-md">Login</button>
            <div v-else class="relative flex items-center gap-3 pr-8">
                <img src="../assets/notification 1.svg" alt="" 
                  class="w-[35px] cursor-pointer "
                  />
                <img
                  class="w-[40px] cursor-pointer "
                  src="../assets/user-square 1.svg"
                  alt="Image 1"
                  @click="toggleDropdown"
                  
                />

                <!-- Dropdown menu -->
                <ul v-if="showDropdown" class="absolute flex flex-col top-10 w-[200px] -right-[40px] bg-white shadow-md rounded-md p-2 z-30">
                  <li class="flex gap-2 cursor-pointer"><img src="../assets/user-square 1.svg" alt="">Manage account</li>
                  <li class="flex gap-2 cursor-pointer"><img src="../assets/bxs-plane-take-off 1.svg" alt="">My trips</li>
                  <li class="flex gap-2 cursor-pointer"><img src="../assets/wallet-3 1.svg" alt="">Reward and wallet</li>
                  <li class="flex gap-2 cursor-pointer"  @click="signOut"><img src="../assets/logout 1.svg" alt="">Sign out</li>
                </ul>
              </div>
            
          </div>
          <img
            class="w-[30px] cursor-pointer md:hidden"
            v-if="showImage1"
            src="../assets/ellipsis-vertical-circle-outline.svg"
            alt="Image 1"
            @click="toggleImage"
          />
          <img
            class="w-[30px] cursor-pointer md:hidden"
            v-else
            src="../assets/close-circle-outline.svg"
            alt="Image 2"
            @click="toggleImage"
          />
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showImage1: true,
        showDropdown: false,
        userUUID: localStorage.getItem('userUUID'),
        
        links: [
        { text: 'Home', url: '#' },
        { text: 'Discover', url: '#' },
        { text: 'Activities', url: '#' },
        { text: 'About', url: '#' },
        { text: 'Contact', url: '#' },
      ],
      };
    },
    methods: {
      toggleImage() {
        this.showImage1 = !this.showImage1
  
        // Get the reference to the nav-links element
        const navLinks = this.$refs.navLinks
  
        // Update the style to show/hide the nav-links element
        navLinks.style.top = this.showImage1 ? "-100%" : "8%"
      },
      navigateToLogin() {
      // Use this.$router.push to navigate to the login page
      this.$router.push('/login');
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    async signOut() {
      // Remove the UUID from local storage
      localStorage.removeItem('userUUID');

      // Determine the current route
      const currentRoute = this.$route.name;

      // If not on the home page, navigate to it
      if (currentRoute !== 'home') {
        await this.$router.push({ name: 'home' }); // Replace 'home' with your actual home route name
      }

      // Show the login button immediately
      this.userUUID = null;
    },
},
  computed: {
    headerClass() {
      return {
        'bg-white': this.$route.path !== '/search',
        'bg-gradient-to-b from-[#2969BF] to-[#144E9D]': this.$route.path === '/search',
        'h-[10vh]': this.$route.path !== '/search',
        'h-[30vh]': this.$route.path === '/search',
        'text-[#1B1F2D]': this.$route.path !== '/search',
        'text-white': this.$route.path === '/search',
      };
    },
    logoSrc() {
      // Check the route and return the appropriate image source
      if (this.$route.path === '/search') {
        return new URL('../assets/logo2.svg',import.meta.url).href
      } else {
        return new URL('../assets/logo.svg',import.meta.url).href
      }
    },
  },

};
  </script>