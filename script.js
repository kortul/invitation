document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cover = document.querySelector('.page-cover');
  const pages = [...document.querySelectorAll('.paper-page')];
  const parallaxItems = [...document.querySelectorAll('.scroll-illustration')];

  const startHero = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => cover?.classList.add('hero-animated'));
    });
  };

  if (reduceMotion) {
    pages.forEach(page => page.classList.add('is-visible'));
    cover?.classList.add('hero-animated');
    return;
  }

  if (document.readyState === 'complete') startHero();
  else window.addEventListener('load', startHero, { once: true });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });

  pages.forEach(page => revealObserver.observe(page));

  let ticking = false;
  const updateParallax = () => {
    const viewportMiddle = window.innerHeight / 2;
    parallaxItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const delta = (rect.top + rect.height / 2 - viewportMiddle) / window.innerHeight;
      const offset = Math.max(-10, Math.min(10, delta * -18));
      item.style.setProperty('--parallax-y', `${offset}px`);
    });
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
  updateParallax();
});
