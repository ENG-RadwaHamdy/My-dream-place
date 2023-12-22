<template>
    <div class="flex ">
      <!-- First div (25% width) -->
      <aside class="w-1/4 ml-10 my-10 flex flex-col">
        <div class="bg-[#F2F2F2] rounded-md relative mx-5 w-[90%] lg:w-[80%] h-50 lg:h-fit">
            <label for="search-name" class="block text-base lg:text-lg my-5 mx-5 ">Search by property name</label>
            <input type="text" id="search-name" class="border float-right lg:float-none w-[80%] text-sm lg:text-base px-2 py-1  mx-5 focus:outline-none focus:ring-0 mb-5 focus:border-gray-600 rounded-md text-center" placeholder="eg. Beach westpalm">
            <img src="../../../assets/search 1.svg" class="absolute bottom-7 lg:left-5">
        </div>
        <h4 class="my-5 mx-5 font-medium">Filter by</h4>
        <div class=" w-[80%] mx-5 border border-[#F2F2F2] rounded-md border-solid">
            
            <p class="bg-[#F2F2F2] h-[50px] py-4 px-4">Your budget per day</p>
  
            <div class="my-5">
                <div>
                    <input type="checkbox" id="1" class="border w-[15px] h-[20px] px-2 py-1  mx-5 focus:outline-none focus:ring-0 mb-5 focus:border-gray-600 rounded-md">
                    <label for="1" class="inline">$ 0 - $ 200</label>
                </div>
                <div>
                    <input type="checkbox" id="1" class="border w-[15px] h-[20px] px-2 py-1  mx-5 focus:outline-none focus:ring-0 mb-5 focus:border-gray-600 rounded-md">
                    <label for="1" class="inline">$ 0 - $ 200</label>
                </div>
                <div>
                    <input type="checkbox" id="1" class="border w-[15px] h-[20px] px-2 py-1  mx-5 focus:outline-none focus:ring-0 mb-5 focus:border-gray-600 rounded-md">
                    <label for="1" class="inline">$ 0 - $ 200</label>
                </div>
                <div>
                    <input type="checkbox" id="1" class="border w-[15px] h-[20px] px-2 py-1  mx-5 focus:outline-none focus:ring-0 mb-5 focus:border-gray-600 rounded-md">
                    <label for="1" class="inline">$ 0 - $ 200</label>
                </div>
                <div>
                    <input type="checkbox" id="1" class="border w-[15px] h-[20px] px-2 py-1  mx-5 focus:outline-none focus:ring-0 mb-5 focus:border-gray-600 rounded-md">
                    <label for="1" class="inline">$ 0 - $ 200</label>
                </div>
            </div>
            <div class="mx-5 my-5">
                <label class="relative inline-flex items-center justify-between cursor-pointer w-full">
                    <span class="text-sm font-medium text-gray-900 dark:text-gray-300">Set your own budget</span>
                    <input
                    v-model="showBudgetInputs"
                    class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault01" />
                </label>
                <div class="flex flex-row justify-around my-5" v-if="showBudgetInputs">
                    <input type="text" id="min" placeholder="Min budget" class="w-[90px]  h-[px] text-xs placeholder-black border px-2 py-1  mx-5 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md">
                    <input type="text" id="max" placeholder="Max budget" class="w-[90px] h-[25px] text-xs placeholder-black border px-2 py-1  mx-5 focus:outline-none focus:ring-0  focus:border-gray-600 rounded-md">
               </div>
            </div>
            <p class="mx-5 my-5 text-xs text-[#4F4F4F]">Press Enter to filter</p>
        </div>
        <div class="w-[80%] mx-5 mt-10 border border-[#F2F2F2] rounded-md border-solid">
            <p class="bg-[#F2F2F2] h-[50px] py-4 px-4">Rating</p>
            <p class="mx-5 my-5 text-sm text-[#4F4F4F]">Show only ratings more than</p>
            <div class=" grid grid-cols-5 mx-5 my-5 relative h-10">
                <div class="border border-[#F2F2F2] rounded-tl-md rounded-bl-md flex flex-row items-center justify-center">1 <img src="../../../assets/star-s-fill 1.svg" alt="" class=""></div>
                <div class="border border-[#F2F2F2]  flex flex-row items-center justify-center">2 <img src="../../../assets/star-s-fill 1.svg" alt=""></div>
                <div class="border border-[#F2F2F2]  flex flex-row items-center justify-center">3 <img src="../../../assets/star-s-fill 1.svg" alt=""></div>
                <div class="border border-[#F2F2F2]  flex flex-row items-center justify-center">4 <img src="../../../assets/star-s-fill 1.svg" alt=""></div>
                <div class="border border-[#F2F2F2] rounded-tr-md rounded-br-md flex flex-row items-center justify-center">5 <img src="../../../assets/star-s-fill 1.svg" alt=""></div>
            </div>
        </div>
        <div>

        </div>
        
    </aside>
  
      <!-- Second div (75% width) -->
      <section class="w-3/4 my-10 flex flex-col">
        <!-- Your content for the right side -->
        <div class="flex justify-between" v-if="searchData && searchResults.data">
            <h2 class="text-xl font-semibold">{{searchData.selectedCategory.city_name}} : {{searchResults.data.meta[0].title}}</h2>
            <div class="border border-[#F2F2F2] border-solid w-[20%] rounded-md mx-5 py-3 pl-3">
                <label for="sort" class=" text-sm text-[#4F4F4F]">Sort by</label>
                <select
                    v-model="selectedSort"
                    id="sort"
                    name="sdrt"
                    class=" h-[40px] rounded-md text-[#4F4F4F] w-[80%] focus:outline-none"
                >
                
                <option selected value="option1">Recommended</option>
                    <option value="option2">Option 2</option>
                    <!-- Add more options as needed -->
                </select>
            </div>
        </div>
        <div class="flex flex-col px-5 py-5"  v-if="searchResults && searchResults.data">
            <div v-for="hotel in displayedHotels" :key="hotel.hotel_id" class="border rounded-md flex my-2 py-2 px-2">
                    <img :src="hotel.property.photoUrls" alt="" class="w-[35%] overflow-hidden object-cover my-3 mx-3 rounded-md">
                    <div class="flex flex-col py-2 px-2 w-full">

                        <div class="flex justify-between w-full">
                        <h3 class="text-lg font-semibold">{{hotel.property.name}}</h3>
                        </div>
                        
                        <div class="flex">
                            <img src="./img/star-s-fill 2.svg" alt="">
                            <img src="./img/star-s-fill 2.svg" alt="">
                            <img src="./img/star-s-fill 2.svg" alt="">
                            <img src="./img/star-s-fill 2.svg" alt="">
                            <img src="./img/star-s-fill 5.svg" alt="">
                            <p class="text-sm text-[#4F4F4F] pl-2">
                                {{hotel.property.Count}}</p>
                            <p class="text-sm text-[#4F4F4F] pl-2">
                                ({{hotel.property.reviewScore}})</p>
                        </div>
                        <div class="flex mt-5 justify-between items-center">
                            <div class="w-[80%]">
                                <p class="text-xs">{{hotel.accessibilityLabel
}}</p>
                            </div>
                            <div class="">
                                <p v-if="hotel.property.priceBreakdown.strikethroughPrice" 
                                class=" bg-[#219653] w-12 text-xs text-center py-2 rounded-md text-white h-8 ">
                                5% off</p>
                            </div>
                        </div>
                        <div class="flex justify-between mt-5 pt-8">
                            <button class="bg-[#2F80ED] text-white px-3 py-1 rounded-md"  @click="navigateToSearchDeatails">See availability</button>
                            <div class="">
                                <div class="text-right">
                                    <span class=""> {{hotel.property.priceBreakdown.grossPrice.value}}</span>
                                </div>
                                <p class="text-xs">Includes taxes and fees</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
        <div class="flex justify-center mt-5">
    <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        class="px-4 py-2 mx-1 border rounded-md cursor-pointer focus:outline-none"
        :class="{ 'bg-blue-500 text-white': currentPage === page }"
    > 
       {{ page }}
    </button>
