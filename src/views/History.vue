<template>
    <div id='history'>
        <h3>{{ title }}</h3>
        <div class="images">
            <img class="sec" src="../assets/art.jpg" alt="Nice to meat you">    
        </div>
        <p>
            People have eaten the flesh of bovines from prehistoric times; some of the earliest known cave paintings, such as those of Lascaux, show aurochs in hunting scenes. People domesticated cattle around 8000 BC to provide ready access to beef, milk, and leather. Most cattle originated in the Old World, with the exception of bison hybrids, which originated in the Americas. Examples include the Wagyū from Japan, Ankole-Watusi from Egypt, and longhorn Zebu from the Indian subcontinent.
        </p>
        <p>
            It is unknown exactly when people started cooking beef. Cattle were widely used across the Old World as draft animals (oxen), for milk, or specifically for human consumption. With the mechanization of farming, some breeds were specifically bred to increase meat yield, resulting in Chianina and Charolais cattle, or to improve the texture of meat, giving rise to the Murray Grey, Angus, and Wagyū. Some breeds have been selected for both meat and milk production, such as the Brown Swiss (Braunvieh).
        </p>
        <p> 
            In the United States, the growth of the beef business was largely due to expansion in the Southwest. Upon the acquisition of grasslands through the Mexican–American War of 1848, and later the expulsion of the Plains Indians from this region and the Midwest, the American livestock industry began, starting primarily with the taming of wild longhorn cattle. Chicago and New York City were the first to benefit from these developments in their stockyards and in their meat markets.
        </p>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            title: 'History of beef'
        }
    }
}
</script>

<style scoped>
    #history{
        margin-top:20px;
    }

     h3{
        text-align: center;
    }
    
    .images{
        margin:auto;
        display:flex;
        justify-content: space-evenly;
        padding-bottom:25px;
    }

</style>
