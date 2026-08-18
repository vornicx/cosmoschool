(()=>{
  const state={person:null,goal:null};
  const result=document.querySelector('[data-finder-result]');
  const copy={
    'kids|general':['Kids','Empezar pronto y asociar el inglés con confianza y uso real.','/contacto/','Consultar grupo infantil'],
    'kids|cambridge':['Kids / Cambridge path','Construir base ahora y consultar con Cosmo cuándo tiene sentido iniciar preparación oficial.','/contacto/','Pedir orientación'],
    'kids|flex':['Kids presencial','Para menores, confirma con la academia qué grupos y horarios encajan mejor.','/contacto/','Consultar horarios'],
    'teens|general':['Teens','Reforzar base, soltura y progreso académico con un grupo adecuado a su etapa.','/contacto/','Consultar grupo teen'],
    'teens|cambridge':['Cambridge B1—C2','Si el objetivo es certificación, Cosmo prepara B1, B2, C1 y C2. Primero conviene confirmar el nivel correcto.','/cambridge/','Ver preparación Cambridge'],
    'teens|flex':['Teens','Consulta grupo, nivel y disponibilidad; la prioridad es encajar bien antes que elegir por horario.','/contacto/','Consultar opciones'],
    'adults|general':['Adults','Clases para adultos con opciones presencial y online según la oferta publicada por Cosmo.','/cursos/','Ver cursos de adultos'],
    'adults|cambridge':['Cambridge B1—C2','Curso regular de septiembre a junio o intensivo de aproximadamente un mes, según nivel y disponibilidad.','/cambridge/','Comparar Cambridge'],
    'adults|flex':['Online / One to one','Online para flexibilidad o one to one por las mañanas si necesitas un plan más individual.','/contacto/','Consultar disponibilidad']
  };
  document.querySelectorAll('[data-finder]').forEach(btn=>btn.addEventListener('click',()=>{
    const key=btn.dataset.finder;
    state[key]=btn.dataset.value;
    document.querySelectorAll(`[data-finder="${key}"]`).forEach(x=>x.classList.toggle('is-active',x===btn));
    if(!state.person||!state.goal||!result)return;
    const [title,text,href,label]=copy[`${state.person}|${state.goal}`];
    result.animate([{transform:'translateY(10px)',opacity:.55},{transform:'translateY(0)',opacity:1}],{duration:320,easing:'cubic-bezier(.2,.8,.2,1)'});
    result.innerHTML=`<span>RECOMENDACIÓN COSMO</span><strong>${title}</strong><p>${text}</p><a href="${href}">${label}<span aria-hidden="true">↗</span></a>`;
  }));

  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      entry.target.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.22,.8,.22,1)',fill:'both'});
      observer.unobserve(entry.target);
    }),{threshold:.08});
    document.querySelectorAll('.qv5-proof-grid article,.qv5-camplan-grid article,.qv5-enrol-grid article,.qv5-contact-grid a').forEach(el=>observer.observe(el));
  }
})();
