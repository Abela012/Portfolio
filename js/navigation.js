document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const body = document.body;
  
  // Update header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
  });
  
  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', () => {
    body.classList.toggle('mobile-menu-open');
  });
  
  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      body.classList.remove('mobile-menu-open');
    });
  });
  
  // Smooth scroll to section when nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Smooth scroll to target section
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for header height
          behavior: 'smooth'
        });
        
        // Update active nav link
        updateActiveNavLink(targetId);
      }
    });
  });
  
  // Function to update active nav link based on scroll position
  function updateActiveNavLink(forcedTarget = null) {
    // If a target is specified, update only that link
    if (forcedTarget) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === forcedTarget) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      return;
    }
    
    // Get current scroll position
    const scrollPosition = window.scrollY + 100; // Add offset for better UX
    
    // Update based on which section is in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = '#' + section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current section link
        const activeLink = document.querySelector(`.nav__link[href="${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }
  
  // Initialize active nav link
  updateActiveNavLink();
});