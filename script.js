/* ============================================
   VINTAGE WEDDING INVITATION - SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // HERO ANIMATION SEQUENCE
    // ============================================
    
    const mansion = document.getElementById('mansion');
    const couple = document.getElementById('couple');
    const heroText = document.querySelector('.invitation-text');
    const heroSection = document.querySelector('.hero');
    
    // Sequence: Mansion → Decorations → Couple → Text
    function playHeroSequence() {
        // Step 1: Reveal mansion (immediate)
        setTimeout(() => {
            if (mansion) {
                mansion.classList.add('revealed');
            }
        }, 300);
        
        // Step 2: Reveal decorations
        setTimeout(() => {
            heroSection.classList.add('decorations-revealed');
        }, 1200);
        
        // Step 3: Reveal couple
        setTimeout(() => {
            if (couple) {
                couple.classList.add('revealed');
            }
        }, 2000);
        
        // Step 4: Reveal text
        setTimeout(() => {
            if (heroText) {
                heroText.classList.add('revealed');
            }
        }, 2800);
    }
    
    // Start hero sequence
    playHeroSequence();
    
    // ============================================
    // SCROLL-TRIGGERED SECTION REVEALS
    // ============================================
    
    const sections = document.querySelectorAll('.section');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Staggered reveal for timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.3
    });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // PARALLAX EFFECT FOR HERO
    // ============================================
    
    const heroLayers = document.querySelectorAll('.hero-layer');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        
        if (scrolled < heroHeight) {
            heroLayers.forEach((layer, index) => {
                const speed = 0.05 + (index * 0.02);
                layer.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });
    
    // ============================================
    // IMAGE LAZY LOADING
    // ============================================
    
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // ============================================
    // ELEGANT HOVER EFFECTS
    // ============================================
    
    const detailCards = document.querySelectorAll('.detail-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    detailCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ============================================
    // PERFORMANCE: THROTTLE SCROLL EVENTS
    // ============================================
    
    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        
        return function(...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime < delay) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    lastExecTime = currentTime;
                    func.apply(this, args);
                }, delay);
            } else {
                lastExecTime = currentTime;
                func.apply(this, args);
            }
        };
    }
    
    const throttledScroll = throttle(() => {
        // Any additional scroll-based logic here
    }, 100);
    
    window.addEventListener('scroll', throttledScroll);
    
    // ============================================
    // CONSOLE WELCOME
    // ============================================
    
    console.log('🎉 Wedding Invitation Loaded Successfully!');
    console.log('💕 Made with love for Alexander & Ekaterina');
    
});
