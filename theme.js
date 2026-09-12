// Apply the preference before first paint; storage may be unavailable in private contexts.
(() => {
  let preference;
  try { preference = localStorage.getItem('theme'); } catch (_) {}
  const dark = preference === 'dark' || (preference !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
})();
