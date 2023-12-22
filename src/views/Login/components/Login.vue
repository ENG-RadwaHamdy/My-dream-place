<template>
  <div class="px-5 sm:px-10 md:px-15 lg:px-20">
    <div class>
        <div class="flex mt-5">
          <img src="../../../assets/logo.svg" alt="web-logo">
          <h1 class="text-[#1B1F2D] whitespace-nowrap px-2">my Dream Place</h1>
        </div>
        <div class="flex justify-center items-center py-20">
          <form @submit.prevent="generateUUID">
            <div class="  w-96 p-6 rounded-md">
                <h1 class="font-semibold py-5 text-2xl text-center">Sign in</h1>
                    <label for="email" class="block text-base mt-5 mb-1">Email address</label>
                    <input type="email" name="email" id="email" v-model="email" class="bg-[#F2F2F2] border w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md " required>
                    <label for="password" class="block text-base mt-5 mb-1">Password</label>
                    <div class="flex items-center relative">
                        <input type="password" name="password" id="password" v-model="password" class="bg-[#F2F2F2] border w-full text-base px-2 py-1  focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md" required>
                        <img src="../../../assets/eye 1.svg" alt="eye" class="absolute right-2">
                    </div>
                    <button class="bg-[#2F80ED] text-white my-5 w-full rounded-md px-2 py-1" @click="login">Sign in</button>
                <p class="text-center">Don’t have an account? <a @click="navigateToRegister"  class="text-[#2F80ED] cursor-pointer">Register</a></p>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import { generateUUID, generateExpirationDate } from '../../../services/uuidService';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: '',
      password: '',
      uuid: '',
      expirationDate: '',
    };
  },
  methods: {
    navigateToRegister() {
      // Use this.$router.push to navigate to the register page
      this.$router.push('/register');
    },
    generateUUID() {
      this.uuid = generateUUID();
      this.expirationDate = generateExpirationDate(7); // Set expiration for 7 days (adjust as needed)

      localStorage.setItem('userUUID', this.uuid);
      this.showWelcomeAlert();
    },
    showWelcomeAlert() {
  // Create a custom HTML template with Tailwind CSS classes
  const alertHtml = `
  <div class="w-60 h-[200px]  flex justify-center flex-shrink-0 rounded-full relative left-[110px]" style="background: rgba(47, 128, 237, 0.30);">
    <div class="flex justify-center">
      <img src="auth-man.svg" class="" alt="Image 1">
      <img src="auth-woman.svg" alt="Image 2" class="">
  </div>
    </div
      <div class="">
        <h2 class="text-xl font-semibold py-4">Welcome to My Dream Place</h2>
        <p class="text-gray-600 text-sm py-4">You can now enjoy your travel experience with easy access to resources and more.</p>
        <button id="redirectButton" class="bg-blue-500 text-white px-4 py-2 rounded-md w-[75%]">Get Started</button>
      </div>
  `;

  // Show SweetAlert with the custom HTML template
  const sweetAlert = Swal.fire({
    title: '',
    html: alertHtml,
    showCancelButton: false,
    showConfirmButton: false,
  });

  // Handle button click and redirect to home
  const redirectButton = document.getElementById('redirectButton');
  if (redirectButton) {
    redirectButton.addEventListener('click', () => {
      this.$router.push({ name: 'home' }); // Replace 'home' with your actual home route name
      sweetAlert.close(); // Close the SweetAlert
    });
  }
  }
},
};
</script>

