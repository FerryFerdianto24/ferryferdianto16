// LUXE E-Commerce JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Add to Cart functionality
    const addToCartBtns = document.querySelectorAll('.btn-add');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 3;
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cartItems++;
            cartCount.textContent = cartItems;
            
            // Animation feedback
            this.textContent = 'Added!';
            this.style.background = '#c9a227';
            this.style.color = '#0a0a0a';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.background = 'transparent';
                this.style.color = '#c9a227';
            }, 1500);
        });
    });
    
    // Smooth scroll for navigation
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
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.footer-newsletter form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
    
    console.log('LUXE E-Commerce loaded successfully!');
});
