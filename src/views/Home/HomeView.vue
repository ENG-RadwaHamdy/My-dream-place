<template>
    <div>
      <Navbar />
      <Hero />
      <Search />
      <Checkout />
      <Cards />
      <HeroB />
      <Footer />
    </div>
  </template>
  
  <script>
import Checkout from '../../components/Checkout.vue';
import Footer from '../../components/Footer.vue';
import Navbar from '../../components/Navbar.vue';
import Search from '../../components/Search.vue';
import Cards from './components/Cards.vue';
import HeroB from './components/Hero-b.vue';
import Hero from './components/Hero.vue';

  
  export default {
    components: {
      Checkout,
      Footer,
      Navbar,
      Search,
      Cards,
      HeroB,
      Hero,
    },
  };
  </script>