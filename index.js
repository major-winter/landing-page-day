const hamburger = document.querySelector('.navbar-icon')
const navbarItems = document.querySelector('.navbar-items')

hamburger.addEventListener('click', () => {
    navbarItems.classList.toggle('show')
    hamburger.classList.toggle('navbar-icon-move')
})