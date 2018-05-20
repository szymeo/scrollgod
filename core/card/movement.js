function rotateX(el, deg) {
    el.style["-webkit-transform"] = `rotateX(${deg}deg)`
    el.style["-moz-transform"] = `rotateX(${deg}deg)`
    el.style["-o-transform"] = `rotateX(${deg}deg)`
    el.style["transform"] = `rotateX(${deg}deg) translateX(-50%)`
}

export {
    rotateX
}