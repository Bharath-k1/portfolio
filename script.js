// Basic form validation and success message
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent actual submission
  
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
  
    if (name && email && message) {
      alert('Thank you for reaching out, ' + name + '! I will get back to you soon.');
      this.reset(); // Clear form
    } else {
      alert('Please fill in all the fields before submitting.');
    }
  });
  