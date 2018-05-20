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
        out += cards[i].clientHeight
    }
    return out;
}

function assignStyleToEl(el, style) {
    console.log(el)
    for(let prop in style) {
        el.style[prop] = style[prop];
    }

    return el;
}

function applyStyles(el, styles) {
    if(el instanceof Array) {
        console.log('array')
        el.forEach((element) => {
            element = assignStyleToEl(element, styles)
        })

        return el
    } else {
        console.log('NOTarray')
        return assignStyleToEl(el, styles)
    }
}

export {
    isElementInView,
    getScrolledCardsHeight,
    applyStyles
}