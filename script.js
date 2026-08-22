document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.paper-page');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    revealItems.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: .18 });

  revealItems.forEach(item => observer.observe(item));
});
