/* ============================================================
   PABLO SAMITER — i18n (EN / ES)
   Translations + language switching logic
   All translation strings are developer-controlled static content.
   ============================================================ */

const I18N = {
  translations: {
    en: {
      // Nav
      'nav.problem': 'Problem',
      'nav.work': 'Work',
      'nav.stack': 'Stack',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.cta': "Let's Talk",

      // Hero
      'hero.badge': 'AI Automation Strategist \u00a0\u00b7\u00a0 Agent Orchestrator',
      'hero.title': 'I don\'t just build<br/>the future of work.<br/><span class="activate-word">I activate it.</span>',
      'hero.desc': 'I bridge the gap between AI strategy and human readiness. Industrial Engineer. 20+ years of enterprise transformation. Now designing multi-agent systems \u2014 and driving the organizational change that makes them stick.',
      'hero.cta1': 'See My Work',
      'hero.cta2': "Let's Talk",
      'hero.location': 'Buenos Aires, Argentina \u00b7 Open to Remote',

      // Gap
      'gap.label': 'The Problem I Solve',
      'gap.title': 'Most organizations<br/>don\'t have an AI problem.<br/>They have an <span style="color:var(--accent)">adoption problem.</span>',
      'gap.failA.label': 'Failure Mode A',
      'gap.failA.title': 'AI Capability is ready',
      'gap.failA.desc': 'The technology exists. The budget is allocated. The pilots ran. And then\u2026 nothing scales.',
      'gap.center.label': 'The Gap',
      'gap.center.title': 'Where transformation stalls',
      'gap.center.desc': 'Between strategy and adoption. Between tools and behavior change. Between pilot and production.',
      'gap.failB.label': 'Failure Mode B',
      'gap.failB.title': 'Organizational readiness isn\'t',
      'gap.failB.desc': 'Or the people are enthusiastic, but there\'s no one who can architect what comes next.',
      'gap.conclusion': 'That gap is <strong>exactly where I operate</strong>. I\'m not an AI researcher. I\'m not a traditional L&D consultant. I\'m the rare profile that does both: I design multi-agent systems <em>and</em> lead the human adoption change that makes them stick.',

      // Proof
      'proof.1.label': 'AI Ambassadors trained &amp; activated',
      'proof.1.org': 'HSBC Americas',
      'proof.1.sub': 'Global Hall of Fame',
      'proof.2.label': 'Employees enabled on AI',
      'proof.2.org': 'Microsoft Copilot',
      'proof.2.sub': 'Post-merger deployment',
      'proof.3.label': 'Employees, global L&amp;D programs',
      'proof.3.org': 'TenarisUniversity',
      'proof.3.sub': '30+ countries',
      'proof.4.label': 'Years enterprise transformation',
      'proof.4.org': 'Supply chain \u2192 L&amp;D \u2192 AI',
      'proof.4.sub': 'Industrial Engineer lens',

      // Stack Layers
      'stacklayers.label': 'The Rare Combination',
      'stacklayers.title': 'Strategy. Execution. Adoption.<br/><span style="color:var(--accent)">All three.</span>',
      'stacklayers.desc': 'Most AI professionals pick one axis. The market is starving for someone who connects all three \u2014 and has the receipts to prove it.',
      'stacklayers.card1.num': '01 / PROVEN AT SCALE',
      'stacklayers.card1.title': 'Enterprise Track Record',
      'stacklayers.card1.desc': 'These aren\'t projects \u2014 they\'re operating history. At scale, in regulated environments, with real organizational complexity.',
      'stacklayers.card1.li1': 'HSBC Americas AI Ambassador Network \u2014 120+ people, global Hall of Fame recognition',
      'stacklayers.card1.li2': 'Microsoft Copilot rollout \u2014 10,000+ employees post Galicia\u2013HSBC acquisition',
      'stacklayers.card1.li3': 'TenarisUniversity \u2014 global L&amp;D programs across 27K employees, 30+ countries',
      'stacklayers.card2.num': '02 / ACTIVE BUILDER',
      'stacklayers.card2.title': 'Production Tools, Not Demos',
      'stacklayers.card2.desc': 'Every project in my portfolio is production-first. Built with real stacks, for real problems, with real iteration history.',
      'stacklayers.card2.li1': 'Praxis \u2014 multi-agent L&amp;D pipeline (TNA \u2192 Content Creator \u2192 Delivery Agent)',
      'stacklayers.card2.li2': 'CV Forge Pro \u2014 AI CV optimization (React 19, Supabase, Groq API)',
      'stacklayers.card2.li3': 'Job Search Automation \u2014 6 ATS platforms, Gmail integration, CRM layer',
      'stacklayers.card2.li4': 'Onboarding Game \u2014 real-time multiplayer simulation, 8 live KPIs',
      'stacklayers.card3.num': '03 / SYSTEMS THINKER',
      'stacklayers.card3.title': 'Industrial Engineer Lens',
      'stacklayers.card3.desc': 'Industrial Engineering is the study of how humans and systems interact at scale. When I look at a failing AI rollout, I see a flow problem.',
      'stacklayers.card3.li1': 'Design for scale \u2014 architecture before implementation',
      'stacklayers.card3.li2': 'Build for adoption \u2014 the human layer is not optional',
      'stacklayers.card3.li3': 'Govern for sustainability \u2014 compliance and governance baked in',

      // Projects
      'projects.label': 'Active Projects',
      'projects.title': 'Production-first.<br/>Not toy demos.',
      'projects.desc': 'Every project here has a lineage. That\'s not experimentation \u2014 it\'s engineering methodology applied to software.',
      'projects.praxis.tagline': 'Multi-Agent L&amp;D Pipeline',
      'projects.praxis.desc': 'Three-agent pipeline: TNA Agent analyzes skill gaps \u2192 Content Creator Agent generates role-specific assets \u2192 Delivery Agent handles deployment. L&amp;D content production from days to minutes.',
      'projects.praxis.lineage': '\u2191 Evolved from Steelmind AI proof-of-concept',
      'projects.praxis.impact': 'L&amp;D content: days \u2192 minutes',
      'projects.cvforge.tagline': 'AI-Powered CV Optimization Platform',
      'projects.cvforge.desc': 'Surgical CV adaptation with ATS scoring and fabrication detection. PDF extraction, keyword analysis, change tracking, cover letter generation, and multi-format export.',
      'projects.cvforge.impact': 'ATS scoring \u00b7 Cover letters \u00b7 30-60-90 day plans',
      'projects.jobsearch.tagline': 'ATS Intelligence System',
      'projects.jobsearch.desc': 'Daily briefing system scanning 6 global ATS platforms across 9 role categories. Anti-noise filters, seniority gates, HTML email scheduling, and application status tracking.',
      'projects.jobsearch.lineage': '\u2191 3rd gen, evolved from Boolean Search builder',
      'projects.jobsearch.impact': '6 ATS platforms \u00b7 9 role categories \u00b7 Daily briefing',
      'projects.onboarding.tagline': 'Real-Time Business Simulation',
      'projects.onboarding.desc': 'Multiplayer corporate onboarding simulation with live KPI management. 8 real-time metrics: Revenue, Safety, ESG, Morale. Classic (scored) and Simulation (strategic) modes.',
      'projects.onboarding.lineage': '\u2191 2nd gen, evolved from BizSim + SteelSim',
      'projects.onboarding.impact': '8 live KPIs \u00b7 Multiplayer \u00b7 Two game modes',

      // Iteration table
      'iteration.title': 'The Iteration Pattern \u2014 Engineering Methodology Applied to Software',
      'iteration.th1': 'Current',
      'iteration.th2': 'Predecessor',
      'iteration.th3': 'What changed',
      'iteration.row1.change': 'Full multi-agent architecture, production-grade',
      'iteration.row2.change': 'Real-time multiplayer, Supabase Realtime',
      'iteration.row3.change': '6 ATS platforms, Gmail integration, CRM layer',

      // Tech Stack
      'stack.label': 'Tech Stack',
      'stack.title': 'The tools I build with.',
      'stack.ai': 'AI / LLM',
      'stack.frontend': 'Frontend',
      'stack.backend': 'Backend',
      'stack.database': 'Database',
      'stack.automation': 'Automation',
      'stack.prototyping': 'Prototyping &amp; Other',

      // Services
      'services.label': 'How I Can Help',
      'services.title': 'Two tracks.<br/>One rare profile.',
      'services.track1.badge': 'Track 1 \u2014 In-House Roles',
      'services.track1.title': 'Strategic Leadership',
      'services.track1.desc': 'Enterprise companies undergoing AI transformation and needing someone who can lead strategy AND people change simultaneously.',
      'services.track1.s1.title': 'CLO / Head of L&amp;D (AI-first)',
      'services.track1.s1.desc': 'Rebuild the learning function around AI \u2014 and build the tech layer yourself.',
      'services.track1.s2.title': 'Head of AI Enablement / AI Adoption',
      'services.track1.s2.desc': 'The emerging title of 2025\u20132026. Target: tech-forward enterprises, financial services, consulting firms.',
      'services.track1.s3.title': 'VP Customer Success (AI SaaS)',
      'services.track1.s3.desc': 'You\'ve been on the buyer side at scale \u2014 you know why adoption fails and how to fix it.',
      'services.track1.s4.title': 'Chief of Staff / AI Strategy',
      'services.track1.s4.desc': 'Roles that connect AI product to organizational readiness \u2014 translating tech to people and back.',
      'services.track2.badge': 'Track 2 \u2014 Consulting',
      'services.track2.title': 'Strategic Engagements',
      'services.track2.desc': 'Targeted consulting engagements with clear scope, clear deliverables, and deep enterprise context.',
      'services.track2.s1.title': 'AI Adoption Diagnostic',
      'services.track2.s1.desc': '4-week engagement. Assess AI maturity, identify friction points, deliver 90-day activation roadmap.',
      'services.track2.s2.title': 'Agent Architecture &amp; Implementation',
      'services.track2.s2.desc': 'Design and deploy multi-agent workflows for L&amp;D, HR, or operations use cases.',
      'services.track2.s3.title': 'Executive AI Fluency Programs',
      'services.track2.s3.desc': 'Design and delivery of AI literacy for leadership teams and senior managers.',
      'services.track2.s4.title': 'Post-M&amp;A AI Integration',
      'services.track2.s4.desc': 'Specific expertise from the Galicia\u2013HSBC acquisition. High-value, high-urgency entry point.',
      'services.cta': 'Let\'s find the right fit \u00a0\u2192',

      // Contact
      'contact.label': "Let's Talk",
      'contact.title': 'The gap between AI capability<br/>and organizational readiness?<br/><span>That\'s where I work.</span>',
      'contact.desc': 'Whether you need a strategic leader who can also architect the systems, or a consultant who\'s done it at enterprise scale \u2014 let\'s see if there\'s a fit.',
      'contact.meta': '\ud83d\udccd Buenos Aires, Argentina \u00a0\u00b7\u00a0 Open to remote &amp; global',
      'contact.open': 'Open to: Senior in-house AI Enablement roles \u00a0\u00b7\u00a0 Strategic consulting',

      // Footer
      'footer.text': '<strong>Pablo Samiter</strong> \u00a0\u00b7\u00a0 AI Automation Strategist &amp; Agent Orchestrator \u00a0\u00b7\u00a0 2026',
    },

    es: {
      // Nav
      'nav.problem': 'Problema',
      'nav.work': 'Proyectos',
      'nav.stack': 'Stack',
      'nav.services': 'Servicios',
      'nav.contact': 'Contacto',
      'nav.cta': 'Hablemos',

      // Hero
      'hero.badge': 'Estratega de Automatizaci\u00f3n AI \u00a0\u00b7\u00a0 Orquestador de Agentes',
      'hero.title': 'No solo construyo<br/>el futuro del trabajo.<br/><span class="activate-word">Lo activo.</span>',
      'hero.desc': 'Conecto la brecha entre la estrategia de AI y la preparaci\u00f3n humana. Ingeniero Industrial. 20+ a\u00f1os de transformaci\u00f3n empresarial. Ahora dise\u00f1o sistemas multi-agente \u2014 y lidero el cambio organizacional que los hace funcionar.',
      'hero.cta1': 'Ver Proyectos',
      'hero.cta2': 'Hablemos',
      'hero.location': 'Buenos Aires, Argentina \u00b7 Disponible remoto',

      // Gap
      'gap.label': 'El Problema que Resuelvo',
      'gap.title': 'La mayor\u00eda de las organizaciones<br/>no tienen un problema de AI.<br/>Tienen un <span style="color:var(--accent)">problema de adopci\u00f3n.</span>',
      'gap.failA.label': 'Modo de Falla A',
      'gap.failA.title': 'La capacidad de AI est\u00e1 lista',
      'gap.failA.desc': 'La tecnolog\u00eda existe. El presupuesto est\u00e1 asignado. Los pilotos corrieron. Y despu\u00e9s\u2026 nada escala.',
      'gap.center.label': 'La Brecha',
      'gap.center.title': 'Donde la transformaci\u00f3n se estanca',
      'gap.center.desc': 'Entre la estrategia y la adopci\u00f3n. Entre las herramientas y el cambio de comportamiento. Entre el piloto y la producci\u00f3n.',
      'gap.failB.label': 'Modo de Falla B',
      'gap.failB.title': 'La organizaci\u00f3n no est\u00e1 lista',
      'gap.failB.desc': 'O las personas est\u00e1n entusiasmadas, pero no hay nadie que pueda dise\u00f1ar lo que viene despu\u00e9s.',
      'gap.conclusion': 'Esa brecha es <strong>exactamente donde opero</strong>. No soy un investigador de AI. No soy un consultor tradicional de L&amp;D. Soy ese perfil raro que hace ambas cosas: dise\u00f1o sistemas multi-agente <em>y</em> lidero el cambio humano de adopci\u00f3n que los hace funcionar.',

      // Proof
      'proof.1.label': 'AI Ambassadors entrenados y activados',
      'proof.1.org': 'HSBC Americas',
      'proof.1.sub': 'Hall of Fame Global',
      'proof.2.label': 'Empleados habilitados en AI',
      'proof.2.org': 'Microsoft Copilot',
      'proof.2.sub': 'Despliegue post-fusi\u00f3n',
      'proof.3.label': 'Empleados, programas globales de L&amp;D',
      'proof.3.org': 'TenarisUniversity',
      'proof.3.sub': '30+ pa\u00edses',
      'proof.4.label': 'A\u00f1os de transformaci\u00f3n empresarial',
      'proof.4.org': 'Supply chain \u2192 L&amp;D \u2192 AI',
      'proof.4.sub': 'Mirada de Ingeniero Industrial',

      // Stack Layers
      'stacklayers.label': 'La Combinaci\u00f3n \u00danica',
      'stacklayers.title': 'Estrategia. Ejecuci\u00f3n. Adopci\u00f3n.<br/><span style="color:var(--accent)">Las tres.</span>',
      'stacklayers.desc': 'La mayor\u00eda de los profesionales de AI eligen un eje. El mercado necesita alguien que conecte los tres \u2014 y tenga los resultados para probarlo.',
      'stacklayers.card1.num': '01 / PROBADO A ESCALA',
      'stacklayers.card1.title': 'Track Record Empresarial',
      'stacklayers.card1.desc': 'No son proyectos \u2014 son historia operativa. A escala, en entornos regulados, con complejidad organizacional real.',
      'stacklayers.card1.li1': 'Red de AI Ambassadors HSBC Americas \u2014 120+ personas, reconocimiento Hall of Fame global',
      'stacklayers.card1.li2': 'Rollout Microsoft Copilot \u2014 10.000+ empleados post adquisici\u00f3n Galicia\u2013HSBC',
      'stacklayers.card1.li3': 'TenarisUniversity \u2014 programas globales de L&amp;D para 27K empleados, 30+ pa\u00edses',
      'stacklayers.card2.num': '02 / CONSTRUCTOR ACTIVO',
      'stacklayers.card2.title': 'Herramientas de Producci\u00f3n, No Demos',
      'stacklayers.card2.desc': 'Cada proyecto en mi portfolio est\u00e1 pensado para producci\u00f3n. Construido con stacks reales, para problemas reales, con historia de iteraci\u00f3n real.',
      'stacklayers.card2.li1': 'Praxis \u2014 pipeline multi-agente de L&amp;D (TNA \u2192 Creador de Contenido \u2192 Agente de Entrega)',
      'stacklayers.card2.li2': 'CV Forge Pro \u2014 optimizaci\u00f3n de CV con AI (React 19, Supabase, Groq API)',
      'stacklayers.card2.li3': 'Job Search Automation \u2014 6 plataformas ATS, integraci\u00f3n Gmail, capa CRM',
      'stacklayers.card2.li4': 'Onboarding Game \u2014 simulaci\u00f3n multiplayer en tiempo real, 8 KPIs en vivo',
      'stacklayers.card3.num': '03 / PENSADOR DE SISTEMAS',
      'stacklayers.card3.title': 'Mirada de Ingeniero Industrial',
      'stacklayers.card3.desc': 'La Ingenier\u00eda Industrial estudia c\u00f3mo interact\u00faan humanos y sistemas a escala. Cuando veo un rollout de AI fallando, veo un problema de flujo.',
      'stacklayers.card3.li1': 'Dise\u00f1ar para escala \u2014 arquitectura antes que implementaci\u00f3n',
      'stacklayers.card3.li2': 'Construir para la adopci\u00f3n \u2014 la capa humana no es opcional',
      'stacklayers.card3.li3': 'Gobernar para la sustentabilidad \u2014 compliance y governance desde el inicio',

      // Projects
      'projects.label': 'Proyectos Activos',
      'projects.title': 'Producci\u00f3n primero.<br/>No demos de juguete.',
      'projects.desc': 'Cada proyecto tiene un linaje. Esto no es experimentaci\u00f3n \u2014 es metodolog\u00eda de ingenier\u00eda aplicada al software.',
      'projects.praxis.tagline': 'Pipeline Multi-Agente de L&amp;D',
      'projects.praxis.desc': 'Pipeline de tres agentes: Agente TNA analiza brechas de habilidades \u2192 Agente Creador genera activos espec\u00edficos por rol \u2192 Agente de Entrega gestiona el despliegue. Producci\u00f3n de contenido L&amp;D de d\u00edas a minutos.',
      'projects.praxis.lineage': '\u2191 Evolucionado del proof-of-concept Steelmind AI',
      'projects.praxis.impact': 'Contenido L&amp;D: d\u00edas \u2192 minutos',
      'projects.cvforge.tagline': 'Plataforma de Optimizaci\u00f3n de CV con AI',
      'projects.cvforge.desc': 'Adaptaci\u00f3n quir\u00fargica de CV con scoring ATS y detecci\u00f3n de fabricaci\u00f3n. Extracci\u00f3n PDF, an\u00e1lisis de keywords, tracking de cambios, generaci\u00f3n de cover letters y exportaci\u00f3n multi-formato.',
      'projects.cvforge.impact': 'Scoring ATS \u00b7 Cover letters \u00b7 Planes 30-60-90 d\u00edas',
      'projects.jobsearch.tagline': 'Sistema de Inteligencia ATS',
      'projects.jobsearch.desc': 'Sistema de briefing diario que escanea 6 plataformas ATS globales en 9 categor\u00edas de roles. Filtros anti-ruido, gates de seniority, scheduling de emails HTML y tracking de estado de aplicaciones.',
      'projects.jobsearch.lineage': '\u2191 3ra generaci\u00f3n, evolucionado del Boolean Search builder',
      'projects.jobsearch.impact': '6 plataformas ATS \u00b7 9 categor\u00edas \u00b7 Briefing diario',
      'projects.onboarding.tagline': 'Simulaci\u00f3n de Negocios en Tiempo Real',
      'projects.onboarding.desc': 'Simulaci\u00f3n multiplayer de onboarding corporativo con gesti\u00f3n de KPIs en vivo. 8 m\u00e9tricas en tiempo real: Revenue, Safety, ESG, Morale. Modos Cl\u00e1sico (puntuado) y Simulaci\u00f3n (estrat\u00e9gico).',
      'projects.onboarding.lineage': '\u2191 2da generaci\u00f3n, evolucionado de BizSim + SteelSim',
      'projects.onboarding.impact': '8 KPIs en vivo \u00b7 Multiplayer \u00b7 Dos modos de juego',

      // Iteration table
      'iteration.title': 'El Patr\u00f3n de Iteraci\u00f3n \u2014 Metodolog\u00eda de Ingenier\u00eda Aplicada al Software',
      'iteration.th1': 'Actual',
      'iteration.th2': 'Predecesor',
      'iteration.th3': 'Qu\u00e9 cambi\u00f3',
      'iteration.row1.change': 'Arquitectura multi-agente completa, production-grade',
      'iteration.row2.change': 'Multiplayer en tiempo real, Supabase Realtime',
      'iteration.row3.change': '6 plataformas ATS, integraci\u00f3n Gmail, capa CRM',

      // Tech Stack
      'stack.label': 'Stack Tecnol\u00f3gico',
      'stack.title': 'Las herramientas con las que construyo.',
      'stack.ai': 'AI / LLM',
      'stack.frontend': 'Frontend',
      'stack.backend': 'Backend',
      'stack.database': 'Base de Datos',
      'stack.automation': 'Automatizaci\u00f3n',
      'stack.prototyping': 'Prototipado y Otros',

      // Services
      'services.label': 'C\u00f3mo Puedo Ayudar',
      'services.title': 'Dos tracks.<br/>Un perfil \u00fanico.',
      'services.track1.badge': 'Track 1 \u2014 Roles In-House',
      'services.track1.title': 'Liderazgo Estrat\u00e9gico',
      'services.track1.desc': 'Empresas atravesando transformaci\u00f3n AI que necesitan alguien que pueda liderar estrategia Y cambio en las personas simult\u00e1neamente.',
      'services.track1.s1.title': 'CLO / Head of L&amp;D (AI-first)',
      'services.track1.s1.desc': 'Reconstruir la funci\u00f3n de aprendizaje alrededor de AI \u2014 y construir la capa tecnol\u00f3gica vos mismo.',
      'services.track1.s2.title': 'Head of AI Enablement / AI Adoption',
      'services.track1.s2.desc': 'El t\u00edtulo emergente de 2025\u20132026. Target: empresas tech-forward, servicios financieros, consultoras.',
      'services.track1.s3.title': 'VP Customer Success (AI SaaS)',
      'services.track1.s3.desc': 'Estuviste del lado comprador a escala \u2014 sab\u00e9s por qu\u00e9 falla la adopci\u00f3n y c\u00f3mo arreglarla.',
      'services.track1.s4.title': 'Chief of Staff / AI Strategy',
      'services.track1.s4.desc': 'Roles que conectan producto AI con preparaci\u00f3n organizacional \u2014 traduciendo tech a personas y viceversa.',
      'services.track2.badge': 'Track 2 \u2014 Consultor\u00eda',
      'services.track2.title': 'Engagements Estrat\u00e9gicos',
      'services.track2.desc': 'Proyectos de consultor\u00eda con alcance claro, entregables claros y profundo contexto empresarial.',
      'services.track2.s1.title': 'Diagn\u00f3stico de Adopci\u00f3n AI',
      'services.track2.s1.desc': 'Engagement de 4 semanas. Evaluar madurez AI, identificar puntos de fricci\u00f3n, entregar roadmap de activaci\u00f3n a 90 d\u00edas.',
      'services.track2.s2.title': 'Arquitectura e Implementaci\u00f3n de Agentes',
      'services.track2.s2.desc': 'Dise\u00f1ar y desplegar workflows multi-agente para casos de uso de L&amp;D, HR u operaciones.',
      'services.track2.s3.title': 'Programas de Fluencia en AI para Ejecutivos',
      'services.track2.s3.desc': 'Dise\u00f1o y delivery de alfabetizaci\u00f3n AI para equipos de liderazgo y gerentes senior.',
      'services.track2.s4.title': 'Integraci\u00f3n AI Post-M&amp;A',
      'services.track2.s4.desc': 'Expertise espec\u00edfico de la adquisici\u00f3n Galicia\u2013HSBC. Punto de entrada de alto valor y alta urgencia.',
      'services.cta': 'Encontremos el fit correcto \u00a0\u2192',

      // Contact
      'contact.label': 'Hablemos',
      'contact.title': 'La brecha entre capacidad AI<br/>y preparaci\u00f3n organizacional?<br/><span>Ah\u00ed es donde trabajo.</span>',
      'contact.desc': 'Ya sea que necesites un l\u00edder estrat\u00e9gico que tambi\u00e9n pueda dise\u00f1ar los sistemas, o un consultor que lo haya hecho a escala empresarial \u2014 veamos si hay fit.',
      'contact.meta': '\ud83d\udccd Buenos Aires, Argentina \u00a0\u00b7\u00a0 Disponible remoto y global',
      'contact.open': 'Abierto a: Roles senior in-house de AI Enablement \u00a0\u00b7\u00a0 Consultor\u00eda estrat\u00e9gica',

      // Footer
      'footer.text': '<strong>Pablo Samiter</strong> \u00a0\u00b7\u00a0 Estratega de Automatizaci\u00f3n AI &amp; Orquestador de Agentes \u00a0\u00b7\u00a0 2026',
    }
  },

  currentLang: 'en',

  init: function () {
    var saved = localStorage.getItem('lang');
    if (!saved) {
      // Auto-detect browser language
      var browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2);
      saved = browserLang === 'es' ? 'es' : 'en';
    }
    this.currentLang = saved;
    this.apply(this.currentLang);
    this.updateToggle();
  },

  switchTo: function (lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    localStorage.setItem('lang', lang);

    // Fade out, swap text, fade in
    document.body.classList.add('lang-switching');
    var self = this;
    setTimeout(function () {
      self.apply(lang);
      self.updateToggle();
      document.body.classList.remove('lang-switching');
    }, 200);
  },

  apply: function (lang) {
    var dict = this.translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    // All translation strings are static developer content (safe for innerHTML)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    if (lang === 'es') {
      document.title = 'Pablo Samiter \u2014 Estratega de Automatizaci\u00f3n AI & Orquestador de Agentes';
    } else {
      document.title = 'Pablo Samiter \u2014 AI Automation Strategist & Agent Orchestrator';
    }
  },

  updateToggle: function () {
    document.querySelectorAll('.lang-toggle').forEach(function (toggle) {
      toggle.querySelectorAll('button').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === I18N.currentLang);
      });
    });
  }
};
