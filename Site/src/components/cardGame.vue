<template>
    <div :style="{backgroundColor: backgroundColor }" class="card"></div>
</template>


<script>
    export default {
        props: {
            backgroundColor: String,
        }
    }
</script>


<style scoped>
    .card{
        width: 250px;
        border: 5px solid black;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
        height: 150px;
    }
</style>