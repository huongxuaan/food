let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchFomr.classList.remove('active')
    cartItem.classList.remove('active')
}
let searchFomr = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchFomr.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}
let cartItem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchFomr.classList.remove('active')
}
window.scroll = () =>{
    navbar.classList.remove('active')
    searchFomr.classList.remove('active')
    cartItem.classList.remove('active')
}