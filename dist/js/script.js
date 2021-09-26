
// Menu
let btn = document.querySelector("#btn")
let btnMenu = document.querySelector("#btn-menu")
let sidebar = document.querySelector(".sidebar")
let searchBtn = document.querySelector(".bx-search")

btn.onclick = function() {
    sidebar.classList.toggle("active")
}
btnMenu.onclick = function() {
    sidebar.classList.toggle("active")
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active")
}