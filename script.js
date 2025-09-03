
// Splash
const splash = document.querySelector('.splash');
const header = document.querySelector('.site-header');
if (splash) {
  const dismiss = () => {
    splash.classList.add('hidden');
    header?.classList.add('show');
    document.getElementById('mainMenu')?.scrollIntoView({behavior:'smooth', block:'start'});
  };
  splash.addEventListener('click', dismiss);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') dismiss();
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',(e)=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

// Roadmap modal
const openBtn=document.getElementById('openRoadmap');
const modal=document.getElementById('roadmapModal');
if(openBtn&&modal){
  openBtn.addEventListener('click',()=>modal.showModal());
  modal.addEventListener('click',(e)=>{
    const card=modal.querySelector('.modal-card').getBoundingClientRect();
    const inside = card.top<=e.clientY && e.clientY<=card.bottom && card.left<=e.clientX && e.clientX<=card.right;
    if(!inside) modal.close();
  });
}
