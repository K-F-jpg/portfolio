const displayDistance = 100
const nDisplay = 1

const images = document.getElementsByClassName("image")

let globalIndex = 0
let lastMousePosition = {x: 0, y: 0}

function activatePicture(img, x, y) {
    img.dataset.status = "active"
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    img.style.zIndex = globalIndex
    lastMousePosition = {x: x, y: y}
}

function mouseDistance(x, y) {
    return Math.hypot(x - lastMousePosition.x, y - lastMousePosition.y)
}

window.onmousemove = e => {
    if (mouseDistance(e.clientX, e.clientY) > displayDistance) {
        let activePicture = images[globalIndex % images.length]
        let inactivePicture = images[(globalIndex - nDisplay) % images.length]

        activatePicture(activePicture, e.clientX, e.clientY)
        if (inactivePicture){inactivePicture.dataset.status = "inactive"}

        globalIndex++
    }
}