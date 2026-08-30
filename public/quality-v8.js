(() => {
  document.documentElement.classList.add('v8-js');

  const route = document.body.dataset.route || 'inicio';
  document.querySelectorAll('.top nav a, .menu-panel > a').forEach((link) => {
    const href = link.getAttribute('href');
    const active = (route === 'inicio' && href === '/') || (href && href.includes(`/${route}/`));
    if (active) link.setAttribute('aria-current', 'page');
  });

  const hero = document.querySelector('.hero-visual');
  if (hero && matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('pointermove', (event) => {
      const box = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', `${((event.clientX - box.left) / box.width - .5) * 12}px`);
      hero.style.setProperty('--my', `${((event.clientY - box.top) / box.height - .5) * 10}px`);
    });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--mx', '0px');
      hero.style.setProperty('--my', '0px');
    });
  }

  const menu = document.querySelector('[data-menu]');
  const panel = document.querySelector('[data-menu-panel]');
  if (menu && panel) {
    const syncMenu = () => menu.setAttribute('aria-expanded', String(panel.classList.contains('open')));
    menu.setAttribute('aria-controls', 'cosmo-menu');
    panel.id = 'cosmo-menu';
    syncMenu();
    menu.addEventListener('click', () => requestAnimationFrame(syncMenu));
  }
})();
