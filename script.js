document.addEventListener('DOMContentLoaded', function() {
    
    const mansion = document.getElementById('mansion');
    const couple = document.getElementById('couple');
    const heroText = document.querySelector('.hero-text');
    const heroSection = document.querySelector('.hero');
    
    // Animation sequence
    function playHeroSequence() {
        // Mansion
        setTimeout(() => {
            if (mansion) mansion.classList.add('revealed');
        }, 400);
        
        // Frame
        setTimeout(() => {
            heroSection.classList.add('hero-loaded');
        }, 800);
        
        // Couple
        setTimeout(() => {
            if (couple) couple.classList.add('revealed');
        }, 1400);
        
        // Text
        setTimeout(() => {
            if (heroText) heroText.classList.add('revealed');
        }, 2000);
    }
    
    playHeroSequence();
    
    // Section reveals
    const sections = document.querySelectorAll('.section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.2
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    console.log('💕 Wedding Invitation Loaded');
    
});
