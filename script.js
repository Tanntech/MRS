// active navigation links

const clone2= window.location.pathname;
const navlinks =document.querySelectorAll('.nav-items a').forEach(link => {
      if(link.href.includes('${clone2}')){
        link.classList.add('active');

      }
});

// owl carousel Card sliders JS

$('#a').owlCarousel({
  loop:false,
  margin:5,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


$('#b').owlCarousel({
  loop:false,
  margin:5,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('#c').owlCarousel({
  loop:false,
  margin:5,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('#d').owlCarousel({
  loop:false,
  margin:5,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('#e').owlCarousel({
  loop:false,
  margin:5,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('#f').owlCarousel({
  loop:false,
  margin:5,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})




// const searchInput = document.getElementById('movie_name');
// const searchButton = document.getElementById('search-button');

// searchButton.addEventListener('click', () => {
//   const query = searchInput.value.trim();
//   if (query !== '') {
//     window.location.href = `/search?q=${query}`;
//   }
// });
 
// searchInput.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     const query = searchInput.value.trim();
//     if (query !== '') {
//       window.location.href = `/search?q=${query}`;
//     }
//   }
// });


// floating nav
// $(window).scroll(function() {
//   if ($(window).scrollTop() > 10) {
//       $('nav').addClass('floatingNav');
//   } else {
//       $('nav').removeClass('floatingNav');
//   }
// });


// // Add smooth scrolling behavior to the back to top link
// document.querySelector('.back a').addEventListener('click', function (event) {
//   event.preventDefault();
//   document.querySelector('html, body').scrollIntoView({
//     behavior: 'smooth'
//   });
// });









// fetching movies

// const api_key = ca2767587004ccf5ee2caa2ea5570b7e ;
