let test = {

    colorsRand: [],

    cards: null,

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
            bg: color
        }

    }


}