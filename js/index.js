// General 
const btnUno = document.querySelector(".btn-one")
const btnDos = document.querySelector(".btn-two")
const mainContent = document.querySelector('main')
// FIRST PROOF
const slides = document.querySelectorAll(".mySlides");
const slideContainer = document.querySelector('.slideshow-container')

// SECOND PROOF
const slidesTwo = document.querySelectorAll(".price_item");
const prices = document.querySelector(".prices");
let slideIndex = 0;

// Restablecer el estado predeterminado al salir de la pantalla completa
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        console.log('Se salió de pantalla completa');
        document.body.style.overflow = 'visible'
        mainContent.style.display = 'block';
        slideContainer.style.display = 'none';
        prices.style.display = 'none';
        location.reload();
    }
});

btnUno.addEventListener("click", () => {
    slideContainer.style.display = 'block'
    toggleFullScreen();
    showSlides();
})

btnDos.addEventListener("click", () => {
    prices.style.display = 'grid'
    toggleFullScreen()
    showSlidesTwo()
});


function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        mainContent.style.display = 'none'
        document.body.style.overflow = 'hidden'
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}


function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000);
}

function showSlidesTwo() {
    for (let i = 0; i < slidesTwo.length; i++) {
        slidesTwo[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slidesTwo.length) {
        slideIndex = 1;
    }
    slidesTwo[slideIndex - 1].style.display = "block";
    // GETTING DATA
    fetch('/js/data/lista.json')
        .then(response => response.json())
        .then(data => {
            const { limpieza } = data;

            const contenedor = document.querySelector('.prices-category');
            const hojaDiv = document.createElement('div');
            const hoja = limpieza[slideIndex - 1].hoja;

            for (let j = 0; j < hoja.length; j++) {
                const item = hoja[j];
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');

                const productoParrafo = document.createElement('p');
                const precioParrafo = document.createElement('p');

                // Establece el contenido de los párrafos
                if (item.producto != '' && item.precio != '') {
                    productoParrafo.innerHTML = `<strong>Producto:</strong> ${item.producto}`;
                    const precioComoMoneda = parseFloat(item.precio).toLocaleString('es-MX', {
                        style: 'currency',
                        currency: 'MXN',
                    });

                    precioParrafo.innerHTML = `<strong>Precio:</strong> ${precioComoMoneda}`;
                }

                productoDiv.appendChild(precioParrafo);
                productoDiv.appendChild(productoParrafo);

                hojaDiv.appendChild(productoDiv);
            }
            contenedor.innerHTML = ''
            contenedor.appendChild(hojaDiv);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
    setTimeout(showSlidesTwo, 5000);
}

