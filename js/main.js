// Paisa Track Landing Page JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu functionality
    initializeMobileMenu();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Setup FAQ accordions
    initializeFaqAccordions();
    
    // Setup help center navigation (if on help page)
    initializeHelpCenter();
    
    // Animate elements on scroll
    initializeScrollAnimations();
    
    // Update copyright year
    updateCopyrightYear();
    
    // Fix download links - ensure they're clickable
    fixDownloadLinks();
    
    // Handle newsletter form submission (if exists)
    setupNewsletterForm();
});

// Initialize Mobile Menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenuBtn || !navLinks) return;
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('open');
        navLinks.classList.toggle('active');
        console.log('Mobile menu toggled');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('open');
        }
    });
    
    // Close menu when link is clicked
    const mobileNavLinks = document.querySelectorAll('.nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
            }
        });
    });
    
    // Close mobile menu when window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('open');
        }
    });
}

// Initialize Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize FAQ Accordions
function initializeFaqAccordions() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// Initialize Help Center (if on help page)
function initializeHelpCenter() {
    const helpCategories = document.querySelectorAll('.help-categories a');
    const helpSections = document.querySelectorAll('.help-section');
    
    if (helpCategories.length > 0 && helpSections.length > 0) {
        helpCategories.forEach(category => {
            category.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = category.getAttribute('href').substring(1);
                
                // Remove active class from all categories and sections
                helpCategories.forEach(cat => cat.classList.remove('active'));
                helpSections.forEach(section => section.classList.remove('active'));
                
                // Add active class to clicked category and corresponding section
                category.classList.add('active');
                document.getElementById(targetId).classList.add('active');
            });
        });
    }
}

// Initialize Scroll Animations
function initializeScrollAnimations() {
    const elements = document.querySelectorAll('.feature-card, .step, .download-content, .faq-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
    
    // Add scroll class to header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

// Update Copyright Year
function updateCopyrightYear() {
    const yearElement = document.querySelector('.copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Fix Download Links - Make sure they're clickable
function fixDownloadLinks() {
    // Debug helper to ensure all download links are working
    const downloadLinks = document.querySelectorAll('a[href*="mega.nz"]');
    
    console.log('Found ' + downloadLinks.length + ' download links');
    
    downloadLinks.forEach((link, index) => {
        console.log(`Download link ${index + 1}: ${link.href}`);
        
        // Ensure the link is properly clickable
        link.style.position = 'relative';
        link.style.zIndex = '1000';
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        
        // Add a dedicated click event listener to each download link
        link.addEventListener('click', function(e) {
            console.log('Download link clicked: ' + this.href);
            
            // Force open the link in a new tab
            const newWindow = window.open(this.href, '_blank');
            
            // If popup was blocked, try direct navigation as fallback
            if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                console.log('Popup blocked, using direct navigation');
                window.location.href = this.href;
            }
            
            // Stop propagation to prevent other handlers
            e.stopPropagation();
            e.preventDefault();
        }, true); // Use capture phase for highest priority
    });
    
    // Special handling for the main download button
    const mainDownloadBtn = document.querySelector('.hero .btn-primary');
    if (mainDownloadBtn) {
        console.log('Found main download button');
        mainDownloadBtn.style.zIndex = '1500';
        
        // Clear any existing click handlers by cloning and replacing
        const newBtn = mainDownloadBtn.cloneNode(true);
        mainDownloadBtn.parentNode.replaceChild(newBtn, mainDownloadBtn);
        
        // Add direct click handler
        newBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            console.log('Main download button clicked');
            const downloadUrl = this.getAttribute('href');
            
            if (downloadUrl) {
                console.log('Opening URL: ' + downloadUrl);
                window.open(downloadUrl, '_blank');
            }
        }, true);
    }
}

// Handle Newsletter Form Submission
function setupNewsletterForm() {
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