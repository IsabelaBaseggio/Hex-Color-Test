// // Classes
// const FRONT = "colorFront";
// const BACK = "colorBack";
// const CORRECT = "correct";
// const WRONG = "wrong";

// let colorsRand = [null];


// function startGame() {

//     createColors();

//     let hideBtn = document.getElementById("start");
//     hideBtn.style.display = 'none';

//     let showTest = document.getElementById("main");
//     showTest.style.display = 'inline-block';

//     questionColor(colorsRand);

// }

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

//     return colorsRand;

// }

// // Sorteando o Hexadecimal da pergunta

// function questionColor(colors) {

//     console.log(colors)

//     let sortHex = colors[Math.floor(Math.random() * (2 + 1))];

//     let question = document.getElementsByClassName("hex");
//     question.innerHTML = sortHex;


// }

