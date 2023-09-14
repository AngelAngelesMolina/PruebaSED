const slides = document.querySelectorAll(".mySlides");
const btnUno = document.querySelector(".btn-one")
const btnDos = document.querySelector(".btn-two")
const prueba2 = document.querySelector(".prices")
const mainContent = document.querySelector('main')
const slideContainer = document.querySelector('.slideshow-container')
// const mainContent = document.querySelector('.main-section')
let slideIndex = 0;
// console.log(mainContent.classList);

// document.addEventListener("DOMContentLoaded", function () {

// });
// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Escape') {
//         // Tu código aquí: esta función se ejecutará cuando se presione la tecla "Esc".
//         console.log('La tecla "Esc" fue presionada.');
//         mainContent.classList.remove('hide-element')
//         mainContent.classList.add('show-element')

//     }
// });
btnUno.addEventListener("click", () => {
    slideContainer.style.display = 'block'
    toggleFullScreen();
    showSlides();
    console.log(slideIndex);
})

btnDos.addEventListener("click", () => {
    // window.alert("Diste click en el boton 2")
    toggleFullScreen()
    showContent()
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // document.requestFullscreen();
        document.documentElement.requestFullscreen();
        mainContent.classList.add('hide-element')
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function showContent() {
    prueba2.style.display = 'block'

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
