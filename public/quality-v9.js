(() => {
  document.documentElement.classList.add('v9-js');

  const test = document.querySelector('[data-level-test]');
  if (test) {
    const questions = [...test.querySelectorAll('[data-question]')];
    const back = test.querySelector('[data-test-back]');
    const next = test.querySelector('[data-test-next]');
    const submit = test.querySelector('[data-test-submit]');
    const progress = test.querySelector('[data-test-progress]');
    const error = test.querySelector('[data-test-error]');
    const result = document.querySelector('[data-test-result]');
    const restart = result?.querySelector('[data-test-restart]');
    const answers = [0, 1, 0, 1, 2, 0, 1, 0];
    let step = 0;

    const bands = [
      { max: 1, level: 'A1', title: 'Construir una base útil', copy: 'Tu resultado sugiere empezar por estructuras y vocabulario esenciales, con mucha práctica guiada y situaciones cotidianas.' },
      { max: 3, level: 'A2', title: 'Consolidar lo cotidiano', copy: 'Parece que ya reconoces parte de la base y te conviene ganar seguridad al comprender y producir mensajes habituales.' },
      { max: 5, level: 'B1', title: 'Ganar autonomía', copy: 'Tu orientación apunta a un nivel intermedio. El siguiente plan debería revisar también expresión oral, comprensión y escritura.' },
      { max: 6, level: 'B2', title: 'Desarrollar precisión y fluidez', copy: 'La base parece sólida en este test breve. Conviene contrastarla con tareas de comprensión, producción e interacción antes de fijar un examen.' },
      { max: 8, level: 'C1', title: 'Afinar un uso avanzado', copy: 'Has resuelto bien las preguntas de mayor dificultad. Una valoración completa puede confirmar qué destrezas necesitan más trabajo y si C1 es el objetivo adecuado.' }
    ];

    const render = () => {
      questions.forEach((question, index) => { question.hidden = index !== step; });
      if (back) back.hidden = step === 0;
      if (next) next.hidden = step === questions.length - 1;
      if (submit) submit.hidden = step !== questions.length - 1;
      if (progress) progress.textContent = `Pregunta ${step + 1} de ${questions.length}`;
      if (error) error.textContent = '';
      questions[step]?.querySelector('input:checked, input')?.focus({ preventScroll: true });
    };

    const selected = () => questions[step]?.querySelector('input:checked');
    const requireAnswer = () => {
      if (selected()) return true;
      if (error) error.textContent = 'Elige una respuesta para continuar.';
      questions[step]?.querySelector('input')?.focus();
      return false;
    };

    next?.addEventListener('click', () => {
      if (!requireAnswer()) return;
      step = Math.min(step + 1, questions.length - 1);
      render();
    });

    back?.addEventListener('click', () => {
      step = Math.max(step - 1, 0);
      render();
    });

    test.addEventListener('submit', event => {
      event.preventDefault();
      if (!requireAnswer()) return;
      const score = questions.reduce((total, question, index) => {
        const value = Number(question.querySelector('input:checked')?.value ?? -1);
        return total + Number(value === answers[index]);
      }, 0);
      const band = bands.find(item => score <= item.max) || bands.at(-1);
      result.querySelector('[data-level-result]').textContent = band.level;
      result.querySelector('[data-level-title]').textContent = band.title;
      result.querySelector('[data-level-copy]').textContent = band.copy;
      const cta = result.querySelector('[data-level-cta]');
      if (cta) cta.href = `/matricula/?nivel=${encodeURIComponent(band.level)}&goal=unknown`;
      test.hidden = true;
      result.hidden = false;
      try { sessionStorage.setItem('cosmo_level_orientation', band.level); } catch {}
      result.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      result.querySelector('a')?.focus({ preventScroll: true });
      window.dataLayer?.push({ event: 'level_test_complete', level_orientation: band.level, score });
    });

    restart?.addEventListener('click', () => {
      test.reset();
      step = 0;
      result.hidden = true;
      test.hidden = false;
      render();
      test.scrollIntoView({ behavior: 'auto', block: 'start' });
    });

    render();
  }

  const article = document.querySelector('.v9-article');
  if (article) {
    const progress = document.createElement('span');
    progress.className = 'v9-reading-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.append(progress);
    let scheduled = false;
    const update = () => {
      const start = article.offsetTop;
      const distance = Math.max(1, article.offsetHeight - innerHeight);
      const value = Math.min(1, Math.max(0, (scrollY - start) / distance));
      progress.style.transform = `scaleX(${value})`;
      scheduled = false;
    };
    addEventListener('scroll', () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    const label = link.textContent.trim().replace(/\s+/g, ' ').slice(0, 80);
    const kind = link.href.includes('wa.me') ? 'whatsapp' : link.href.startsWith('tel:') ? 'phone' : link.pathname === '/matricula/' ? 'enrolment' : '';
    if (kind) window.dataLayer?.push({ event: 'lead_intent', lead_channel: kind, link_label: label, page_path: location.pathname });
  });
})();
