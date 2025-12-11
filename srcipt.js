document.addEventListener('DOMContentLoaded', () => {

  // Navbar shrink functionality
  const mainNav = document.getElementById('mainNav');
  if (mainNav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        mainNav.classList.add('nav-shrink');
      } else {
        mainNav.classList.remove('nav-shrink');
      }
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Check if the link is just a hash, not a link to another page with a hash
      if (this.pathname === window.location.pathname) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // NOTE on Contact Form:
  // The HTML is now set up to use Formspree. 
  // 1. Go to formspree.io and create a new form.
  // 2. Replace 'YOUR_FORM_ID' in the index.html form's action attribute
  //    with the ID Formspree gives you.
  // 3. The form will work automatically without any extra JavaScript!
});