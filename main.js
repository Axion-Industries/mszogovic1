// Animation for fade-in
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('visible');
  });
});

// Button animation
const animatedBtns = document.querySelectorAll('.animated-btn');
animatedBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('btn-hover');
  });
  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('btn-hover');
  });
});
