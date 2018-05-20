import {
    getCards,
    getParent,
    createDefaultRotation,
    rotateX
} from '../card'

import {
    isElementInView,
    getScrolledCardsHeight,
    applyStyles
} from '../utils'

import {
    carouselStyle,
    cardStyle
} from '../styles'

export class Square {
    constructor(options) {
        this.cards = getCards(options.elemSelector);
        this.parent = getParent(options.parentSelector)
        this.currdeg = 0;
        this.scrollAvailable = true;

        this.parent.style.transition = `transform ${options.speed/1000}s`;

        this.cards.forEach((card) => applyStyles(card, { ...cardStyle, ...options.cardStyle }))
        this.parent = applyStyles(this.parent, carouselStyle);

        createDefaultRotation(this.cards);

        window.addEventListener("wheel", (e) => {
            this.scrollY(e, this.cards);
        });
    }

    scrollY(e, cards) {
        if (e.deltaY < 0) {
            this.currdeg = this.currdeg - 360/cards.length;
        }

        if (e.deltaY > 0) {
            this.currdeg = this.currdeg + 360/cards.length;
        }

        rotateX(this.parent, this.currdeg);
    }

    scrollX(foo) { //todo
        return [ ...foo ]
    }
}