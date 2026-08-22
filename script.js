/**
 * Vintage Wedding Invitation - Interactive Scripts
 * Handles scroll animations, parallax effects, and interaction patterns
 */

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initParallax();
    initHoverEffects();
});

// ========================================
// SCROLL-TRIGGERED ANIMATIONS
// ========================================

/**
 * Observes elements and triggers animations when they enter viewport
 */
function initScrollAnimations() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported');
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to trigger animations
                entry.target.classList.add('active');
                
                // Optional: Stop observing after animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const revealElements = document.querySelectorAll(
        '.our-story .story-text p, ' +
        '.our-story .story-illustration, ' +
        '.the-day .timeline-item, ' +
        '.details .detail-card, ' +
        '.details .additional-info, ' +
        '.gallery-item, ' +
        '.closing-text, ' +
        '.closing-illustration, ' +
        '.section-header'
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// PARALLAX EFFECTS
// ========================================

/**
 * Creates subtle parallax movement on scroll
 */
function initParallax() {
    // Check for reduced motion preference
    if (prefersReducedMotion()) {
        return;
    }

    const parallaxElements = {
        mansion: document.querySelector('.mansion'),
        decorations: document.querySelector('.decorations'),
        couple: document.querySelector('.couple'),
        garden: document.querySelector('.garden-img'),
        closingImg: document.querySelector('.closing-img')
    };

    // Remove null values
    Object.keys(parallaxElements).forEach(key => {
        if (!parallaxElements[key]) delete parallaxElements[key];
    });

    if (Object.keys(parallaxElements).length === 0) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Apply parallax only to elements in viewport
        Object.values(parallaxElements).forEach(element => {
            if (!isElementInViewport(element)) return;

            const rect = element.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            // Subtle parallax movement
            const movement = (scrollPercent - 0.5) * 20;
            element.style.transform = `translateY(${movement}px)`;
        });
    });
}

// ========================================
// HOVER EFFECTS
// ========================================

/**
 * Adds interactive hover effects to cards and images
 */
function initHoverEffects() {
    const detailCards = document.querySelectorAll('.detail-card');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Detail cards - subtle lift effect
    detailCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!prefersReducedMotion()) {
                this.style.transform = 'translateY(-5px)';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Gallery items - already handled via CSS, but add click handlers if needed
    galleryItems.forEach((item, index) => {
        item.setAttribute('data-gallery-index', index);
        
        item.addEventListener('click', function(e) {
            // Placeholder for future lightbox/modal functionality
            console.log('Gallery item clicked:', index);
        });
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Check if element is visible in viewport
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
    );
}

/**
 * Check user's motion preference
 */
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Smooth scroll handler (browser might not support natively on older browsers)
 */
function enableSmoothScroll() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        console.log('Smooth scroll not natively supported');
        // Fallback could be implemented here if needed
    }
}

// ========================================
// SCROLL INDICATOR INTERACTION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            // Scroll to our-story section
            const ourStory = document.querySelector('.our-story');
            if (ourStory) {
                ourStory.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Hide scroll indicator when user scrolls
    let scrollIndicatorTimeout;
    window.addEventListener('scroll', () => {
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
            
            clearTimeout(scrollIndicatorTimeout);
            scrollIndicatorTimeout = setTimeout(() => {
                if (window.scrollY < 100) {
                    scrollIndicator.style.opacity = '0.6';
                    scrollIndicator.style.pointerEvents = 'auto';
                }
            }, 500);
        }
    });
});

// ========================================
// DYNAMIC CONTENT UPDATES
// ========================================

/**
 * Updates bride/groom names (call this with custom names)
 * Usage: updateCoupleNames('Your Name', 'Their Name')
 */
function updateCoupleNames(brideName, groomName) {
    const nameElement = document.querySelector('.name-line');
    if (nameElement) {
        nameElement.textContent = `${brideName} & ${groomName}`;
    }
}

/**
 * Updates wedding date
 * Usage: updateWeddingDate('June 15th, 2024')
 */
function updateWeddingDate(dateString) {
    const dateElement = document.querySelector('.date-line');
    if (dateElement) {
        dateElement.textContent = dateString;
    }
}

/**
 * Updates wedding location
 * Usage: updateLocation('Paris, France')
 */
function updateLocation(location) {
    const locationElement = document.querySelector('.location-line');
    if (locationElement) {
        locationElement.textContent = location;
    }
}

/**
 * Updates timeline event (call with event index 0-3)
 * Usage: updateTimelineEvent(0, 'Ceremony', '2:00 PM', 'Garden')
 */
function updateTimelineEvent(index, title, time, location) {
    const items = document.querySelectorAll('.timeline-item');
    if (items[index]) {
        items[index].querySelector('h3').textContent = title;
        items[index].querySelector('.time').textContent = time;
        items[index].querySelector('.description').textContent = location;
    }
}

/**
 * Updates gallery image (call with index 0-5)
 * Usage: updateGalleryImage(0, 'path/to/image.jpg', 'alt text')
 */
function updateGalleryImage(index, imagePath, altText) {
    const items = document.querySelectorAll('.gallery-item img');
    if (items[index]) {
        items[index].src = imagePath;
        items[index].alt = altText;
    }
}

/**
 * Updates story text
 * Usage: updateStoryText('Your custom story...')
 */
function updateStoryText(text) {
    const storyText = document.querySelector('.story-text p');
    if (storyText) {
        storyText.textContent = text;
    }
}

// ========================================
// IMAGE ASSET HELPERS
// ========================================

/**
 * Updates SVG assets (mansion, couple, decorations, etc.)
 * Usage: updateAsset('mansion', 'path/to/new-mansion.svg')
 */
function updateAsset(assetName, newPath) {
    const assetMap = {
        'mansion': '.mansion',
        'couple': '.couple',
        'decorations': '.decorations',
        'garden': '.garden-img',
        'closing': '.closing-img'
    };

    const selector = assetMap[assetName];
    if (selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.src = newPath;
        }
    }
}

/**
 * Update multiple assets at once
 * Usage: updateAssets({
 *   mansion: 'path/to/mansion.svg',
 *   couple: 'path/to/couple.svg'
 * })
 */
function updateAssets(assetMap) {
    Object.entries(assetMap).forEach(([name, path]) => {
        updateAsset(name, path);
    });
}

// ========================================
// EXPORT FOR EXTERNAL USE
// ========================================

window.WeddingInvitation = {
    updateCoupleNames,
    updateWeddingDate,
    updateLocation,
    updateTimelineEvent,
    updateGalleryImage,
    updateStoryText,
    updateAsset,
    updateAssets
};

// ========================================
// LOGGING
// ========================================

console.log('🎊 Wedding Invitation initialized');
console.log('Available functions:');
console.log('- WeddingInvitation.updateCoupleNames(first, last)');
console.log('- WeddingInvitation.updateWeddingDate(date)');
console.log('- WeddingInvitation.updateLocation(location)');
console.log('- WeddingInvitation.updateTimelineEvent(index, title, time, location)');
console.log('- WeddingInvitation.updateGalleryImage(index, path, altText)');
console.log('- WeddingInvitation.updateStoryText(text)');
console.log('- WeddingInvitation.updateAsset(name, path)');
console.log('- WeddingInvitation.updateAssets({...})');
