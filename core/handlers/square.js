import {
    getCards,
    getParent,
    createDefaultRotation,
    rotateX
} from '../card'

import {
    isElementInView,
    getScrolledCardsHeight,
    applyStyles,
    sleep
} from '../utils'

import {
    carouselStyle,
    cardStyle
} from '../styles'

export class Square {
    constructor(options) {
        this.options = options;
        this.currdeg = 0;
        
        this.cards = getCards(options.elemSelector);
        this.parent = getParent(options.parentSelector)
        this.cards.forEach((card) => applyStyles(card, { ...cardStyle, ...options.cardStyle }))
        this.parent = applyStyles(this.parent, carouselStyle);
        createDefaultRotation(this.cards);

        this.parent.style.transition = `transform ${options.speed/1000}s`; // ill have to do sth with this

        window.addEventListener("wheel", (e) => {
            this.scrollY(e, this.cards);
        });
    }

    scrollY(e, cards) {
        this.currdeg = e.deltaY < 0 ?
            this.currdeg - 360/cards.length : 
            this.currdeg + 360/cards.length;

        rotateX(this.parent, this.currdeg);
    }

    scrollX(foo) { //todo
        return [ ...foo ]
    }
}