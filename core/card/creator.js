function getCards(selector) {
    return document.querySelectorAll(selector)
}

function getParent(selector) {
    return document.querySelector(selector)
}

function createDefaultRotation(cards) {
    cards.forEach((el, i) => {
        el.style.transform = `rotateX(${(i+1)*360/cards.length}deg) translateZ(350px)`
    })
}

export {
    getCards,
    getParent,
    createDefaultRotation
}
