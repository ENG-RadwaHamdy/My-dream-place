<template>
    <div class="bg-[#F4F4F4] h-full">
        <Navbar />
        <h2 class="text-xl font-semibold px-5 sm:px-10 md:px-15 lg:px-20 pt-12">Secure your reservation</h2>
        <Checkout />
        <CheckoutV/>
        <Footer />
    </div>
  
</template>

<script>
import Checkout from '../../components/Checkout.vue'
import Navbar from '../../components/Navbar.vue'
import CheckoutV from './components/CheckoutV.vue';





export default {
    components:{
        Navbar,
        Checkout,
        CheckoutV,
        
    }
}
</script>