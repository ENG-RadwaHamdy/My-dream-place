<template>
  <div class="px-5 sm:px-10 md:px-15 lg:px-20">
    <div class="w-[90%]  mx-auto relative bg-white mt-[-1.5%] rounded-md p-2 text-[#4F4F4F] shadow-md">
      <form @submit.prevent="search">
        <div class="flex justify-between items-center mx-auto gap-2 flex-wrap lg:flex-nowrap">
          <!-- Select List -->
          <div class="flex items-center relative lg:w-[45%] w-[48%]">
          <img src="../assets/location 1.svg" alt="location" class="absolute  left-2 ">
            <p
            @click="toggleDropdown"
            class="bg-[#F2F2F2] h-[40px] rounded-md text-[#4F4F4F] text-center py-2 cursor-pointer focus:outline-none w-full"
          >
            {{ selectedCategory ? selectedCategory.city_name : 'Where are you going?' }}
          </p>
        
          <ul v-show="showDropdown" class="absolute top-full text-center w-[80%] left-7 bg-white border rounded-md mt-1 shadow-md z-20">
            <li v-for="(category, index) in categories" :key="category.dest_id" @click="selectCategory(category)" :class="{ 'border-b border-solid border-[#828282]': index < categories.length - 1 }" class="py-2 px-4 cursor-pointer">
              {{ category.city_name }}
            </li>
          </ul>
        </div>

  
          <!-- Add other search inputs here -->
          <div class="flex items-center relative lg:w-[35%] w-[48%] ">
            <div style="width: 100%;">
              <img src="../assets/calendar 1.svg" alt="calendar" class="absolute top-2 left-2 z-10">
              <DatePicker 
                v-model="arrivalDate"
                :pageDate="new Date(arrivalDate)"
                placeholder="Check in date"
                class="rounded-md bg-[#F2F2F2] placeholder-[#4F4F4F] text-center focus:outline-none h-[40px]"
                style="width: 100%;"
              /> 
            </div>
          </div>
  
          <div class="flex items-center relative max-sm:w-[48%] lg:w-[30%] w-[35%]">
            <div style="width: 100%;">
              <img src="../assets/calendar 1.svg" alt="calendar" class="absolute top-2 left-1 z-10">
              <DatePicker v-model="departureDate" :pageDate="new Date(arrivalDate)" 
              placeholder='Check out date'
              class="rounded-md bg-[#F2F2F2] placeholder-[#4F4F4F] text-center focus:outline-none h-[40px]"  
                style="width: 100%;"
                />
            </div>
          </div>
  
          <div class="flex items-center relative max-sm:w-[48%] w-[22%]">
            <img src="../assets/user-square 1.svg" alt="user" class="absolute left-3">
            <input
              v-model="guests"
              type="text"
              id="guests"
              name="guests"
              class="rounded-md bg-[#F2F2F2] placeholder-[#4F4F4F] text-center focus:outline-none  h-[40px] w-full"
              placeholder="Guests"
            />
          </div>
  
          <div class="flex items-center relative max-sm:w-[48%] w-[22%]">
            <img src="../assets/single_bed_FILL0_wght400_GRAD0_opsz24 1 (1).svg" alt="single-bed" class="absolute left-3">
            <input
              v-model="rooms"
              type="text"
              id="rooms"
              name="rooms"
              class="rounded-md bg-[#F2F2F2] placeholder-[#4F4F4F] text-center  focus:outline-none  h-[40px] w-full"
              placeholder="Rooms"
            />
          </div>
          <div class="max-sm:w-[48%] lg:w-[20%] w-[15%]">
            <button type="submit" class="bg-blue-500 float-right text-white text-center w-full h-[40px] rounded-md">Search</button>
        </div>
        </div>
      </form>
    </div>
    </div>
  </template>
  


  <script>
  import DatePicker from 'vue3-datepicker';
  import Swal from 'sweetalert2';
  import useApi from '../combosables/useApiDestinatations';
  import { ref, onBeforeMount, watch } from 'vue';
  import { onBeforeRouteLeave, useRouter } from 'vue-router';
  import useSearchApi from '../combosables/useSearchApi';
  
  export default {
  components: {
    DatePicker,
  },
  setup() {
    const { categories } = useApi();
    const { searchHotels } = useSearchApi();
    const router = useRouter();
    const showDropdown = ref(false);
    const selectedCategory = ref(null);
    const arrivalDate = ref(null);
    const departureDate = ref(null);
    const guests = ref('');
    const rooms = ref('');
    watch([selectedCategory, arrivalDate, departureDate, guests, rooms], async () => {
      // Add any additional validation or conditions as needed
      if (!selectedCategory.value || !arrivalDate.value || !departureDate.value || !guests.value || !rooms.value) {
        return; // Exit early if any required parameter is missing
      }

      if (arrivalDate.value >= departureDate.value) {
        return; // Exit early if check-out date is not after the check-in date
      }

      if (parseInt(guests.value) < 1 || parseInt(rooms.value) < 1) {
        return; // Exit early if guests or rooms are less than 1
      }

      const params = {
        dest_id: selectedCategory.value.dest_id,
        search_type: 'CITY',
        arrival_date: arrivalDate.value.toISOString().split('T')[0],
        departure_date: departureDate.value.toISOString().split('T')[0],
        adults: guests.value,
        room_qty: rooms.value,
      };

      try {
        // Make the API request
        const searchData = await searchHotels(params);

        // Handle the API response as needed
        console.log(searchData);

        // Save search parameters to local storage
        saveSearchToLocalStorage(params, searchData);

        // Navigate to the search results page
        router.push('/search');
      } catch (error) {
        // Handle API error
        showAlert('Error searching hotels. Please try again.');
      }
    });

    const loadDataFromLocalStorage = () => {
      const searchData = JSON.parse(localStorage.getItem('searchData')) || {};
      selectedCategory.value = searchData.selectedCategory || null;
      arrivalDate.value = searchData.arrivalDate ? new Date(searchData.arrivalDate) : new Date();
      departureDate.value = searchData.departureDate ? new Date(searchData.departureDate) : new Date();
      guests.value = searchData.guests || '';
      rooms.value = searchData.rooms || '';
    };
    onBeforeMount(loadDataFromLocalStorage);

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    const selectCategory = (category) => {
      selectedCategory.value = category;
      showDropdown.value = false;
    };

    // Call the load data function when the component is created

    const saveSearchToLocalStorage = (params, response) => {
      const searchData = {
        selectedCategory: selectedCategory.value,
        arrivalDate: arrivalDate.value,
        departureDate: departureDate.value,
        guests: guests.value,
        rooms: rooms.value,
      };

      localStorage.setItem('searchData', JSON.stringify(searchData));
      localStorage.setItem('searchResults', JSON.stringify(response));
    };

    

    

    const showAlert = (message) => {
      Swal.fire({
        icon: 'info',
        title: 'Info',
        text: message,
      });
    };

    const showLoginAlert = () => {
      Swal.fire({
        icon: 'info',
        title: 'Login Required',
        text: 'Please log in first to perform the search.',
      }).then(() => {
        router.push('/login');
      });
    };

    const search = async () =>{
      const userUUID = localStorage.getItem('userUUID');
      if (!userUUID) {
        showLoginAlert();
        return;
      }

      // Add validation logic here
      if (!selectedCategory.value || !arrivalDate.value || !departureDate.value || !guests.value || !rooms.value) {
        showAlert('Please fill in all the required fields.');
        return;
      }

      if (arrivalDate.value >= departureDate.value) {
        showAlert('Check-out date must be after the check-in date.');
        return;
      }

      if (parseInt(guests.value) < 1 || parseInt(rooms.value) < 1) {
        showAlert('Guests and rooms must be at least 1.');
        return;
      }

      const params = {
        dest_id: selectedCategory.value.dest_id,
        search_type: 'CITY',
        arrival_date: arrivalDate.value.toISOString().split('T')[0], // Format to YYYY-MM-DD
        departure_date: departureDate.value.toISOString().split('T')[0],
        adults: guests.value,
        room_qty: rooms.value,
        // Add other optional parameters as needed
      };

      try {
        // Make the API request
        const searchData = await searchHotels(params);

        // Handle the API response as needed
        console.log(searchData);

        // Save search parameters to local storage
        saveSearchToLocalStorage(params, searchData);

        // Navigate to the search results page
        navigateToSearch();
      } catch (error) {
        // Handle API error
        showAlert('Error searching hotels. Please try again.');
      }
    };

    const navigateToSearch = () => {
      router.push('/search');
    };

    return {
      categories,
      showDropdown,
      selectedCategory,
      arrivalDate,
      departureDate,
      guests,
      rooms,
      toggleDropdown,
      selectCategory,
      search,
      showAlert,
      showLoginAlert,
      navigateToSearch,
      saveSearchToLocalStorage
    };
  },
};
  </script>