(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var ScrollGod = (function (exports) {
    'use strict';

    let cardStyle = {
        'display': 'block',
        'position': 'absolute',
        'background-color': '#1565c0',
        'width': '550px',
        'height': '200px',
        'text-align': 'center',
        'color': '#FFF',
        'opacity': '0.95',
        'border-radius': '2px'
    };

    let carouselStyle = {
        'height': '100%',
        'width': '100%',
        'position': 'absolute',
        'transform-style': 'preserve-3d',
        'transform': 'translateX(-50%)'
    };

    function setupCarousel(options) {
        let _this = {};
        _this.cards = getCards(options.elemSelector);
        _this.cards.forEach((card) => applyStyles(card, { ...cardStyle, ...options.cardStyle }));
        _this.cards = createDefaultRotation(_this.cards, options.direction = 'X');

        _this.parent = getParent(options.parentSelector);
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
        console.log(el);
        for(let prop in style) {
            el.style[prop] = style[prop];
        }

        return el;
    }

    function applyStyles(el, styles) {
        if(el instanceof Array) {
            console.log('array');
            el.forEach((element) => {
                element = assignStyleToEl(element, styles);
            });

            return el
        } else {
            console.log('NOTarray');
            return assignStyleToEl(el, styles)
        }
    }

    function createDefaultRotation(cards, dir) {
        cards.forEach((el, i) => {
            el.style.transform = `rotate${dir}(${(i+1)*360/cards.length}deg) translateZ(350px)`;
        });

        return cards;
    }

    function wheelHandler(el, handler) {
        el.addEventListener("wheel", handler);
    }

    class Carousel {
        constructor(options) {
            this.options = options;
            this.currdeg = 0;
            const setup = setupCarousel(options);
            console.log(setup);
            for(var k in setup) {
                console.log(k);
                this[k] = setup[k];
            }

            wheelHandler(window, (e) => {
                this.rotateX(e, this.cards);
            });
        }

        rotateX(e, cards) {
            this.currdeg = e.deltaY < 0 ?
                this.currdeg - 360/cards.length : 
                this.currdeg + 360/cards.length;

            this.parent.style["-webkit-transform"] = `rotateX(${this.currdeg}deg)`;
            this.parent.style["-moz-transform"] = `rotateX(${this.currdeg}deg)`;
            this.parent.style["-o-transform"] = `rotateX(${this.currdeg}deg)`;
            this.parent.style["transform"] = `rotateX(${this.currdeg}deg) translateX(-50%)`;
        }

        rotateY(foo) { // !todo
            return [ ...foo ]
        }

        addCard() {
            this.cards.push({
                ok: true // !todo
            });
        }
    }

    exports.Carousel = Carousel;
    exports.setupCarousel = setupCarousel;
    exports.wheelHandler = wheelHandler;
    exports.cardStyle = cardStyle;
    exports.carouselStyle = carouselStyle;

    return exports;

}({}));
