// Text highlight effect on selection
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.textContent.trim().toLowerCase();
            if (text === 'about us') {
                document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
            } else if (text === 'contact') {
                document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const category = document.getElementById('category').value;
            const message = document.getElementById('message').value;
            const privacy = document.getElementById('privacy').checked;

            if (!privacy) {
                alert('Please agree to the Privacy Policy');
                return;
            }

            // Log form data (in a real scenario, this would be sent to a server)
            console.log({
                firstName,
                lastName,
                email,
                category,
                message
            });

            // Show success message
            alert(`Thank you for your message, ${firstName}! We'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Add text selection highlight effect
    addTextHighlightEffect();
});

// Custom text highlight effect when selecting text
function addTextHighlightEffect() {
    const highlightableElements = document.querySelectorAll(
        '.hero-subtitle, .about-text, .contact-text, .follow-text'
    );

    highlightableElements.forEach(element => {
        element.addEventListener('mouseup', function() {
            const selectedText = window.getSelection();
            if (selectedText.toString().length > 0) {
                // The selection is automatically highlighted by CSS
                // This creates the blue highlight effect
            }
        });
    });
}

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrollPos * 0.5}px)`;
    }
});

// Add animation to social icons on hover
const socialIcons = document.querySelectorAll('.social-icon, .footer-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// Dynamic typing effect for hero subtitle
function typewriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const sections = document.querySelectorAll('.about-section, .follow-section, .contact-section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Mobile menu toggle (if needed in the future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}