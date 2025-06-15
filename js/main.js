// -------------------
// --- BURGER MENU ---
// -------------------

const page = document.getElementById('page');
const enterBtn = document.getElementById('enter');

const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  burger.classList.toggle('burger--active');
  enterBtn.classList.toggle('header__button--active');
  page.classList.toggle('stop-scroll');
});

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
  menu.classList.remove('menu--active');
  burger.classList.remove('burger--active');
  enterBtn.classList.remove('header__button--active');
  page.classList.remove('stop-scroll');
});

//* click on 'Escape' button
window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    menu.classList.remove('menu--active');
    burger.classList.remove('burger--active');
    enterBtn.classList.remove('header__button--active');
    page.classList.remove('stop-scroll');
  };
});