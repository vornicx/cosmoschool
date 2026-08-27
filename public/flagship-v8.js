(()=>{
  const body=document.body;
  const route=body?.dataset?.route||'';

  // Keep the strongest quick action relevant to the current page.
  const primary=document.querySelector('.v8-dock-primary b');
  if(primary){
    if(route==='matricula') primary.textContent='Preguntar por matrícula ↗';
    else if(route==='cambridge') primary.textContent='Orientarme con Cambridge ↗';
    else if(route==='contacto') primary.textContent='Abrir conversación ↗';
  }

  // Make existing finder choices expose their selected state to CSS and assistive tech.
  document.querySelectorAll('[data-finder]').forEach(button=>{
    button.setAttribute('aria-pressed',button.classList.contains('is-active')?'true':'false');
    button.addEventListener('click',()=>{
      const group=button.getAttribute('data-finder');
      requestAnimationFrame(()=>{
        document.querySelectorAll(`[data-finder="${group}"]`).forEach(item=>item.setAttribute('aria-pressed',item===button?'true':'false'));
      });
    });
  });

  // Add a subtle scrolled state even if an older header script does not expose one.
  const header=document.querySelector('.header');
  const updateHeader=()=>{
    if(!header)return;
    header.toggleAttribute('data-scrolled',window.scrollY>24);
  };
  updateHeader();
  addEventListener('scroll',updateHeader,{passive:true});

  // External actions should never inherit the prototype tab unexpectedly.
  document.querySelectorAll('a[target="_blank"]').forEach(link=>{
    const rel=new Set((link.getAttribute('rel')||'').split(/\s+/).filter(Boolean));
    rel.add('noopener');rel.add('noreferrer');
    link.setAttribute('rel',[...rel].join(' '));
  });
})();
