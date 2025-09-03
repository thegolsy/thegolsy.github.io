// THE GOLSY v1 interactions
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('roadmapModal');
  const openBtn = document.getElementById('openRoadmap');
  const logoBtn = document.getElementById('logoBtn');

  function openModal() { if (modal) modal.showModal(); }
  if (openBtn) openBtn.addEventListener('click', openModal);
  if (logoBtn) logoBtn.addEventListener('click', openModal);

  // Close on backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const inDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
                      && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!inDialog) modal.close();
    });
  }
});
