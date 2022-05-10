// Classes
const FRONT = "colorFront";
const BACK = "colorBack";
const CORRECT = "correct";
const WRONG = "wrong";
const COLOR = "color";

let sortHex = null;


// iniciando o teste

function startGame() {

    test.createColors();

    questionColor(test.colorsRand)

    let hideBtn = document.getElementById("start");
    hideBtn.style.display = 'none';

    let showTest = document.getElementById("containerQuestion");
    showTest.style.display = 'block';


    cards = test.createCardColors();

    initializeCards(test.cards);

}

// criando o visual das opções das cores

function initializeCards() {


    let colorsBoard = document.getElementById("colorsBoard"); // não funciona o appendChild se o elemento pai for pego pela Class(explicação não sei, mas fica a dica)


    test.cards.forEach(card => {

        let colorElement = document.createElement("div");
        colorElement.classList.add(COLOR);
        colorElement.id = card.id;



        createSpaceContent(card, colorElement);

        colorElement.addEventListener('click', colorResult);

        colorsBoard.appendChild(colorElement);

    });

    console.log(cards);


}

//  criando o Front e Back das cores

function createSpaceContent(card, colorElement) {

    createSpaceFace(FRONT, card, colorElement);
    createSpaceFace(BACK, card, colorElement);

}

function createSpaceFace(face, card, element) {

    let colorElementFace = document.createElement('div');
    colorElementFace.classList.add(face);

    if (face == FRONT) {
        colorElementFace.style.backgroundColor = "#" + card.id;
    } else {
        colorElementFace.innerHTML = "<strong>" + card.id + "</strong>";
        colorElementFace.style.color = "#" + card.id;
    }

    element.appendChild(colorElementFace);


}


// Sorteando o Hexadecimal da pergunta

function questionColor(colors) {

    sortHex = colors[Math.floor(Math.random() * (2 + 1))];

    let questionHex = document.getElementById("hex");
    questionHex.innerHTML = "<strong>" + sortHex + "</strong>";

}

function colorResult() {

    let options = document.getElementById("colorsBoard").childNodes;

    console.log(options);

    // options.forEach(option => {
    //     if(option.id == sortHex){
    //         option.getElementsByClassName(FRONT).style.display = 'none';
    //         option.getElementsByClassName(BACK).style.display = 'inlie-block';
    //         option.classList.add(CORRECT);
    //     } else {
    //         option.getElementsByClassName(FRONT).style.display = 'none';
    //         option.getElementsByClassName(BACK).style.display = 'inlie-block';
    //         option.classList.add(WRONG);
    //     }
    // });

}