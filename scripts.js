const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
});
const starSwiper = new Swiper(".swiper-container-star", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
});
const specialSwiper = new Swiper(".swiper-container-special", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 100,
  },
});
const filmSwiper = new Swiper(".swiper-container-film", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: -1,
});
const commSwiper = new Swiper(".swiper-container-community", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
});
$(document).ready(function () {
  console.log("ready!");
  $("#menu").hide();
});
function menu() {
  $("section").toggle();
  $("#menu").slideToggle();
}
function toggleMenu(id) {
  $("#menu" + id).slideToggle();
}
