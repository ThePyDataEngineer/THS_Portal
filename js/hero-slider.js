/* ============================================================
   HERO-SLIDER.JS — AMD-Style Full-Screen Hero Slider
   
   Features:
   - Fade transitions between slides
   - Autoplay with configurable interval (default 8s)
   - Pause on hover / focus
   - Bullet navigation
   - Progress bar per cycle
   - Touch swipe support (mobile)
   - Keyboard navigation (left/right arrows)
   - prefers-reduced-motion respect
   - Zero dependencies
   ============================================================ */

(function () {
  'use strict';

  const AUTOPLAY_MS = 8000;
  const TRANSITION_MS = 800;
  const SWIPE_THRESHOLD = 50;

  let currentIndex = 0;
  let autoplayTimer = null;
  let progressTimer = null;
  let progressStart = 0;
  let isPaused = false;
  let touchStartX = 0;
  let touchEndX = 0;

  const slider = document.querySelector('.hero-slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const bullets = slider.querySelectorAll('.hero-bullet');
  const progressBar = slider.querySelector('.hero-progress');
  const totalSlides = slides.length;

  if (totalSlides < 2) return;

  /* Reduced motion check */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Core: Go to slide ---- */
  function goToSlide(index, skipAnimation) {
    if (index === currentIndex && !skipAnimation) return;

    /* Remove active from current */
    slides[currentIndex].classList.remove('active');
    bullets[currentIndex]?.classList.remove('active');

    /* Update index */
    currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;

    /* Add active to new */
    slides[currentIndex].classList.add('active');
    bullets[currentIndex]?.classList.add('active');

    /* Reset progress */
    resetProgress();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  /* ---- Progress Bar ---- */
  function resetProgress() {
    if (!progressBar) return;
    progressBar.style.width = '0%';
    progressStart = Date.now();
  }

  function updateProgress() {
    if (!progressBar || isPaused) return;
    const elapsed = Date.now() - progressStart;
    const pct = Math.min((elapsed / AUTOPLAY_MS) * 100, 100);
    progressBar.style.width = pct + '%';
  }

  /* ---- Autoplay ---- */
  function startAutoplay() {
    stopAutoplay();
    isPaused = false;
    slider.classList.remove('paused');
    progressStart = Date.now();
    autoplayTimer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_MS);
    progressTimer = setInterval(updateProgress, 50);
  }

  function stopAutoplay() {
    isPaused = true;
    slider.classList.add('paused');
    clearInterval(autoplayTimer);
    clearInterval(progressTimer);
    autoplayTimer = null;
    progressTimer = null;
  }

  function pauseAutoplay() {
    if (autoplayTimer) {
      stopAutoplay();
    }
  }

  function resumeAutoplay() {
    startAutoplay();
  }

  /* ---- Bullet clicks ---- */
  bullets.forEach((bullet, i) => {
    bullet.addEventListener('click', () => {
      goToSlide(i);
      startAutoplay();
    });

    /* Accessibility */
    bullet.setAttribute('role', 'tab');
    bullet.setAttribute('aria-label', `Slide ${i + 1} of ${totalSlides}`);
    bullet.setAttribute('tabindex', '0');

    bullet.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goToSlide(i);
        startAutoplay();
      }
    });
  });

  /* ---- Hover pause ---- */
  slider.addEventListener('mouseenter', pauseAutoplay);
  slider.addEventListener('mouseleave', resumeAutoplay);

  /* Focus pause (accessibility) */
  slider.addEventListener('focusin', pauseAutoplay);
  slider.addEventListener('focusout', resumeAutoplay);

  /* ---- Keyboard navigation ---- */
  document.addEventListener('keydown', (e) => {
    /* Only when slider is in viewport */
    const rect = slider.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowRight') {
      nextSlide();
      startAutoplay();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      startAutoplay();
    }
  });

  /* ---- Touch swipe ---- */
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    pauseAutoplay();
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    resumeAutoplay();
  }, { passive: true });

  /* ---- Visibility API: pause when tab is hidden ---- */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseAutoplay();
    else resumeAutoplay();
  });

  /* ---- Initialize ---- */
  goToSlide(0, true);
  if (!prefersReducedMotion) {
    startAutoplay();
  }

})();
