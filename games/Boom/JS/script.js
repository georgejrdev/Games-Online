// Pegando os elementos html
let main = document.getElementById("pagina")
let audio = document.getElementById('meuAudio')
let disparo = document.getElementById('disparo')
let divPause = document.getElementById("pause")
let botaoPausar = document.getElementById("botao_pausar")
let abatesH1 = document.getElementById("kills")
let balasH1 = document.getElementById("bala")
let gameover = document.getElementById("gameover")
let botao_mutar = document.getElementById("botao_mutar")
let botao_desmutar = document.getElementById("botao_desmutar")


// Valores iniciais
let abates = 0
let balas = 4
localStorage.setItem('som','desmutado')


// Mutar audio
function mutarAudio(){
    localStorage.setItem('som','mutado')
    botao_mutar.style.display = "none"
    botao_desmutar.style.display = "block"

}


// Desmutar audio
function desmutarAudio(){
    localStorage.setItem('som','desmutado')
    mutar = false   
    botao_mutar.style.display = "block"
    botao_desmutar.style.display = "none"
}


// Dispara o audio ao atirar
function disparoAudio(){
    
    let mutar = localStorage.getItem('som')
    
    if (mutar == 'desmutado'){
        audio.currentTime = 0
        audio.play();
    }
}


// Ultimos resultados
function seuRecorde(abates_atual){
    if (localStorage.getItem('pointBoom') == '') {
        localStorage.setItem('pointBoom','0')
    }

    let recordeAtual = localStorage.getItem('pointBoom')
    recordeAtual = Number(recordeAtual)

    if (abates_atual > recordeAtual){
        let novoRecorde = String(abates_atual)
        localStorage.setItem('pointBoom',novoRecorde)
        recorde.innerHTML = `NOVO RECORDE DE ABATES: ${abates_atual}`
    } else {
        recorde.innerHTML = `RECORDE DE ABATES: ${recordeAtual}`
    }
}


// Load tela game over
function gameOver(){
    abatesGameOver.innerHTML = `VOCÊ MATOU ${abates} ZUMBI(s)`
    seuRecorde(abates)

    abates = 0
    kills.innerHTML = `ABATES: ${abates}`
    main.style.display = "none"
    gameover.style.display = "block"
    botaoPausar.style.display = "none"
    abatesH1.style.display = "none"
    balasH1.style.display = "none"
}


// Load jogar novamente
function jogarNovamente(){
    balas = 4
    bala.innerHTML = `BALAS: ${balas}`
    main.style.display = "block"
    gameover.style.display = "none"
    abatesH1.style.display = "block"
    balasH1.style.display = "block"
    botaoPausar.style.display = "block"
}


// Posiciona a mira de acordo com o mouse
main.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let mira = document.getElementById('aim')
    mira.style.top = `${y-90}px`
    mira.style.left = `${x-90}px`
})


// Atirar ao clicar na tela
const atirar = document.getElementById('pagina')
atirar.onclick = async function(e){
    e.preventDefault()

    console.log("oi")
    disparoAudio()

    balas = balas -1
    bala.innerHTML = `BALAS: ${balas}`

    if (balas <=0){
        gameOver()
    }

    disparo.style.display = 'block'
    setTimeout(function(){
        disparo.style.display = 'none'
    }, 250)
}


// Matar zumbi
function matarZumbi(id_zumbi){
    if (balas >0){
        let zumbi = document.getElementById(id_zumbi)

        zumbi.style.display="none"

        balas = balas+1
        bala.innerHTML = `BALAS: ${balas}`

        abates = abates + 1
        kills.innerHTML = `ABATES: ${abates}`

        setTimeout(() => {
            zumbi.style.display = "block"
        }, 4550);

    } else {
        gameOver()
    }
}


// Pausar
function pausar(){
    divPause.style.display = "block"
    main.style.display = "none"
    abatesH1.style.display = "none"
    balasH1.style.display = "none"
    abatesPause.innerHTML = `ABATES: ${abates}`
    balasPause.innerHTML = `BALAS: ${balas}`
    botaoPausar.style.display = "none"
}


// Despausar
function despausar(){
    divPause.style.display = "none"
    main.style.display = "block"
    abatesH1.style.display = "block"
    balasH1.style.display = "block"
    botaoPausar.style.display = "block"
}
