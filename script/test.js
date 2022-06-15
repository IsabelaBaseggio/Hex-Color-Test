let test = {

    sortHexa: null,

    lockMode: false,

    setedCard: null,

    colorsRand: [],

    cards: null,

    // setando a opção selecionada e restringindo a seleção para apenas uma resposta

    setCard: function(id) {

        let card = this.cards.filter(card=>card.id==id)[0];


        if(card.fippled || this.lockMode) {
            return false;
        }

        if(!this.setedCard) {
            this.setedCard = card;
            this.lockMode = true;
            return true;
        }


    },

    // checando se a opção selecionada é a resposta certa

    checkMatch: function() {
        return this.setedCard.id == this.sortHexa;
    },

    // resetando a opção selecionada

    clearCard: function() {
        this.setedCard = null;
        this.lockMode = null;
    },

    // Gerando as colores aleatoriamente e colocando-as no array

    createColors: function () {
        this.colorsRand = [];
        const letters = '0123456789ABCDEF';
        let hex = "";
        let i = 0;

        while (i < 4) {
            for (let j = 0; j < 6; j++) {
                hex += letters[Math.floor(Math.random() * 16)];
            }
            this.colorsRand[i] = hex;
            hex = "";
            i++;
        }

    },

    // Sorteando a cor da pergunta

    sortHex: function(){

        this.sortHexa = this.colorsRand[Math.floor(Math.random() * 4)];

        return this.sortHexa;

    },

    // criando as cores como opções

    createCardColors: function () {

        this.cards = [];

        this.colorsRand.forEach( (color) => {
            this.cards.push(this.insertData(color))
        })

        return this.cards;

    },

    // inserindo o Id e background referente a cada opção de cor

    insertData: function (color) {

        return {
            id: color,
            bg: color,
            flipped: false
        }

    }


}