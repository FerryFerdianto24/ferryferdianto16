// La Bella Vista - Restaurant Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Menu Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuGrids = document.querySelectorAll('.menu-grid');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all menu grids
            menuGrids.forEach(grid => grid.classList.remove('active'));
            
            // Show selected menu grid
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
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
    
    // Reservation form
    const reservationForm = document.querySelector('.reservation-form');
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your reservation! We will confirm your booking shortly.');
        this.reset();
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
    
    console.log('La Bella Vista loaded successfully!');
});
