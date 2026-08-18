const header=document.querySelector('[data-header]');
const menuBtn=document.querySelector('[data-menu]');
const mobile=document.querySelector('[data-mobile]');
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lastY=0;

if(menuBtn&&mobile){
  menuBtn.addEventListener('click',()=>{
    const open=mobile.classList.toggle('open');
    document.body.classList.toggle('menu-open',open);
    menuBtn.setAttribute('aria-expanded',String(open));
  });
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mobile.classList.remove('open');
    document.body.classList.remove('menu-open');
  }));
}

const onScroll=()=>{
  const y=window.scrollY;
  header?.classList.toggle('scrolled',y>24);
  if(y>320&&y>lastY+8&&!document.body.classList.contains('menu-open')) header?.classList.add('hidden');
  if(y<lastY-8||y<120) header?.classList.remove('hidden');
  lastY=y;
};
onScroll();
window.addEventListener('scroll',onScroll,{passive:true});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -5% 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

if(!reduce){
  const heroFloat=document.querySelector('[data-float]');
  if(heroFloat&&window.innerWidth>850){
    window.addEventListener('pointermove',e=>{
      const x=(e.clientX/window.innerWidth-.5)*10;
      const y=(e.clientY/window.innerHeight-.5)*8;
      heroFloat.style.transform=`translate3d(${x}px,${y}px,0)`;
    },{passive:true});
  }

  const parallax=document.querySelector('.cam>img');
  if(parallax&&window.innerWidth>850){
    const tick=()=>{
      const r=parallax.parentElement.getBoundingClientRect();
      if(r.bottom>0&&r.top<innerHeight){
        const p=(r.top+r.height/2-innerHeight/2)/innerHeight;
        parallax.style.transform=`translate3d(0,${p*-24}px,0) scale(1.04)`;
      }
    };
    tick();
    addEventListener('scroll',tick,{passive:true});
  }
}

document.querySelectorAll('[data-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    [...form.children].forEach(el=>{if(!el.classList.contains('success'))el.hidden=true});
    const success=form.querySelector('.success');
    if(success){success.hidden=false;success.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'})}
  });
});

document.querySelectorAll('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{
  if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target==='_blank')return;
  const href=a.getAttribute('href');
  if(!href||href.startsWith('/#'))return;
  e.preventDefault();
  if(reduce){location.href=href;return}
  document.body.classList.add('leaving');
  setTimeout(()=>location.href=href,170);
}));
