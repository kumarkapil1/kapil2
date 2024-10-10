const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Script to add animations to progress bars when the skills section is scrolled into view
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress');

    const options = {
        root: null,
        threshold: 0.3
    };

    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'width 2s ease-in-out';
                entry.target.style.width = entry.target.getAttribute('data-progress') + '%';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
});

// Simple script to add interactivity for future use, like dynamic project loading or effects

document.addEventListener('DOMContentLoaded', () => {
    console.log("Projects section loaded");
});


// JavaScript for testimonial slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.classList.remove('active');
            if (idx === index) {
                testimonial.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
        showTestimonial(currentTestimonial);
    });

    nextButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
        showTestimonial(currentTestimonial);
    });

    // Initialize first testimonial as active
    showTestimonial(currentTestimonial);
});

// JavaScript for potential dynamic blog content
document.addEventListener('DOMContentLoaded', () => {
    console.log("Blog section loaded");
    // Future dynamic blog post loading functionality can be added here.
});

// JavaScript for handling form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission (e.g., send an email)
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message. We will get back to you soon.');

        // Clear form fields
        contactForm.reset();
    });
});

// Optional JavaScript for future functionality
document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.social-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            alert('You clicked on ' + icon.id + ' icon!');
        });
    });
});







