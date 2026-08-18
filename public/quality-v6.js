(()=>{
  const finder=document.querySelector('.qv5-finder');
  if(finder){
    const state={person:null,goal:null};
    const labels={
      person:{kids:'niños',teens:'adolescentes',adults:'adultos'},
      goal:{general:'mejorar inglés',cambridge:'preparar Cambridge',flex:'buscar una opción flexible'}
    };
    const buttons=[...finder.querySelectorAll('[data-finder]')];
    buttons.forEach(button=>{
      button.setAttribute('aria-pressed',button.classList.contains('is-active')?'true':'false');
      button.addEventListener('click',()=>{
        const group=button.dataset.finder;
        if(group!=='person'&&group!=='goal')return;
        state[group]=button.dataset.value;
        buttons.filter(peer=>peer.dataset.finder===group).forEach(peer=>peer.setAttribute('aria-pressed',peer===button?'true':'false'));

        if(!state.person||!state.goal)return;
        const result=finder.querySelector('[data-finder-result]');
        if(!result)return;
        const primary=result.querySelector(':scope > a');
        if(!primary||result.querySelector('.qv5-result-actions'))return;

        const text=`Hola Cosmo School. Busco clases para ${labels.person[state.person]} y mi objetivo es ${labels.goal[state.goal]}. ¿Podéis orientarme sobre nivel, grupo y disponibilidad?`;
        const whatsapp=document.createElement('a');
        whatsapp.href=`https://wa.me/34643349226?text=${encodeURIComponent(text)}`;
        whatsapp.target='_blank';
        whatsapp.rel='noopener noreferrer';
        whatsapp.innerHTML='Preguntar por WhatsApp <span aria-hidden="true">↗</span>';

        const actions=document.createElement('div');
        actions.className='qv5-result-actions';
        primary.replaceWith(actions);
        actions.append(primary,whatsapp);
      });
    });
  }

  document.querySelectorAll('a[target="_blank"]').forEach(link=>{
    const rel=new Set((link.getAttribute('rel')||'').split(/\s+/).filter(Boolean));
    rel.add('noopener');rel.add('noreferrer');
    link.setAttribute('rel',[...rel].join(' '));
  });

  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
    const elements=document.querySelectorAll('.v6-method-step,.v6-about-card,.v6-enrol-item,.v6-contact-actions a,.v6-level-strip');
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      entry.target.animate(
        [{opacity:.25,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],
        {duration:520,easing:'cubic-bezier(.22,.8,.22,1)',fill:'both'}
      );
      observer.unobserve(entry.target);
    }),{threshold:.12});
    elements.forEach(element=>observer.observe(element));
  }
})();
