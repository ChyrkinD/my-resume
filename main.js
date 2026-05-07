import './src/styles/style.css';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.burger-btn'); // Ваша кнопка бургер
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open');

    // Блокуємо скрол основної сторінки, коли меню відкрите
    const scrollLockMethod = !isMenuOpen ? 'add' : 'remove';
    document.body.classList[scrollLockMethod]('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закриваємо меню при кліку на посилання (важливо для односторінкових сайтів)
  const menuLinks = document.querySelectorAll('.mobile-nav-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
})();
