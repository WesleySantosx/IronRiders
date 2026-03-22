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

const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.getElementById("sideMenu");

menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
});

//destaques

const motos = document.querySelector('.motos');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', () => {
    motos.scrollBy({ left: 900, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
    motos.scrollBy({ left: -900, behavior: 'smooth' });
});
