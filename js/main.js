let btn = document.querySelector(".toggle-btn");
let headerNav = document.querySelector("header");
let headerNavItem = document.querySelector(".home-nav");

btn.addEventListener("click", ()=>{
    headerNav.classList.toggle("show-nav");
    }
)

headerNavItem.addEventListener("click", ()=>{
    headerNav.classList.remove("show-nav");
    console.log("link is clicked")
})

