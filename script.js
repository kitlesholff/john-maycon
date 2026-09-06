// A página e o botão de contato funcionam mesmo com JavaScript desativado.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