</div>

      </section>
    </div>
  </template>


<script>
import Swal from 'sweetalert2';
  import { ref, onBeforeMount,onMounted,computed , watch } from 'vue';
  import { onBeforeRouteLeave, useRouter } from 'vue-router';
  import useSearchApi from '../../../combosables/useSearchApi';

export default {
  setup() {
    
    const showBudgetInputs = ref(false);
    const selectedSort = ref('option1');
    const searchData = ref(null);
    const searchResults = ref(null);
    const currentPage = ref(1);
    const hotelsPerPage = 5;
    const router = useRouter();

    const loadDataFromLocalStorage = () => {
      const storedSearchData = JSON.parse(localStorage.getItem('searchData')) || {};
      const storedSearchResults = JSON.parse(localStorage.getItem('searchResults'))|| {};

      searchData.value = storedSearchData;
      searchResults.value = storedSearchResults;
    };

    const changePage = (page) => {
      currentPage.value = page;
    };

    onMounted(() => {
        loadDataFromLocalStorage();
        console.log('searchData:', searchData.value);
        console.log('searchResults:', searchResults.value);
    });

    const navigateToSearchDeatails = () => {  
      router.push('/productDetail');
    };

    const totalPages = computed(() => {
  if (!searchResults.value || !searchResults.value.data || !searchResults.value.data.hotels) {
    return 0;
  }
  return Math.ceil(searchResults.value.data.hotels.length / hotelsPerPage);
});

    const displayedHotels = computed(() => {
  if (!searchResults.value || !searchResults.value.data || !searchResults.value.data.hotels) {
    return [];
  }

  const startIndex = (currentPage.value - 1) * hotelsPerPage;
  const endIndex = startIndex + hotelsPerPage;
  return searchResults.value.data.hotels.slice(startIndex, endIndex);
});
    
    return {
      showBudgetInputs,
      selectedSort,
      searchData,
      searchResults,
      displayedHotels,
      totalPages ,
      changePage,
      navigateToSearchDeatails,
    };
  },
};
</script>

