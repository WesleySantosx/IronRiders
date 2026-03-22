const slides = document.querySelectorAll(".slide")

let index = 0

function showSlide(){

slides.forEach(slide =>{
slide.classList.remove("active")
})

slides[index].classList.add("active")

}

setInterval(()=>{

index++

if(index >= slides.length){
index = 0
}

showSlide()

},3000)

//menu lateral
const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.getElementById("sideMenu");

menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    if (sideMenu.classList.contains("active")) {
        sideMenu.classList.remove("active");
    }
    else  if ( menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
    }
});

//limite da nav bar

const navbar = document.querySelector(".navbar");
const limite = document.getElementById("secao-limite");

window.addEventListener("scroll", () => {
    const posicao = limite.getBoundingClientRect().top;

    if (posicao <= 0) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
});