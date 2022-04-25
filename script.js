console.log('hello!')
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navlink  = document.getElementsByClassName("Navbar-links")[0];
toggleBtn.addEventListener("click", ()=>{
  navlink.classList.toggle("active")
})

console.log(toggleBtn)