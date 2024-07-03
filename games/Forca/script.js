let words = ['abacate', 'palavra', 'frutas', 'verduras', 'sol', 'tentar', 'acabar'];
let indexWord = Math.floor(Math.random() * words.length);
let word = words[indexWord];
let sizeWord = word.length;
let triedLetters = [];

let chance = sizeWord * 1.45;
chance = Math.ceil(chance);
renderChances(chance);

if (!localStorage.getItem("pointForca")) {
    localStorage.setItem("pointForca", "0");
}

for (let i = 0; i < sizeWord; i++) {
    renderSpaces(i);
}

function renderChances(chance) {
    let p = document.getElementById("chance");
    p.innerHTML = `você tem ${chance} chances`;
}

function renderTriedWords(triedWords) {
    let p = document.getElementById("triedWords");
    p.innerHTML = `${triedWords}`;
}

function renderSpaces(id) {
    let divSpaces = document.getElementById("spaces");
    let divLetters = document.getElementById("letters");

    let newDivSpace = document.createElement("div");
    let newDivLetter = document.createElement("div");

    newDivSpace.className = "space";
    newDivSpace.id = `S${id}`;

    newDivLetter.classList = "letter";
    newDivLetter.id = `L${id}`;

    divLetters.appendChild(newDivLetter);
    divSpaces.appendChild(newDivSpace);
}

function rigthLetter() {
    let letter = document.getElementById("inputLetter").value.toLowerCase();
    let accert = false;

    if (checkInput(letter)) {

        triedLetters.push(letter);
        renderTriedWords(triedLetters);

        for (let i = 0; i < sizeWord; i++) {
            if (letter == word[i]) {
                let div = document.getElementById(`L${i}`);
                let h2 = document.createElement("h2");

                h2.textContent = word[i];

                div.appendChild(h2);
                accert = true;
                if (checkVictory(sizeWord)) {
                    end(true);
                }
            }
        }

        chance = chance - 1;
        renderChances(chance);

        if (!accert) {
            if (chance <= 0) {
                end(false);
            }
        }
    } else {
        window.alert("INPUT INVÁLIDO OU JÁ EXISTENTE");
    }
}

function checkVictory(sizeWord) {
    let victory = false;
    let initialCondition = true;

    for (let i = 0; i < sizeWord; i++) {
        let div = document.getElementById(`L${i}`);
        let h2 = div.querySelector("h2");

        if ((h2 !== null) && (initialCondition)) {
            victory = true;
        } else {
            victory = false;
            initialCondition = false;
        }
    }

    return victory;
}

function checkInput(input) {
    if ((input.length > 1) || (input.length <= 0)) {
        return false;
    }

    if (triedLetters.includes(input)) {
        return false;
    }

    return true;
}

function updateRecord() {
    let currentRecord = localStorage.getItem("pointForca");

    if (currentRecord === "0") {
        localStorage.setItem("pointForca", "1");
    } else {
        currentRecord = parseInt(currentRecord);
        let newRecord = currentRecord + 1;
        localStorage.setItem("pointForca", newRecord.toString());
    }
}

function end(result) {
    let div = document.getElementById("end");
    div.style.display = "block";

    let h1 = document.getElementById("result");
    let p = document.getElementById("record");

    if (result) {
        updateRecord();
        let record = localStorage.getItem("pointForca");
        h1.innerHTML = "VOCÊ GANHOU";
        p.innerHTML = `SEU NOVO RECORDE É ${record} PALAVRAS EM SEQUÊNCIA`;
    } else {
        localStorage.setItem("pointForca", "0");
        h1.innerHTML = "VOCÊ PERDEU!";
        p.innerHTML = "SEU RECORDE FOI ZERADO";
    }

    let pWord = document.getElementById("word");
    pWord.innerHTML = `A PALAVRA ERA ${word}`;
}

let pCurrentRecord = document.getElementById("currentRecord");
let initialCurrentRecord = localStorage.getItem("pointForca");
pCurrentRecord.innerHTML = `SEU RECORDE ATUAL É DE ${initialCurrentRecord} PALAVRA(s) EM SEQUÊNCIA`;