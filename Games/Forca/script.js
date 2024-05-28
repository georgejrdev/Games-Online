let words = ['abacate', 'palavra', 'frutas', 'verduras', 'sol', 'tentar', 'acabar']
let indexWord = Math.floor(Math.random() * words.length)
let word = words[indexWord]
let sizeWord = word.length
let triedLetters = []

let chance = sizeWord * 1.45
chance = Math.ceil(chance)
renderChances(chance)

if (!getCookie("recordGamesOnlineForca")) {
    setCookie("recordGamesOnlineForca", "0", 365)
}

for (let i = 0; i < sizeWord; i++) {
    renderSpaces(i)
}


function renderChances(chance) {
    let p = document.getElementById("chance")
    p.innerHTML = `você tem ${chance} chances`
}


function renderTriedWords(triedWords) {
    let p = document.getElementById("triedWords")
    p.innerHTML = `${triedWords}`
}

function renderSpaces(id) {
    let divSpaces = document.getElementById("spaces")
    let divLetters = document.getElementById("letters")

    let newDivSpace = document.createElement("div")
    let newDivLetter = document.createElement("div")

    newDivSpace.className = "space"
    newDivSpace.id = `S${id}`

    newDivLetter.classList = "letter"
    newDivLetter.id = `L${id}`

    divLetters.appendChild(newDivLetter)
    divSpaces.appendChild(newDivSpace)
}


function rigthLetter() {
    let letter = document.getElementById("inputLetter").value.toLowerCase()
    let accert = false

    if (checkInput(letter)) {

        triedLetters.push(letter)
        renderTriedWords(triedLetters)

        for (let i = 0; i < sizeWord; i++) {
            if (letter == word[i]) {
                div = document.getElementById(`L${i}`)
                h2 = document.createElement("h2")

                h2.textContent = word[i]

                div.appendChild(h2)
                accert = true
                if (checkVictory(sizeWord)) {
                    end(true)
                }
            }
        }

        chance = chance -1
        renderChances(chance)

        if (!accert) {
            if (chance <= 0) {
                end(false)
            } else {
            }
        }
    } else {
        window.alert("INPUT INVÁLIDO OU JÁ EXISTENTE")
    }
}


function checkVictory(sizeWord) {
    let victory = false
    let initialCondition = true

    for (let i = 0; i < sizeWord; i++) {
        let div = document.getElementById(`L${i}`)
        let h2 = div.querySelector("h2")

        if ((h2 !== null) && (initialCondition)) {
            victory = true
        } else {
            victory = false
            initialCondition = false
        }
    }

    return victory
}


function checkInput(input) {
    if ((input.length > 1) || (input.length <= 0)) {
        return false
    }

    if (triedLetters.includes(input)) {
        return false
    }

    return true
}


function updateRecord() {
    let currentRecord = getCookie("recordGamesOnlineForca")

    if (currentRecord == "0") {
        setCookie("recordGamesOnlineForca", "1", 365)
    } else {
        currentRecord = parseInt(currentRecord)
        newRecord = currentRecord + 1
        setCookie("recordGamesOnlineForca", newRecord.toString(), 365)
    }
}


function end(result) {
    let div = document.getElementById("end")
    div.style.display = "block"

    let h1 = document.getElementById("result")
    let p = document.getElementById("record")

    if (result) {
        updateRecord()
        record = getCookie("recordGamesOnlineForca")
        h1.innerHTML = "VOCÊ GANHOU"
        p.innerHTML = `SEU NOVO RECORDE É ${record} PALAVRAS EM SEQUÊNCIA`
    } else {
        setCookie("recordGamesOnlineForca", "0", 365)
        h1.innerHTML = "VOCÊ PERDEU!"
        p.innerHTML = "SEU RECORDE FOI ZERADO"
    }

    let pWord = document.getElementById("word")
    pWord.innerHTML = `A PALAVRA ERA ${word}`
}


function setCookie(name, value, days) {
    let expires = ""
    if (days) {
        let date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}


function getCookie(name) {
    let nameEQ = name + "="
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}


function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;'
}


let pCurrentRecord = document.getElementById("currentRecord")
let initialCurrentRecord = getCookie("recordGamesOnlineForca")
pCurrentRecord.innerHTML = `SEU RECORDE ATUAL É DE ${initialCurrentRecord} PALAVRA(s) EM SEQUẼNCIA`