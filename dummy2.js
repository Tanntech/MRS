// Add smooth scrolling behavior to the back to top link
document.querySelector('.back a').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('html, body').scrollIntoView({
      behavior: 'smooth'
    });
  });
  