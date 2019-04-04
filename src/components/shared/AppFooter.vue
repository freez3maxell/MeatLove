<template>
    <div class="main-footer">
        
        <span>&copy; <strong>{{title}}</strong></span>
    </div>    
    
</template>

<script>
export default {
    data(){
        return {
            title: "Meat is love, meat is life"
        }
    }
}
</script>

<style lang="scss" scoped>
    
    .main-footer {
    margin-top:30px;
	text-align: center;
	padding: 2em 0;
	background: #d9e4ea;
    font-size:18px;
}
</style>
