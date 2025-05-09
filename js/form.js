document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    // Validate form data
    const errors = validateForm(formValues);
    
    // If there are errors, show them and stop submission
    if (Object.keys(errors).length > 0) {
      displayErrors(errors);
      return;
    }
    
    // In a real application, you would send the form data to a server
    // For this demo, we'll just log the data and show a success message
    console.log('Form submission:', formValues);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    contactForm.reset();
  }
  
  function validateForm(data) {
    const errors = {};
    
    // Validate name
    if (!data.name || data.name.trim() === '') {
      errors.name = 'Name is required';
    }
    
    // Validate email
    if (!data.email || data.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Validate message
    if (!data.message || data.message.trim() === '') {
      errors.message = 'Message is required';
    }
    
    return errors;
  }
  
  function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function displayErrors(errors) {
    // Remove existing error messages
    const existingErrors = contactForm.querySelectorAll('.form__error');
    existingErrors.forEach(error => error.remove());
    
    // Add new error messages
    for (const [field, message] of Object.entries(errors)) {
      const inputElement = contactForm.querySelector(`[name="${field}"]`);
      if (inputElement) {
        // Add error class to input
        inputElement.classList.add('form__input--error');
        
        // Create and add error message
        const errorElement = document.createElement('p');
        errorElement.classList.add('form__error');
        errorElement.textContent = message;
        errorElement.style.color = 'var(--color-error-500)';
        errorElement.style.fontSize = 'var(--font-size-sm)';
        errorElement.style.marginTop = 'var(--space-1)';
        
        // Insert error after the input
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
        
        // Add event listener to clear error on input
        inputElement.addEventListener('input', () => {
          inputElement.classList.remove('form__input--error');
          if (errorElement.parentNode) {
            errorElement.parentNode.removeChild(errorElement);
          }
        }, { once: true });
      }
    }
  }
  
  function showSuccessMessage() {
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.classList.add('form__success');
    successMessage.style.backgroundColor = 'var(--color-success-500)';
    successMessage.style.color = 'white';
    successMessage.style.padding = 'var(--space-4)';
    successMessage.style.borderRadius = 'var(--radius-md)';
    successMessage.style.marginBottom = 'var(--space-4)';
    successMessage.textContent = 'Thank you for your message! I will get back to you as soon as possible.';
    
    // Insert message at the top of the form
    contactForm.prepend(successMessage);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      if (successMessage.parentNode) {
        successMessage.parentNode.removeChild(successMessage);
      }
    }, 5000);
  }
});