let currentLang = 'es';
const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[currentLang][key] || key;
  });
}

btnEs.addEventListener('click', () => { currentLang = 'es'; applyTranslations(); });
btnEn.addEventListener('click', () => { currentLang = 'en'; applyTranslations(); });
window.addEventListener('DOMContentLoaded', applyTranslations);
