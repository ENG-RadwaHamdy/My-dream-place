<template>
  <div class="flex px-5 sm:px-10 md:px-15 lg:px-20 pt-12 bg-[#F4F4F4]">
    <section class="w-3/4">
      <div>
          <div class="flex bg-[#2F80ED] gap-5 text-white mx-5 px-5 py-5 rounded-tl-md rounded-tr-md">
            <img src="./img/security-user 1.svg" alt="">
            <h3>Room 1</h3>
            <p>2 adults, 1 double bed and 1 twin bed, Non-smoking</p>
          </div>
          <div class="flex flex-col bg-white rounded-bl-md rounded-br-md mx-5 px-5 py-9">
            <div class="flex px-5">
              <div class="flex flex-col">
                <label for="first-name" class="">First name</label>
                <input v-model="firstName" type="text" id="first-name" class="border my-1 w-[90%] text-base bg-[#F2F2F2] py-1 px-3 focus:outline-none  focus:ring-0 focus:border-gray-600 rounded-md text-center focus:bg-white" required>
              </div>
              <div class="flex flex-col px-5">
                <label for="last-name" class="">Last name</label>
                <input v-model="lastName" type="text" id="last-name" class="border w-[90%] my-1 py-1 px-3 bg-[#F2F2F2] text-base focus:outline-none focus:ring-0focus:border-gray-600 rounded-md text-center focus:bg-white" required>
              </div>
            </div>
            <div class="flex flex-col ml-5 mt-8">
              <div class="flex">
                <label for="first-name" class="flex-nowrap">Mobile number</label>
                
              </div>
              <div class="flex relative gap-5 mt-2">
                <input type="text" id="fmobile" class="border w-[25%] md:w-[15%] text-base h-10 bg-[#F2F2F2] focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md focus:bg-white lg:text-center text-right" value="+61">
                <img src="./img/2.png" alt="" class="absolute w-[25px] lg:w-[30px] top-[20%] lg:top-[15%] left-2">
                <input v-model="mobileNumber" type="text" id="mobilenumber" class="border w-[40%]  bg-[#F2F2F2] text-base focus:outline-none focus:ring-0focus:border-gray-600 rounded-md text-center focus:bg-white h-10" required>
              </div>
            </div>
            <div class="flex mx-5 mt-5">
              
              <input v-model="receiveTextAlerts" type="checkbox" name="receive" class="border w-[20px] h-[25px] focus:outline-none focus:ring-0 mb-5 focus:border-gray-600 rounded-md">
              <label for="receive" class="px-5">Receive text alerts about this trip.</label>
            </div>
          </div>
      </div>
      <div class="my-5">
          <div class="flex bg-[#2F80ED] gap-5 text-white mx-5 px-5 py-5 rounded-tl-md rounded-tr-md">
            <img src="./img/card-tick 1.svg" alt="">
            <h3>Payment options</h3>
          </div>
          <div class="flex flex-col bg-white rounded-bl-md rounded-br-md mx-5 px-5 py-5">
            <div class="flex px-5">
              <p class="border-b border-[#2F80ED] py-2">Debit/Credit Card</p>
            </div>
              <div class="flex gap-4 mx-5 my-5">
                <img src="./img/6.png" alt="" class="w-[12%] h-fit bg-[#F2F2F2] px-3 py-3 rounded-md">
                <img src="./img/7.png" alt="" class="w-[12%] h-fit bg-[#F2F2F2] px-3 py-3 rounded-md">
                <img src="./img/8.png" alt="" class="w-[12%] h-fit bg-[#F2F2F2] px-3 py-2 rounded-md">
                <img src="./img/9.png" alt="" class="w-[12%] h-fit bg-[#F2F2F2] py-2 rounded-md">
              </div>
              <div class="flex flex-col mx-5 my-5">
                
                <label for="name-card">Name on card</label>
                <div class="relative">
                  <input v-model="nameOnCard" type="text" required id="name-card" class="border my-1 w-[80%] text-base bg-[#F2F2F2] py-1 px-3 focus:outline-none  focus:ring-0 focus:border-gray-600 rounded-md text-center focus:bg-white">
                  <img src="./img/tick-circle 1.svg" alt="" class="absolute top-[25%] right-[15%]" >
                </div>
                <label for="card-num" class="pt-3">Debit/Credit card number</label>
                <div class="relative">
                  <input v-model="cardNumber" type="text" required id="card-num" class="border my-1 w-[80%] text-base bg-[#F2F2F2] py-1 px-3 focus:outline-none  focus:ring-0 focus:border-gray-600 rounded-md text-center focus:bg-white">
                  <img src="./img/tick-circle 1.svg" alt="" class="absolute top-[25%] right-[15%]">
                </div>
                
                <div class="flex flex-col my-5">
                  <div class="flex flex-col">
                    <label for="date">Expiration Date</label>
                  </div>
                  <div class="flex gap-5">
                    <input v-model="expirationMonth" type="text" required id="expiration-month" class="border my-1 w-[20%] text-base bg-[#F2F2F2] py-1 px-3 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-center focus:bg-white" placeholder="Month">
                    
                    <input v-model="expirationYear" type="text" required id="expiration-year" class="border my-1 w-[20%] text-base bg-[#F2F2F2] py-1 px-3 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md text-center focus:bg-white" placeholder="Year">
                    <img src="./img/tick-circle 1.svg" alt="">
                  </div>
                </div>
                <div class="flex">
                  <div class="flex flex-col">
                    <label for="security" class="">Security Code</label>
                    <input v-model="securityCode" type="text" required id="security" class="border w-[90%] my-1 py-1 px-3 bg-[#F2F2F2] text-base focus:outline-none focus:ring-0focus:border-gray-600 rounded-md text-center focus:bg-white">
                  </div>
                  <div class="flex flex-col relative">
                    <label for="billing" class="">Billing Zip code</label>
                    <input v-model="billingZipCode" type="text" required id="billing" class="border w-[90%] my-1 py-1 px-3 bg-[#F2F2F2] text-base focus:outline-none focus:ring-0focus:border-gray-600 rounded-md text-center focus:bg-white">
                    <img src="./img/tick-circle 1.svg" alt="" class="absolute top-[50%] -right-[10%]">
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div class="mb-5">
          <div class="flex bg-[#F2C94C] mx-5 px-8 py-5 rounded-tl-md rounded-tr-md">
            <h3>Important information about your booking</h3>
          </div>
          <div class=" bg-white rounded-bl-md rounded-br-md mx-5 px-5 py-9">
            <div class=" px-5">
              <ol class="list-decimal text-sm w-[80%] px-4">
                <li>This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.</li>
                <li>Stay extensions will require a new reservation.</li>
                <li>Front desk staff will greet guests on arrival No refunds will be issued for late check-in or early check-out.</li>
                <li>No refunds will be issued for late check-in or early check-out.</li>
              </ol>
              <p class="my-5">By clicking the button below, I acknowledge that I have reviewed the <span class="text-[#2F80ED]">Privacy Statement</span> and have reviewd and accept the <span class="text-[#2F80ED]">Rules and Restrictions</span> and <span class="text-[#2F80ED]">Rules and Restrictions</span></p>
            </div>
            <div class="px-4">
              <button @click="submitForm" class="bg-[#2F80ED] py-2 px-2 text-white rounded-md">Complete Booking</button>
            </div>
            <div class="flex mx-5 mt-5">
              <img src="./img/lock-circle 1.svg" alt="">
              <label for="receive" class="px-2 text-sm">We use secure transmission and encrypted storage to protect your personal information</label>
            </div>
            
          </div>
      </div>
    </section>
    <aside class="w-1/4 ">
          <div class="flex flex-col rounded-md bg-white mb-5">
            <img src="./img/10.jpg" alt="" class="w-full overflow-hidden rounded-tl-md rounded-tr-md">
            <h3 class="px-5 pt-2 font-medium">Lakeside Motel Warefront</h3>
            <div class="flex px-5">
              <img src="../../../assets/star-s-fill 1.svg" alt="">
              <img src="../../../assets/star-s-fill 1.svg" alt="">
              <img src="../../../assets/star-s-fill 1.svg" alt="">
              <img src="../../../assets/star-s-fill 1.svg" alt="">
              <img src="./img/star-s-fill 5.svg" alt="">
              <p class="text-xs text-[#4F4F4F] px-2">4.5 (1200 Reviews)</p>
            </div>
            <div class="text-xs text-[#4F4F4F] px-4 py-4 space-y-2">
                <p class="text-[#EB5757]">Non refundable</p>
                <p>Check in: Sunday, March 18, 2022</p>
                <p>Check out: Tuesday, March 20, 2022</p>
                <p>2 night stay</p>

              </div>

          </div>
          <div class="flex bg-[#85E0AB] px-3 py-3 gap-5 rounded-tl-md rounded-tr-md">
            <h3>Price Details</h3>
          </div>
          <div class="flex flex-col justify-between bg-white rounded-bl-md rounded-br-md py-5">
              <div class="flex flex-row justify-between px-3 py-2 text-xs text-[#4F4F4F]">
                <p>1 room X 2 nights</p>
                <p>$ 120.32</p>
              </div>
              <div class="flex flex-row justify-between px-3 text-xs text-[#4F4F4F]">
                <p>1 room X 2 nights</p>
                <p>$ 120.32</p>
              </div> 
              <hr class="my-2">
              <div class="flex flex-row justify-between px-3 text-sm">
                <p>Total</p>
                <p>$130</p>
              </div>  
          </div>
    </aside>
    
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { ref } from 'vue';

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const mobileNumber = ref('');
    const receiveTextAlerts = ref(false);
    const nameOnCard = ref('');
    const cardNumber = ref('');
    const expirationMonth = ref('');
    const expirationYear = ref('');
    const securityCode = ref('');
    const billingZipCode = ref('');

    const submitForm = () => {
      if (!firstName.value.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please enter a valid First Name.',
        });
        return;
      }


      if (!lastName.value.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please enter a valid Last Name.',
        });
        return;
      }

      const mobileNumberRegex = /^\d+$/;
      if (!mobileNumberRegex.test(mobileNumber.value.trim())) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please enter a valid Mobile Number.',
        });
        return;
      }
      const cardNumberRegex = /^\d+$/;
      if (!cardNumberRegex.test(cardNumber.value.trim())) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please enter a valid Card Number.',
        });
        return;
      }

  
      const expirationMonthRegex = /^\d+$/;
      const expirationYearRegex = /^\d+$/;
      if (!expirationMonthRegex.test(expirationMonth.value.trim()) || !expirationYearRegex.test(expirationYear.value.trim())) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please enter valid Expiration Month and Year.',
        });
        return;
      }

      const securityCodeRegex = /^\d+$/;
      if (!securityCodeRegex.test(securityCode.value.trim())) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please enter a valid Security Code.',
        });
        return;
      }

      const billingZipCodeRegex = /^\d+$/;
      if (!billingZipCodeRegex.test(billingZipCode.value.trim())) {
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please enter a valid Billing Zip Code.',
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your booking has been completed.',
      });
    };

    return {
      firstName,
      lastName,
      mobileNumber,
      receiveTextAlerts,
      nameOnCard,
      cardNumber,
      expirationMonth,
      expirationYear,
      securityCode,
      billingZipCode,
      submitForm,
    };

  }

}
</script>

<style>

</style>