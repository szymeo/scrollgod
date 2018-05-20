(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var ScrollGod = (function (exports) {
    'use strict';

    function getCards(selector) {
        return document.querySelectorAll(selector)
    }

    function getParent(selector) {
        return document.querySelector(selector)
    }

    function createDefaultRotation(cards) {
        cards.forEach((el, i) => {
            el.style.transform = `rotateX(${(i+1)*360/cards.length}deg) translateZ(350px)`;
        });
    }

    function rotateX(el, deg) {
        el.style["-webkit-transform"] = `rotateX(${deg}deg)`;
        el.style["-moz-transform"] = `rotateX(${deg}deg)`;
        el.style["-o-transform"] = `rotateX(${deg}deg)`;
        el.style["transform"] = `rotateX(${deg}deg) translateX(-50%)`;
    }

    class Scroll {
        constructor(options) {
            console.log(options);
            // this.options = Object.assign({}, defaultOptions, options);
            this.cards = getCards(options.elemSelector);
            this.parent = getParent(options.parentSelector);

            window.onscroll = (e) => {
                this.scrollY(e);
            };
        }

        scrollY(e) {
            console.log('eeee');
        }

        scrollX() { //todo
        
        }
    }

    function isElementInView(el, fullyInView) {
        let pageTop = window.scrollY;
        let pageBottom = pageTop + window.innerHeight;
        let elementTop = el.offsetTop;
        let elementBottom = elementTop + el.clientHeight;

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }

    function getScrolledCardsHeight(cards, index) {
        let out = 0;
        for(var i = 0; i < index; i++) {
            out += cards[i].clientHeight;
        }
        return out;
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

    class Square {
        constructor(options) {
            
            this.cards = getCards(options.elemSelector);
            this.parent = getParent(options.parentSelector);
            this.currdeg = 0;
            this.scrollAvailable = true;

            this.parent.style.transition = `transform ${options.speed/1000}s`;

            this.cards.forEach((card) => applyStyles(card, { ...cardStyle, ...options.cardStyle }));
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

    exports.Scroll = Scroll;
    exports.Square = Square;
    exports.getCards = getCards;
    exports.getParent = getParent;
    exports.createDefaultRotation = createDefaultRotation;
    exports.rotateX = rotateX;
    exports.isElementInView = isElementInView;
    exports.getScrolledCardsHeight = getScrolledCardsHeight;
    exports.applyStyles = applyStyles;

    return exports;

}({}));
