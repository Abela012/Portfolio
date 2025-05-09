// Initialize animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initializeAnimations();
});

// Animate elements when they come into view
function initializeAnimations() {
  // Get all sections
  const sections = document.querySelectorAll('section');
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class
        entry.target.classList.add('fade-in');
        
        // Animate children with staggered delay
        const animatableElements = entry.target.querySelectorAll('.animatable');
        animatableElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add('slide-up');
          }, 150 * index);
        });
        
        // Animate skill bars
        if (entry.target.id === 'about') {
          animateSkillBars();
        }
        
        // Unobserve the element
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 10% of the element is visible
  });
  
  // Observe each section
  sections.forEach(section => {
    observer.observe(section);
    
    // Add animatable class to elements we want to animate
    const titles = section.querySelectorAll('h2, h3');
    const paragraphs = section.querySelectorAll('p');
    const buttons = section.querySelectorAll('.btn');
    const cards = section.querySelectorAll('.project-card');
    
    titles.forEach(title => title.classList.add('animatable'));
    paragraphs.forEach(paragraph => paragraph.classList.add('animatable'));
    buttons.forEach(button => button.classList.add('animatable'));
    cards.forEach(card => card.classList.add('animatable'));
  });
}

// Animate skill bars
function animateSkillBars() {
  const skillLevels = document.querySelectorAll('.skill__level');
  skillLevels.forEach(level => {
    // Initially set width to 0
    level.style.width = '10';
    
    // Trigger reflow
    level.offsetWidth;
    
    // Animate to the actual width
    const targetWidth = level.getAttribute('style').split('width: ')[1].split('%)')[0] + '%';
    level.style.width = targetWidth;
  });
}