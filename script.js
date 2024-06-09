const hamburgur= document.querySelector(".hamburgur")
const navlist = document.querySelector('.navlist')
hamburgur.addEventListener("click",()=>{
    navlist.classList.toggle('navlist-active')
})