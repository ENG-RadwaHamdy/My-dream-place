import axios from 'axios';

const useSearchApi = () => {
  const searchHotels = async (params) => {
    const options = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
      params,
      headers: {
        'X-RapidAPI-Key': '01cb6ca15cmsha743b6152b4cb30p1c460cjsndf3b9ea75f6f',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error searching hotels');
    }
  };

  return { searchHotels };
};

export default useSearchApi;