<template>
    
        
    <div class="banner">
        <h3 class="headline">Welcome to the World of Beef</h3>
        <p class="tagline">The best meat there is.</p>
        <img class="logo" src="../assets/beef.png" alt="Beef">
        
        
        
        
    </div>
       
</template>

<script>
export default {
    data(){
        return {
            title: 'Welcome to the world of beef'
        }
    }
}
</script>

<style scoped>
    .banner{
        text-align: center;
        
        margin-top:20px;
          
    }
   
    .logo {
        max-width: 660px;
        margin:auto;
    }

    .headline {
        margin-top: 0;
        margin-bottom:25px;
    }
    
    .tagline{
        margin-bottom: 30px;
    }
    

</style>
