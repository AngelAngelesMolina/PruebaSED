const slides = document.querySelectorAll(".mySlides");
const slidesTwo = document.querySelectorAll(".price_item");
const prices = document.querySelector(".prices");
const btnUno = document.querySelector(".btn-one")
const btnDos = document.querySelector(".btn-two")
const prueba2 = document.querySelector(".prices")
const gallery = document.querySelector(".gallery")
const mainContent = document.querySelector('main')
const slideContainer = document.querySelector('.slideshow-container')
// const mainContent = document.querySelector('.main-section')
let slideIndex = 0;
// console.log(mainContent.classList);

// document.addEventListener("DOMContentLoaded", function () {
// console.log('Cargando contenido');
// });
// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Escape') {
//         // Tu código aquí: esta función se ejecutará cuando se presione la tecla "Esc".
//         console.log('La tecla "Esc" fue presionada.');
//         mainContent.classList.remove('hide-element')
//         mainContent.classList.add('show-element')

//     }
// });

// Restablecer el estado predeterminado al salir de la pantalla completa
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        console.log('Se salió de pantalla completa');
        document.body.style.overflow = 'visible'
        mainContent.style.display = 'block';
        slideContainer.style.display = 'none';
        prueba2.style.display = 'none';
        location.reload();
    }
});
btnUno.addEventListener("click", () => {
    // console.log('Click en btnOne');
    console.log("Diste click en el boton 1")
    slideContainer.style.display = 'block'
    toggleFullScreen();
    showSlides();
})

btnDos.addEventListener("click", () => {
    console.log("Diste click en el boton 2")
    prices.style.display = 'grid'
    toggleFullScreen()
    showSlidesTwo()
    // showContent(false)
});


function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // document.requestFullscreen();
        document.documentElement.requestFullscreen();
        mainContent.style.display = 'none'
        document.body.style.overflow = 'hidden'
        // mainContent.classList.add('hide-element')
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function showContent() {
    prueba2.style.display = 'grid'

}

function showSlides() {
// function showSlides(isFirstPart) {
    // var currentContainer; 
    // if(isFirstPart){ currentContainer = 'slides' } else {currentContainer = 'galery'}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    // console.log('Dentro show' + slideIndex);
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    // clearTimeout(timeoutID);

    // Establecer el nuevo setTimeout y almacenar su ID
    setTimeout(showSlides, 1000); // Cambiar imagen cada 5 segundos
}
function showSlidesTwo() {
    // function showSlides(isFirstPart) {
        // var currentContainer; 
        // if(isFirstPart){ currentContainer = 'slides' } else {currentContainer = 'galery'}
        for (let i = 0; i < slidesTwo.length; i++) {
            slidesTwo[i].style.display = "none";
        }
        slideIndex++;
        // console.log('Dentro show' + slideIndex);
        if (slideIndex > slidesTwo.length) {
            slideIndex = 1;
        }
        slidesTwo[slideIndex - 1].style.display = "block";
        // clearTimeout(timeoutID);
    
        // Establecer el nuevo setTimeout y almacenar su ID
        setTimeout(showSlidesTwo, 1000); // Cambiar imagen cada 5 segundos
    }
// showContent(true)