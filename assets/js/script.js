document.addEventListener('DOMContentLoaded', () => {
  // mobile menu
  const btnBurger = document.querySelector('.btn-burger');
  const menu = document.querySelector('#menu');
  const navLinks = document.querySelectorAll('#menu a');
  const header = document.querySelector('#header');
  const body = document.querySelector('body');
  const sections = document.querySelectorAll('section');

  btnBurger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
  });

  navLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (menu.classList.contains('active')) {
        btnBurger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('overflow-hidden');
      }

      const section = document.querySelector(this.getAttribute('href'));
      const offset = -70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setTimeout(highlightLink, 400);
    });
  });

  function highlightLink() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let selectedLink = null;

    sections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTopRelativeToDocument = currentScrollTop + sectionRect.top;
      const sectionBottomRelativeToDocument = sectionTopRelativeToDocument + sectionRect.height;
      const middleScreen = currentScrollTop + window.innerHeight / 2;
      const hrefLink = section.getAttribute('id');

      if (sectionTopRelativeToDocument < middleScreen && sectionBottomRelativeToDocument > middleScreen) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${hrefLink}`) {
            selectedLink = link;
          }
        });
      }
    });

    if (selectedLink) {
      navLinks.forEach((link) => link.classList.remove('text-danger'));
      selectedLink.classList.add('text-danger');
    } else {
      navLinks.forEach((link) => link.classList.remove('text-danger'));
    }
  }

  window.addEventListener('scroll', highlightLink);

  highlightLink();

  // header scroll
  function updateMenuBackground() {
    const scrollTop = window.scrollY;

    if (scrollTop > 2) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }

  window.addEventListener('scroll', updateMenuBackground);

  // post email
  const inputSend = document.querySelector('.input-send');
  const btnSend = document.querySelector('.btn-send');
  const formSend = document.querySelector('.form-send');
  const successSend = document.querySelector('.success-send');
  const btnSendMore = document.querySelector('.btn-send-more');

  btnSend.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputSend.value !== '') {
      formSend.classList.add('hidden');
      successSend.classList.remove('hidden');
      inputSend.value = '';
    }
  });

  btnSendMore.addEventListener('click', () => {
    formSend.classList.remove('hidden');
    successSend.classList.add('hidden');
  });
});
