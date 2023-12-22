<template>
    <div>
        <Navbar />
        <Search />
        <SearchResults />
        <Checkout />
        <Footer />
    </div>
  
</template>

<script>
import Checkout from '../../components/Checkout.vue'
import Footer from '../../components/Footer.vue'
import Navbar from '../../components/Navbar.vue'
import Search from '../../components/Search.vue'
import SearchResults from './components/Search-results.vue'




export default {
    components:{
        Navbar,
        Search,
        SearchResults,
        Checkout,
        Footer
        
    }
}
</script>