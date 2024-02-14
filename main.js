const tocadiscos = document.querySelector(".tocadiscos-img");
const tocadiscosPng = document.querySelector("#tocadiscos-static");
const tocadiscosGif = document.querySelector("#tocadiscos-gif");
const discoGif = document.querySelector("#tocadiscos-disco");

const carta = document.querySelector(".carta");


function displayDiskRotation() {
    discoGif.style.display = 'block';
    tocadiscosGif.style.display = 'none';
    let songPlayer = new Audio("song.mp3");
    songPlayer.volume = 0.5;
    songPlayer.play();
    // Animacion de la carta
    carta.classList.add('aparecer');
}

function showLetter() {
    tocadiscosPng.style.display = 'none';
    tocadiscosGif.style.display = 'block';
    setTimeout(displayDiskRotation, 2500);
    tocadiscos.removeEventListener("click", showLetter)
}


tocadiscos.addEventListener("click", showLetter)
