<template>
    <div id="cuts">
        <h3>{{ title }}</h3>
        <div class="images">    
            <img class="sec" src="../assets/2.jpg" alt="Beef">
        </div>
        <p>
            Beef is first divided into primal cuts, pieces of meat initially butchering. These are basic sections from which steaks and other subdivisions are cut. The term "primal cut" is quite different from "prime cut", used to characterize cuts considered to be of higher quality. Since the animal's legs and neck muscles do the most work, they are the toughest; the meat becomes more tender as distance from hoof and horn increases. Different countries and cuisines have different cuts and names, and sometimes use the same name for a different cut; for example, the cut described as "brisket" in the United States is from a significantly different part of the carcass than British brisket.
        </p>
        <a class="link" href="https://www.thespruceeats.com/cuts-of-beef-chuck-loin-rib-brisket-and-more-995304" target="_blank"> <strong>For more info click here</strong></a>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            title: 'Cuts'
        }
    }
}
</script>

<style scoped>
    #cuts{
        margin-top:20px;
    }
     h3{
        text-align: center;
    }
    img {
        height:400px;
        width:327px;
    }
    .images{
        display:flex;
        margin:auto;
        justify-content: center;
        padding-bottom:25px;
    }
    .link{
        
        display:flex;
        width:25%;
        justify-content: center;
        margin:auto;
        padding-top:10px;
        
    }
    .link:hover{
        text-transform: uppercase;
    }
</style>
