/* ============================================
   SHREYA MENDI PORTFOLIO — main.js
   ============================================ */

// --- NAV SCROLL EFFECT ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- HAMBURGER / MOBILE MENU ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// --- CURSOR GLOW (desktop only) ---
if (window.innerWidth > 991) {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  (function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  })();
}

// --- SCROLL REVEAL ---
const revealEls = document.querySelectorAll('.reveal-text, .fade-in');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// Trigger hero reveals on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal-text').forEach(el => {
    el.classList.add('visible');
  });
});

// --- STAGGERED FADE-IN FOR CARDS & TIMELINE ---
function addFadeInObserver(selector, delayStep = 100) {
  const items = document.querySelectorAll(selector);
  items.forEach((item, i) => {
    item.classList.add('fade-in');
    item.style.transitionDelay = (i * delayStep) + 'ms';
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  items.forEach(item => obs.observe(item));
}

addFadeInObserver('.project-card', 80);
addFadeInObserver('.timeline-item', 100);
addFadeInObserver('.skill-group', 80);
addFadeInObserver('.stat', 120);

// --- SMOOTH ACTIVE NAV LINK ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--beige)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// --- GOLD NUMBER COUNT-UP ANIMATION ---
function animateCountUp(el) {
  const text = el.textContent;
  const match = text.match(/(\d+\.?\d*)/);
  if (!match) return;

  const end = parseFloat(match[1]);
  const suffix = text.replace(match[1], '');
  const prefix = text.split(match[1])[0];
  const duration = 1400;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = (end * eased).toFixed(end % 1 !== 0 ? 0 : 0);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const statNums = document.querySelectorAll('.stat-num');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCountUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => countObserver.observe(el));
