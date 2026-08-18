const menu=document.querySelector('[data-menu]');
const mobile=document.querySelector('[data-mobile-menu]');
const header=document.querySelector('.site-header');
let lastY=0;

if(menu&&mobile){
  menu.addEventListener('click',()=>{
    const open=mobile.classList.toggle('open');
    document.body.classList.toggle('menu-open',open);
    menu.textContent=open?'CERRAR':'MENU';
    menu.setAttribute('aria-expanded',String(open));
  });
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mobile.classList.remove('open');document.body.classList.remove('menu-open');
  }));
}

const updateHeader=()=>{
  const y=window.scrollY;
  header?.classList.toggle('scrolled',y>24);
  if(y>280 && y>lastY+8) header?.classList.add('header-hidden');
  if(y<lastY-8 || y<100) header?.classList.remove('header-hidden');
  lastY=y;
};
updateHeader();
window.addEventListener('scroll',updateHeader,{passive:true});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})
},{threshold:.12,rootMargin:'0px 0px -5% 0px'});
document.querySelectorAll('[data-reveal-section]').forEach(el=>revealObserver.observe(el));

const staggerGroups=['.program-grid','.method-list','.formats-grid','.location-grid','.level-cards','.process-grid','.principle-grid','.values-list'];
staggerGroups.forEach(selector=>{
  document.querySelectorAll(selector).forEach(group=>{
    [...group.children].forEach((el,i)=>{
      el.classList.add('reveal-item');el.style.transitionDelay=`${Math.min(i,5)*70}ms`;revealObserver.observe(el);
    });
  });
});

document.querySelectorAll('[data-lead-form]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();
  const fields=form.querySelector('.form-fields');const success=form.querySelector('.form-success');
  fields.hidden=true;success.hidden=false;
  form.scrollIntoView({behavior:'smooth',block:'center'});
}));

// Gentle parallax only on large screens, disabled when reduced motion is requested.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion && window.innerWidth>820){
  const parallax=[...document.querySelectorAll('.abroad-card>img,.cambridge-visual>img,.method-image>img')];
  const tick=()=>{
    const vh=window.innerHeight;
    parallax.forEach(img=>{
      const r=img.parentElement.getBoundingClientRect();
      if(r.bottom>0&&r.top<vh){const p=(r.top+r.height/2-vh/2)/vh;img.style.translate=`0 ${p*-14}px`;}
    });
  };
  window.addEventListener('scroll',tick,{passive:true});tick();
}

// Short exit transition for internal navigation while keeping native behaviour.
document.querySelectorAll('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{
  if(e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank')return;
  const href=a.getAttribute('href');if(!href||href.startsWith('/#'))return;
  e.preventDefault();document.body.classList.add('page-leaving');setTimeout(()=>location.href=href,170);
}));
