const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  (function () {
    const monthlyBtn = document.querySelector('.btn--monthly');
    const yearlyBtn = document.querySelector('.btn--yearly');
    const monthlyList = document.querySelector('.monthly--list');
    const yearlyList = document.querySelector('.yearly--list');
    yearlyBtn.addEventListener('click', () => {
      monthlyList.classList.remove('list--active');
      yearlyList.classList.add('list--active');
      console.log(1);
    });
    monthlyBtn.addEventListener('click', () => {
      monthlyList.classList.add('list--active');
      yearlyList.classList.remove('list--active');
    });
  }());