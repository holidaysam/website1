toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

// toggle nav bar
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

// show the modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

// hide the modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

//hide the modal on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})
