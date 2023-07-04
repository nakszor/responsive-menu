const showMenu = document.getElementById("show-menu")
const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close-menu")

showMenu.addEventListener("click", () => {
    menu.style.display = 'block'
    showMenu.style.display = 'none'
    closeMenu.style.display = 'block'
})
closeMenu.addEventListener("click", () => {
    menu.style.display = 'none'
    closeMenu.style.display = 'none'
    showMenu.style.display = 'flex'
})