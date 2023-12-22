<template>
    <div class="px-5 sm:px-10 md:px-15 lg:px-20">
      <div class>
          <div class="flex mt-5">
            <img src="../../../assets/logo.svg" alt="web-logo">
            <h1 class="text-[#1B1F2D] whitespace-nowrap px-2">my Dream Place</h1>
          </div>
          <div class="flex justify-center items-center py-15">
            <form >
              <div class="  w-96 p-6 rounded-md">
                  <h1 class="font-semibold py-5 text-2xl text-center">Register</h1>
                      <label for="email" class="block text-base mt-5 mb-1">Email address</label>
                      <input type="email" v-model="email" id="email" class="bg-[#F2F2F2] border w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md " required>
                      <label for="password" class="block text-base mt-5 mb-1">Password</label>
                      <div class="flex items-center relative">
                          <input type="password" name="password"  v-model="password" id="password" class="bg-[#F2F2F2] border w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md" required>
                          <img src="../../../assets/eye 1.svg" alt="eye" class="absolute right-2">
                      </div>
                      <label for="confirm-password" class="block text-base mt-5 mb-1">Confirm password</label>
                      <div class="flex items-center relative">
                          <input type="password" name="confirm-password" v-model="confirmPass" id="confirm-password" class="bg-[#F2F2F2] border w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md" required>
                          <img src="../../../assets/eye 1.svg" alt="eye" class="absolute right-2">
                      </div>
                      <button class="bg-[#2F80ED] text-white my-5 w-full rounded-md px-2 py-1" 
                      >Submit</button>
                  <p class="text-center">Already have an account? <a @click="navigateToLogin" class="text-[#2F80ED] cursor-pointer">Sign in</a></p>
              </div>
            </form>
          </div>
      </div>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import { generateUUID, generateExpirationDate } from '../../../services/uuidService';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPass: '',
      uuid: '',
      expirationDate: '',
    };
  },
  
  methods: {
    navigateToLogin() {
      // Use this.$router.push to navigate to the login page
      this.$router.push('/login');
    },
  },
};
</script>
  

