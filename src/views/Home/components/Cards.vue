<template>
  <div class="px-5 sm:px-10 md:px-15 lg:px-20">
    <div >
      <h2 class="font-semibold text-2xl py-5">{{ CardOne[0].h2 }}</h2>
      <p class="lg:max-w-[50%] pb-5 text-lg">{{ CardOne[0].p }}</p>
    </div>
    <div class=" grid lg:grid-cols-4 gap-5 md:grid-cols-2">
        <div v-for="(card, index) in CardOne.slice(1)" :key="index">
          <div class="rounded-md overflow-hidden">
            <img :src="getImageUrl(card.src)" alt="card.h4" class="w-full h-35 sm:h-48 object-cover">
          </div>
          <div>
            <h4 class="text-lg font-semibold pt-2">{{ card.h4 }}</h4>
            <p class=" pb-5">{{ card.p }}</p>
          </div>
      </div>
    </div>

    <div >
      <h2 class="font-semibold text-2xl pt-10">{{ CardTwo[0].h2 }}</h2>
    </div>
    <div class=" grid lg:grid-cols-3 gap-10 pb-10">
      <div v-for="(card, index) in CardTwo.slice(1)" :key="index" class="relative bg-gradient-to-tr from-gray-600 to-gray-700 top-4 rounded-md overflow-hidden">
        <div>
          <img :src="getImageUrl(card.src)" alt="card.h4" class="w-full h-40 sm:h-56 object-cover mix-blend-overlay">
        </div>
        <div class="w-[90%] absolute inset-0 flex flex-col mx-auto justify-end text-white">
          <h4 class="pt-2">{{ card.h4 }}</h4>
          <p class="text-xs pb-5">{{ card.p }}</p>
        </div>
    </div>
    </div>

    <div >
      <h2 class="font-semibold text-2xl py-5">{{ CardThree[0].h2 }}</h2>
    </div>
    <div class=" grid lg:grid-cols-4 gap-5 md:grid-cols-2">
        <div v-for="(card, index) in CardThree.slice(1)" :key="index">
          <div class="rounded-md overflow-hidden">
            <img :src="getImageUrl(card.src)" alt="card.h4" class="w-full h-40 sm:h-56 object-cover">
          </div>
          <div>
            <h4 class="text-lg font-semibold pt-2">{{ card.h4 }}</h4>
            <p class=" pb-5">{{ card.p }}</p>
          </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      
      CardOne: [
        {h2:'Enjoy your dream vacation',p:'Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us'},
        { src: 'a1.jpg', h4: 'Australia', p: '2246 properties' },
        { src: '2.jpg', h4: 'Japan', p: '1278 properties' },
        { src: '3.jpg', h4: 'New Zealand', p: '480 properties' },
        { src: '4.jpg', h4: 'Greece', p: '320 properties' },
      ],
      CardTwo: [
      {h2:'Get inspiration for your next trip'},
        { src: '5.jpg', h4: 'Sydeny’s 10 most fashionable 5 star hotels', p: 'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....' },
        { src: '6.jpg', h4: 'Top cities for Vegan Travellers', p: 'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...' },
        { src: '7.jpg', h4: 'World’s top destinations during and post covid timeline', p: 'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...' },
      ],
      CardThree: [
      {h2:'Popular hotels'},
        { src: '8.jpg', h4: 'Lakeside Motel Warefront', p: '2246 properties' },
        { src: '9.jpg', h4: 'Recce Graham resort', p: '1278 properties' },
        { src: '10.jpg', h4: 'Fireside Dinners', p: '480 properties' },
        { src: '11.jpg', h4: 'Oculous Inn Stay', p: '320 properties' },
      ],
    };
  },
  methods: {
    getImageUrl(name) {
     return new URL(`./img/${name}`,import.meta.url).href
      }
  }
};
</script>