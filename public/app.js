const menu=document.querySelector('[data-menu]');
const mobile=document.querySelector('[data-mobile-menu]');
const header=document.querySelector('.site-header');
let lastY=0;

// Interior pages start over light backgrounds; keep navigation legible before scroll.
if(!document.querySelector('.hero-home,.enroll-page')) header?.classList.add('interior-light');

// Adaptive wordmark treatment for light/dark sections without shipping multiple logo variants.
document.querySelectorAll('img[src="/images/logo-web.webp"]').forEach(img=>{
  const mark=document.createElement('span');
  mark.className='brand-type';
  mark.setAttribute('aria-label','Cosmo School');
  mark.innerHTML='<strong>COSMO</strong><strong>SCHOOL</strong>';
  img.replaceWith(mark);
});
const brandStyle=document.createElement('style');
brandStyle.textContent=`
.brand-type{display:inline-grid;grid-template-columns:auto auto;gap:.18em;align-items:center;font-size:16px;line-height:.9;letter-spacing:-.065em;font-weight:900;white-space:nowrap}.brand-type strong:first-child{color:currentColor}.brand-type strong:last-child{color:#d43b32}.site-header:not(.scrolled):not(.interior-light) .brand-type strong:last-child{color:#f3a49d}.site-header.interior-light:not(.scrolled){color:#0a1830;border-color:rgba(10,24,48,.12);background:rgba(244,241,234,.74);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}.footer .brand-type{font-size:27px}.footer .brand-type strong:first-child{color:#fff}.phone-shell .brand-type{display:grid;grid-template-columns:1fr;font-size:25px;gap:0;margin:34px auto 0;width:max-content;text-align:center}.phone-shell .brand-type strong:first-child{color:#fff}.phone-shell .brand-type strong:last-child{color:#9db7ff}@media(max-width:820px){.wordmark .brand-type{font-size:14px}}`;
document.head.appendChild(brandStyle);

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

document.querySelectorAll('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{
  if(e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank')return;
  const href=a.getAttribute('href');if(!href||href.startsWith('/#'))return;
  e.preventDefault();document.body.classList.add('page-leaving');setTimeout(()=>location.href=href,170);
}));
