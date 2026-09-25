/* ============================================
   GLOW AESTHETICS - Interactive JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.padding = '12px 0';
            navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.treatment-card, .testimonial-card, .feature');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal elements
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // Treatment card hover effect enhancement
    const treatmentCards = document.querySelectorAll('.treatment-card');
    
    treatmentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.btn-book').style.background = '#c9a87c';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.btn-book').style.background = '#1a1a1a';
        });
    });

    // Book button click handler
    const bookButtons = document.querySelectorAll('.btn-book');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const treatmentName = this.closest('.treatment-card').querySelector('h3').textContent;
            const price = this.closest('.treatment-card').querySelector('.price-value').textContent;
            
            // Create booking confirmation
            const confirmed = confirm(`Would you like to book "${treatmentName}" for ${price}?\n\nClick OK to proceed to WhatsApp booking.`);
            
            if (confirmed) {
                const message = encodeURIComponent(`Hi! I would like to book the ${treatmentName} treatment (${price}). Please let me know the available slots.`);
                window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
            }
        });
    });

    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const animateCounters = () => {
        if (hasAnimated) return;
        
        const heroSection = document.querySelector('.hero');
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        if (heroBottom > 0) {
            hasAnimated = true;
            
            stats.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                let current = 0;
                const increment = number / 50;
                const duration = 2000;
                const stepTime = duration / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        stat.textContent = number + suffix;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }
                }, stepTime);
            });
        }
    };
    
    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Run once on load

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    console.log('✨ Glow Aesthetics website loaded successfully!');
});
