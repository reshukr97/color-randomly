const containerEl = document.querySelector(".container");

for(let i = 0; i< 30; i++)
{
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerElAll =  document.querySelectorAll(".color-container");

generateColor();

function generateColor(){
    colorContainerElAll.forEach( (colorContainerEl) => {
        const newColor = randomColor();
        console.log(newColor);
        colorContainerEl.style.backgroundColor = "#" + newColor;
        colorContainerEl.innerText = "#" + newColor;
    } );
}



function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeL = 6;
    let colorCode = "";
    for(let j = 0; j < colorCodeL ; j++){
        const randomCol = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomCol , randomCol+1);
    }
    return colorCode;
}