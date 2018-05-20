import { getCards, getParent } from '../card'

export class Scroll {
    constructor(options) {
        const defaultOptions = {
            someopt: false
        };
        console.log(options)
        // this.options = Object.assign({}, defaultOptions, options);
        this.cards = getCards(options.elemSelector);
        this.parent = getParent(options.parentSelector)

        window.onscroll = (e) => {
            this.scrollY(e);
        }
    }

    scrollY(e) {
        let direction = 'up';
        console.log('eeee');
    }

    scrollX() { //todo
    
    }
}