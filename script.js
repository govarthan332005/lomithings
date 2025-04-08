// Add interactive elements and additional animations
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to button
    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });

    // Add parallax effect on mouse move
    const galleryContainer = document.querySelector('.gallery-container');
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const images = document.querySelectorAll('.gallery-image');
        images.forEach(img => {
            const imgRect = img.getBoundingClientRect();
            const imgCenterX = imgRect.left + imgRect.width / 2;
            const imgCenterY = imgRect.top + imgRect.height / 2;
            
            const distX = (e.clientX - imgCenterX) * 0.01;
            const distY = (e.clientY - imgCenterY) * 0.01;
            
            img.style.transform = `translate(${distX}px, ${distY}px) scale(${img.classList.contains('hover') ? 1.1 : 1})`;
        });
    });

    // Add hover state class
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });
        img.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    });
});








// Button animation for new bounce effect
const chatButton = document.querySelector('.bounce-btn');

chatButton.addEventListener('mouseover', () => {
    // No need for additional hover effects as we're using the ::before pseudo-element
});

chatButton.addEventListener('mouseout', () => {
    // Reset any hover states if needed
});

chatButton.addEventListener('click', () => {
    // Prevent multiple animations at once
    chatButton.classList.remove('animate');
    
    // Force a reflow to restart the animation
    void chatButton.offsetWidth;
    
    // Add the bounce animation class
    chatButton.classList.add('animate');
    
    // Here you could add functionality to actually start a chat
    setTimeout(() => {
        // You can also add a callback here after animation completes
    }, 800);
});

// Auto-animate the button every few seconds to draw attention
setInterval(() => {
    if (!chatButton.matches(':hover')) {
        chatButton.classList.remove('animate');
        void chatButton.offsetWidth;
        chatButton.classList.add('animate');
    }
}, 5000);





document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
    
    // Adjust on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
});
function Random() {
    window.open('random.html', '_blank'); // Replace with your target URL
  }
