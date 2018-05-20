import {
    setupCarousel
} from '../core/helpers';

import {
    wheelHandler
} from '../core/handlers';

export class Carousel {
    constructor(options) {
        this.options = options;
        this.currdeg = 0;
        const setup = setupCarousel(options);
        console.log(setup);
        for(var k in setup) {
            console.log(k);
            this[k] = setup[k]
        }

        wheelHandler(window, (e) => {
            this.rotateX(e, this.cards);
        })
    }

    rotateX(e, cards) {
        this.currdeg = e.deltaY < 0 ?
            this.currdeg - 360/cards.length : 
            this.currdeg + 360/cards.length;

        this.parent.style["-webkit-transform"] = `rotateX(${this.currdeg}deg)`
        this.parent.style["-moz-transform"] = `rotateX(${this.currdeg}deg)`
        this.parent.style["-o-transform"] = `rotateX(${this.currdeg}deg)`
        this.parent.style["transform"] = `rotateX(${this.currdeg}deg) translateX(-50%)`
    }

    rotateY(foo) { // !todo
        return [ ...foo ]
    }

    addCard() {
        this.cards.push({
            ok: true // !todo
        })
    }
}