import {
    getCards,
    getParent,
    createDefaultRotation
} from '../card'

import {
    isElementInView,
    getScrolledCardsHeight
} from '../utils'

export class Square {
    constructor(options) {
        const defaultOptions = {
            someopt: false
        };
        
        this.cards = getCards(options.elemSelector);
        this.parent = getParent(options.parentSelector)
        this.currdeg = 0;

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

        this.parent.style["-webkit-transform"] = "rotateX("+this.currdeg+"deg)"
        this.parent.style["-moz-transform"] = "rotateX("+this.currdeg+"deg)"
        this.parent.style["-o-transform"] = "rotateX("+this.currdeg+"deg)"
        this.parent.style["transform"] = "rotateX("+this.currdeg+"deg)"
        
        console.log(this.parent.style);
    }

    scrollX(foo) { //todo
        return [ ...foo ]
    }
}