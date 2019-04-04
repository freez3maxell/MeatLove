<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        
        <h1 class='prob'>{{ title }}</h1>
      
        <app-header></app-header>

        <!-- begin main content -->
        <transition name="bounce" mode="out-in">
          <router-view></router-view>
        </transition>
        
        <!-- end main content -->

        <AppFooter></AppFooter>
      </div>
    </div>
  </div>
</template>

<script>

// Shared 
import AppHeader from './components/shared/AppHeader.vue';
import AppFooter from './components/shared/AppFooter.vue';



export default {
  name: 'app',
  data() {
    return {
      title: 'World of Beef'
    }
  },
  components: {
    // AppHeader: AppHeader,
    AppHeader,
    AppFooter: AppFooter,
    
  }
}
 
</script>

<style lang="scss">

  *{
    cursor: url("https://i.ibb.co/Gnb7W7v/but2.png");
  }

  .prob{
    text-shadow: 3px 2px black;
    font-size:3.5em;
  }

  h1,h2{
      text-align: center;
  }

  *{
    box-sizing: border-box;
  }

  div {
      padding: 10px;
      margin: 10px;
  }
  
  .bounce-enter-active {
    animation: bounce-in .3s linear;
    
  }
  .bounce-leave-active {
    animation: bounce-in .3s linear reverse;
  }

  .bounce-leave-to  {
  opacity: 0.5; 
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    10% {
      transform: scale(0.1);
    }

    20% {
      transform: scale(0.2);
    }

    30% {
      transform: scale(0.4);
    }

    40% {
      transform: scale(0.5);
    }

    50% {
      transform: scale(0.6);
    }

    60% {
      transform: scale(0.8);
    }

    70% {
      transform: scale(0.9);
    }

    80% {
      transform: scale(1);
    }
    
    90% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
  
</style>
