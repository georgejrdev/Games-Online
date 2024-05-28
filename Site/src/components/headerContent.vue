<template>
    <h1 id="title">GAMES <span id="emphasis">ONLINE</span></h1>
    <p id="description">THE BEST HOBBY WITH EASY  ACCESS</p>
</template>


<script>
    export default {
        props: {}
    }
</script>


<style scoped>
    @font-face {
        font-family: 'openSans';
        src: url('../assets/fonts/OpenSans-Bold.ttf');
    }

    @font-face {
        font-family: 'adumu';
        src: url('../assets/fonts/adumu.ttf');
    }

    #title{
        font-family: 'adumu';
        font-size: 100px;
        text-align: center;
        margin-bottom: 0px;
        color: white;
        -webkit-text-stroke: 6px black;
        font-weight: bolder;
    }
    
    #description{
        margin-top: 5px;
        font-family: 'openSans';
        font-size: 38px;
        text-align: center;
        -webkit-text-stroke: 3px black;
        color: white;
    }

    #emphasis{
        color: #AC83FF;
    }
</style>