getPoints()

function getPoints() {
    let pointForca = localStorage.getItem("pointForca");
    let pointBoom = localStorage.getItem("pointBoom");
    let pointSort = localStorage.getItem("pointSort");

    if (pointForca === null) {
        localStorage.setItem("pointForca", "0");
        pointForca = "0";
    }

    if (pointBoom === null) {
        localStorage.setItem("pointBoom", "0");
        pointBoom = "0";
    }

    if (pointSort === null) {
        localStorage.setItem("pointSort", "0");
        pointSort = "0";
    }

    console.log(pointBoom);

    let pForca = document.getElementById("p-forca-point");
    let pBoom = document.getElementById("p-boom-point");
    let pSort = document.getElementById("p-sort-point");

    pForca.innerHTML = `MELHOR PONTUAÇÃO <br><br> ${pointForca}`;
    pBoom.innerHTML = `MELHOR PONTUAÇÃO <br><br> ${pointBoom}`;
    pSort.innerHTML = `MELHOR PONTUAÇÃO <br><br> ${pointSort}`;
}