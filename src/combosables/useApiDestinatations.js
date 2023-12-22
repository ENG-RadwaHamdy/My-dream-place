import { ref, onMounted } from 'vue';
import axios from 'axios';

export default function useApi() {
  const categories = ref([]);

  const fetchData = async () => {
    const hasFetchedBefore = localStorage.getItem('hasFetchedBefore');

    if (hasFetchedBefore) {
      // If data has been fetched before, use the cached data
      const cachedCategories = localStorage.getItem('categories');
      if (cachedCategories) {
        categories.value = JSON.parse(cachedCategories);
        console.log('Using cached data:', categories.value);
      }
    } else {
      // If data hasn't been fetched before, make the API call
      const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
        params: { query: 'egypt' },
        headers: {
          'X-RapidAPI-Key': '01cb6ca15cmsha743b6152b4cb30p1c460cjsndf3b9ea75f6f',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);

        // Ensure that response.data.data is an array before filtering
        if (Array.isArray(response.data.data)) {
          // Filter cities and extract necessary information
          categories.value = response.data.data
            .filter((item) => item.dest_type === 'city')
            .map((city) => ({
              dest_id: city.dest_id,
              city_name: city.city_name,
            }));

          // Save to local storage and set the flag
          localStorage.setItem('categories', JSON.stringify(categories.value));
          localStorage.setItem('hasFetchedBefore', true);

          console.log('Categories in fetchData:', categories.value);
        } else {
          console.error('Response data.data is not an array:', response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  onMounted(() => {
    fetchData();
  });

  return {
    categories,
  };
}