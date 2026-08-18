(()=>{
  const centreData={
    'merinos':{small:'CENTRO 01',title:'C/ Merinos, 54',sub:'41400 Écija, Sevilla',route:'https://www.google.com/maps/dir/?api=1&destination=C%2F%20Merinos%2C%2054%2C%2041400%20%C3%89cija%2C%20Sevilla',wa:'https://wa.me/34643349226?text='+encodeURIComponent('Hola Cosmo School. Quiero información y me interesa la sede de C/ Merinos, 54.')},
    'fuente-nueva':{small:'CENTRO 02',title:'C/ Fuente Nueva, 2',sub:'41400 Écija, Sevilla',route:'https://www.google.com/maps/dir/?api=1&destination=C%2F%20Fuente%20Nueva%2C%202%2C%2041400%20%C3%89cija%2C%20Sevilla',wa:'https://wa.me/34643349226?text='+encodeURIComponent('Hola Cosmo School. Quiero información y me interesa la sede de C/ Fuente Nueva, 2.')}
  };

  const switcher=document.querySelector('[data-centre-switch]');
  if(switcher){
    const frame=switcher.querySelector('iframe');const info=switcher.querySelector('[data-centre-info]');
    switcher.querySelectorAll('[data-centre]').forEach(button=>button.addEventListener('click',()=>{
      const key=button.dataset.centre;const data=centreData[key];if(!data)return;
      switcher.querySelectorAll('[data-centre]').forEach(peer=>{const active=peer===button;peer.classList.toggle('is-active',active);peer.setAttribute('aria-selected',String(active));});
      if(frame)frame.src=button.dataset.map;
      if(info){const [small,strong,span]=info.querySelectorAll('small,strong,span');if(small)small.textContent=data.small;if(strong)strong.textContent=data.title;if(span)span.textContent=data.sub;const route=info.querySelector('[data-route-link]');const wa=info.querySelector('[data-centre-wa]');if(route)route.href=data.route;if(wa)wa.href=data.wa;}
      document.querySelectorAll('[data-prefill="centre"]').forEach(select=>{select.value=key;});
    }));
  }

  const params=new URLSearchParams(location.search);
  for(const key of ['person','goal','centre']){
    const value=params.get(key);if(!value)continue;
    document.querySelectorAll(`[data-prefill="${key}"]`).forEach(field=>{if([...field.options].some(option=>option.value===value))field.value=value;});
  }
  const person=params.get('person');const goal=params.get('goal');const centre=params.get('centre');
  if(person)document.querySelectorAll(`.v7-mform input[name="para_quien"][value="${CSS.escape(person)}"]`).forEach(input=>input.checked=true);
  if(goal)document.querySelectorAll('.v7-mform select[name="objetivo"]').forEach(select=>{if([...select.options].some(option=>option.value===goal))select.value=goal;});
  if(centre)document.querySelectorAll('.v7-mform select[name="sede"]').forEach(select=>{if([...select.options].some(option=>option.value===centre))select.value=centre;});

  document.addEventListener('click',event=>{
    const link=event.target.closest('[data-finder-result] a');if(!link||!link.href||!link.href.startsWith(location.origin))return;
    const selectedPerson=document.querySelector('[data-finder="person"].is-active')?.dataset.value;const selectedGoal=document.querySelector('[data-finder="goal"].is-active')?.dataset.value;if(!selectedPerson&&!selectedGoal)return;
    const url=new URL(link.href);if(selectedPerson)url.searchParams.set('person',selectedPerson);if(selectedGoal)url.searchParams.set('goal',selectedGoal);link.href=url.toString();
  },true);

  const seasonal=document.querySelector('[data-seasonal] strong');
  if(seasonal){const m=new Date().getMonth()+1;if(m===3)seasonal.textContent='La matrícula comienza el 1 de abril. Puedes preparar tu consulta ya.';else if(m>=4&&m<=8)seasonal.textContent='Matrícula abierta desde el 1 de abril · consulta grupos y disponibilidad.';else if(m===9)seasonal.textContent='Curso regular septiembre—junio · consulta nivel, grupo y disponibilidad.';else seasonal.textContent='Consulta nivel, formato, grupo y disponibilidad directamente con Cosmo.';}

  const leadForms=document.querySelectorAll('.v7-lead-form,.v7-mform');
  leadForms.forEach(form=>{
    const phone=form.querySelector('input[name="telefono"]');if(phone)phone.addEventListener('input',()=>{phone.value=phone.value.replace(/[^0-9+ ]/g,'').slice(0,18);});
    const attribution={pagina:location.pathname,referencia:document.referrer||'directo',utm_source:params.get('utm_source')||'',utm_medium:params.get('utm_medium')||'',utm_campaign:params.get('utm_campaign')||''};
    Object.entries(attribution).forEach(([name,value])=>{const input=document.createElement('input');input.type='hidden';input.name=name;input.value=value;form.append(input);});
    form.addEventListener('submit',()=>{const button=form.querySelector('button[type="submit"]');if(!button)return;button.disabled=true;button.setAttribute('aria-busy','true');const span=button.querySelector('span');if(span)span.textContent='Enviando…';else button.firstChild.textContent='Enviando… ';});
  });

  document.querySelectorAll('a[target="_blank"]').forEach(link=>{const rel=new Set((link.rel||'').split(/\s+/).filter(Boolean));rel.add('noopener');rel.add('noreferrer');link.rel=[...rel].join(' ');});

  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
    const targets=document.querySelectorAll('.v7-centre-switch,.v7-capture-copy,.v7-lead-form,.v7-intent-rail a,.v7-next li,.v7-mcentres article,.v7-mform');
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.animate([{opacity:.25,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{duration:580,easing:'cubic-bezier(.22,.8,.22,1)',fill:'both'});io.unobserve(entry.target);}),{threshold:.1});targets.forEach(target=>io.observe(target));
  }
})();
