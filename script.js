// Get all the image elements with the class "images"
const images = document.querySelectorAll('.skills .images img');

// Add event listeners to each image
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    // Increase the image size by 10% with a smooth transition
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseout', () => {
    // Reset the image size back to normal with a smooth transition
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.3s ease';
  });
});

// Smooth scrolling for navbar links
const navbarLinks = document.querySelectorAll('header nav ul li a');

navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});