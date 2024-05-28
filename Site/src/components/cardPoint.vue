<template>
    <div :style="{backgroundColor: backgroundColor }" class="card">
        <h3 id="title" class="text">best score</h3>
        <p class="text">{{ point }}</p>
    </div>
</template>


<script>
    export default {
        props: {
            backgroundColor: String,
            point: Number,
        }
    }
</script>


<style scoped>
    @font-face {
        font-family: 'dreaming';
        src: url('../assets/fonts/dreaming-outloud-allcaps-regular.otf');
    }

    .card{
        width: 250px;
        border: 5px solid black;
        -webkit-border-radius: 40px;
        -moz-border-radius: 40px;
        border-radius: 40px;
        height: 250px;
        color:white;
        text-align: center;
    }

    .text{
        margin:auto;
        font-size: 32px;
        width: 50%;
        font-family: 'dreaming';
    }

    #title{
        margin-top: 55px;
    }

</style>./card-point.vue