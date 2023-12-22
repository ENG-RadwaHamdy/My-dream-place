<template>
    <div class="bg-[#F4F4F4]">
        <Navbar />
        <MyTrips />
        <Checkout />
        <Footer />
    </div>
  
</template>

<script>
import Checkout from '../../components/Checkout.vue'
import Footer from '../../components/Footer.vue'
import Navbar from '../../components/Navbar.vue'
import MyTrips from './components/My-trips.vue'




export default {
    components:{
        Navbar,
        MyTrips,
        Checkout,
        Footer
        
    }
}
</script>