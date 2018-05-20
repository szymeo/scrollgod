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

    class Square {
        constructor(options) {
            
            this.cards = getCards(options.elemSelector);
            this.parent = getParent(options.parentSelector);
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

            this.parent.style["-webkit-transform"] = "rotateX("+this.currdeg+"deg)";
            this.parent.style["-moz-transform"] = "rotateX("+this.currdeg+"deg)";
            this.parent.style["-o-transform"] = "rotateX("+this.currdeg+"deg)";
            this.parent.style["transform"] = "rotateX("+this.currdeg+"deg)";
            
            console.log(this.parent.style);
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
    exports.isElementInView = isElementInView;
    exports.getScrolledCardsHeight = getScrolledCardsHeight;

    return exports;

}({}));
