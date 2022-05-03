// // Classes
// const FRONT = "colorFront";
// const BACK = "colorBack";
// const CORRECT = "correct";
// const WRONG = "wrong";

let colorsRand = ["", "", "", ""];


// function startGame() {

//     createColors();

//     let hideBtn = document.getElementById("start");
//     hideBtn.style.display = 'none';

//     let showTest = document.getElementById("main");
//     showTest.style.display = 'inline-block';

}

// // Gerando as colores aleatoriamente e colocando-as no array

// function createColors() {

//     const letters = '0123456789ABCDEF';
//     let hex = '#';
//     let i = 0;

//     while(i < 4) {
//         for (let j = 0; j < 6; j++) {
//             hex += letters[Math.floor(Math.random() * 16)];
//         }
//         colorsRand[i] = hex;
//         hex = '#';
//         i++;
//     }

    initializeSpaceColors(colorsRand);

    questionColor(colorsRand);

    return colorsRand;

// }

function initializeSpaceColors(spaces) {

    let containerColors = document.getElementById("containerColors");

    spaces.forEach( space => {

        let spaceElement = document.createElement('div');
        spaceElement.classList.add(FRONT);

        createSpaceContent(space, spaceElement);

        spaceElement.addEventListener('click', colorResult)

        containerColors.appendChild(spaceElement);
        
        
    });

}

function createSpaceContent(colorsRand, spaceElement){

    createSpaceFront(FRONT, colorsRand, spaceElement);
    createSpaceBack(BACK, colorsRand, spaceElement);

}

function createSpaceFront(face, colorsRand, element){

    let spaceElementFace = document.createElement('div');
    spaceElementFace.classList.add(FACE);

}


// Sorteando o Hexadecimal da pergunta

// function questionColor(colors) {

    let sortHex = colors[Math.floor(Math.random() * (2 + 1))];

    let questionHex = document.getElementsByClassName("hex");
    questionHex.innerHTML = sortHex;

    console.log(typeof sortHex)
    console.log(typeof questionHex)

// }

function colorResult() {

}