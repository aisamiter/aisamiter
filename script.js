/* ============================================================
   PABLO SAMITER — Portfolio Landing Page
   Interactions: Nav, Scroll Reveal, Mobile Menu, Active Links,
                 Language Toggle (EN / ES)
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Sticky Nav ──────────────────────────────────────── */
  const nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── 2. Mobile Menu ─────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── 3. Scroll Reveal ───────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  /* ── 4. Active Nav Link ─────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let currentSection = '';

    sections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ── 5. Smooth Scroll (fallback for older browsers) ─────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 6. Hero scroll indicator hide on scroll ────────────── */
  const heroScroll = document.querySelector('.hero-scroll');
  if (heroScroll) {
    window.addEventListener('scroll', () => {
      heroScroll.style.opacity = window.scrollY > 100 ? '0' : '1';
    }, { passive: true });
  }

  /* ── 7. Language Toggle ─────────────────────────────────── */
  const translations = {
    en: {
      // Nav
      'nav.problem': 'Problem',
      'nav.work': 'Work',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.cta': "Let's Talk",
      // Hero
      'hero.badge': '<span class="hero-badge-dot"></span>AI Automation Strategist &nbsp;·&nbsp; Agent Orchestrator',
      'hero.title': "I don't just build<br/>the future of work.<br/><span class=\"activate-word\">I activate it.</span>",
      'hero.desc': "I bridge the gap between AI strategy and human readiness. Industrial Engineer. 20+ years of enterprise transformation. Now designing multi-agent systems — and driving the organizational change that makes them stick.",
      'hero.cta1': 'See My Work',
      'hero.cta2': "Let's Talk",
      'hero.location': 'Buenos Aires, Argentina · Open to Remote',
      'hero.scroll': 'scroll',
      // Gap
      'gap.label': 'The Problem I Solve',
      'gap.h2': "Most organizations<br/>don't have an AI problem.<br/>They have an <span style=\"color:var(--accent)\">adoption problem.</span>",
      'gap.failA.label': 'Failure Mode A',
      'gap.failA.h3': 'AI Capability is ready',
      'gap.failA.p': 'The technology exists. The budget is allocated. The pilots ran. And then… nothing scales.',
      'gap.center.label': 'The Gap',
      'gap.center.h3': 'Where transformation stalls',
      'gap.center.p': 'Between strategy and adoption. Between tools and behavior change. Between pilot and production.',
      'gap.failB.label': 'Failure Mode B',
      'gap.failB.h3': "Organizational readiness isn't",
      'gap.failB.p': "Or the people are enthusiastic, but there's no one who can architect what comes next.",
      'gap.conclusion': "That gap is <strong>exactly where I operate</strong>. I'm not an AI researcher. I'm not a traditional L&D consultant. I'm the rare profile that does both: I design multi-agent systems <em>and</em> lead the human adoption change that makes them stick.",
      // Proof
      'proof.1.label': 'AI Ambassadors trained & activated',
      'proof.1.sub': 'Global Hall of Fame',
      'proof.2.label': 'Employees enabled on AI',
      'proof.2.sub': 'Post-merger deployment',
      'proof.3.label': 'Employees, global L&D programs',
      'proof.3.sub': '30+ countries',
      'proof.4.label': 'Years enterprise transformation',
      'proof.4.org': 'Supply chain → L&D → AI',
      'proof.4.sub': 'Industrial Engineer lens',
      // Stack layers
      'layers.label': 'The Rare Combination',
      'layers.h2': "Strategy. Execution. Adoption.<br/><span style=\"color:var(--accent)\">All three.</span>",
      'layers.p': "Most AI professionals pick one axis. The market is starving for someone who connects all three — and has the receipts to prove it.",
      'layers.card1.num': '01 / PROVEN AT SCALE',
      'layers.card1.h3': 'Enterprise Track Record',
      'layers.card1.p': "These aren't projects — they're operating history. At scale, in regulated environments, with real organizational complexity.",
      'layers.card1.li1': 'HSBC Americas AI Ambassador Network — 120+ people, global Hall of Fame recognition',
      'layers.card1.li2': 'Microsoft Copilot rollout — 10,000+ employees post Galicia–HSBC acquisition',
      'layers.card1.li3': 'TenarisUniversity — global L&D programs across 27K employees, 30+ countries',
      'layers.card2.num': '02 / ACTIVE BUILDER',
      'layers.card2.h3': 'Production Tools, Not Demos',
      'layers.card2.p': "Every project in my portfolio is production-first. Built with real stacks, for real problems, with real iteration history.",
      'layers.card2.li1': 'Praxis — multi-agent L&D pipeline (TNA → Content Creator → Delivery Agent)',
      'layers.card2.li2': 'CV Forge Pro — AI CV optimization (React 19, Supabase, Groq API)',
      'layers.card2.li3': 'Job Search Automation — 6 ATS platforms, Gmail integration, CRM layer',
      'layers.card2.li4': 'Onboarding Game — real-time multiplayer simulation, 8 live KPIs',
      'layers.card3.num': '03 / SYSTEMS THINKER',
      'layers.card3.h3': 'Industrial Engineer Lens',
      'layers.card3.p': "Industrial Engineering is the study of how humans and systems interact at scale. When I look at a failing AI rollout, I see a flow problem.",
      'layers.card3.li1': 'Design for scale — architecture before implementation',
      'layers.card3.li2': 'Build for adoption — the human layer is not optional',
      'layers.card3.li3': 'Govern for sustainability — compliance and governance baked in',
      // Projects
      'projects.label': 'Active Projects',
      'projects.h2': "Production-first.<br/>Not toy demos.",
      'projects.p': "Every project here has a lineage. That's not experimentation — it's engineering methodology applied to software.",
      'projects.praxis.tagline': 'Multi-Agent L&D Pipeline',
      'projects.praxis.desc': "Three-agent pipeline: TNA Agent analyzes skill gaps → Content Creator Agent generates role-specific assets → Delivery Agent handles deployment. L&D content production from days to minutes.",
      'projects.praxis.lineage': '↑ Evolved from Steelmind AI proof-of-concept',
      'projects.praxis.impact': 'L&D content: days → minutes',
      'projects.cv.tagline': 'AI-Powered CV Optimization Platform',
      'projects.cv.desc': "Surgical CV adaptation with ATS scoring and fabrication detection. PDF extraction, keyword analysis, change tracking, cover letter generation, and multi-format export.",
      'projects.cv.impact': 'ATS scoring · Cover letters · 30-60-90 day plans',
      'projects.job.tagline': 'ATS Intelligence System',
      'projects.job.desc': "Daily briefing system scanning 6 global ATS platforms across 9 role categories. Anti-noise filters, seniority gates, HTML email scheduling, and application status tracking.",
      'projects.job.lineage': '↑ 3rd gen, evolved from Boolean Search builder',
      'projects.job.impact': '6 ATS platforms · 9 role categories · Daily briefing',
      'projects.onboarding.tagline': 'Real-Time Business Simulation',
      'projects.onboarding.desc': "Multiplayer corporate onboarding simulation with live KPI management. 8 real-time metrics: Revenue, Safety, ESG, Morale. Classic (scored) and Simulation (strategic) modes.",
      'projects.onboarding.lineage': '↑ 2nd gen, evolved from BizSim + SteelSim',
      'projects.onboarding.impact': '8 live KPIs · Multiplayer · Two game modes',
      'projects.iter.h4': 'The Iteration Pattern — Engineering Methodology Applied to Software',
      'projects.iter.th1': 'Current',
      'projects.iter.th2': 'Predecessor',
      'projects.iter.th3': 'What changed',
      'projects.iter.td1': 'Full multi-agent architecture, production-grade',
      'projects.iter.td2': 'Real-time multiplayer, Supabase Realtime',
      'projects.iter.td3': '6 ATS platforms, Gmail integration, CRM layer',
      // Tech stack
      'stack.label': 'Tech Stack',
      'stack.h2': 'The tools I build with.',
      // Services
      'services.label': 'How I Can Help',
      'services.h2': "Two tracks.<br/>One rare profile.",
      'services.track1.badge': 'Track 1 — In-House Roles',
      'services.track1.h3': 'Strategic Leadership',
      'services.track1.p': 'Enterprise companies undergoing AI transformation and needing someone who can lead strategy AND people change simultaneously.',
      'services.track1.s1.h4': 'CLO / Head of L&D (AI-first)',
      'services.track1.s1.p': 'Rebuild the learning function around AI — and build the tech layer yourself.',
      'services.track1.s2.h4': 'Head of AI Enablement / AI Adoption',
      'services.track1.s2.p': 'The emerging title of 2025–2026. Target: tech-forward enterprises, financial services, consulting firms.',
      'services.track1.s3.h4': 'VP Customer Success (AI SaaS)',
      'services.track1.s3.p': "You've been on the buyer side at scale — you know why adoption fails and how to fix it.",
      'services.track1.s4.h4': 'Chief of Staff / AI Strategy',
      'services.track1.s4.p': 'Roles that connect AI product to organizational readiness — translating tech to people and back.',
      'services.track2.badge': 'Track 2 — Consulting',
      'services.track2.h3': 'Strategic Engagements',
      'services.track2.p': 'Targeted consulting engagements with clear scope, clear deliverables, and deep enterprise context.',
      'services.track2.s1.h4': 'AI Adoption Diagnostic',
      'services.track2.s1.p': '4-week engagement. Assess AI maturity, identify friction points, deliver 90-day activation roadmap.',
      'services.track2.s2.h4': 'Agent Architecture & Implementation',
      'services.track2.s2.p': 'Design and deploy multi-agent workflows for L&D, HR, or operations use cases.',
      'services.track2.s3.h4': 'Executive AI Fluency Programs',
      'services.track2.s3.p': 'Design and delivery of AI literacy for leadership teams and senior managers.',
      'services.track2.s4.h4': 'Post-M&A AI Integration',
      'services.track2.s4.p': 'Specific expertise from the Galicia–HSBC acquisition. High-value, high-urgency entry point.',
      'services.cta': "Let's find the right fit &nbsp;→",
      // Contact
      'contact.label': "Let's Talk",
      'contact.h2': "The gap between AI capability<br/>and organizational readiness?<br/><span>That's where I work.</span>",
      'contact.p': "Whether you need a strategic leader who can also architect the systems, or a consultant who's done it at enterprise scale — let's see if there's a fit.",
      'contact.meta': '📍 Buenos Aires, Argentina &nbsp;·&nbsp; Open to remote &amp; global',
      'contact.open': 'Open to: Senior in-house AI Enablement roles &nbsp;·&nbsp; Strategic consulting',
      // Footer
      'footer.left': '<strong>Pablo Samiter</strong> &nbsp;·&nbsp; AI Automation Strategist &amp; Agent Orchestrator &nbsp;·&nbsp; 2026',
    },

    es: {
      // Nav
      'nav.problem': 'Problema',
      'nav.work': 'Proyectos',
      'nav.services': 'Servicios',
      'nav.contact': 'Contacto',
      'nav.cta': 'Hablemos',
      // Hero
      'hero.badge': '<span class="hero-badge-dot"></span>Estratega de Automatización IA &nbsp;·&nbsp; Orquestador de Agentes',
      'hero.title': "No solo construyo<br/>el futuro del trabajo.<br/><span class=\"activate-word\">Lo activo.</span>",
      'hero.desc': "Cierro la brecha entre estrategia de IA y preparación humana. Ingeniero Industrial. Más de 20 años de transformación empresarial. Ahora diseñando sistemas multi-agente — y liderando el cambio organizacional que los hace perdurar.",
      'hero.cta1': 'Ver mis proyectos',
      'hero.cta2': 'Hablemos',
      'hero.location': 'Buenos Aires, Argentina · Disponible remotamente',
      'hero.scroll': 'bajar',
      // Gap
      'gap.label': 'El Problema que Resuelvo',
      'gap.h2': "La mayoría de las organizaciones<br/>no tienen un problema de IA.<br/>Tienen un <span style=\"color:var(--accent)\">problema de adopción.</span>",
      'gap.failA.label': 'Modo de Fallo A',
      'gap.failA.h3': 'La capacidad de IA está lista',
      'gap.failA.p': 'La tecnología existe. El presupuesto está asignado. Los pilotos corrieron. Y luego… nada escala.',
      'gap.center.label': 'La Brecha',
      'gap.center.h3': 'Donde la transformación se detiene',
      'gap.center.p': 'Entre la estrategia y la adopción. Entre las herramientas y el cambio de comportamiento. Entre el piloto y la producción.',
      'gap.failB.label': 'Modo de Fallo B',
      'gap.failB.h3': 'La organización no está lista',
      'gap.failB.p': 'O las personas son entusiastas, pero no hay nadie que pueda arquitectar lo que viene después.',
      'gap.conclusion': "Esa brecha es <strong>exactamente donde opero</strong>. No soy investigador de IA. No soy consultor de L&D tradicional. Soy el perfil raro que hace ambas cosas: diseño sistemas multi-agente <em>y</em> lidero el cambio de adopción humana que los hace perdurar.",
      // Proof
      'proof.1.label': 'Embajadores de IA entrenados y activados',
      'proof.1.sub': 'Hall of Fame Global',
      'proof.2.label': 'Empleados habilitados en IA',
      'proof.2.sub': 'Despliegue post-fusión',
      'proof.3.label': 'Empleados, programas globales de L&D',
      'proof.3.sub': '30+ países',
      'proof.4.label': 'Años de transformación empresarial',
      'proof.4.org': 'Supply chain → L&D → IA',
      'proof.4.sub': 'Visión de Ingeniero Industrial',
      // Stack layers
      'layers.label': 'La Combinación Única',
      'layers.h2': "Estrategia. Ejecución. Adopción.<br/><span style=\"color:var(--accent)\">Las tres.</span>",
      'layers.p': "La mayoría de los profesionales de IA eligen un eje. El mercado tiene hambre de alguien que conecte los tres — y tenga los resultados que lo demuestran.",
      'layers.card1.num': '01 / PROBADO A ESCALA',
      'layers.card1.h3': 'Historial Empresarial',
      'layers.card1.p': "No son proyectos — son historial operativo. A escala, en entornos regulados, con complejidad organizacional real.",
      'layers.card1.li1': 'Red de Embajadores de IA HSBC Americas — 120+ personas, reconocimiento global Hall of Fame',
      'layers.card1.li2': 'Despliegue Microsoft Copilot — 10.000+ empleados post adquisición Galicia–HSBC',
      'layers.card1.li3': 'TenarisUniversity — programas globales de L&D para 27K empleados, 30+ países',
      'layers.card2.num': '02 / CONSTRUCTOR ACTIVO',
      'layers.card2.h3': 'Herramientas en Producción, No Demos',
      'layers.card2.p': "Cada proyecto en mi portfolio es production-first. Construido con stacks reales, para problemas reales, con historial de iteración real.",
      'layers.card2.li1': 'Praxis — pipeline multi-agente de L&D (TNA → Content Creator → Delivery Agent)',
      'layers.card2.li2': 'CV Forge Pro — optimización de CV con IA (React 19, Supabase, Groq API)',
      'layers.card2.li3': 'Job Search Automation — 6 plataformas ATS, integración Gmail, capa CRM',
      'layers.card2.li4': 'Onboarding Game — simulación multijugador en tiempo real, 8 KPIs en vivo',
      'layers.card3.num': '03 / PENSADOR SISTÉMICO',
      'layers.card3.h3': 'Visión de Ingeniero Industrial',
      'layers.card3.p': "La Ingeniería Industrial estudia cómo los humanos y los sistemas interactúan a escala. Cuando miro un despliegue de IA fallido, veo un problema de flujo.",
      'layers.card3.li1': 'Diseñar para escala — arquitectura antes que implementación',
      'layers.card3.li2': 'Construir para adopción — la capa humana no es opcional',
      'layers.card3.li3': 'Gobernar para sostenibilidad — compliance y governance incorporados',
      // Projects
      'projects.label': 'Proyectos Activos',
      'projects.h2': "Production-first.<br/>No demos de juguete.",
      'projects.p': "Cada proyecto aquí tiene un linaje. Eso no es experimentación — es metodología de ingeniería aplicada al software.",
      'projects.praxis.tagline': 'Pipeline Multi-Agente de L&D',
      'projects.praxis.desc': "Pipeline de tres agentes: el Agente TNA analiza brechas de habilidades → el Agente Content Creator genera recursos por rol → el Agente Delivery maneja el despliegue. Producción de contenido L&D: de días a minutos.",
      'projects.praxis.lineage': '↑ Evolucionado desde el proof-of-concept Steelmind AI',
      'projects.praxis.impact': 'Contenido L&D: días → minutos',
      'projects.cv.tagline': 'Plataforma de Optimización de CV con IA',
      'projects.cv.desc': "Adaptación quirúrgica de CV con scoring ATS y detección de fabricación. Extracción de PDF, análisis de keywords, seguimiento de cambios, generación de cartas de presentación y exportación multi-formato.",
      'projects.cv.impact': 'Scoring ATS · Cartas de presentación · Planes 30-60-90 días',
      'projects.job.tagline': 'Sistema de Inteligencia ATS',
      'projects.job.desc': "Sistema de briefing diario que escanea 6 plataformas ATS globales en 9 categorías de roles. Filtros anti-ruido, filtros de seniority, programación de emails HTML y seguimiento del estado de postulaciones.",
      'projects.job.lineage': '↑ 3ra gen, evolucionado desde Boolean Search builder',
      'projects.job.impact': '6 plataformas ATS · 9 categorías de roles · Briefing diario',
      'projects.onboarding.tagline': 'Simulación de Negocios en Tiempo Real',
      'projects.onboarding.desc': "Simulación multijugador de onboarding corporativo con gestión de KPIs en vivo. 8 métricas en tiempo real: Revenue, Seguridad, ESG, Moral. Modos Clásico (puntaje) y Simulación (estratégico).",
      'projects.onboarding.lineage': '↑ 2da gen, evolucionado desde BizSim + SteelSim',
      'projects.onboarding.impact': '8 KPIs en vivo · Multijugador · Dos modos de juego',
      'projects.iter.h4': 'El Patrón de Iteración — Metodología de Ingeniería Aplicada al Software',
      'projects.iter.th1': 'Actual',
      'projects.iter.th2': 'Predecesor',
      'projects.iter.th3': 'Qué cambió',
      'projects.iter.td1': 'Arquitectura multi-agente completa, nivel producción',
      'projects.iter.td2': 'Multijugador en tiempo real, Supabase Realtime',
      'projects.iter.td3': '6 plataformas ATS, integración Gmail, capa CRM',
      // Tech stack
      'stack.label': 'Stack Tecnológico',
      'stack.h2': 'Las herramientas con las que construyo.',
      // Services
      'services.label': 'Cómo Puedo Ayudar',
      'services.h2': "Dos perfiles.<br/>Una combinación única.",
      'services.track1.badge': 'Track 1 — Roles In-House',
      'services.track1.h3': 'Liderazgo Estratégico',
      'services.track1.p': 'Empresas en transformación de IA que necesitan a alguien que pueda liderar estrategia Y cambio de personas simultáneamente.',
      'services.track1.s1.h4': 'CLO / Head of L&D (AI-first)',
      'services.track1.s1.p': 'Reconstruir la función de aprendizaje en torno a la IA — y construir la capa tecnológica uno mismo.',
      'services.track1.s2.h4': 'Head of AI Enablement / AI Adoption',
      'services.track1.s2.p': 'El título emergente de 2025–2026. Foco: empresas tech-forward, servicios financieros, consultoras.',
      'services.track1.s3.h4': 'VP Customer Success (AI SaaS)',
      'services.track1.s3.p': 'Estuviste del lado del comprador a escala — sabés por qué falla la adopción y cómo arreglarlo.',
      'services.track1.s4.h4': 'Chief of Staff / AI Strategy',
      'services.track1.s4.p': 'Roles que conectan el producto de IA con la preparación organizacional — traduciendo tecnología a personas y viceversa.',
      'services.track2.badge': 'Track 2 — Consultoría',
      'services.track2.h3': 'Engagements Estratégicos',
      'services.track2.p': 'Engagements de consultoría focalizados con alcance claro, entregables claros y contexto empresarial profundo.',
      'services.track2.s1.h4': 'Diagnóstico de Adopción de IA',
      'services.track2.s1.p': 'Engagement de 4 semanas. Evaluar madurez de IA, identificar puntos de fricción, entregar roadmap de activación de 90 días.',
      'services.track2.s2.h4': 'Arquitectura e Implementación de Agentes',
      'services.track2.s2.p': 'Diseñar y desplegar workflows multi-agente para casos de uso de L&D, RRHH u operaciones.',
      'services.track2.s3.h4': 'Programas de Alfabetización en IA para Ejecutivos',
      'services.track2.s3.p': 'Diseño y dictado de alfabetización en IA para equipos de liderazgo y gerentes senior.',
      'services.track2.s4.h4': 'Integración de IA Post-M&A',
      'services.track2.s4.p': 'Expertise específica desde la adquisición Galicia–HSBC. Punto de entrada de alto valor y alta urgencia.',
      'services.cta': "Encontremos el fit correcto &nbsp;→",
      // Contact
      'contact.label': 'Hablemos',
      'contact.h2': "¿La brecha entre capacidad de IA<br/>y preparación organizacional?<br/><span>Ahí es donde trabajo.</span>",
      'contact.p': "Tanto si necesitás un líder estratégico que también pueda arquitectar los sistemas, como un consultor que lo ha hecho a escala empresarial — veamos si hay fit.",
      'contact.meta': '📍 Buenos Aires, Argentina &nbsp;·&nbsp; Disponible para trabajo remoto y global',
      'contact.open': 'Abierto a: Roles senior de AI Enablement in-house &nbsp;·&nbsp; Consultoría estratégica',
      // Footer
      'footer.left': '<strong>Pablo Samiter</strong> &nbsp;·&nbsp; Estratega de Automatización IA &amp; Orquestador de Agentes &nbsp;·&nbsp; 2026',
    }
  };

  const pageTitles = {
    en: 'Pablo Samiter — AI Automation Strategist & Agent Orchestrator',
    es: 'Pablo Samiter — Estratega de Automatización IA & Orquestador de Agentes'
  };

  function applyLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
    document.documentElement.lang = lang;
    document.title = pageTitles[lang];
  }

  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
    langToggle.textContent = lang === 'en' ? 'ES' : 'EN';
    langToggle.setAttribute('aria-label', lang === 'en' ? 'Cambiar a Español' : 'Switch to English');
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'es' : 'en');
    });
  }

  // Apply saved or default language on load
  setLanguage(currentLang);

})();
