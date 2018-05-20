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

export {
    isElementInView,
    getScrolledCardsHeight
}