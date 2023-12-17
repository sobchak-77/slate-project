// --- BURGER MENU ---

const page = document.getElementById('page');
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const enterBtn = document.getElementById('enter');
const menuLink = document.querySelector('.menu__link');

burger.addEventListener('click', function() {
  menu.classList.toggle('menu--active');
  burger.classList.toggle('burger--active');
  enterBtn.classList.toggle('header__button--active');
  page.classList.toggle('stop-scroll');
});

menuLink.addEventListener('click', function() {
  if (page.classList.contains('stop-scroll')) {
    page.classList.remove('stop-scroll');
  };
});

// --- MODAL WINDOW ---

const callModalBtn = document.getElementById('enter');
const modalWindowForm = document.getElementById('modal-window-form');

// открытие окна
callModalBtn.addEventListener('click', function() {
  modalWindowForm.classList.add('modal-parent--open');
});

// закрытие окна
modalWindowForm.querySelector('.modal').addEventListener('click', function(event) {
  event._isClick = true;
});
modalWindowForm.addEventListener('click', function(event) {
  if (event._isClick === true) {
    return;
  };
  modalWindowForm.classList.remove('modal-parent--open');
});

// закрытие окна при клике на 'Esc'
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modalWindowForm.classList.remove('modal-parent--open');
  };
});