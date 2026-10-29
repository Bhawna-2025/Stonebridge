const projectsSwiper = new Swiper(".projectsSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  centeredSlides: false,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  speed: 1200,

  // Mobile: autoplay enabled
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    // Tablet: 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      allowTouchMove: false,
      simulateTouch: false,
      autoplay: false,
    },

    // Desktop: 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      allowTouchMove: false,
      simulateTouch: false,
      autoplay: false,
    },

    // Large desktop: 1280px+
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      allowTouchMove: false,
      simulateTouch: false,
      autoplay: false,
    }
  },
});

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const hiddenMenu = document.getElementById("hidden-menu");

menuBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("translate-x-full")
})
closeBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("translate-x-full")
})

