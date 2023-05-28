// JS for Search
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query !== '') {
    window.location.href = `/search?q=${query}`;
  }
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query !== '') {
      window.location.href = `/search?q=${query}`;
    }
  }
});





// <!-- card slider js script  card   card card card card card card-->

//   var swiper = new Swiper("#swiper1", {
// slidesPerView: 1,
// spaceBetween: 10,
// pagination: {
// el: ".swiper-pagination",
// clickable: true,
// },
// navigation: {
// nextEl: ".swiper-button-next",
// prevEl: ".swiper-button-prev",
// },
// breakpoints: {
// 640: {
// slidesPerView: 2,
// spaceBetween: 20,
// },
// 768: {
// slidesPerView: 4,
// spaceBetween: 40,
// },
// 1024: {
// slidesPerView: 3,
// spaceBetween: 20,
// },
// },
// });


