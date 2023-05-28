// Parallax effect on scroll
window.addEventListener("scroll", function () {
    var parallax = document.querySelector(".parallax");
    var scrollPosition = window.pageYOffset;
  
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + "px";
  });
  
  // 3D animation on hover
  var movieItems = document.querySelectorAll(".movie-item");
  
  movieItems.forEach(function (item) {
    item.addEventListener("mousemove", function (e) {
      var movieImage = item.querySelector("img");
      var movieInfo = item.querySelector(".movie-info");
  
      var xAxis = (window.innerWidth / 2 - e.pageX) / 10;
      var yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  
      movieImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      movieInfo.style.transform = "translateZ(50px)";
    });
  
    item.addEventListener("mouseleave", function () {
      var movieImage = item.querySelector("img");
      var movieInfo = item.querySelector(".movie-info");
  
      movieImage.style.transform = "rotateY(0) rotateX(0)";
      movieInfo.style.transform = "translateZ(0)";
    });
  });

  
  
  