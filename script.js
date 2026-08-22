document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.paper-page');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    pages.forEach(page => page.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: .18 });

  pages.forEach(page => observer.observe(page));
});
