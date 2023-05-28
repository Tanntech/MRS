// document.addEventListener("DOMContentLoaded", function() {
//     const carousels = document.querySelectorAll(".carousel");
  
//     carousels.forEach(function(carousel) {
//       const cardsContainer = carousel.querySelector(".cards");
//       const cards = carousel.querySelectorAll(".card");
//       const prevBtn = carousel.querySelector(".prev-btn");
//       const nextBtn = carousel.querySelector(".next-btn");   
//       const cardWidth = cards[0].offsetWidth;
//       const totalSlides = Math.ceil(cards.length / 3);
//       let currentSlide = 0;
  
//       prevBtn.addEventListener("click", function() {
//         if (currentSlide > 0) {
//           currentSlide--;
//           cardsContainer.style.transform = `translateX(${-currentSlide * cardWidth * 3}px)`;
//         }
//       });
  
//       nextBtn.addEventListener("click", function() {
//         if (currentSlide < totalSlides - 1) {
//           currentSlide++;
//           cardsContainer.style.transform = `translateX(${-currentSlide * cardWidth * 3}px)`;
//         }
//       });
//     });
//   });
  

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:true,
  responsive:{
    1000:{
      items:3
    }
  }
  
  
  
  });