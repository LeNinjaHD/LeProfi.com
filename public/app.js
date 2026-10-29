document.querySelectorAll('[data-tool]').forEach((link) => {
  const target = window.LEPROFI_LINKS?.[link.dataset.tool];
  if (typeof target !== 'string') return;
  try {
    const url = new URL(target, window.location.href);
    if (url.protocol === 'http:' || url.protocol === 'https:') link.href = url.href;
  } catch { /* Bei ungültiger Konfiguration bleibt der Standardpfad erhalten. */ }
});
document.getElementById('year').textContent = new Date().getFullYear();
