loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 1000)

function blurring() {
    load++
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1
    bg.style.filter = "blur(10px)"
}
