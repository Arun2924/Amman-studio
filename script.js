// Scroll Reveal Animation
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Select the button and the link container directly from your HTML
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('.nav-links');

// Listen for a click on the hamburger button
hamburgerBtn.addEventListener('click', () => {
  
  // Toggle the 'active' class to animate the bars into an X
  hamburgerBtn.classList.toggle('active');
  
  // Toggle the 'open' class to slide the menu overlay down
  navLinks.classList.toggle('open');
  
});

// Optional: Close the menu automatically when a link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    navLinks.classList.remove('open');
  });
});