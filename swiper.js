document.addEventListener('DOMContentLoaded', function () {
  const gallerySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    spaceBetween: window.innerWidth * 0.01, // 设置图片间距为屏幕宽度的 1%
  });
});

