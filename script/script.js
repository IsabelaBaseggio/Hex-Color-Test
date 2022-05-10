// Classes
const FRONT = "colorFront";
const BACK = "colorBack";
const CORRECT = "correct";
const WRONG = "wrong";
const COLOR = "color";

let hex = null;

let score = 0;


// iniciando o teste

function startGame() {

    test.createColors();

    questionColor()

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
        colorElement.dataset.hex = card.id;



        createSpaceContent(card, colorElement);

        colorElement.addEventListener('click', colorResult);

        colorsBoard.appendChild(colorElement);

    });


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
        if(card.id == hex) {
            colorElementFace.classList.add(CORRECT);
        } else {
            colorElementFace.classList.add(WRONG);
        }
    }

    element.appendChild(colorElementFace);


}


// Sorteando o Hexadecimal da pergunta

function questionColor() {

    hex = test.sortHex();

    let questionHex = document.getElementById("hex");
    questionHex.innerHTML = "<strong>" + hex + "</strong>";
    questionHex.style.boxShadow = "none";

    return hex;


}

// Mostrando as repostas e chegando a opção selecionada

function colorResult() {

    // if (test.setCard(this.id)) {
        let frontCards = document.querySelectorAll('.colorFront');

        frontCards.forEach(frontCard => {
            frontCard.style.display = "none";
        })

        let backCards = document.querySelectorAll('.colorBack');

        backCards.forEach(backCard => {
            backCard.style.display = "flex";
        })

        // if(test.checkMatch()) {
        //     questionHex.classList.add(CORRECT);
        //     score++;
        //     test.clearCard();
        // } else {
        //     questionHex.classList.add(WRONG);
        //     test.clearCard();
        // }

    // }


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