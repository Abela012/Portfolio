document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved user preference
  const savedTheme = localStorage.getItem('theme');
  
  // Check if user has a system preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial theme based on saved preference or system preference
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    body.classList.add('dark-mode');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    // Toggle the class
    body.classList.toggle('dark-mode');
    
    // Save user preference
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
  
  // Listen for system theme changes
  prefersDarkScheme.addEventListener('change', (e) => {
    // Only update if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    }
  });
});