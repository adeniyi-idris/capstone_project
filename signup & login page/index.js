
const nav = document.getElementsByTagName("nav")
const open = document.querySelector(".open")
const close = document.querySelector(".close")

const sidemenu = document.querySelector("#side-menu")


function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}





open.addEventListener("click", openmenu)
close.addEventListener("click", closemenu)