const projectsSwiper = new Swiper(".projectsSwiper", {
  slidesPerView: "1.1",
  spaceBetween: 20,
  centeredSlides: false,
  slidesOffsetBefore: 20, 
  slidesOffsetAfter: 20,  
  speed: 1200,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  // Mobile: enable carousel
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
      allowTouchMove: false,
      simulateTouch: false,
    },
  },
});

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const hiddenMenu = document.getElementById("hidden-menu");

menuBtn.addEventListener("click",()=>{
    hiddenMenu.classList.toggle("translate-x-full")
})
closeBtn.addEventListener("click",()=>{
    hiddenMenu.classList.toggle("translate-x-full")
})

