
<template>
  <div id="nav">
    <button @click="stripecheckout">SCheckout</button>
    <button @click="ppcheckout">PPCheckout</button>
  </div>
</template> 

<script>  
  
  export default {
    name: 'Checkout',
    methods: {
      ppcheckout() {
        this.$http.post('http://localhost:3000/checkout/paypal')
          .then(function(res){
            var height = 680 + 'px'
            var width = 420 + 'px'
            console.log(res.body.success)        
            //if its desktop open in new window if its mobile redirect or open in tab if device supports it
            window.open(res.body.success , 'PayPal', 'width=' + width + ', height=' + height + ', top=' + ((window.innerHeight - height) / 2) + ', left=' + ((window.innerWidth - width) / 2));
        
          })  
      },
      stripecheckout() {
        // this.$checkout.close() 
        // is also available.
        
        this.$checkout.open({
          name: 'Some sort of food order',
          currency: 'USD',
          amount: 99999,
          token: (token) => {
            this.$http.post('http://localhost:3000/checkout/stripe', token)
              .then(function(res){
                console.log(res.body)                
              })  
          } 
        });
      }
    },
    computed:{
      cartItems(){
        return this.$store.getters.cart.content;
      }, 
    },
    created(){
    }
  }
 
</script>

<style> 
</style>
