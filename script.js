// Efeito 1: Zoom In e Out
const effect1 = document.getElementById("effect1");
setInterval(() => {
    effect1.style.transform = "scale(1.5)";
    setTimeout(() => {
        effect1.style.transform = "scale(1)";
    }, 500);
}, 1000);

// Efeito 2: Rotação 360 graus
const effect2 = document.getElementById("effect2");
setInterval(() => {
    effect2.style.transition = "transform 1s";
    effect2.style.transform = "rotate(360deg)";
    setTimeout(() => {
        effect2.style.transform = "rotate(0deg)";
    }, 1000);
}, 2000);

// Efeito 3: Fade In e Out
const effect3 = document.getElementById("effect3");
setInterval(() => {
    effect3.style.opacity = "0";
    setTimeout(() => {
        effect3.style.opacity = "1";
    }, 500);
}, 1000);

// Efeito 4: Balanço
const effect4 = document.getElementById("effect4");
setInterval(() => {
    effect4.style.transform = "rotate(-10deg)";
    setTimeout(() => {
        effect4.style.transform = "rotate(10deg)";
    }, 500);
    setTimeout(() => {
        effect4.style.transform = "rotate(0deg)";
    }, 1000);
}, 2000);

// Efeito 5: Mudança de cores
const effect5 = document.getElementById("effect5");
setInterval(() => {
    effect5.style.color = getRandomColor();
}, 500);

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Efeito 6: Pisca-pisca
const effect6 = document.getElementById("effect6");
setInterval(() => {
    effect6.style.visibility = "hidden";
    setTimeout(() => {
        effect6.style.visibility = "visible";
    }, 500);
}, 1000);
