(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let explicitPreference = false;
  try { explicitPreference = ['light', 'dark'].includes(localStorage.getItem('theme')); } catch (_) {}

  function refreshTheme() {
    const dark = root.classList.contains('dark');
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    toggle.innerHTML = dark
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.4 15.4A9 9 0 0 1 8.6 3.6a9 9 0 1 0 11.8 11.8Z"/></svg>';
    const icon = `assets/app_icon_${dark ? 'dark' : 'light'}.svg`;
    document.getElementById('header-logo').src = icon;
    document.getElementById('favicon').href = icon;
    for (const id of ['mock-img-home', 'screenshot-dynamic-home']) {
      const image = document.getElementById(id);
      if (image) image.src = `assets/screenshot_home_${dark ? 'dark' : 'light'}.png`;
    }
    for (const id of ['mock-img-result', 'screenshot-dynamic-result']) {
      const image = document.getElementById(id);
      if (image) image.src = `assets/screenshot_scanner_result${dark ? '' : '_light'}.png`;
    }
  }
  toggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    explicitPreference = true;
    try { localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light'); } catch (_) {}
    refreshTheme();
  });
  systemTheme.addEventListener('change', (event) => {
    if (!explicitPreference) {
      root.classList.toggle('dark', event.matches);
      refreshTheme();
    }
  });
  refreshTheme();

  const links = [...document.querySelectorAll('.section-nav a')];
  function updateSection() {
    let active = links[0];
    for (const link of links) {
      if (document.querySelector(link.hash).getBoundingClientRect().top <= 160) active = link;
    }
    for (const link of links) {
      if (link === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  if (links.length) {
    document.addEventListener('scroll', updateSection, { passive: true });
    updateSection();
  }

  const scanButton = document.getElementById('mock-btn-scan-trigger');
  if (!scanButton) return;
  const scan = document.getElementById('demo-scan');
  const result = document.getElementById('demo-result');
  const close = document.getElementById('mock-btn-close');
  const status = document.getElementById('demo-status');
  let timer;
  scanButton.hidden = false;
  scanButton.addEventListener('click', () => {
    scan.hidden = false;
    result.hidden = true;
    result.inert = true;
    scanButton.disabled = true;
    status.textContent = 'Scanning…';
    clearTimeout(timer);
    timer = setTimeout(() => {
      result.hidden = false;
      result.inert = false;
      scanButton.disabled = false;
      scanButton.textContent = 'Scan again';
      status.textContent = 'Card identified. Explore the price links.';
      // Keep focus where the user left it while the simulated scan runs.
    }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1200);
  });
  function reset() {
    clearTimeout(timer);
    scan.hidden = true;
    result.hidden = true;
    result.inert = true;
    scanButton.disabled = false;
    scanButton.textContent = 'Try a scan';
    status.textContent = 'Interactive app preview';
    scanButton.focus();
  }
  close.addEventListener('click', reset);
  result.addEventListener('keydown', (event) => { if (event.key === 'Escape') reset(); });
})();
