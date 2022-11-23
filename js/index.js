//Carrousel Principal
const carrouselPrincipal = document.getElementById('carrouselPrincipal');
const slider = document.querySelector('.principal');

const flechaNext = document.getElementById('nextBtn');
const flechaBefore = document.getElementById('beforeBtn');

flechaBefore.addEventListener("click", () => {
  const slideWidth = slider.clientWidth;
  carrouselPrincipal.scrollLeft += slideWidth;
});

flechaNext.addEventListener("click", () => {
  const slideWidth = slider.clientWidth;
  carrouselPrincipal.scrollLeft -= slideWidth;
});


//Metodo de Pago
const carrouselCointener = document.getElementById('carrousel');
const metP = document.querySelector('.metodo');

const flechaIzquierda = document.getElementById('flechaIzq');
const flechaDerecha = document.getElementById('flechaDer');

flechaDerecha.addEventListener("click", () => {
  const slideWidth = metP.clientWidth;
  carrouselCointener.scrollLeft += slideWidth;
});

flechaIzquierda.addEventListener("click", () => {
  const slideWidth = metP.clientWidth;
  carrouselCointener.scrollLeft -= slideWidth;
});

//Carrousel Categorias
const carrouselCategorias = document.getElementById('categoriasAll');
const categoria = document.querySelector('.categoria');

const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

flechaderecha.addEventListener("click", () => {
  const slideWidth = categoria.clientWidth;
  carrouselCategorias.scrollLeft += slideWidth;
});

flechaizquierda.addEventListener("click", () => {
  const slideWidth = categoria.clientWidth;
  carrouselCategorias.scrollLeft -= slideWidth;
});
