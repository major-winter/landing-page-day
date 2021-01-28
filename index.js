const mobileIcon = document.querySelector('.navbar-icon')
const hamburger = document.querySelector('.navbar-icon .hamburger')
const times = document.querySelector('.navbar-icon .times')
const navbarItems = document.querySelector('.navbar-items')
const btn = document.querySelector('.btn')

const navBar = document.querySelector('.nav')

btn.addEventListener('click', (event) => {
    event.preventDefault()
})

mobileIcon.addEventListener('click', () => {
    navbarItems.classList.toggle('navbar-show')
    mobileIcon.classList.toggle('navbar-icon-move')
    hamburger.classList.toggle('hide')
    times.classList.toggle('hide')
})

let scrollTop = 0

document.addEventListener('scroll', () => {

    if (window.scrollY > navBar.offsetHeight) {
        navBar.classList.add('p-fixed')
        navBar.scroll({
            behavior: "smooth"
        })
    }

    if (window.scrollY < navBar.offsetHeight) {
        navBar.classList.remove('p-fixed')
    }
})