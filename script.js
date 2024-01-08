document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Internal Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic Contact Form Validation (if you have a contact form)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let email = this.querySelector('input[type="email"]').value;
            let message = this.querySelector('textarea').value;

            if (!email || !message) {
                alert('Please fill in all fields.');
            } else {
                // Process form submission here (e.g., send an email)
                alert('Thank you for your message!');
                this.reset(); // Reset form after submission
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (other code)

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let name = this.querySelector('#name').value;
        let email = this.querySelector('#email').value;
        let message = this.querySelector('#message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
        } else {
            // Here you would typically handle the form submission (e.g., using AJAX, or integrating with an email service)
            alert('Thank you for your message!');

            // Reset the form after submission
            this.reset();
        }
    });
});
