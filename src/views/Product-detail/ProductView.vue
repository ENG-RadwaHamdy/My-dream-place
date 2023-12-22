<template>
    <div>
        <Navbar />
        <ProductDetail />
        <Checkout />
        <Footer />
    </div>
  
</template>

<script>
import Checkout from '../../components/Checkout.vue'
import Footer from '../../components/Footer.vue'
import Navbar from '../../components/Navbar.vue'
import ProductDetail from './components/Product-detail.vue'





export default {
    components:{
        Navbar,
        ProductDetail,
        Checkout,
        Footer
        
    }
}
</script>