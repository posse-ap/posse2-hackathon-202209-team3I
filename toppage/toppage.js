const initSwiper = () => {
  const mySwiper = new Swiper('.card05 .swiper', {
    speed: 8000,
    autoplay: {
      delay: 0,
    },
  });
};
window.addEventListener('load', function(){
  initSwiper(); // ページ読み込み後に初期化
});
const mySwiper = new Swiper('.card05 .swiper', {
  
  freeMode: {
    enabled: true,
    momentum: false,
  },
  
  on: {
    touchEnd: (swiper) => {
      swiper.slideTo(swiper.activeIndex + 1);
    }
  }
});