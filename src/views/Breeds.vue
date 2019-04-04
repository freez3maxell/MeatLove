<template>
    <div id="breeds">
        <h3>{{ title }}</h3>
        <div class="images"> 
            <img class="sec" src="../assets/1.jpg" alt="Beef">
        </div>
        <ul class='br'>
            <li>
                Certified Angus Beef (CAB) in Canada and the United States is a specification-based, branded-beef program which was founded in 1978 by Angus cattle producers to increase demand for their breed of cattle, by promoting the impression that Angus cattle have consistent, high-quality beef with superior taste. The brand is owned by the American Angus Association and its 35,000 rancher members. The terms Angus Beef or Black Angus Beef are loosely and commonly misused or confused with CAB; this is especially common in the food service industry. The brand or name Certified Angus Beef cannot be legally used by an establishment that is not licensed to do so. In the UK the equivalent is Aberdeen Angus, marketed as higher quality and associated with stricter animal welfare rules. Notable for the herd being free of BSE during the BSE epidemic in the UK. Similar schemes are used elsewhere as in Certified Angus Beef in Ireland.
            </li>
            <li>
                Certified Hereford Beef is beef certified to have come from Hereford cattle.
            </li>
            <li>
                Kobe beef is pure Tajima-gyu breed bull that was born, raised, and slaughtered solely within the Hyogo prefecture. Very limited amounts of Kobe are exported.
            </li>
            <li>
                The EU recognizes the following Protected Designation of Origin beef brands:
                <ul>
                    <li>Spain – Carne de Ávila, Carne de Cantabria, Carne de la Sierra de Guadarrama, Carne de Morucha de Salamanca, Carne de Vacuno del País o Euskal Okela, Ternera Galega</li>
                    <li>France – Taureau de Camargue, Boeuf charolais du Bourbonnais, Boeuf de Chalosse, Boeuf du Maine</li>
                    <li>Portugal – Carne Alentejana, Carne Arouquesa, Carne Barrosã, Carne Cachena da Peneda, Carne da Charneca, Carne de Bovino Cruzado dos Lameiros do Barroso, Carne dos Açores, Carne Marinhoa, Carne Maronesa, </li>
                    <li>United Kingdom – Orkney Beef, Scotch Beef, Welsh Beef</li>
                    <li>Belgium – Belgian Blue</li>
                    
                </ul>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            title: 'Breeds'
        }
    }
}
</script>

<style scoped>
    
    #breeds{
        padding-top:20px;
    }

     h3{
        text-align: center;
    }

    img {
        height:400px;
        width:327px;
    }

    .sec{
        display:flex;
        justify-content: center;
        padding-bottom:25px;
        margin:auto;
    }

    .br{
        margin-left:-20px;
    }
    

</style>
