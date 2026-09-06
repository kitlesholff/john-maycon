// A página e o botão de contato funcionam mesmo com JavaScript desativado.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// Mantém os títulos visíveis ao navegar, inclusive com zoom de texto.
const header = document.querySelector('.header');
if (header && 'ResizeObserver' in window) {
  new ResizeObserver(() => {
    document.documentElement.style.setProperty('--header-offset', `${header.offsetHeight + 16}px`);
  }).observe(header);
}
