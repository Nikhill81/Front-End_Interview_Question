const colorCodeContainer = document.getElementById('color-code')
const optionContainer = document.getElementById('options-container')

let RandomColor = null


function generateRandomNumberBetween(min, max) {
return min + Math.floor(Math.random() * (max-min+1))
}

function generateRandomColorRGB() {
    const red = generateRandomNumberBetween(0,255)
    const green = generateRandomNumberBetween(0,255);
    const orange = generateRandomNumberBetween(0,255);
    return `rgb(${red},${green},${orange})`;

}

function startGame () {
    RandomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = RandomColor;

    for(let i = 0; i < 6; i++){
        const div = document.createElement('div');
        div.style.backgroundColor = generateRandomColorRGB();
        optionContainer.append(div);


    }

}
window.addEventListener("load", () => startGame())