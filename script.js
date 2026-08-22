document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.paper-page');
  const cover = document.querySelector('.page-cover');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    pages.forEach(page => page.classList.add('is-visible'));
    if (cover) cover.classList.add('hero-animated');
    return;
  }

  const startHero = () => requestAnimationFrame(() => {
    requestAnimationFrame(() => cover && cover.classList.add('hero-animated'));
  });

  if (document.readyState === 'complete') startHero();
  else window.addEventListener('load', startHero, { once: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: .18 });

  pages.forEach(page => observer.observe(page));
});
