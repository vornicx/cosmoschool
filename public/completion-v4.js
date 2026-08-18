(() => {
  const phone = '34643349226';

  const labels = {
    age: {
      kids: '4–11 años',
      teens: '12–17 años',
      adults: '18+ años'
    },
    goal: {
      progress: 'avanzar con el inglés',
      cambridge: 'preparar Cambridge',
      intensive: 'hacer un intensivo'
    },
    format: {
      presencial: 'presencial',
      online: 'online',
      one: 'one to one'
    }
  };

  const recommendation = ({ age, goal, format }) => {
    if (!age || !goal || !format) {
      return {
        title: 'Elige tres opciones y te orientamos.',
        copy: 'No es un test de nivel. Solo sirve para llevarte a la conversación correcta con la academia sin hacerte perder tiempo.'
      };
    }

    let title = 'Plan personalizado';
    let copy = '';

    if (age === 'kids') {
      title = goal === 'cambridge' ? 'Kids + objetivo Cambridge' : 'Curso Kids';
      copy = 'Por edad, el punto de partida natural es un grupo infantil. Cosmo puede confirmar nivel, disponibilidad y el formato que mejor encaje.';
    } else if (age === 'teens') {
      title = goal === 'cambridge' ? 'Teens + preparación Cambridge' : 'Curso Teens';
      copy = 'La opción más lógica es partir del recorrido para adolescentes y ajustar el grupo al nivel y al objetivo académico.';
    } else if (goal === 'intensive') {
      title = 'Intensivo Cambridge';
      copy = 'Si buscas avanzar en un periodo concentrado, pregunta por los intensivos de preparación B1, B2, C1 o C2 y por la próxima convocatoria.';
    } else if (goal === 'cambridge') {
      title = 'Preparación Cambridge B1–C2';
      copy = 'Lo adecuado es confirmar tu nivel actual y el examen objetivo para entrar en el grupo de preparación que corresponda.';
    } else if (format === 'one') {
      title = 'One to one';
      copy = 'Si necesitas máxima adaptación de ritmo, objetivo u horario, una opción individual permite trabajar un plan mucho más específico.';
    } else {
      title = 'Curso de adultos';
      copy = 'La opción base es un curso para adultos y, a partir de ahí, ajustar modalidad, nivel y ritmo con la academia.';
    }

    if (format === 'online') {
      copy += ' Has indicado que prefieres modalidad online.';
    } else if (format === 'presencial') {
      copy += ' Has indicado que prefieres asistir presencialmente en Écija.';
    } else if (format === 'one' && !copy.toLowerCase().includes('individual')) {
      copy += ' También has indicado preferencia por un formato one to one.';
    }

    return { title, copy };
  };

  const buildWhatsApp = state => {
    const age = labels.age[state.age];
    const goal = labels.goal[state.goal];
    const format = labels.format[state.format];
    const text = `Hola Cosmo School. Estoy buscando una opción para ${age}, con el objetivo de ${goal}, y preferencia por formato ${format}. ¿Podéis orientarme sobre el curso y disponibilidad?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  document.querySelectorAll('[data-course-advisor]').forEach(root => {
    const state = { age: '', goal: '', format: '' };
    const title = root.querySelector('[data-advisor-title]');
    const copy = root.querySelector('[data-advisor-copy]');
    const cta = root.querySelector('[data-advisor-cta]');

    const render = () => {
      const result = recommendation(state);
      if (title) title.textContent = result.title;
      if (copy) copy.textContent = result.copy;

      const complete = Boolean(state.age && state.goal && state.format);
      if (cta) {
        cta.setAttribute('aria-disabled', complete ? 'false' : 'true');
        cta.tabIndex = complete ? 0 : -1;
        if (complete) cta.href = buildWhatsApp(state);
        else cta.removeAttribute('href');
      }
    };

    root.querySelectorAll('[data-advisor-choice]').forEach(button => {
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        const group = button.dataset.group;
        const value = button.dataset.value;
        if (!group || !value || !(group in state)) return;

        state[group] = value;
        root.querySelectorAll(`[data-advisor-choice][data-group="${group}"]`).forEach(peer => {
          peer.setAttribute('aria-pressed', peer === button ? 'true' : 'false');
        });
        render();
      });
    });

    render();
  });

  document.querySelectorAll('.cosmo-faq details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      const parent = detail.closest('.cosmo-faq__list');
      if (!parent) return;
      parent.querySelectorAll('details[open]').forEach(other => {
        if (other !== detail) other.open = false;
      });
    });
  });
})();
