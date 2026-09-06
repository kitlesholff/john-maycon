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

// A marca recolhe após a primeira tela; os atalhos permanecem visíveis.
const navigation = [...document.querySelectorAll('.header nav a')];
const sections = navigation.map(link => document.querySelector(link.getAttribute('href')));
let framePending = false;
function updateNavigation() {
  if (header) {
    const compact = header.classList.contains('is-compact');
    header.classList.toggle('is-compact', compact ? window.scrollY > 40 : window.scrollY > 180);
  }
  const marker = (header?.offsetHeight || 0) + 32;
  let active = -1;
  sections.forEach((section, index) => {
    if (section && section.getBoundingClientRect().top <= marker) active = index;
  });
  navigation.forEach((link, index) => {
    if (index === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  framePending = false;
}
function scheduleNavigation() {
  if (!framePending) {
    framePending = true;
    requestAnimationFrame(updateNavigation);
  }
}
window.addEventListener('scroll', scheduleNavigation, { passive: true });
window.addEventListener('resize', scheduleNavigation);
updateNavigation();
