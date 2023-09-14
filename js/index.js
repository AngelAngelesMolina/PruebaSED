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
const products =
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

function loadData() {
    fetch('/js/data/lista.json')
        .then(response => response.json())
        .then(data => {
            // Ahora puedes acceder a los datos del archivo JSON
            console.log(data.limpieza);
            return data.limpieza
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
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

    setTimeout(showSlides, 1000); // Cambiar imagen cada 5 segundos
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
    fetch('/js/data/lista.json')
        .then(response => response.json())
        .then(data => {
            const limpieza = data.limpieza;

            // Obtener el elemento contenedor
            const contenedor = document.getElementById('contenedor');
            // contenedor.style.margin = '30px'

            const hojaDiv = document.createElement('div');
            hojaDiv.classList.add('hoja');
            const hoja = limpieza[slideIndex - 1].hoja;

            for (let j = 0; j < hoja.length; j++) {
                const item = hoja[j];
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');

                // Crea dos elementos de párrafo
                const productoParrafo = document.createElement('p');
                const precioParrafo = document.createElement('p');

                // Establece el contenido de los párrafos
                if (item.producto != '' && item.precio != '') {
                    productoParrafo.innerHTML = `<strong>Producto:</strong> ${item.producto}`;
                    precioParrafo.innerHTML = `<strong>Precio:</strong> ${item.precio}`;
                }

                // Agrega los párrafos al div productoDiv
                productoDiv.appendChild(productoParrafo);
                productoDiv.appendChild(precioParrafo);

                hojaDiv.appendChild(productoDiv);
            }
            contenedor.innerHTML = ''
            contenedor.appendChild(hojaDiv);

            // Recorrer el arreglo "limpieza" y crear elementos HTML para cada objeto
            //TODO
            // limpieza.forEach(hoja => {
            //     const hojaDiv = document.createElement('div');
            //     hojaDiv.classList.add('hoja');

            //     hoja.hoja.forEach(item => {
            //         const productoDiv = document.createElement('div');
            //         productoDiv.classList.add('producto');
            //         productoDiv.innerHTML = `<strong>Producto:</strong> ${item.producto}, <strong>Precio:</strong> ${item.precio}`;
            //         hojaDiv.appendChild(productoDiv);
            //     });

            //     contenedor.appendChild(hojaDiv);
            // });
            // for (let i = 0; i < limpieza.length; i++) {
            //     const hojaDiv = document.createElement('div');
            //     hojaDiv.classList.add('hoja');
            //     const hoja = limpieza[i].hoja;

            //     for (let j = 0; j < hoja.length; j++) {
            //         const item = hoja[j];
            //         const productoDiv = document.createElement('div');
            //         productoDiv.classList.add('producto');
            //         productoDiv.innerHTML = `<strong>Producto:</strong> ${item.producto}, <strong>Precio:</strong> ${item.precio}`;
            //         hojaDiv.appendChild(productoDiv);
            //     }

            //     contenedor.appendChild(hojaDiv);

            // }
            // return data.limpieza
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
    setTimeout(showSlidesTwo, 1000); // Cambiar imagen cada 5 segundos
}