<template>
    <div>
        
        <ul class="nav nav-pills">
            <li class="nav-item">
                <router-link class="nav-link" to="/" active-class="active" exact>Home</router-link>

            </li>
                
            <li class="nav-item"> 
                <router-link class="nav-link" to="/about" active-class="active">About</router-link>
            </li>

            <li class="nav-item"> 
                <router-link class="nav-link" to="/history" active-class="active">History</router-link>
            </li>

            <li class="nav-item"> 
                <router-link class="nav-link" to="/cuts" active-class="active">Cuts</router-link>
            </li>
            <li class="nav-item"> 
                <router-link class="nav-link" to="/breeds" active-class="active">Breeds</router-link>
            </li>

        </ul>
        
    </div>    
</template>

<script>
export default {
    data(){
        return {
            title: 'This is the header'
        }
    }
}
</script>

<style scoped>

    
    
    ul{
        background:#d9e4ea;
    }

    li{
        padding:20px 0;
        color: #f2f2f2;
        text-decoration: none;
        font-size: 17px;
    }
    
    .nav{
        margin-top:10px;
    }

    
    
    
    
</style>
