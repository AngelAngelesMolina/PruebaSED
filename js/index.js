const slides = document.querySelectorAll(".mySlides");
const btnUno = document.querySelector(".btn-one")
const btnDos = document.querySelector(".btn-two")
const prueba2 = document.querySelector(".second-part")
const mainContent = document.querySelector('main')
// const mainContent = document.querySelector('.main-section')
let slideIndex = 0;
console.log(mainContent.classList);

document.addEventListener("DOMContentLoaded", function () {

});
btnUno.addEventListener("click", () => {
    toggleFullScreen();
    showSlides(); // Iniciar el slideshow
    console.log(slideIndex);
})

btnDos.addEventListener("click", () => {
    window.alert("Diste click en el boton 2")
    showContent()
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // document.requestFullscreen();
        document.documentElement.requestFullscreen();
        mainContent.classList.add('hide-element')
    } else {
        // document.exitFullscreen()
        if (document.exitFullscreen) {
            document.exitFullscreen();
            mainContent.classList.remove('hide-element')
            mainContent.classList.add('show-element')
        }
        // mainContent.style.display = 'block'
    }
}

function showContent() {
    prueba2.style.display = "block"
}

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    console.log('Dentro show' + slideIndex);
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Cambiar imagen cada 5 segundos
}
