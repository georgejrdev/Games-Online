<template>

  <header>
    <HeaderContent />
  </header>

  <main>
    <div id="games" class="container">
      <a href=""><CardGame backgroundColor="#2F96D1"/></a>
      <a href=""><CardGame backgroundColor="#BB9C23"/></a>
      <a href=""><CardGame backgroundColor="#009F53"/></a>
    </div>

    <div id="points" class="container">
      <CardPoint backgroundColor="#2F96D1" :point="pointGame1"/>
      <CardPoint backgroundColor="#BB9C23" :point="pointGame2"/>
      <CardPoint backgroundColor="#009F53" :point="pointGame3"/>
    </div>
  </main>

  <footer>
    <FooterContent />
  </footer>

</template>


<script>
  import HeaderContent from './components/headerContent.vue';
  import CardGame from './components/cardGame.vue';
  import CardPoint from './components/cardPoint.vue';
  import FooterContent from './components/footerContent.vue';

  export default {

    name: 'App',
    components: {
      HeaderContent,
      CardGame,
      CardPoint,
      FooterContent,
    },
    data(){
      return{
        pointGame1:this.getPointsGame('game1'),
        pointGame2:this.getPointsGame('game2'),
        pointGame3:this.getPointsGame('game3'),
      }
    },
    methods:{
      getPointsGame(game){
        let value = localStorage.getItem(game)

        if (value == null){
          localStorage.setItem('game1',0)
          localStorage.setItem('game2',0)
          localStorage.setItem('game3',0)

          window.location.reload()

        } else {
          return value
        }

      }
    }
  }
</script>


<style scoped>

  header{
    margin-top: 50px;
  }

  main{
    margin-bottom: 50px;
  }

  .container{
    margin:auto;
    display: flex;  
    max-width: 100vw;
    gap:90px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  #games{
    margin-top: 150px;
  }

  #points{
    margin-top: 150px;
  }

  footer{
    background-color: black;
    padding: 20px;
  }

</style>./components/Card-point.vue./components/card-point.vue./components/header-content.vue./components/cardGame.vue./components/cardPoin.vue./components/headerContent.vue
