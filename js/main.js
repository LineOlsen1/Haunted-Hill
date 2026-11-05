const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const mobile = window.matchMedia('(max-width: 63.99rem)');

function setMenu(open, returnFocus = false) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Luk menu' : 'Åbn menu');
  header.classList.toggle('menu-open', open);
  navigation.hidden = mobile.matches && !open;
  if (returnFocus) toggle.focus();
}

function syncNavigation() {
  const focusWasInside = navigation.contains(document.activeElement);
  toggle.hidden = !mobile.matches;
  setMenu(false, mobile.matches && focusWasInside);
  if (!mobile.matches && document.activeElement === toggle) {
    navigation.querySelector('a[href]').focus();
  }
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false, true);
  }
});
document.addEventListener('click', (event) => {
  if (!header.contains(event.target)) setMenu(false);
});
header.addEventListener('focusout', (event) => {
  if (!header.contains(event.relatedTarget)) setMenu(false);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a[href]')) setMenu(false);
});
mobile.addEventListener('change', syncNavigation);
syncNavigation();

// Start with a static frame: without JavaScript, no animation is shown.
const batImage = document.querySelector('#hero-bats-animation');
const motionToggle = document.querySelector('.motion-toggle');

if (batImage && motionToggle) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const staticSource = new URL(batImage.dataset.staticSrc, document.baseURI).href;
  const animatedSource = new URL(batImage.dataset.animatedSrc, document.baseURI).href;
  let userPaused = false;
  let animationReady = false;
  let animationFailed = false;
  let animationLoading = false;

  function updateBats() {
    const paused = reducedMotion.matches || userPaused || !animationReady;
    const source = paused ? staticSource : animatedSource;
    if (batImage.src !== source) batImage.src = source;
    motionToggle.hidden = reducedMotion.matches || !animationReady;
    motionToggle.textContent = userPaused ? 'Afspil flagermus' : 'Sæt flagermus på pause';
  }

  function useStaticFallback() {
    animationFailed = true;
    animationReady = false;
    animationLoading = false;
    updateBats();
  }

  function loadAnimation() {
    if (reducedMotion.matches || animationReady || animationFailed || animationLoading) return;
    animationLoading = true;
    const preload = new Image();
    preload.addEventListener('error', useStaticFallback, { once: true });
    preload.addEventListener('load', async () => {
      try {
        await preload.decode();
        animationLoading = false;
        animationReady = true;
        updateBats();
      } catch {
        useStaticFallback();
      }
    }, { once: true });
    preload.src = animatedSource;
  }

  batImage.addEventListener('error', () => {
    if (batImage.src === animatedSource) useStaticFallback();
  });

  motionToggle.addEventListener('click', () => {
    userPaused = !userPaused;
    updateBats();
  });
  reducedMotion.addEventListener('change', () => {
    updateBats();
    loadAnimation();
  });
  updateBats();
  loadAnimation();
}
