const burger = document.querySelector('.greetings__burger');
const burgerMenu = document.querySelector('.greetings__burger_menu');

let burgerActive = false;

burger.addEventListener('click', () => {
  if (!burgerActive) {
    burger.classList.add('burger_active');
    burgerMenu.classList.add('burger_menu_active');
    document.body.classList.add('lock');
    burgerActive = true;
  } else {
    burger.classList.remove('burger_active');
    burgerMenu.classList.remove('burger_menu_active');
    burgerActive = false;
    document.body.classList.remove('lock');
  }
});