const menuHburger = document.querySelector(".menu-hburger")
const navLinks = document.querySelector(".nav-links")

menuHburger.addEventListener('click',()=> {
    navLinks.classList.toggle('mobile-menu')
})
