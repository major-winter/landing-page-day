const mobileIcon = document.querySelector('.navbar-icon')
const hamburger = document.querySelector('.navbar-icon .hamburger')
const times = document.querySelector('.navbar-icon .times')
const navbarItems = document.querySelector('.navbar-items')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) => {
    event.preventDefault()
})

mobileIcon.addEventListener('click', () => {
    navbarItems.classList.toggle('navbar-show')
    mobileIcon.classList.toggle('navbar-icon-move')
    hamburger.classList.toggle('hide')
    times.classList.toggle('hide')
})