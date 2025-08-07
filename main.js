// Animation for fade-in
window.addEventListener('DOMContentLoaded', () => {
  // Add visible class to all fade-in elements after a short delay
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
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

// Ensure all navigation links work properly
document.addEventListener('DOMContentLoaded', () => {
  // Add click handlers for navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add active class to clicked link
      e.target.classList.add('active');
    });
  });
});
