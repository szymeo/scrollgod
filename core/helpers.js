import {
    carouselStyle,
    cardStyle
} from '../styles'

function setupCarousel(options) {
    let _this = {};
    _this.cards = getCards(options.elemSelector);
    _this.cards.forEach((card) => applyStyles(card, { ...cardStyle, ...options.cardStyle }))
    _this.cards = createDefaultRotation(_this.cards, options.direction = 'X');

    _this.parent = getParent(options.parentSelector)
    _this.parent = applyStyles(_this.parent, carouselStyle);
    _this.parent.style.transition = `transform ${options.speed/1000}s`;

    return _this;
}

function getCards(selector) {
    return document.querySelectorAll(selector)
}

function getParent(selector) {
    return document.querySelector(selector)
}

function assignStyleToEl(el, style) {
    console.log(el)
    for(let prop in style) {
        el.style[prop] = style[prop];
    }

    return el;
}

function applyStyles(el, styles) {
    return assignStyleToEl(el, styles)
}

function createDefaultRotation(cards, dir) {
    cards.forEach((el, i) => {
        el.style.transform = `rotate${dir}(${(i+1)*360/cards.length}deg) translateZ(350px)`
    })

    return cards;
}

export {
    setupCarousel
}