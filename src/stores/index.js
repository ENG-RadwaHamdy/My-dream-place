import { defineStore } from 'pinia';

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    searchData: {
      selectedCategory: null,
      arrivalDate: null,
      departureDate: null,
      guests: '',
      rooms: '',
    },
  }),
  getters: {
    getSearchData() {
      return this.searchData;
    },
  },
  actions: {
    updateSearchData(newData) {
      this.searchData = { ...this.searchData, ...newData };
    },
  },
});