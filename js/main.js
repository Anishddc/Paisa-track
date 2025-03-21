// Mobile Menu Toggle - Enhanced version
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

// Function to initialize mobile menu functionality
function initializeMobileMenu() {
    if (mobileMenuBtn && navLinks) {
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from propagating
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
            document.body.classList.toggle('menu-open');

            // Log for debugging
            console.log('Mobile menu toggled. Active:', navLinks.classList.contains('active'));
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Prevent clicks on menu items from closing menu accidentally
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
                document.body.classList.remove('menu-open');
            }
        });
    } else {
        console.warn('Mobile menu elements not found in the document');
    }
}

// Close mobile menu when window is resized above mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('open');
        document.body.classList.remove('menu-open');
    }
});

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeMobileMenu);

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            // Here you would normally send this to your backend
            console.log('Newsletter subscription for:', email);
            
            // Show success message
            const formContainer = newsletterForm.parentElement;
            newsletterForm.style.display = 'none';
            
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Thank you for subscribing! We'll keep you updated.</p>
            `;
            
            formContainer.appendChild(successMessage);
            
            // Reset form
            newsletterForm.reset();
        }
    });
}

// Add animation classes on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .download-content, .faq-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
};

// Initialize animations
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Add CSS class to header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Update copyright year automatically
const yearSpan = document.querySelector('.copyright-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Additional styles for mobile menu when active
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--white);
            padding: 20px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            z-index: 999;
        }
        
        .mobile-menu-btn.open span:first-child {
            transform: translateY(7px) rotate(45deg);
        }
        
        .mobile-menu-btn.open span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.open span:last-child {
            transform: translateY(-7px) rotate(-45deg);
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        header.scrolled {
            padding: 15px 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .success-message {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding: 20px;
        }
        
        .success-message i {
            font-size: 3rem;
            color: var(--white);
        }
    `;
    
    document.head.appendChild(style);
}); 