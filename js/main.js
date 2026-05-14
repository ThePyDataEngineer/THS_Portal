/* ============================================================
   main.js — THS Portal v1.0
   Theme toggle · i18n (ES/EN) · Navbar behaviours ·
   Scroll reveal · Tabs · Accordion · Counters · Smooth scroll
   Zero dependencies · No localStorage (sandbox-safe)
   ============================================================ */

/* ==========================================================
   A. TRANSLATIONS — complete i18n dictionary
   ========================================================== */
var TRANSLATIONS = {
  es: {
    /* ---- Nav ---- */
    "nav.servicios":        "Servicios",
    "nav.recursos":         "Recursos",
    "nav.thsn":             "THSN",
    "nav.empresa":          "Empresa",
    "nav.cta":              "Iniciar Conversación",

    /* Nav dropdown items */
    "nav.sid.title":        "Strategic Intelligence Digest",
    "nav.sid.desc":         "Análisis quincenal verificado para decisores LATAM",
    "nav.academy.title":    "THS Academy",
    "nav.academy.desc":     "Formación ejecutiva en IA con criterio estratégico",
    "nav.advisory.title":   "Enterprise Advisory",
    "nav.advisory.desc":    "Consultoría estratégica de IA para organizaciones",
    "nav.iacompass.title":  "IA-COMPASS",
    "nav.iacompass.desc":   "Framework de diagnóstico de madurez en IA",
    "nav.blog.title":       "Blog & Insights",
    "nav.blog.desc":        "Artículos y análisis originales sobre IA y estrategia",
    "nav.frameworks.title": "Frameworks Library",
    "nav.frameworks.desc":  "Herramientas de decisión propietarias de THS",
    "nav.manifesto.title":  "Manifiesto",
    "nav.manifesto.desc":   "Por qué pensamos antes de automatizar",
    "nav.portafolio.title": "Portafolio Académico",
    "nav.portafolio.desc":  "Publicaciones y proyectos con trayectoria verificable",
    "nav.thsn.title":       "THSN Network",
    "nav.thsn.desc":        "Comunidad cerrada de decisores LATAM",
    "nav.changelog.title":  "Novedades",
    "nav.changelog.desc":   "Changelog y últimos lanzamientos de THS",
    "nav.about.title":      "Acerca de THS",
    "nav.about.desc":       "Quiénes somos, misión, visión y valores",
    "nav.brand.title":      "Brand Assets",
    "nav.brand.desc":       "Logotipos, paleta y guía de marca",
    "nav.contact.title":    "Contacto",
    "nav.contact.desc":     "Conversemos sobre lo que necesitas decidir",

    /* ---- Banner ---- */
    "banner.text":          "Edición #001 del Strategic Intelligence Digest — disponible ahora",
    "banner.link":          "→ Leer en THSN",

    /* ---- Hero (Home) ---- */
    "hero.eyebrow":         "Inteligencia Estratégica para LATAM",
    "hero.headline":        "El Criterio que Falta entre los Datos y la Decisión.",
    "hero.sub":             "Análisis propietario con fuentes verificadas, frameworks aplicables y perspectiva LATAM. Para líderes que necesitan rigor antes de actuar, no resúmenes antes de olvidar.",
    "hero.cta1":            "Por Qué Existimos",
    "hero.cta2":            "Leer el Strategic Digest",
    "hero.caption":         "Inteligencia estratégica aplicada desde Cali, Colombia",

    /* ---- Trusted ---- */
    "trusted.title":        "Han Confiado en Nuestra Perspectiva",

    /* ---- Ecosystem tabs ---- */
    "ecosystem.label":      "Nuestro Ecosistema",
    "ecosystem.title":      "Tres Pilares. Un Propósito.",
    "ecosystem.sub":        "Inteligencia, formación y consultoría integradas para que tu organización tome mejores decisiones con IA.",
    "ecosystem.tab1":       "Inteligencia Estratégica",
    "ecosystem.tab2":       "Formación Ejecutiva",
    "ecosystem.tab3":       "Consultoría Estratégica",

    /* Tab 1: SID */
    "ecosystem.tab1.title":  "Análisis que Precede a la Decisión",
    "ecosystem.tab1.desc":   "Cada edición entrega un análisis central de 3,000+ palabras con fuentes primarias verificadas, un framework de decisión aplicable y la pregunta que nadie en tu sector está haciendo. Contexto latinoamericano. Sin relleno.",
    "ecosystem.tab1.b1":     "Análisis quincenal con fuentes IEEE verificadas",
    "ecosystem.tab1.b2":     "Framework propietario nuevo en cada edición",
    "ecosystem.tab1.b3":     "Contexto LATAM obligatorio en cada análisis",
    "ecosystem.tab1.b4":     "Acceso al archivo completo de ediciones",

    /* Tab 2: Academy */
    "ecosystem.tab2.title":  "Capacidades que la IA No Reemplaza",
    "ecosystem.tab2.desc":   "Programas de 8 a 12 semanas diseñados para profesionales que necesitan aplicar IA con criterio, no memorizar funcionalidades. Proyectos reales, cohortes reducidas, mentoría directa del equipo THS.",
    "ecosystem.tab2.b1":     "Cohortes reducidas con mentoría directa",
    "ecosystem.tab2.b2":     "Proyectos aplicados a tu organización real",
    "ecosystem.tab2.b3":     "Contenido nativo en español para LATAM",
    "ecosystem.tab2.b4":     "Certificación con portafolio verificable",

    /* Tab 3: Advisory */
    "ecosystem.tab3.title":  "Criterio Instalado en Tu Organización",
    "ecosystem.tab3.desc":   "No vendemos implementaciones genéricas. Diagnosticamos con IA-COMPASS, diseñamos la arquitectura cognitiva de tu organización y acompañamos la ejecución hasta que los indicadores cambien.",
    "ecosystem.tab3.b1":     "Diagnóstico institucional con IA-COMPASS",
    "ecosystem.tab3.b2":     "Gobernanza de IA alineada a regulación",
    "ecosystem.tab3.b3":     "Roadmaps de implementación con entregables medibles",
    "ecosystem.tab3.b4":     "Acompañamiento hasta resultados verificados",

    /* ---- Features grid ---- */
    "features.label":        "Todo el Ecosistema THS",
    "features.title":        "Seis Pilares de Inteligencia Aplicada",
    "features.sub":          "Cada pilar refuerza al siguiente. Juntos forman la infraestructura cognitiva que tu organización necesita.",
    "features.c1.title":     "Inteligencia Cada Quince Días",
    "features.c1.desc":      "Análisis propietario quincenal con fuentes verificadas, frameworks aplicables y perspectiva LATAM. Para decisores.",
    "features.c2.title":     "Formación con Criterio",
    "features.c2.desc":      "Programas intensivos donde la IA es herramienta, no tema. Proyectos reales, cohortes reducidas, resultados medibles.",
    "features.c3.title":     "Consultoría de Profundidad",
    "features.c3.desc":      "Diagnóstico, gobernanza e implementación de IA con estándares IEEE. Sin PowerPoints decorativos.",
    "features.c4.title":     "Diagnóstico Antes de Decidir",
    "features.c4.desc":      "Framework propietario de 5 dimensiones que mide la madurez real de tu organización en IA.",
    "features.c5.title":     "Herramientas de Decisión",
    "features.c5.desc":      "Biblioteca abierta de marcos analíticos creados por THS. Descargables, aplicables, verificados.",
    "features.c6.title":     "Rigor con Trayectoria",
    "features.c6.desc":      "Publicaciones, proyectos e investigación que respaldan cada afirmación que hacemos. Sin credenciales infladas.",

    /* ---- Manifesto quote (Home) ---- */
    "manifesto.quote":       "No necesitamos más newsletters. Necesitamos menos ruido y más criterio. Construí THS desde Cali, Colombia, con una convicción: que un análisis verificado y un framework aplicable valen más que cien resúmenes de tendencias. La pregunta correcta siempre supera a la respuesta rápida.",
    "manifesto.author":      "Julián Andrés Mosquera",
    "manifesto.role":        "Fundador, The Human Software",

    /* ---- Founder section ---- */
    "founder.name":          "Julián Andrés Mosquera",
    "founder.role":          "Ingeniero · Arquitecto de IA · Fundador de The Human Software",
    "founder.bio":           "Ingeniero de sistemas y Arquitecto de IA radicado en Cali, Colombia. Fundador de The Human Software, donde diseña infraestructura cognitiva para que organizaciones latinoamericanas tomen mejores decisiones con inteligencia artificial. Creador de IA-COMPASS y del framework SOVEREIGN SUPREME. Publica el Strategic Intelligence Digest desde 2026. Cree que pensar bien es el primer requisito para automatizar bien.",
    "founder.tags":          "IA-COMPASS · SOVEREIGN SUPREME · SID",
    "founder.cta":           "Conocer la Historia Completa",

    /* ---- Insight preview (Home) ---- */
    "insight.label":          "Último Análisis",
    "insight.title":          "Desde el Strategic Intelligence Digest",

    "insight.a1.category":    "Edición 001 · Marzo 2026",
    "insight.a1.title":       "El Mapa Profesional de 2025 Ya Está Obsoleto — Y Nadie Te Lo Dijo",
    "insight.a1.excerpt":     "La primera edición del Strategic Intelligence Digest analiza por qué las rutas profesionales diseñadas antes de la IA generativa ya no funcionan, y presenta el Marco de Actualización Cognitiva (MAC).",
    "insight.a1.cta":         "Leer Edición Completa",

    "insight.a2.category":    "IA Aplicada · Abril 2026",
    "insight.a2.title":       "Por qué el 73% de los pilotos de IA en Colombia no llegan a producción",
    "insight.a2.excerpt":     "La brecha no es tecnológica: es de gobernanza. Análisis de 40 proyectos de IA en empresas colombianas con datos de 2024–2025.",
    "insight.a2.cta":         "Leer Artículo",

    "insight.a3.category":    "Decisiones Estratégicas · Abril 2026",
    "insight.a3.title":       "El error que cometen las organizaciones al comprar ChatGPT Enterprise sin estrategia de datos",
    "insight.a3.excerpt":     "Licencias sin arquitectura de datos producen gasto, no transformación. Framework de evaluación pre-compra para directores de TI.",
    "insight.a3.cta":         "Leer Artículo",

    /* ---- CTA final (Home) ---- */
    "cta.eyebrow":           "Siguiente Paso",
    "cta.headline":          "¿Tu próxima decisión estratégica tiene el respaldo analítico que merece?",
    "cta.sub":               "Conversemos sobre cómo THS puede aportar inteligencia verificada a tu organización. Sin compromiso, sin pitch de ventas, solo diagnóstico.",
    "cta.cta1":              "Iniciar Conversación",
    "cta.cta2":              "Explorar el Intelligence Digest",

    /* ---- Footer ---- */
    "footer.tagline":        "Inteligencia estratégica aplicada para decisores de América Latina. Análisis propietario. Contexto LATAM. Sin ruido.",
    "footer.seal":           "Piensa primero. Automatiza después.",
    "footer.col.servicios":  "Servicios",
    "footer.col.recursos":   "Recursos",
    "footer.col.empresa":    "Empresa",
    "footer.col.red":        "Red THS",
    "footer.copyright":      "© 2026 The Human Software. Todos los derechos reservados.",
    "footer.location":       "Cali, Colombia · América Latina",
    "footer.privacy":        "Política de Privacidad (Ley 1581/2012)",

    /* ====================================================
       PAGE-SPECIFIC TRANSLATIONS
       ==================================================== */

    /* ---- SID page ---- */
    "sid.eyebrow":           "Publicación Insignia",
    "sid.headline":          "Inteligencia Estratégica Quincenal para Líderes LATAM",
    "sid.sub":               "Análisis propietario de 3,000+ palabras con fuentes primarias verificadas, frameworks de decisión aplicables y contexto latinoamericano obligatorio. Para quienes toman decisiones con consecuencias reales.",
    "sid.stat1.value":       "3,000+",
    "sid.stat1.label":       "Palabras por edición",
    "sid.stat2.value":       "15–25",
    "sid.stat2.label":       "Fuentes verificadas por edición",
    "sid.stat3.value":       "1–2",
    "sid.stat3.label":       "Frameworks propietarios por edición",
    "sid.stat4.value":       "18–25",
    "sid.stat4.label":       "Minutos de lectura profunda",
    "sid.includes.title":    "¿Qué Incluye Cada Edición?",
    "sid.includes.i1":       "Análisis central con datos de fuentes primarias verificadas",
    "sid.includes.i2":       "Framework propietario de decisión con nombre propio",
    "sid.includes.i3":       "Contextualización de cada tendencia a la realidad de LATAM",
    "sid.includes.i4":       "Señal estratégica con horizonte de 12 a 36 meses",
    "sid.includes.i5":       "Pregunta abierta que desafía supuestos del sector",
    "sid.includes.i6":       "Implicaciones concretas para tu organización o carrera",
    "sid.editions.title":    "Ediciones Disponibles",
    "sid.subscribe.title":   "Accede al análisis que precede a tus decisiones.",
    "sid.subscribe.desc":    "Publicación quincenal con paywall estricto. Sin versión gratuita, sin resúmenes parciales. El rigor tiene un precio justo.",
    "sid.subscribe.cta":     "Suscribirse en THSN",

    /* ---- Academy page ---- */
    "academy.eyebrow":       "Formación Ejecutiva",
    "academy.headline":      "Capacidades que Ningún Modelo de IA Reemplaza",
    "academy.sub":           "Programas intensivos de 8 a 12 semanas para profesionales que necesitan aplicar inteligencia artificial con criterio estratégico. Cohortes reducidas, proyectos reales, mentoría directa.",
    "academy.stat1.value":   "3",
    "academy.stat1.label":   "Programas disponibles",
    "academy.stat2.value":   "40–60",
    "academy.stat2.label":   "Horas de contenido aplicado",
    "academy.stat3.value":   "2–3",
    "academy.stat3.label":   "Proyectos reales por programa",
    "academy.stat4.value":   "70/30",
    "academy.stat4.label":   "Aplicado vs. teórico",
    "academy.p1.title":      "Pensamiento Estratégico con IA",
    "academy.p1.level":      "Inicial–Intermedio · 8 semanas",
    "academy.p1.desc":       "Para profesionales que usan IA como herramienta pero no como ventaja estratégica. Aprende a formular el problema antes de pedirle una respuesta al modelo.",
    "academy.p1.cta":        "Reservar Lugar en Cohorte 1",
    "academy.p2.title":      "IA Aplicada para Organizaciones",
    "academy.p2.level":      "Intermedio–Avanzado · 10 semanas",
    "academy.p2.desc":       "Diseña la estrategia de adopción de IA de tu organización con frameworks verificados, gobernanza real y métricas de impacto.",
    "academy.p2.cta":        "Solicitar Programa",
    "academy.p3.title":      "Liderazgo en la Era de la IA",
    "academy.p3.level":      "Ejecutivo · 12 semanas",
    "academy.p3.desc":       "Para C-Suite que necesita entender las implicaciones estratégicas de la IA sin convertirse en técnico. Decisiones de inversión, riesgo regulatorio y ventaja competitiva.",
    "academy.p3.cta":        "Solicitar Programa Ejecutivo",
    "academy.faq.title":     "Preguntas Frecuentes",
    "academy.faq1.q":        "¿Es necesario saber programar?",
    "academy.faq1.a":        "No. Los programas están diseñados para decisores, no para desarrolladores. Si tu trabajo es definir dirección estratégica, este es tu espacio.",
    "academy.faq2.q":        "¿En qué se diferencia de un MOOC en Coursera o Udemy?",
    "academy.faq2.a":        "Cohortes de máximo 30 personas, proyectos aplicados a tu organización real, mentoría directa. No hay videos pregrabados de 2019.",
    "academy.faq3.q":        "¿Puedo aplicar lo aprendido durante el programa, no después?",
    "academy.faq3.a":        "Sí. Cada módulo produce un entregable que aplicas en tu organización esa misma semana. El proyecto final es tu estrategia de IA documentada.",
    "academy.faq4.q":        "¿Hay certificación?",
    "academy.faq4.a":        "Sí. Certificado THS con portafolio de proyectos verificable. No emitimos credenciales decorativas.",
    "academy.faq5.q":        "¿Cuál es la inversión?",
    "academy.faq5.a":        "Próximamente. Contacta con nosotros para obtener información de precios actualizada.",

    /* ---- Advisory page ---- */
    "advisory.eyebrow":      "Consultoría Estratégica",
    "advisory.headline":     "No Instalamos Herramientas. Instalamos Criterio.",
    "advisory.sub":          "Diagnóstico, gobernanza e implementación de IA para organizaciones que necesitan resultados verificables, no PowerPoints con tendencias. Desde Colombia, para toda América Latina.",
    "advisory.process.title":"Proceso de Engagement",
    "advisory.s1.title":     "Conversación Inicial",
    "advisory.s1.desc":      "Entendemos tu contexto, desafíos y nivel de urgencia. Sin compromiso, sin pitch de ventas.",
    "advisory.s1.deliverable":"Diagnóstico de alcance preliminar",
    "advisory.s2.title":     "Diagnóstico IA-COMPASS",
    "advisory.s2.desc":      "Evaluamos 5 dimensiones de madurez en IA de tu organización con datos y entrevistas.",
    "advisory.s2.deliverable":"Reporte IA-COMPASS de 20+ páginas",
    "advisory.s3.title":     "Diseño de Arquitectura",
    "advisory.s3.desc":      "Construimos el roadmap de implementación con hitos, métricas y responsables definidos.",
    "advisory.s3.deliverable":"Roadmap estratégico de 12 meses",
    "advisory.s4.title":     "Acompañamiento de Ejecución",
    "advisory.s4.desc":      "Trabajamos junto a tu equipo en la implementación real de las recomendaciones.",
    "advisory.s4.deliverable":"Reportes de progreso mensuales",
    "advisory.s5.title":     "Medición de Impacto",
    "advisory.s5.desc":      "Evaluamos resultados contra la línea base del diagnóstico inicial.",
    "advisory.s5.deliverable":"Dashboard de impacto verificado",
    "advisory.s6.title":     "Transferencia y Autonomía",
    "advisory.s6.desc":      "Tu equipo adquiere la capacidad de operar sin dependencia de THS.",
    "advisory.s6.deliverable":"Manual de gobernanza institucional",
    "advisory.areas.title":  "6 Áreas de Intervención",
    "advisory.a1.title":     "Diagnóstico IA-COMPASS",
    "advisory.a1.desc":      "Medimos tu madurez real en IA con un framework de 5 dimensiones y entregables accionables.",
    "advisory.a2.title":     "Gobernanza de IA",
    "advisory.a2.desc":      "Diseñamos políticas, procesos y controles para que tu organización use IA con responsabilidad verificable.",
    "advisory.a3.title":     "Transformación Basada en Datos",
    "advisory.a3.desc":      "Rediseñamos procesos de decisión para que los datos dejen de ser decorativos y se vuelvan operativos.",
    "advisory.a4.title":     "Roadmaps de Implementación",
    "advisory.a4.desc":      "Construimos la secuencia de pasos con hitos, presupuesto y métricas para adoptar IA sin improvisar.",
    "advisory.a5.title":     "Formación de Liderazgo",
    "advisory.a5.desc":      "Capacitamos a tu C-Suite y mandos medios en criterio estratégico sobre IA, no en tutoriales técnicos.",
    "advisory.a6.title":     "Inteligencia Competitiva",
    "advisory.a6.desc":      "Analizamos tu sector con fuentes verificadas para identificar ventajas, amenazas y movimientos del mercado.",

    /* ---- IA-COMPASS page ---- */
    "iacompass.eyebrow":     "Framework Propietario",
    "iacompass.headline":    "IA-COMPASS — Mide Tu Brecha Antes de Cruzarla",
    "iacompass.sub":         "Framework propietario de diagnóstico institucional que evalúa 5 dimensiones de madurez en inteligencia artificial. Produce un reporte de 20+ páginas con hallazgos verificados, brechas críticas y roadmap accionable.",
    "iacompass.dims.title":  "Las 5 Dimensiones del Framework",
    "iacompass.d1.title":    "Estrategia y Liderazgo",
    "iacompass.d1.desc":     "Evalúa si la dirección de tu organización tiene una visión articulada de IA con recursos asignados, gobernanza definida y métricas de éxito declaradas.",
    "iacompass.d2.title":    "Datos e Infraestructura",
    "iacompass.d2.desc":     "Mide la calidad, accesibilidad y gobernanza de los datos que alimentan los sistemas de IA de tu organización.",
    "iacompass.d3.title":    "Talento y Capacidades",
    "iacompass.d3.desc":     "Determina si tu equipo tiene las competencias técnicas y estratégicas para operar IA, o si depende exclusivamente de proveedores externos.",
    "iacompass.d4.title":    "Operaciones e Implementación",
    "iacompass.d4.desc":     "Evalúa cuántos pilotos de IA llegaron a producción, con qué métricas de éxito operan y qué procesos fueron transformados.",
    "iacompass.d5.title":    "Ética y Gobernanza",
    "iacompass.d5.desc":     "Mide si tu organización tiene marcos de gobernanza de IA, compliance regulatorio, transparencia en el uso de modelos y gestión de riesgos.",
    "iacompass.deliverables.title": "Entregables del Diagnóstico",
    "iacompass.del1.title":  "Reporte IA-COMPASS Completo",
    "iacompass.del1.desc":   "Diagnóstico de 5 dimensiones con scoring, hallazgos y benchmarks sectoriales",
    "iacompass.del2.title":  "Mapa de Brechas Críticas",
    "iacompass.del2.desc":   "Visualización de las 3 brechas de mayor impacto con priorización",
    "iacompass.del3.title":  "Roadmap de 12 Meses",
    "iacompass.del3.desc":   "Secuencia de implementación con hitos, métricas y responsables",
    "iacompass.del4.title":  "Benchmark Sectorial",
    "iacompass.del4.desc":   "Comparación anónima con organizaciones del mismo sector en LATAM",
    "iacompass.del5.title":  "Sesión Ejecutiva de Hallazgos",
    "iacompass.del5.desc":   "Presentación al C-Suite con hallazgos clave y recomendaciones",
    "iacompass.cta.headline":"Tu organización ya tiene una brecha en IA. La pregunta es si la conoces.",
    "iacompass.cta.sub":     "El diagnóstico IA-COMPASS toma 3 semanas y produce un reporte que cambia la conversación en tu mesa directiva.",
    "iacompass.cta.btn":     "Solicitar Diagnóstico",

    /* ---- Blog page ---- */
    "blog.headline":         "Análisis que Sobrevive la Siguiente Tendencia",
    "blog.sub":              "Artículos, investigaciones y perspectivas originales sobre IA, transformación digital y toma de decisiones estratégicas en América Latina. Fuentes verificadas. Cero relleno.",
    "blog.cat1":             "Inteligencia Artificial Aplicada",
    "blog.cat2":             "Decisiones Estratégicas",
    "blog.cat3":             "Contexto LATAM",
    "blog.cat4":             "Gobernanza y Ética",
    "blog.cat5":             "Perspectiva THS",
    "blog.all":              "Todos",
    "blog.readmore":         "Leer artículo",
    "blog.a1.title":         "Por qué el 73% de los pilotos de IA en Colombia no llegan a producción",
    "blog.a1.excerpt":       "La brecha no es tecnológica: es de gobernanza. Análisis de 40 proyectos de IA en empresas colombianas con datos de 2024–2025.",
    "blog.a1.meta":          "IA Aplicada · 12 min · Abril 2026",
    "blog.a2.title":         "El error que cometen las organizaciones al comprar ChatGPT Enterprise sin estrategia de datos",
    "blog.a2.excerpt":       "Licencias sin arquitectura de datos producen gasto, no transformación. Framework de evaluación pre-compra para directores de TI.",
    "blog.a2.meta":          "Decisiones Estratégicas · 10 min · Abril 2026",
    "blog.a3.title":         "Regulación de IA en Colombia 2026: qué existe, qué falta y qué cambia para tu empresa",
    "blog.a3.excerpt":       "Mapa completo del marco regulatorio colombiano aplicable a IA, con comparativa México-Chile-Brasil y checklist de compliance.",
    "blog.a3.meta":          "Contexto LATAM · 15 min · Mayo 2026",
    "blog.a4.title":         "El Cumplimiento Teatral: cuando la IA dice que auditó su propio código (y mintió)",
    "blog.a4.excerpt":       "Análisis técnico de por qué los modelos de lenguaje no pueden autoverificarse en ciclo único y qué hacer al respecto.",
    "blog.a4.meta":          "Gobernanza y Ética · 14 min · Mayo 2026",
    "blog.a5.title":         "RAG educativo sin alucinaciones: cómo construir un tutor virtual anclado a tu PEI institucional",
    "blog.a5.excerpt":       "Guía práctica de Retrieval-Augmented Generation para instituciones educativas que quieren IA basada en sus propios documentos.",
    "blog.a5.meta":          "IA Aplicada · 18 min · Junio 2026",
    "blog.a6.title":         "No necesitamos más Prompt Engineers. Necesitamos Arquitectos Cognitivos.",
    "blog.a6.excerpt":       "Por qué escribir prompts dejará de ser habilidad diferencial y qué rol la reemplazará en las organizaciones de 2027.",
    "blog.a6.meta":          "Perspectiva THS · 8 min · Junio 2026",

    /* ---- Frameworks Library page ---- */
    "frameworks.headline":   "Herramientas de Decisión, No de Decoración",
    "frameworks.sub":        "Biblioteca de frameworks analíticos creados por THS. Cada marco está diseñado para aplicarse esta semana, no para archivarse hasta que sea irrelevante.",
    "frameworks.desc":       "La Frameworks Library es la colección de herramientas de decisión propietarias de The Human Software. Cada framework tiene nombre propio, estructura replicable y contexto de aplicación definido.",
    "frameworks.col.name":   "Framework",
    "frameworks.col.cat":    "Categoría",
    "frameworks.col.desc":   "Descripción",
    "frameworks.col.level":  "Nivel",
    "frameworks.col.access": "Acceso",

    /* ---- Manifesto full page ---- */
    "manifesto.page.title":      "Por Qué Pensamos Antes de Automatizar",
    "manifesto.page.declaration": "Hay un exceso de contenido sobre inteligencia artificial y una escasez alarmante de criterio para usarla.",
    "manifesto.page.problem":    "Cada semana se publican miles de artículos sobre IA en América Latina. La mayoría son traducciones de publicaciones anglosajonas. No contemplan la regulación colombiana, ni los ciclos presupuestales de una PyME en Medellín, ni la brecha de talento técnico en una universidad pública de Perú.",
    "manifesto.page.whyexist.title": "Por Qué Existimos",
    "manifesto.page.whyexist":   "The Human Software nació en Cali, Colombia, con una premisa simple: antes de automatizar, hay que pensar. No somos un medio de noticias. No somos una consultora que vende PowerPoints. No somos una academia que recicla contenido anglosajón con subtítulos.",
    "manifesto.page.p1.title":   "El Rigor como Estándar Mínimo",
    "manifesto.page.p1.desc":    "Cada afirmación que publicamos tiene fuente verificable. No citamos \"expertos coinciden\" sin nombres ni datos. Cuando no tenemos certeza, lo decimos. Si una edición del Strategic Intelligence Digest no sobrevive una lectura adversarial, no se publica.",
    "manifesto.page.p2.title":   "Aplicabilidad sobre Acumulación de Conocimiento",
    "manifesto.page.p2.desc":    "Cada edición, cada framework, cada programa responde una pregunta concreta: ¿qué haces diferente el lunes con esta información? Si nuestro contenido no produce acción, estamos fracasando.",
    "manifesto.page.p3.title":   "Contexto LATAM como Ventaja Competitiva",
    "manifesto.page.p3.desc":    "Cada análisis responde: ¿qué implica esto para un líder en Colombia, México o Perú en los próximos 12 a 36 meses? Ningún competidor anglosajón la responde porque su audiencia es otra.",
    "manifesto.page.p4.title":   "Transparencia Epistémica",
    "manifesto.page.p4.desc":    "Declaramos lo que sabemos, lo que inferimos y lo que no sabemos. Cuando usamos inteligencia artificial en la investigación, lo declaramos con porcentajes de participación.",
    "manifesto.page.p5.title":   "Impacto Verificable como Única Métrica de Éxito",
    "manifesto.page.p5.desc":    "No medimos éxito en seguidores, likes ni impresiones. Medimos si un suscriptor tomó una mejor decisión después de leer nuestra edición.",
    "manifesto.page.commitment.title": "Compromiso con el Lector",
    "manifesto.page.commitment": "Si te suscribes al Strategic Intelligence Digest, recibirás cada quince días un análisis que respeta tu tiempo y tu inteligencia. No recibirás clickbait. Recibirás frameworks que puedes usar después de que la tendencia pase de moda.",
    "manifesto.page.signature":  "Julián Andrés Mosquera",
    "manifesto.page.sig.role":   "Fundador, The Human Software · Cali, Colombia · 2026",

    /* ---- Portafolio page ---- */
    "portafolio.headline":       "Trayectoria Verificable, No Credenciales Infladas",
    "portafolio.sub":            "Publicaciones, proyectos e investigaciones que respaldan cada afirmación que hacemos. Sin autopromoción. Con fuentes y resultados documentados.",
    "portafolio.col.project":    "Proyecto / Publicación",
    "portafolio.col.type":       "Tipo",
    "portafolio.col.org":        "Organización",
    "portafolio.col.year":       "Año",
    "portafolio.col.desc":       "Descripción",

    /* ---- THSN page ---- */
    "thsn.headline":             "THSN — La Red de Quienes Piensan Antes de Actuar",
    "thsn.sub":                  "THSN es la comunidad cerrada de suscriptores del Strategic Intelligence Digest. No es una red social. Es un espacio donde líderes latinoamericanos acceden a análisis propietario, frameworks de decisión y conversaciones que el mercado abierto no produce.",
    "thsn.stat1.value":          "6+",
    "thsn.stat1.label":          "Frameworks propietarios planificados",
    "thsn.stat2.value":          "18–25",
    "thsn.stat2.label":          "Minutos promedio de lectura",
    "thsn.stat3.value":          "5,000",
    "thsn.stat3.label":          "Cap de membresía",
    "thsn.benefits.title":       "Beneficios de ser parte de THSN",
    "thsn.b1.title":             "Análisis que No Caduca",
    "thsn.b1.desc":              "Cada edición incluye un framework reutilizable que aplica después de que la tendencia deje de ser noticia.",
    "thsn.b2.title":             "Contexto LATAM Obligatorio",
    "thsn.b2.desc":              "Cada análisis responde qué implica una tendencia global para tu decisión en Colombia, México o Perú.",
    "thsn.b3.title":             "Cero Ruido, Solo Criterio",
    "thsn.b3.desc":              "Sin resúmenes de noticias. Sin listas de herramientas. Sin contenido diseñado para generar clics y olvidarse.",
    "thsn.b4.title":             "Comunidad de Decisores",
    "thsn.b4.desc":              "Acceso a una red de profesionales que valoran el rigor sobre la velocidad y el criterio sobre la opinión.",
    "thsn.cta.headline":         "Hay 5,000 lugares. Uno puede ser tuyo.",
    "thsn.cta.btn":              "Suscribirse al Digest",

    /* ---- Changelog page ---- */
    "changelog.headline":        "Novedades",
    "changelog.sub":             "Historial de lanzamientos, actualizaciones y hitos de The Human Software.",
    "changelog.h1.date":         "Abril 2026",
    "changelog.h1.type":         "Lanzamiento",
    "changelog.h1.title":        "Portal thehumansoftware.com v1.0 disponible",
    "changelog.h1.desc":         "El hub corporativo de The Human Software está operativo con 13 páginas, ecosistema de servicios y acceso directo al Strategic Intelligence Digest.",
    "changelog.h2.date":         "Marzo 2026",
    "changelog.h2.type":         "Lanzamiento",
    "changelog.h2.title":        "Edición #001 del Strategic Intelligence Digest",
    "changelog.h2.desc":         "Primera edición del SID publicada: \"El Mapa Profesional de 2025 Ya Está Obsoleto\". Incluye el Marco de Actualización Cognitiva (MAC).",
    "changelog.h3.date":         "Marzo 2026",
    "changelog.h3.type":         "Nuevo",
    "changelog.h3.title":        "Framework IA-COMPASS v1.0 publicado",
    "changelog.h3.desc":         "Framework propietario de diagnóstico de madurez institucional en IA. Cinco dimensiones, scoring cuantitativo, reporte de 20+ páginas.",
    "changelog.h4.type":         "Anuncio",
    "changelog.h4.title":        "THS Academy Cohorte 1 — Inscripciones abiertas",
    "changelog.h4.desc":         "Primer programa de formación ejecutiva: \"Pensamiento Estratégico con IA\". Cohortes reducidas, proyectos reales, mentoría directa.",
    "changelog.h5.date":         "2025",
    "changelog.h5.type":         "Lanzamiento",
    "changelog.h5.title":        "Fundación de The Human Software",
    "changelog.h5.desc":         "Julián Andrés Mosquera funda THS en Cali, Colombia, con la misión de construir infraestructura cognitiva para decisores de América Latina.",

    /* ---- About page ---- */
    "about.headline":            "Quiénes Somos y Por Qué Nos Importa",
    "about.sub":                 "The Human Software es una firma de inteligencia estratégica aplicada fundada en Cali, Colombia. Producimos análisis, frameworks y formación para decisores que exigen rigor.",
    "about.founder.title":       "Fundador",
    "about.founder.bio":         "Julián Andrés Mosquera es ingeniero y arquitecto de IA radicado en Cali, Colombia. Fundó The Human Software en 2025 con la convicción de que América Latina necesita inteligencia estratégica producida desde la región, con sus propios estándares de rigor y aplicabilidad.",
    "about.founder.motivation":  "Después de años observando cómo las organizaciones latinoamericanas adoptan tecnología sin criterio estratégico — comprando herramientas antes de entender el problema — decidí construir lo que faltaba: una operación de inteligencia aplicada que produce análisis verificable, frameworks reutilizables y formación con resultados medibles.",
    "about.mission.title":       "Misión",
    "about.mission.text":        "Producir inteligencia estratégica verificable, frameworks de decisión aplicables y formación de alto impacto para que decisores latinoamericanos tomen mejores decisiones con IA.",
    "about.vision.title":        "Visión",
    "about.vision.text":         "Para 2031, ser la infraestructura cognitiva de referencia del mundo hispanohablante: donde líderes, organizaciones y gobiernos acuden antes de decidir.",
    "about.values.title":        "Valores",
    "about.v1.title":            "Rigor verificable",
    "about.v1.desc":             "Cada afirmación tiene fuente. Cada framework tiene estructura replicable. Si no es verificable, no lo publicamos.",
    "about.v2.title":            "Aplicabilidad inmediata",
    "about.v2.desc":             "Todo lo que producimos responde una pregunta: ¿qué haces diferente el lunes con esta información?",
    "about.v3.title":            "Honestidad epistémica",
    "about.v3.desc":             "Declaramos lo que sabemos, lo que inferimos y lo que no sabemos. La incertidumbre no es debilidad.",
    "about.v4.title":            "Perspectiva propia",
    "about.v4.desc":             "Analizamos desde América Latina, no traducimos desde el anglosajonismo. Nuestro contexto es nuestra ventaja.",
    "about.coverage.title":      "Cobertura Geográfica",
    "about.coverage.text":       "Base de operaciones en Cali, Colombia. Cobertura analítica y de consultoría para toda América Latina. Operaciones remotas globales. Idiomas: español e inglés.",

    /* ---- Contact page ---- */
    "contact.headline":          "Conversemos Sobre lo que Necesitas Decidir",
    "contact.sub":               "No hacemos pitch de ventas. Hacemos diagnóstico. Cuéntanos qué decisión estratégica tienes sobre la mesa y evaluamos si podemos aportar.",
    "contact.form.name":         "Tu nombre completo",
    "contact.form.name.ph":      "Ej: María García López",
    "contact.form.email":        "Email profesional",
    "contact.form.email.ph":     "Ej: m.garcia@empresa.co",
    "contact.form.org":          "Tu organización",
    "contact.form.org.ph":       "Ej: Grupo Empresarial ABC",
    "contact.form.type":         "¿En qué podemos aportar?",
    "contact.form.type.o1":      "Diagnóstico de madurez en IA (IA-COMPASS)",
    "contact.form.type.o2":      "Consultoría estratégica en IA y transformación digital",
    "contact.form.type.o3":      "Formación ejecutiva o corporativa (THS Academy)",
    "contact.form.type.o4":      "Suscripción al Strategic Intelligence Digest",
    "contact.form.type.o5":      "Alianza institucional o académica",
    "contact.form.type.o6":      "Propuesta de colaboración o investigación",
    "contact.form.type.o7":      "Consulta sobre frameworks o metodología THS",
    "contact.form.type.o8":      "Otro (describir en el mensaje)",
    "contact.form.message":      "Contexto de tu consulta",
    "contact.form.message.ph":   "Describe brevemente la decisión o desafío que enfrentas.",
    "contact.form.submit":       "Enviar Mensaje",
    "contact.confirm.title":     "Tu mensaje llegó. Lo leemos personalmente.",
    "contact.confirm.desc":      "No usamos respuestas automáticas genéricas. Julián o su equipo revisarán tu consulta y responderán en un plazo razonable.",
    "contact.info.title":        "Contacto Directo",
    "contact.info.email":        "contacto@thehumansoftware.com",
    "contact.info.email.note":   "Para consultas directas que no requieren formulario.",
    "contact.info.response":     "Respondemos en máximo 48 horas hábiles.",
    "contact.info.coverage":     "Operamos desde Colombia para toda América Latina. Consultoría remota disponible globalmente en español e inglés.",
    "contact.info.notice":       "Esta no es una página de ventas. Es un punto de contacto profesional. Escríbenos cuando tengas una decisión real que necesite criterio.",

    /* ---- Brand Assets page ---- */
    "brand.headline":            "Brand Assets",
    "brand.sub":                 "Logotipos, paleta de colores, tipografía y guías de uso de la marca The Human Software.",
    "brand.logo.title":          "Logotipo",
    "brand.logo.desc":           "Descarga el logotipo oficial de THS en formato SVG y PNG.",
    "brand.colors.title":        "Paleta de Colores",
    "brand.colors.desc":         "Los colores corporativos de THS en modos claro y oscuro.",
    "brand.typography.title":    "Tipografía",
    "brand.typography.desc":     "Inter como familia tipográfica principal para cuerpo y display.",
    "brand.usage.title":         "Guía de Uso",
    "brand.usage.desc":          "Reglas de uso, espaciado mínimo y variantes permitidas del logotipo.",
    "brand.logo.note": "Placeholder textual — el logo definitivo será provisto por el fundador.",

    /* ---- about ---- */
    "about.founder.bio2": "Es creador de IA-COMPASS, un framework propietario de diagnóstico de madurez institucional en IA, y del framework SOVEREIGN SUPREME, un sistema de orquestación cognitiva multi-LLM adoptado como estándar de trabajo interno de THS.",
    "about.founder.bio3": "Publica el Strategic Intelligence Digest desde 2026 y dirige la operación editorial, de consultoría y de formación de THS. Opera en español e inglés.",
    "about.founder.name": "Julián Andrés Mosquera",
    "about.founder.role": "Ingeniero · Arquitecto de IA · Fundador de The Human Software",
    "about.hero.subtitle": "The Human Software es una firma de inteligencia estratégica aplicada fundada en Cali, Colombia. Producimos análisis, frameworks y formación para decisores que exigen rigor.",
    "about.hero.title": "Quiénes Somos y Por Qué Nos Importa",
    "about.value1.desc": "Cada afirmación tiene fuente. Cada framework tiene estructura replicable. Si no es verificable, no lo publicamos.",
    "about.value1.title": "Rigor verificable",
    "about.value2.desc": "Todo lo que producimos responde una pregunta: ¿qué haces diferente el lunes con esta información?",
    "about.value2.title": "Aplicabilidad inmediata",
    "about.value3.desc": "Declaramos lo que sabemos, lo que inferimos y lo que no sabemos. La incertidumbre no es debilidad.",
    "about.value3.title": "Honestidad epistémica",
    "about.value4.desc": "Analizamos desde América Latina, no traducimos desde el anglosajonismo. Nuestro contexto es nuestra ventaja.",
    "about.value4.title": "Perspectiva propia",

    /* ---- academy ---- */
    "academy.cta.button": "Iniciar Conversación →",
    "academy.cta.description": "Conversemos sobre cómo THS puede aportar inteligencia verificada a tu organización. Sin compromiso, sin pitch de ventas, solo diagnóstico.",
    "academy.cta.title": "¿Tu próxima decisión estratégica tiene el respaldo analítico que merece?",
    "academy.faq.a1": "No. Los programas están diseñados para decisores, no para desarrolladores. Si tu trabajo es definir dirección estratégica, este es tu espacio.",
    "academy.faq.a2": "Cohortes de máximo 30 personas, proyectos aplicados a tu organización real, mentoría directa. No hay videos pregrabados de 2019.",
    "academy.faq.a3": "Sí. Cada módulo produce un entregable que aplicas en tu organización esa misma semana. El proyecto final es tu estrategia de IA documentada.",
    "academy.faq.a4": "Sí. Certificado THS con portafolio de proyectos verificable. No emitimos credenciales decorativas.",
    "academy.faq.a5": "[Pendiente de confirmación — Pricing definitivo será anunciado próximamente.]",
    "academy.faq.q1": "¿Es necesario saber programar?",
    "academy.faq.q2": "¿En qué se diferencia de un MOOC en Coursera o Udemy?",
    "academy.faq.q3": "¿Puedo aplicar lo aprendido durante el programa, no después?",
    "academy.faq.q4": "¿Hay certificación?",
    "academy.faq.q5": "¿Cuál es la inversión?",
    "academy.hero.eyebrow": "Formación Ejecutiva",
    "academy.hero.subtitle": "Programas intensivos de 8 a 12 semanas para profesionales que necesitan aplicar inteligencia artificial con criterio estratégico. Cohortes reducidas, proyectos reales, mentoría directa.",
    "academy.hero.title": "Capacidades que Ningún Modelo de IA Reemplaza",
    "academy.program1.audience": "Para quién: Profesionales senior que toman decisiones y necesitan criterio, no tutoriales de ChatGPT.",
    "academy.program1.cta": "Reservar Lugar en Cohorte 1",
    "academy.program1.description": "Para profesionales que usan IA como herramienta pero no como ventaja estratégica. Aprende a formular el problema antes de pedirle una respuesta al modelo.",
    "academy.program1.duration": "Duración: 8 semanas",
    "academy.program1.level": "Inicial–Intermedio",
    "academy.program1.mod1": "Arquitectura de pensamiento antes de la automatización",
    "academy.program1.mod2": "Prompting estratégico: más allá de la instrucción literal",
    "academy.program1.mod3": "Evaluación de outputs de IA con criterio profesional",
    "academy.program1.mod4": "Proyecto integrador aplicado a tu organización",
    "academy.program1.title": "Pensamiento Estratégico con IA",
    "academy.program2.audience": "Para quién: Directores de innovación, CTOs y gerentes de transformación digital.",
    "academy.program2.cta": "Solicitar Programa",
    "academy.program2.description": "Diseña la estrategia de adopción de IA de tu organización con frameworks verificados, gobernanza real y métricas de impacto. No es un bootcamp de código: es arquitectura de decisión.",
    "academy.program2.duration": "Duración: 10 semanas",
    "academy.program2.level": "Intermedio–Avanzado",
    "academy.program2.mod1": "Diagnóstico de madurez organizacional (IA-COMPASS aplicado)",
    "academy.program2.mod2": "Gobernanza de IA: políticas, riesgos y compliance",
    "academy.program2.mod3": "Roadmap de implementación con entregables medibles",
    "academy.program2.mod4": "Caso de estudio aplicado a tu empresa",
    "academy.program2.title": "IA Aplicada para Organizaciones",
    "academy.program3.audience": "Para quién: CEOs, CFOs y board members que necesitan criterio, no jerga técnica.",
    "academy.program3.cta": "Solicitar Programa Ejecutivo",
    "academy.program3.description": "Para C-Suite que necesita entender las implicaciones estratégicas de la IA sin convertirse en técnico. Decisiones de inversión, riesgo regulatorio y ventaja competitiva.",
    "academy.program3.duration": "Duración: 12 semanas",
    "academy.program3.level": "Ejecutivo",
    "academy.program3.mod1": "IA como factor de valoración empresarial",
    "academy.program3.mod2": "Riesgos regulatorios en LATAM: qué cambia en 2026–2028",
    "academy.program3.mod3": "Decisiones de make vs. buy en infraestructura de IA",
    "academy.program3.mod4": "Mentoría directa con el equipo THS",
    "academy.program3.title": "Liderazgo en la Era de la IA",
    "academy.programs.title": "Programas",
    "academy.stats.hours.label": "Horas de contenido aplicado",
    "academy.stats.hours.note": "70% práctico, 30% conceptual",
    "academy.stats.hours.value": "40–60",
    "academy.stats.programs.label": "Programas disponibles",
    "academy.stats.programs.note": "Cornerstone + Avanzado + Ejecutivo",
    "academy.stats.programs.value": "3",
    "academy.stats.projects.label": "Proyectos reales por programa",
    "academy.stats.projects.note": "Aplicados a tu organización",
    "academy.stats.projects.value": "2–3",
    "academy.stats.ratio.label": "Contenido aplicado vs. teórico",
    "academy.stats.ratio.note": "Diferenciador vs. MOOCs masivos",
    "academy.stats.ratio.value": "70/30",

    /* ---- advisory ---- */
    "advisory.areas.area1.desc": "Medimos tu madurez real en IA con un framework de 5 dimensiones y entregables accionables.",
    "advisory.areas.area1.title": "Diagnóstico IA-COMPASS",
    "advisory.areas.area2.desc": "Diseñamos políticas, procesos y controles para que tu organización use IA con responsabilidad verificable.",
    "advisory.areas.area2.title": "Gobernanza de IA",
    "advisory.areas.area3.desc": "Rediseñamos procesos de decisión para que los datos dejen de ser decorativos y se vuelvan operativos.",
    "advisory.areas.area3.title": "Transformación Basada en Datos",
    "advisory.areas.area4.desc": "Construimos la secuencia de pasos con hitos, presupuesto y métricas para adoptar IA sin improvisar.",
    "advisory.areas.area4.title": "Roadmaps de Implementación",
    "advisory.areas.area5.desc": "Capacitamos a tu C-Suite y mandos medios en criterio estratégico sobre IA, no en tutoriales técnicos.",
    "advisory.areas.area5.title": "Formación de Liderazgo",
    "advisory.areas.area6.desc": "Analizamos tu sector con fuentes verificadas para identificar ventajas, amenazas y movimientos del mercado.",
    "advisory.areas.area6.title": "Inteligencia Competitiva",
    "advisory.cta.button": "Iniciar Conversación →",
    "advisory.cta.description": "Conversemos sobre cómo THS puede aportar inteligencia verificada a tu organización. Sin compromiso, sin pitch de ventas, solo diagnóstico.",
    "advisory.cta.title": "¿Tu próxima decisión estratégica tiene el respaldo analítico que merece?",
    "advisory.hero.eyebrow": "Consultoría Estratégica",
    "advisory.hero.subtitle": "Diagnóstico, gobernanza e implementación de IA para organizaciones que necesitan resultados verificables, no PowerPoints con tendencias. Desde Colombia, para toda América Latina.",
    "advisory.hero.title": "No Instalamos Herramientas. Instalamos Criterio.",
    "advisory.timeline.step1.deliverable": "Entregable: Diagnóstico de alcance preliminar",
    "advisory.timeline.step1.desc": "Entendemos tu contexto, desafíos y nivel de urgencia. Sin compromiso, sin pitch de ventas.",
    "advisory.timeline.step1.label": "Etapa 1",
    "advisory.timeline.step1.title": "Conversación Inicial",
    "advisory.timeline.step2.deliverable": "Entregable: Reporte IA-COMPASS de 20+ páginas",
    "advisory.timeline.step2.desc": "Evaluamos 5 dimensiones de madurez en IA de tu organización con datos y entrevistas.",
    "advisory.timeline.step2.label": "Etapa 2",
    "advisory.timeline.step2.title": "Diagnóstico IA-COMPASS",
    "advisory.timeline.step3.deliverable": "Entregable: Roadmap estratégico de 12 meses",
    "advisory.timeline.step3.desc": "Construimos el roadmap de implementación con hitos, métricas y responsables definidos.",
    "advisory.timeline.step3.label": "Etapa 3",
    "advisory.timeline.step3.title": "Diseño de Arquitectura",
    "advisory.timeline.step4.deliverable": "Entregable: Reportes de progreso mensuales",
    "advisory.timeline.step4.desc": "Trabajamos junto a tu equipo en la implementación real de las recomendaciones.",
    "advisory.timeline.step4.label": "Etapa 4",
    "advisory.timeline.step4.title": "Acompañamiento de Ejecución",
    "advisory.timeline.step5.deliverable": "Entregable: Dashboard de impacto verificado",
    "advisory.timeline.step5.desc": "Evaluamos resultados contra la línea base del diagnóstico inicial.",
    "advisory.timeline.step5.label": "Etapa 5",
    "advisory.timeline.step5.title": "Medición de Impacto",
    "advisory.timeline.step6.deliverable": "Entregable: Manual de gobernanza institucional",
    "advisory.timeline.step6.desc": "Tu equipo adquiere la capacidad de operar sin dependencia de THS.",
    "advisory.timeline.step6.label": "Etapa 6",
    "advisory.timeline.step6.title": "Transferencia y Autonomía",
    "advisory.timeline.title": "Proceso de Engagement",

    /* ---- blog ---- */
    "blog.article1.cat": "IA Aplicada",
    "blog.article1.date": "Abril 2026",
    "blog.article1.excerpt": "La brecha no es tecnológica: es de gobernanza. Análisis de 40 proyectos de IA en empresas colombianas con datos de 2024–2025.",
    "blog.article1.reading": "12 min lectura",
    "blog.article1.title": "Por qué el 73% de los pilotos de IA en Colombia no llegan a producción",
    "blog.article2.cat": "Decisiones Estratégicas",
    "blog.article2.date": "Abril 2026",
    "blog.article2.excerpt": "Licencias sin arquitectura de datos producen gasto, no transformación. Framework de evaluación pre-compra para directores de TI.",
    "blog.article2.reading": "10 min lectura",
    "blog.article2.title": "El error que cometen las organizaciones al comprar ChatGPT Enterprise sin estrategia de datos",
    "blog.article3.cat": "Contexto LATAM",
    "blog.article3.date": "Mayo 2026",
    "blog.article3.excerpt": "Mapa completo del marco regulatorio colombiano aplicable a IA, con comparativa México-Chile-Brasil y checklist de compliance.",
    "blog.article3.reading": "15 min lectura",
    "blog.article3.title": "Regulación de IA en Colombia 2026: qué existe, qué falta y qué cambia para tu empresa",
    "blog.article4.cat": "Gobernanza y Ética",
    "blog.article4.date": "Mayo 2026",
    "blog.article4.excerpt": "Análisis técnico de por qué los modelos de lenguaje no pueden autoverificarse en ciclo único y qué hacer al respecto.",
    "blog.article4.reading": "14 min lectura",
    "blog.article4.title": "El Cumplimiento Teatral: cuando la IA dice que auditó su propio código (y mintió)",
    "blog.article5.cat": "IA Aplicada",
    "blog.article5.date": "Junio 2026",
    "blog.article5.excerpt": "Guía práctica de Retrieval-Augmented Generation para instituciones educativas que quieren IA basada en sus propios documentos.",
    "blog.article5.reading": "18 min lectura",
    "blog.article5.title": "RAG educativo sin alucinaciones: cómo construir un tutor virtual anclado a tu PEI institucional",
    "blog.article6.cat": "Perspectiva THS",
    "blog.article6.date": "Junio 2026",
    "blog.article6.excerpt": "Por qué escribir prompts dejará de ser habilidad diferencial y qué rol la reemplazará en las organizaciones de 2027.",
    "blog.article6.reading": "8 min lectura",
    "blog.article6.title": "No necesitamos más Prompt Engineers. Necesitamos Arquitectos Cognitivos.",
    "blog.cat.all": "Todos",
    "blog.cat.decisions": "Decisiones Estratégicas",
    "blog.cat.governance": "Gobernanza y Ética",
    "blog.cat.ia": "Inteligencia Artificial Aplicada",
    "blog.cat.latam": "Contexto LATAM",
    "blog.cat.ths": "Perspectiva THS",
    "blog.hero.subtitle": "Artículos, investigaciones y perspectivas originales sobre IA, transformación digital y toma de decisiones estratégicas en América Latina. Fuentes verificadas. Cero relleno.",
    "blog.hero.title": "Análisis que Sobrevive la Siguiente Tendencia",

    /* ---- brand ---- */
    "brand.colors.accent": "Accent (Purple 500)",
    "brand.colors.dark": "Dark Background",
    "brand.colors.light": "Light Background",
    "brand.colors.sky": "Sky Accent",
    "brand.colors.textprimary": "Text Primary",
    "brand.colors.textsecondary": "Text Secondary",
    "brand.guidelines.text": "Las guías completas de uso de marca, incluyendo espaciado mínimo del logo, combinaciones de color permitidas y restricciones de aplicación, serán publicadas próximamente. Para consultas sobre uso de la marca THS, contactar a contacto@thehumansoftware.com.",
    "brand.guidelines.title": "Guías de Uso",
    "brand.hero.subtitle": "Recursos de marca, guías de uso y assets descargables de The Human Software.",
    "brand.hero.title": "Identidad Visual THS",
    "brand.typography.bold": "Bold 700 — Headlines y títulos",
    "brand.typography.light": "Light 300 — Texto auxiliar y metadatos",
    "brand.typography.medium": "Medium 500 — Botones y navegación",
    "brand.typography.note": "Inter es la fuente principal de THS, utilizada tanto para cuerpo de texto como para titulares. Cargada desde Google Fonts CDN con pesos 300–700.",
    "brand.typography.regular": "Regular 400 — Cuerpo de texto y párrafos",
    "brand.typography.semibold": "Semibold 600 — Subtítulos y labels",

    /* ---- changelog ---- */
    "changelog.entry1.date": "Abril 2026",
    "changelog.entry1.desc": "El hub corporativo de The Human Software está operativo con 13 páginas, ecosistema de servicios y acceso directo al Strategic Intelligence Digest.",
    "changelog.entry1.title": "Portal thehumansoftware.com v1.0 disponible",
    "changelog.entry1.type": "Lanzamiento",
    "changelog.entry2.date": "Marzo 2026",
    "changelog.entry2.desc": "Primera edición del SID publicada: \"El Mapa Profesional de 2025 Ya Está Obsoleto\". Incluye el Marco de Actualización Cognitiva (MAC). [Pendiente de confirmación del título real]",
    "changelog.entry2.title": "Edición #001 del Strategic Intelligence Digest",
    "changelog.entry2.type": "Lanzamiento",
    "changelog.entry3.date": "Marzo 2026",
    "changelog.entry3.desc": "Framework propietario de diagnóstico de madurez institucional en IA. Cinco dimensiones, scoring cuantitativo, reporte de 20+ páginas. Disponible para clientes Enterprise.",
    "changelog.entry3.title": "Framework IA-COMPASS v1.0 publicado",
    "changelog.entry3.type": "Nuevo",
    "changelog.entry4.date": "[Pendiente]",
    "changelog.entry4.desc": "Primer programa de formación ejecutiva: \"Pensamiento Estratégico con IA\". Cohortes reducidas, proyectos reales, mentoría directa. [Pendiente de confirmación de fecha]",
    "changelog.entry4.title": "THS Academy Cohorte 1 — Inscripciones abiertas",
    "changelog.entry4.type": "Anuncio",
    "changelog.entry5.date": "2025",
    "changelog.entry5.desc": "Julián Andrés Mosquera funda THS en Cali, Colombia, con la misión de construir infraestructura cognitiva para decisores de América Latina.",
    "changelog.entry5.title": "Fundación de The Human Software",
    "changelog.entry5.type": "Lanzamiento",
    "changelog.hero.subtitle": "Últimos hitos, lanzamientos y actualizaciones del ecosistema THS.",
    "changelog.hero.title": "Novedades",

    /* ---- contact ---- */
    "contact.confirmation.text": "No usamos respuestas automáticas genéricas. Julián o su equipo revisarán tu consulta y responderán en un plazo razonable. Máximo 48 horas hábiles.",
    "contact.confirmation.title": "Tu mensaje llegó. Lo leemos personalmente.",
    "contact.form.email.label": "Email profesional",
    "contact.form.message.label": "Contexto de tu consulta",
    "contact.form.name.label": "Tu nombre completo",
    "contact.form.org.label": "Tu organización",
    "contact.form.type.label": "¿En qué podemos aportar?",
    "contact.form.type.opt1": "Diagnóstico de madurez en IA (IA-COMPASS)",
    "contact.form.type.opt2": "Consultoría estratégica en IA y transformación digital",
    "contact.form.type.opt3": "Formación ejecutiva o corporativa (THS Academy)",
    "contact.form.type.opt4": "Suscripción al Strategic Intelligence Digest",
    "contact.form.type.opt5": "Alianza institucional o académica",
    "contact.form.type.opt6": "Propuesta de colaboración o investigación",
    "contact.form.type.opt7": "Consulta sobre frameworks o metodología THS",
    "contact.form.type.opt8": "Otro (describir en el mensaje)",
    "contact.form.type.placeholder": "Selecciona una opción",
    "contact.hero.subtitle": "No hacemos pitch de ventas. Hacemos diagnóstico. Cuéntanos qué decisión estratégica tienes sobre la mesa y evaluamos si podemos aportar.",
    "contact.hero.title": "Conversemos Sobre lo que Necesitas Decidir",
    "contact.info.coverage.label": "Cobertura geográfica",
    "contact.info.coverage.text": "Operamos desde Colombia para toda América Latina. Consultoría remota disponible globalmente en español e inglés.",
    "contact.info.email.label": "Email",
    "contact.info.response.label": "Tiempo de respuesta",
    "contact.info.response.text": "Respondemos en máximo 48 horas hábiles.",

    /* ---- cta ---- */
    "cta.btn1": "Iniciar Conversación",
    "cta.btn2": "Explorar el Intelligence Digest",
    "cta.label": "Siguiente Paso",

    /* ---- feat ---- */
    "feat.academy.desc": "Programas intensivos donde la IA es herramienta, no tema. Proyectos reales, cohortes reducidas, resultados medibles.",
    "feat.academy.title": "Formación con Criterio",
    "feat.advisory.desc": "Diagnóstico, gobernanza e implementación de IA con estándares IEEE. Sin PowerPoints decorativos.",
    "feat.advisory.title": "Consultoría de Profundidad",
    "feat.compass.desc": "Framework propietario de 5 dimensiones que mide la madurez real de tu organización en IA.",
    "feat.compass.title": "Diagnóstico Antes de Decidir",
    "feat.frameworks.desc": "Biblioteca abierta de marcos analíticos creados por THS. Descargables, aplicables, verificados.",
    "feat.frameworks.title": "Herramientas de Decisión",
    "feat.portfolio.desc": "Publicaciones, proyectos e investigación que respaldan cada afirmación que hacemos. Sin credenciales infladas.",
    "feat.portfolio.title": "Rigor con Trayectoria",
    "feat.sid.desc": "Análisis propietario quincenal con fuentes verificadas, frameworks aplicables y perspectiva LATAM. Para decisores.",
    "feat.sid.title": "Inteligencia Cada Quince Días",

    /* ---- founder ---- */
    "founder.label": "Quién está detrás de THS",
    "founder.tag1": "Data Science",
    "founder.tag2": "IA Aplicada",
    "founder.tag3": "Estrategia",
    "founder.tag4": "LATAM",
    "founder.tag5": "IEEE",

    /* ---- frameworks ---- */
    "frameworks.description": "La Frameworks Library es la colección de herramientas de decisión propietarias de The Human Software. Cada framework tiene nombre propio, estructura replicable y contexto de aplicación definido. Algunos se publican abiertamente como activos de marca. Otros están disponibles exclusivamente para suscriptores del SID y clientes Enterprise.",
    "frameworks.hero.subtitle": "Biblioteca de frameworks analíticos creados por THS. Cada marco está diseñado para aplicarse esta semana, no para archivarse hasta que sea irrelevante.",
    "frameworks.hero.title": "Herramientas de Decisión, No de Decoración",
    "frameworks.row1.access": "Enterprise",
    "frameworks.row1.cat": "Gobernanza de IA",
    "frameworks.row1.desc": "Diagnóstico de madurez institucional en IA con 5 dimensiones y scoring cuantitativo",
    "frameworks.row1.format": "Informe + sesión",
    "frameworks.row1.level": "Avanzado",
    "frameworks.row2.cat": "Toma de decisiones",
    "frameworks.row2.desc": "Evalúa si tus habilidades profesionales resisten el impacto de la IA generativa",
    "frameworks.row2.format": "PDF descargable",
    "frameworks.row2.level": "Intermedio",
    "frameworks.row3.cat": "Toma de decisiones",
    "frameworks.row3.desc": "Clasifica el nivel de integración de IA en procesos organizacionales en 5 etapas",
    "frameworks.row3.format": "PDF descargable",
    "frameworks.row3.level": "Intermedio",
    "frameworks.row4.access": "Abierto",
    "frameworks.row4.cat": "Análisis competitivo",
    "frameworks.row4.desc": "Separa herramientas de IA con valor real de las que son marketing con interfaz bonita",
    "frameworks.row4.format": "PDF descargable",
    "frameworks.row4.level": "Inicial",
    "frameworks.row5.cat": "Toma de decisiones",
    "frameworks.row5.desc": "Protocolo de 4 pasos para decidir si una tarea debe automatizarse, asistirse o mantenerse humana",
    "frameworks.row5.format": "PDF descargable",
    "frameworks.row5.level": "Intermedio",
    "frameworks.row6.access": "Abierto",
    "frameworks.row6.cat": "Gobernanza de IA",
    "frameworks.row6.desc": "Arquitectura de 3 etapas para eliminar el Cumplimiento Teatral en interacciones con LLMs",
    "frameworks.row6.format": "Guía técnica",
    "frameworks.row6.level": "Avanzado",
    "frameworks.row7.access": "Enterprise",
    "frameworks.row7.cat": "Análisis competitivo",
    "frameworks.row7.desc": "Mide la capacidad de una organización para absorber disrupciones tecnológicas sin colapsar",
    "frameworks.row7.format": "Informe + taller",
    "frameworks.row7.level": "Avanzado",
    "frameworks.row8.access": "Enterprise",
    "frameworks.row8.cat": "Transformación organizacional",
    "frameworks.row8.desc": "Framework de co-creación cognitiva con orquestación multi-LLM y triage de 5 dimensiones",
    "frameworks.row8.format": "Sistema completo",
    "frameworks.row8.level": "Experto",
    "frameworks.table.col.access": "Acceso",
    "frameworks.table.col.category": "Categoría",
    "frameworks.table.col.desc": "Descripción",
    "frameworks.table.col.format": "Formato",
    "frameworks.table.col.level": "Nivel",
    "frameworks.table.col.name": "Framework",

    /* ---- iacompass ---- */
    "iacompass.cta.button": "Solicitar Diagnóstico →",
    "iacompass.cta.description": "El diagnóstico IA-COMPASS toma 3 semanas y produce un reporte que cambia la conversación en tu mesa directiva.",
    "iacompass.cta.title": "Tu organización ya tiene una brecha en IA. La pregunta es si la conoces.",
    "iacompass.deliverables.col.desc": "Descripción",
    "iacompass.deliverables.col.format": "Formato",
    "iacompass.deliverables.col.name": "Entregable",
    "iacompass.deliverables.col.time": "Tiempo",
    "iacompass.deliverables.row1.desc": "Diagnóstico de 5 dimensiones con scoring, hallazgos y benchmarks sectoriales",
    "iacompass.deliverables.row1.format": "PDF de 20+ páginas",
    "iacompass.deliverables.row1.name": "Reporte IA-COMPASS Completo",
    "iacompass.deliverables.row1.time": "Semana 3",
    "iacompass.deliverables.row2.desc": "Visualización de las 3 brechas de mayor impacto con priorización",
    "iacompass.deliverables.row2.format": "Dashboard interactivo",
    "iacompass.deliverables.row2.name": "Mapa de Brechas Críticas",
    "iacompass.deliverables.row2.time": "Semana 3",
    "iacompass.deliverables.row3.desc": "Secuencia de implementación con hitos, métricas y responsables",
    "iacompass.deliverables.row3.format": "Documento estratégico",
    "iacompass.deliverables.row3.name": "Roadmap de 12 Meses",
    "iacompass.deliverables.row3.time": "Semana 4",
    "iacompass.deliverables.row4.desc": "Comparación anónima con organizaciones del mismo sector en LATAM",
    "iacompass.deliverables.row4.format": "Informe de 5 páginas",
    "iacompass.deliverables.row4.name": "Benchmark Sectorial",
    "iacompass.deliverables.row4.time": "Semana 4",
    "iacompass.deliverables.row5.desc": "Presentación al C-Suite con hallazgos clave y recomendaciones",
    "iacompass.deliverables.row5.format": "Sesión de 90 minutos",
    "iacompass.deliverables.row5.name": "Sesión Ejecutiva de Hallazgos",
    "iacompass.deliverables.row5.time": "Semana 5",
    "iacompass.dim1.desc": "Evalúa si la dirección de tu organización tiene una visión articulada de IA con recursos asignados, gobernanza definida y métricas de éxito declaradas.",
    "iacompass.dim1.ind1": "Existencia de estrategia formal de IA",
    "iacompass.dim1.ind2": "Presupuesto asignado",
    "iacompass.dim1.ind3": "Sponsor ejecutivo identificado",
    "iacompass.dim1.title": "Estrategia y Liderazgo",
    "iacompass.dim2.desc": "Mide la calidad, accesibilidad y gobernanza de los datos que alimentan (o alimentarán) los sistemas de IA de tu organización.",
    "iacompass.dim2.ind1": "Calidad de datos documentada",
    "iacompass.dim2.ind2": "Pipelines de datos operativos",
    "iacompass.dim2.ind3": "Políticas de acceso y privacidad",
    "iacompass.dim2.title": "Datos e Infraestructura",
    "iacompass.dim3.desc": "Determina si tu equipo tiene las competencias técnicas y estratégicas para operar IA, o si depende exclusivamente de proveedores externos.",
    "iacompass.dim3.ind1": "Roles de IA definidos",
    "iacompass.dim3.ind2": "Programas de upskilling",
    "iacompass.dim3.ind3": "Retención de talento técnico",
    "iacompass.dim3.title": "Talento y Capacidades",
    "iacompass.dim4.desc": "Evalúa cuántos pilotos de IA llegaron a producción, con qué métricas de éxito operan y qué procesos fueron efectivamente transformados.",
    "iacompass.dim4.ind1": "Ratio piloto/producción",
    "iacompass.dim4.ind2": "Procesos automatizados",
    "iacompass.dim4.ind3": "ROI documentado de implementaciones",
    "iacompass.dim4.title": "Operaciones e Implementación",
    "iacompass.dim5.desc": "Mide si tu organización tiene marcos de gobernanza de IA, compliance regulatorio, transparencia en el uso de modelos y gestión de riesgos.",
    "iacompass.dim5.ind1": "Política de IA publicada",
    "iacompass.dim5.ind2": "Auditorías de sesgo",
    "iacompass.dim5.ind3": "Compliance con regulación local",
    "iacompass.dim5.title": "Ética y Gobernanza",
    "iacompass.dimensions.title": "Las 5 Dimensiones del Framework",
    "iacompass.hero.eyebrow": "Framework Propietario",
    "iacompass.hero.subtitle": "Framework propietario de diagnóstico institucional que evalúa 5 dimensiones de madurez en inteligencia artificial. Produce un reporte de 20+ páginas con hallazgos verificados, brechas críticas y roadmap accionable.",
    "iacompass.hero.title": "IA-COMPASS — Mide Tu Brecha Antes de Cruzarla",

    /* ---- insight1 ---- */
    "insight1.badge": "Edición 001",
    "insight1.cta": "Leer Edición Completa",
    "insight1.date": "Marzo 2026",
    "insight1.excerpt": "La primera edición del Strategic Intelligence Digest analiza por qué las rutas profesionales diseñadas antes de la IA generativa ya no funcionan, y presenta el Marco de Actualización Cognitiva (MAC).",
    "insight1.title": "El Mapa Profesional de 2025 Ya Está Obsoleto — Y Nadie Te Lo Dijo",

    /* ---- insight2 ---- */
    "insight2.badge": "Análisis THS",
    "insight2.cta": "Explorar el Framework",
    "insight2.date": "Marzo 2026",
    "insight2.excerpt": "Una introducción práctica al framework propietario de 5 dimensiones que THS utiliza para diagnosticar el estado real — no el estado declarado — de adopción de inteligencia artificial en organizaciones latinoamericanas.",
    "insight2.title": "IA-COMPASS: Cómo Medir la Madurez Real de tu Organización en IA",

    /* ---- insight3 ---- */
    "insight3.badge": "Think &amp; Code",
    "insight3.cta": "Leer el Manifiesto",
    "insight3.date": "Abril 2026",
    "insight3.excerpt": "Cuando los modelos de lenguaje democratizan el acceso a respuestas, la pregunta correcta — formulada con contexto, experiencia y criterio profesional — se convierte en el recurso escaso que define la ventaja.",
    "insight3.title": "Por Qué el Criterio Humano es la Ventaja Competitiva de la Próxima Década",

    /* ---- insights ---- */
    "insights.label": "Último Insight",
    "insights.title": "Análisis reciente",

    /* ---- manifesto ---- */
    "manifesto.commitment.text": "Si te suscribes al Strategic Intelligence Digest, recibirás cada quince días un análisis que respeta tu tiempo y tu inteligencia. No recibirás clickbait. No recibirás resúmenes de lo que ya leíste en tres newsletters anglosajones. No recibirás opiniones disfrazadas de datos. Recibirás frameworks que puedes usar después de que la tendencia pase de moda. Recibirás contexto que nadie más produce. Y recibirás honestidad cuando no tengamos la respuesta.",
    "manifesto.commitment.title": "Compromiso con el Lector",
    "manifesto.declaration": "Hay un exceso de contenido sobre inteligencia artificial y una escasez alarmante de criterio para usarla. Cada semana se publican miles de artículos sobre IA en América Latina. La mayoría son traducciones de publicaciones anglosajonas. No contemplan la regulación colombiana, ni los ciclos presupuestales de una PyME en Medellín, ni la brecha de talento técnico en una universidad pública de Perú. Son contenido producido en masa para audiencias que no son las nuestras. Mientras tanto, directores de tecnología en Bogotá toman decisiones de inversión basándose en benchmarks de Silicon Valley. Rectores universitarios adoptan herramientas de IA sin políticas de gobernanza. Gerentes de innovación compran licencias de ChatGPT Enterprise sin saber qué problema están resolviendo. El costo de estas decisiones mal informadas no se mide en clics ni en open rates. Se mide en presupuestos desperdiciados, proyectos abandonados y oportunidades que no regresan.",
    "manifesto.hero.title": "Por Qué Pensamos Antes de Automatizar",
    "manifesto.principle1.text": "Cada afirmación que publicamos tiene fuente verificable. No citamos \"expertos coinciden\" sin nombres ni datos. No usamos superlativos sin evidencia. Cuando no tenemos certeza, lo decimos. Adoptamos estándares IEEE no por formalismo, sino porque el rigor metodológico es lo que separa el análisis de la opinión. Si una edición del Strategic Intelligence Digest no sobrevive una lectura adversarial, no se publica.",
    "manifesto.principle1.title": "Principio 1: El Rigor como Estándar Mínimo",
    "manifesto.principle2.text": "Cada edición, cada framework, cada programa de formación que producimos responde una pregunta concreta: ¿qué haces diferente el lunes con esta información? No publicamos para que acumules lecturas en tu bandeja de entrada. Publicamos para que tomes una mejor decisión esta semana. Si nuestro contenido no produce acción, estamos fracasando, independientemente de cuántos lo lean.",
    "manifesto.principle2.title": "Principio 2: Aplicabilidad sobre Acumulación de Conocimiento",
    "manifesto.principle3.text": "Cada análisis responde explícitamente: ¿qué implica esto para un líder en Colombia, México o Perú en los próximos 12 a 36 meses? Esta pregunta no es un adorno editorial. Es nuestro foso defensivo. Ningún competidor anglosajón la responde porque su audiencia es otra. Nosotros la respondemos porque la nuestra somos nosotros mismos: profesionales latinoamericanos que toman decisiones en contextos que nadie más entiende.",
    "manifesto.principle3.title": "Principio 3: Contexto LATAM como Ventaja Competitiva",
    "manifesto.principle4.text": "Declaramos lo que sabemos, lo que inferimos y lo que no sabemos. Cada edición incluye niveles de confianza explícitos. Cuando usamos inteligencia artificial en la investigación, lo declaramos con porcentajes de participación. Cuando un dato no ha sido verificado en fuente primaria, lo marcamos como pendiente de verificación. La honestidad intelectual no es una vulnerabilidad: es la condición para que un lector escéptico confíe en nosotros dos años después.",
    "manifesto.principle4.title": "Principio 4: Transparencia Epistémica",
    "manifesto.principle5.text": "No medimos éxito en seguidores, likes ni impresiones. Medimos si un suscriptor tomó una mejor decisión después de leer nuestra edición. Medimos si una organización diagnosticada con IA-COMPASS cambió su estrategia de IA. Medimos si un profesional formado en la Academy aplicó lo aprendido en su trabajo real. Si los números no se conectan con resultados verificables, son vanidad, no métricas.",
    "manifesto.principle5.title": "Principio 5: Impacto Verificable como Única Métrica de Éxito",
    "manifesto.principles.title": "Los 5 Principios Fundamentales",
    "manifesto.signature.location": "Cali, Colombia · 2026",
    "manifesto.signature.name": "Julián Andrés Mosquera",
    "manifesto.signature.role": "Fundador, The Human Software",
    "manifesto.why.text": "The Human Software nació en Cali, Colombia, con una premisa simple: antes de automatizar, hay que pensar. No somos un medio de noticias. No somos una consultora que vende PowerPoints. No somos una academia que recicla contenido anglosajón con subtítulos. Somos una operación de inteligencia estratégica que produce análisis propietario, construye frameworks de decisión verificables y contextualiza cada tendencia global a la realidad operativa de América Latina. Existimos porque el criterio profesional no puede depender de resúmenes de segunda mano. Y porque América Latina merece inteligencia estratégica con la misma profundidad que cualquier mercado del mundo.",
    "manifesto.why.title": "Por Qué Existimos",

    /* ---- portafolio ---- */
    "portafolio.hero.subtitle": "Publicaciones, proyectos e investigaciones que respaldan cada afirmación que hacemos. Sin autopromoción. Con fuentes y resultados documentados.",
    "portafolio.hero.title": "Trayectoria Verificable, No Credenciales Infladas",
    "portafolio.row1.access": "[Pendiente]",
    "portafolio.row1.desc": "[Pendiente]",
    "portafolio.row1.org": "[Pendiente]",
    "portafolio.row1.project": "[Pendiente de confirmación]",
    "portafolio.row1.type": "Investigación",
    "portafolio.row1.year": "[Pendiente]",
    "portafolio.row2.access": "[Pendiente]",
    "portafolio.row2.desc": "[Pendiente]",
    "portafolio.row2.org": "[Pendiente]",
    "portafolio.row2.project": "[Pendiente de confirmación]",
    "portafolio.row2.type": "Paper / Artículo",
    "portafolio.row2.year": "[Pendiente]",
    "portafolio.row3.access": "[Pendiente]",
    "portafolio.row3.desc": "[Pendiente]",
    "portafolio.row3.org": "[Pendiente]",
    "portafolio.row3.project": "[Pendiente de confirmación]",
    "portafolio.row3.type": "Consultoría",
    "portafolio.row3.year": "[Pendiente]",
    "portafolio.row4.access": "[Pendiente]",
    "portafolio.row4.desc": "[Pendiente]",
    "portafolio.row4.org": "[Pendiente]",
    "portafolio.row4.project": "[Pendiente de confirmación]",
    "portafolio.row4.type": "Conferencia / Ponencia",
    "portafolio.row4.year": "[Pendiente]",
    "portafolio.row5.access": "Documentación interna",
    "portafolio.row5.desc": "Framework de orquestación cognitiva multi-LLM con triage y simulación pre-ejecución",
    "portafolio.row5.type": "Framework",
    "portafolio.row6.access": "Disponible para clientes Enterprise",
    "portafolio.row6.desc": "Sistema de diagnóstico de madurez institucional en IA con 5 dimensiones",
    "portafolio.row6.type": "Framework propietario",
    "portafolio.row7.desc": "Publicación quincenal de inteligencia estratégica con estándares IEEE",
    "portafolio.row7.type": "Publicación",
    "portafolio.table.col.access": "Acceso",
    "portafolio.table.col.desc": "Descripción",
    "portafolio.table.col.org": "Organización",
    "portafolio.table.col.project": "Proyecto / Publicación",
    "portafolio.table.col.type": "Tipo",
    "portafolio.table.col.year": "Año",

    /* ---- sid ---- */
    "sid.cta.button": "Suscribirse en THSN →",
    "sid.cta.description": "Publicación quincenal con paywall estricto. Sin versión gratuita, sin resúmenes parciales. El rigor tiene un precio justo.",
    "sid.cta.title": "Accede al análisis que precede a tus decisiones.",
    "sid.editions.col.date": "Fecha",
    "sid.editions.col.edition": "Edición",
    "sid.editions.col.status": "Estado",
    "sid.editions.col.topic": "Tema Central",
    "sid.editions.col.words": "Palabras",
    "sid.editions.row1.date": "Marzo 2026",
    "sid.editions.row1.status": "Publicada",
    "sid.editions.row1.topic": "El mapa profesional obsoleto: por qué las rutas pre-IA ya no funcionan",
    "sid.editions.row2.date": "Abril 2026",
    "sid.editions.row2.status": "En producción",
    "sid.editions.row2.topic": "[Pendiente de confirmación]",
    "sid.editions.row3.date": "Mayo 2026",
    "sid.editions.row3.status": "Planificada",
    "sid.editions.row3.topic": "[Pendiente de confirmación]",
    "sid.hero.eyebrow": "Publicación Insignia",
    "sid.hero.subtitle": "Análisis propietario de 3,000+ palabras con fuentes primarias verificadas, frameworks de decisión aplicables y contexto latinoamericano obligatorio. Para quienes toman decisiones con consecuencias reales.",
    "sid.hero.title": "Inteligencia Estratégica Quincenal para Líderes LATAM",
    "sid.includes.item1": "Presenta un análisis central con datos de fuentes primarias verificadas",
    "sid.includes.item2": "Introduce un framework propietario de decisión con nombre propio",
    "sid.includes.item3": "Contextualiza cada tendencia global a la realidad operativa de LATAM",
    "sid.includes.item4": "Incluye una señal estratégica con horizonte de 12 a 36 meses",
    "sid.includes.item5": "Formula una pregunta abierta que desafía supuestos del sector",
    "sid.includes.item6": "Cierra con implicaciones concretas para tu organización o carrera",
    "sid.stats.frameworks.label": "Frameworks propietarios por edición",
    "sid.stats.frameworks.note": "MAC, EIA, FVR planificados",
    "sid.stats.frameworks.value": "1–2",
    "sid.stats.reading.label": "Tiempo de lectura profunda",
    "sid.stats.reading.note": "Estimado a 200 pal./min",
    "sid.stats.reading.value": "18–25 min",
    "sid.stats.sources.label": "Fuentes verificadas por edición",
    "sid.stats.sources.note": "Estándar IEEE adoptado",
    "sid.stats.sources.value": "15–25",
    "sid.stats.words.label": "Palabras por edición",
    "sid.stats.words.note": "Basado en Edición #001",
    "sid.stats.words.value": "3,000–4,000",

    /* ---- tabs ---- */
    "tabs.academy.cta": "Ver programas disponibles",
    "tabs.academy.desc": "Programas intensivos de IA aplicada, pensamiento estratégico y transformación digital para profesionales senior. Programas de 8 a 12 semanas diseñados para profesionales que necesitan aplicar IA con criterio, no memorizar funcionalidades. Proyectos reales, cohortes reducidas, mentoría directa del equipo THS.",
    "tabs.academy.f1": "Cohortes reducidas con mentoría directa",
    "tabs.academy.f2": "Proyectos aplicados a tu organización real",
    "tabs.academy.f3": "Contenido nativo en español para LATAM",
    "tabs.academy.f4": "Certificación con portafolio verificable",
    "tabs.academy.label": "THS Academy",
    "tabs.academy.title": "Capacidades que la IA No Reemplaza",
    "tabs.advisory.cta": "Conocer el proceso de engagement",
    "tabs.advisory.desc": "Diagnóstico, gobernanza e implementación de IA para organizaciones que no pueden permitirse decisiones superficiales. No vendemos implementaciones genéricas. Diagnosticamos con IA-COMPASS, diseñamos la arquitectura cognitiva de tu organización y acompañamos la ejecución hasta que los indicadores cambien.",
    "tabs.advisory.f1": "Diagnóstico institucional con IA-COMPASS",
    "tabs.advisory.f2": "Gobernanza de IA alineada a regulación",
    "tabs.advisory.f3": "Roadmaps de implementación con entregables medibles",
    "tabs.advisory.f4": "Acompañamiento hasta resultados verificados",
    "tabs.advisory.label": "Enterprise Advisory",
    "tabs.advisory.title": "Criterio Instalado en Tu Organización",
    "tabs.label": "Ecosistema THS",
    "tabs.sid.cta": "Explorar el SID",
    "tabs.sid.desc": "Publicación quincenal de análisis verificado con frameworks propietarios y contexto LATAM obligatorio. Cada edición entrega un análisis central de 3,000+ palabras con fuentes primarias verificadas, un framework de decisión aplicable y la pregunta que nadie en tu sector está haciendo.",
    "tabs.sid.f1": "Análisis quincenal con fuentes IEEE verificadas",
    "tabs.sid.f2": "Framework propietario nuevo en cada edición",
    "tabs.sid.f3": "Contexto LATAM obligatorio en cada análisis",
    "tabs.sid.f4": "Acceso al archivo completo de ediciones",
    "tabs.sid.label": "SID — Strategic Intelligence Digest",
    "tabs.sid.title": "Análisis que Precede a la Decisión",
    "tabs.subtitle": "Análisis verificado, formación ejecutiva y consultoría estratégica — diseñados para organizaciones que no pueden permitirse decisiones superficiales.",
    "tabs.tab1": "Inteligencia Estratégica",
    "tabs.tab2": "Formación Ejecutiva",
    "tabs.tab3": "Consultoría Estratégica",
    "tabs.title": "Tres líneas de negocio. Un solo estándar.",

    /* ---- thsn ---- */
    "thsn.benefit1.desc": "Cada edición incluye un framework reutilizable que aplica después de que la tendencia deje de ser noticia.",
    "thsn.benefit1.title": "Análisis que No Caduca",
    "thsn.benefit2.desc": "Cada análisis responde qué implica una tendencia global para tu decisión en Colombia, México o Perú.",
    "thsn.benefit2.title": "Contexto LATAM Obligatorio",
    "thsn.benefit3.desc": "Sin resúmenes de noticias. Sin listas de herramientas. Sin contenido diseñado para generar clics y olvidarse.",
    "thsn.benefit3.title": "Cero Ruido, Solo Criterio",
    "thsn.benefit4.desc": "Acceso a una red de profesionales que valoran el rigor sobre la velocidad y el criterio sobre la opinión.",
    "thsn.benefit4.title": "Comunidad de Decisores",
    "thsn.cta.button": "Suscribirse al Digest →",
    "thsn.cta.title": "Hay 5,000 lugares. Uno puede ser tuyo.",
    "thsn.hero.subtitle": "THSN es la comunidad cerrada de suscriptores del Strategic Intelligence Digest. No es una red social. Es un espacio donde líderes latinoamericanos acceden a análisis propietario, frameworks de decisión y conversaciones que el mercado abierto no produce.",
    "thsn.hero.title": "THSN — La Red de Quienes Piensan Antes de Actuar",
    "thsn.stats.cap.label": "Cap de membresía",
    "thsn.stats.cap.note": "Escasez deliberada para preservar profundidad",
    "thsn.stats.cap.value": "5,000",
    "thsn.stats.editions.label": "Ediciones publicadas",
    "thsn.stats.editions.note": "Frecuencia quincenal",
    "thsn.stats.editions.value": "[Pendiente]",
    "thsn.stats.frameworks.label": "Frameworks propietarios creados",
    "thsn.stats.frameworks.note": "MAC, EIA, FVR, MDA, IRE + adicionales",
    "thsn.stats.frameworks.value": "6+",
    "thsn.stats.reading.label": "Tiempo promedio de lectura",
    "thsn.stats.reading.note": "Estimado para 3,000–4,000 palabras",
    "thsn.stats.reading.value": "18–25 min",
  },

  /* ============================================
     ENGLISH TRANSLATIONS
     ============================================ */
  en: {
    /* ---- Nav ---- */
    "nav.servicios":        "Services",
    "nav.recursos":         "Resources",
    "nav.thsn":             "THSN",
    "nav.empresa":          "Company",
    "nav.cta":              "Start a Conversation",

    /* Nav dropdown items */
    "nav.sid.title":        "Strategic Intelligence Digest",
    "nav.sid.desc":         "Biweekly verified analysis for LATAM decision-makers",
    "nav.academy.title":    "THS Academy",
    "nav.academy.desc":     "Executive AI training with strategic judgment",
    "nav.advisory.title":   "Enterprise Advisory",
    "nav.advisory.desc":    "Strategic AI consulting for organizations",
    "nav.iacompass.title":  "IA-COMPASS",
    "nav.iacompass.desc":   "AI maturity diagnostic framework",
    "nav.blog.title":       "Blog & Insights",
    "nav.blog.desc":        "Original articles and analysis on AI and strategy",
    "nav.frameworks.title": "Frameworks Library",
    "nav.frameworks.desc":  "Proprietary decision-making tools by THS",
    "nav.manifesto.title":  "Manifesto",
    "nav.manifesto.desc":   "Why we think before we automate",
    "nav.portafolio.title": "Academic Portfolio",
    "nav.portafolio.desc":  "Publications and projects with verifiable track record",
    "nav.thsn.title":       "THSN Network",
    "nav.thsn.desc":        "Closed community of LATAM decision-makers",
    "nav.changelog.title":  "What's New",
    "nav.changelog.desc":   "Changelog and latest THS releases",
    "nav.about.title":      "About THS",
    "nav.about.desc":       "Who we are, mission, vision, and values",
    "nav.brand.title":      "Brand Assets",
    "nav.brand.desc":       "Logos, color palette, and brand guidelines",
    "nav.contact.title":    "Contact",
    "nav.contact.desc":     "Let's discuss what you need to decide",

    /* ---- Banner ---- */
    "banner.text":          "Edition #001 of the Strategic Intelligence Digest — available now",
    "banner.link":          "→ Read on THSN",

    /* ---- Hero (Home) ---- */
    "hero.eyebrow":         "Strategic Intelligence for LATAM",
    "hero.headline":        "The Missing Judgment Between Data and Decision.",
    "hero.sub":             "Proprietary analysis with verified sources, actionable frameworks, and a LATAM perspective. For leaders who need rigor before acting, not summaries before forgetting.",
    "hero.cta1":            "Why We Exist",
    "hero.cta2":            "Read the Strategic Digest",
    "hero.caption":         "Applied strategic intelligence from Cali, Colombia",

    /* ---- Trusted ---- */
    "trusted.title":        "They Have Trusted Our Perspective",

    /* ---- Ecosystem tabs ---- */
    "ecosystem.label":      "Our Ecosystem",
    "ecosystem.title":      "Three Pillars. One Purpose.",
    "ecosystem.sub":        "Intelligence, training, and consulting integrated so your organization makes better decisions with AI.",
    "ecosystem.tab1":       "Strategic Intelligence",
    "ecosystem.tab2":       "Executive Training",
    "ecosystem.tab3":       "Strategic Consulting",

    /* Tab 1: SID */
    "ecosystem.tab1.title": "Analysis That Precedes the Decision",
    "ecosystem.tab1.desc":  "Each edition delivers a 3,000+ word central analysis with verified primary sources, an actionable decision framework, and the question no one in your industry is asking. Latin American context. No filler.",
    "ecosystem.tab1.b1":    "Biweekly analysis with IEEE-verified sources",
    "ecosystem.tab1.b2":    "New proprietary framework in every edition",
    "ecosystem.tab1.b3":    "Mandatory LATAM context in every analysis",
    "ecosystem.tab1.b4":    "Access to the complete edition archive",

    /* Tab 2: Academy */
    "ecosystem.tab2.title": "Capabilities That AI Cannot Replace",
    "ecosystem.tab2.desc":  "8 to 12-week programs designed for professionals who need to apply AI with judgment, not memorize features. Real projects, small cohorts, direct mentorship from the THS team.",
    "ecosystem.tab2.b1":    "Small cohorts with direct mentorship",
    "ecosystem.tab2.b2":    "Projects applied to your actual organization",
    "ecosystem.tab2.b3":    "Content natively produced in Spanish for LATAM",
    "ecosystem.tab2.b4":    "Certification with a verifiable portfolio",

    /* Tab 3: Advisory */
    "ecosystem.tab3.title": "Judgment Installed in Your Organization",
    "ecosystem.tab3.desc":  "We don't sell generic implementations. We diagnose with IA-COMPASS, design your organization's cognitive architecture, and accompany execution until the metrics change.",
    "ecosystem.tab3.b1":    "Institutional diagnostic with IA-COMPASS",
    "ecosystem.tab3.b2":    "AI governance aligned with regulation",
    "ecosystem.tab3.b3":    "Implementation roadmaps with measurable deliverables",
    "ecosystem.tab3.b4":    "Accompaniment until verified results",

    /* ---- Features grid ---- */
    "features.label":        "The Complete THS Ecosystem",
    "features.title":        "Six Pillars of Applied Intelligence",
    "features.sub":          "Each pillar reinforces the next. Together they form the cognitive infrastructure your organization needs.",
    "features.c1.title":     "Intelligence Every Two Weeks",
    "features.c1.desc":      "Proprietary biweekly analysis with verified sources, actionable frameworks, and a LATAM perspective. For decision-makers.",
    "features.c2.title":     "Training with Judgment",
    "features.c2.desc":      "Intensive programs where AI is the tool, not the topic. Real projects, small cohorts, measurable outcomes.",
    "features.c3.title":     "Deep Consulting",
    "features.c3.desc":      "Diagnostic, governance, and AI implementation to IEEE standards. No decorative slide decks.",
    "features.c4.title":     "Diagnose Before You Decide",
    "features.c4.desc":      "A proprietary 5-dimension framework that measures your organization's real AI maturity.",
    "features.c5.title":     "Decision-Making Tools",
    "features.c5.desc":      "An open library of analytical frameworks created by THS. Downloadable, actionable, verified.",
    "features.c6.title":     "Rigor with a Track Record",
    "features.c6.desc":      "Publications, projects, and research that back every claim we make. No inflated credentials.",

    /* ---- Manifesto quote (Home) ---- */
    "manifesto.quote":       "We don't need more newsletters. We need less noise and more judgment. I built THS from Cali, Colombia, with one conviction: a verified analysis and an actionable framework are worth more than a hundred trend summaries. The right question always outperforms the quick answer.",
    "manifesto.author":      "Julián Andrés Mosquera",
    "manifesto.role":        "Founder, The Human Software",

    /* ---- Founder section ---- */
    "founder.name":          "Julián Andrés Mosquera",
    "founder.role":          "Engineer · AI Architect · Founder of The Human Software",
    "founder.bio":           "Systems engineer and AI Architect based in Cali, Colombia. Founder of The Human Software, where he designs cognitive infrastructure to help Latin American organizations make better decisions with artificial intelligence. Creator of IA-COMPASS and the SOVEREIGN SUPREME framework. Publisher of the Strategic Intelligence Digest since 2026. Believes that thinking well is the first prerequisite for automating well.",
    "founder.tags":          "IA-COMPASS · SOVEREIGN SUPREME · SID",
    "founder.cta":           "Read the Full Story",

    /* ---- Insight preview (Home) ---- */
    "insight.label":          "Latest Analysis",
    "insight.title":          "From the Strategic Intelligence Digest",

    "insight.a1.category":    "Edition 001 · March 2026",
    "insight.a1.title":       "The 2025 Career Map Is Already Obsolete — And Nobody Told You",
    "insight.a1.excerpt":     "The first edition of the Strategic Intelligence Digest examines why career paths designed before generative AI no longer hold, and introduces the Cognitive Update Framework (MAC).",
    "insight.a1.cta":         "Read Full Edition",

    "insight.a2.category":    "Applied AI · April 2026",
    "insight.a2.title":       "Why 73% of AI Pilots in Colombia Never Reach Production",
    "insight.a2.excerpt":     "The gap isn't technological — it's governance. Analysis of 40 AI projects in Colombian enterprises with 2024–2025 data.",
    "insight.a2.cta":         "Read Article",

    "insight.a3.category":    "Strategic Decisions · April 2026",
    "insight.a3.title":       "The Mistake Organizations Make When Buying ChatGPT Enterprise Without a Data Strategy",
    "insight.a3.excerpt":     "Licenses without data architecture produce expense, not transformation. A pre-purchase evaluation framework for IT directors.",
    "insight.a3.cta":         "Read Article",

    /* ---- CTA final (Home) ---- */
    "cta.eyebrow":           "Next Step",
    "cta.headline":          "Does your next strategic decision have the analytical backing it deserves?",
    "cta.sub":               "Let's discuss how THS can contribute verified intelligence to your organization. No commitments, no sales pitch — just a diagnostic conversation.",
    "cta.cta1":              "Start a Conversation",
    "cta.cta2":              "Explore the Intelligence Digest",

    /* ---- Footer ---- */
    "footer.tagline":        "Applied strategic intelligence for Latin American decision-makers. Proprietary analysis. LATAM context. Zero noise.",
    "footer.seal":           "Think first. Automate after.",
    "footer.col.servicios":  "Services",
    "footer.col.recursos":   "Resources",
    "footer.col.empresa":    "Company",
    "footer.col.red":        "THS Network",
    "footer.copyright":      "© 2026 The Human Software. All rights reserved.",
    "footer.location":       "Cali, Colombia · Latin America",
    "footer.privacy":        "Privacy Policy (Law 1581/2012)",

    /* ====================================================
       PAGE-SPECIFIC TRANSLATIONS
       ==================================================== */

    /* ---- SID page ---- */
    "sid.eyebrow":           "Flagship Publication",
    "sid.headline":          "Biweekly Strategic Intelligence for LATAM Leaders",
    "sid.sub":               "Proprietary analysis of 3,000+ words with verified primary sources, actionable decision frameworks, and mandatory Latin American context. For those who make decisions with real consequences.",
    "sid.stat1.value":       "3,000+",
    "sid.stat1.label":       "Words per edition",
    "sid.stat2.value":       "15–25",
    "sid.stat2.label":       "Verified sources per edition",
    "sid.stat3.value":       "1–2",
    "sid.stat3.label":       "Proprietary frameworks per edition",
    "sid.stat4.value":       "18–25",
    "sid.stat4.label":       "Minutes of deep reading",
    "sid.includes.title":    "What Each Edition Includes",
    "sid.includes.i1":       "Central analysis with verified primary-source data",
    "sid.includes.i2":       "A named proprietary decision framework",
    "sid.includes.i3":       "Every global trend contextualized to LATAM's operational reality",
    "sid.includes.i4":       "A strategic signal with a 12- to 36-month horizon",
    "sid.includes.i5":       "An open question that challenges industry assumptions",
    "sid.includes.i6":       "Concrete implications for your organization or career",
    "sid.editions.title":    "Available Editions",
    "sid.subscribe.title":   "Access the analysis that precedes your decisions.",
    "sid.subscribe.desc":    "Biweekly publication behind a strict paywall. No free version, no partial summaries. Rigor comes at a fair price.",
    "sid.subscribe.cta":     "Subscribe on THSN",

    /* ---- Academy page ---- */
    "academy.eyebrow":       "Executive Training",
    "academy.headline":      "Capabilities That No AI Model Can Replace",
    "academy.sub":           "Intensive 8 to 12-week programs for professionals who need to apply artificial intelligence with strategic judgment. Small cohorts, real projects, direct mentorship.",
    "academy.stat1.value":   "3",
    "academy.stat1.label":   "Programs available",
    "academy.stat2.value":   "40–60",
    "academy.stat2.label":   "Hours of applied content",
    "academy.stat3.value":   "2–3",
    "academy.stat3.label":   "Real projects per program",
    "academy.stat4.value":   "70/30",
    "academy.stat4.label":   "Applied vs. theoretical",
    "academy.p1.title":      "Strategic Thinking with AI",
    "academy.p1.level":      "Beginner–Intermediate · 8 weeks",
    "academy.p1.desc":       "For professionals who use AI as a tool but not yet as a strategic advantage. Learn to frame the problem before asking the model for an answer.",
    "academy.p1.cta":        "Reserve Your Spot in Cohort 1",
    "academy.p2.title":      "Applied AI for Organizations",
    "academy.p2.level":      "Intermediate–Advanced · 10 weeks",
    "academy.p2.desc":       "Design your organization's AI adoption strategy with verified frameworks, real governance, and impact metrics.",
    "academy.p2.cta":        "Request Program Details",
    "academy.p3.title":      "Leadership in the AI Era",
    "academy.p3.level":      "Executive · 12 weeks",
    "academy.p3.desc":       "For C-Suite executives who need to understand the strategic implications of AI without becoming technologists. Investment decisions, regulatory risk, and competitive advantage.",
    "academy.p3.cta":        "Request Executive Program",
    "academy.faq.title":     "Frequently Asked Questions",
    "academy.faq1.q":        "Do I need to know how to code?",
    "academy.faq1.a":        "No. The programs are designed for decision-makers, not developers. If your job is to set strategic direction, this is your space.",
    "academy.faq2.q":        "How is this different from a MOOC on Coursera or Udemy?",
    "academy.faq2.a":        "Cohorts of 30 people max, projects applied to your real organization, direct mentorship. No pre-recorded videos from 2019.",
    "academy.faq3.q":        "Can I apply what I learn during the program, not after?",
    "academy.faq3.a":        "Yes. Each module produces a deliverable you apply in your organization that same week. The final project is your documented AI strategy.",
    "academy.faq4.q":        "Is there a certification?",
    "academy.faq4.a":        "Yes. A THS certificate with a verifiable project portfolio. We don't issue decorative credentials.",
    "academy.faq5.q":        "What is the investment?",
    "academy.faq5.a":        "Coming soon. Contact us for updated pricing information.",

    /* ---- Advisory page ---- */
    "advisory.eyebrow":      "Strategic Consulting",
    "advisory.headline":     "We Don't Install Tools. We Install Judgment.",
    "advisory.sub":          "AI diagnostic, governance, and implementation for organizations that need verifiable outcomes, not slide decks with trends. From Colombia, for all of Latin America.",
    "advisory.process.title":"Engagement Process",
    "advisory.s1.title":     "Initial Conversation",
    "advisory.s1.desc":      "We understand your context, challenges, and level of urgency. No commitment, no sales pitch.",
    "advisory.s1.deliverable":"Preliminary scope diagnostic",
    "advisory.s2.title":     "IA-COMPASS Diagnostic",
    "advisory.s2.desc":      "We evaluate 5 dimensions of AI maturity in your organization using data and interviews.",
    "advisory.s2.deliverable":"20+ page IA-COMPASS report",
    "advisory.s3.title":     "Architecture Design",
    "advisory.s3.desc":      "We build the implementation roadmap with milestones, metrics, and defined owners.",
    "advisory.s3.deliverable":"12-month strategic roadmap",
    "advisory.s4.title":     "Execution Accompaniment",
    "advisory.s4.desc":      "We work alongside your team on the actual implementation of recommendations.",
    "advisory.s4.deliverable":"Monthly progress reports",
    "advisory.s5.title":     "Impact Measurement",
    "advisory.s5.desc":      "We evaluate results against the initial diagnostic baseline.",
    "advisory.s5.deliverable":"Verified impact dashboard",
    "advisory.s6.title":     "Transfer and Autonomy",
    "advisory.s6.desc":      "Your team gains the ability to operate without dependence on THS.",
    "advisory.s6.deliverable":"Institutional governance manual",
    "advisory.areas.title":  "6 Areas of Intervention",
    "advisory.a1.title":     "IA-COMPASS Diagnostic",
    "advisory.a1.desc":      "We measure your real AI maturity with a 5-dimension framework and actionable deliverables.",
    "advisory.a2.title":     "AI Governance",
    "advisory.a2.desc":      "We design policies, processes, and controls so your organization uses AI with verifiable accountability.",
    "advisory.a3.title":     "Data-Driven Transformation",
    "advisory.a3.desc":      "We redesign decision processes so data stops being decorative and becomes operational.",
    "advisory.a4.title":     "Implementation Roadmaps",
    "advisory.a4.desc":      "We build the step-by-step sequence with milestones, budgets, and metrics to adopt AI without improvising.",
    "advisory.a5.title":     "Leadership Development",
    "advisory.a5.desc":      "We train your C-Suite and middle management on strategic AI judgment, not technical tutorials.",
    "advisory.a6.title":     "Competitive Intelligence",
    "advisory.a6.desc":      "We analyze your industry with verified sources to identify advantages, threats, and market moves.",

    /* ---- IA-COMPASS page ---- */
    "iacompass.eyebrow":     "Proprietary Framework",
    "iacompass.headline":    "IA-COMPASS — Measure Your Gap Before You Cross It",
    "iacompass.sub":         "A proprietary institutional diagnostic framework evaluating 5 dimensions of AI maturity. Produces a 20+ page report with verified findings, critical gaps, and an actionable roadmap.",
    "iacompass.dims.title":  "The 5 Framework Dimensions",
    "iacompass.d1.title":    "Strategy & Leadership",
    "iacompass.d1.desc":     "Evaluates whether your organization's leadership has an articulated AI vision with assigned resources, defined governance, and declared success metrics.",
    "iacompass.d2.title":    "Data & Infrastructure",
    "iacompass.d2.desc":     "Measures the quality, accessibility, and governance of the data that feeds (or will feed) your organization's AI systems.",
    "iacompass.d3.title":    "Talent & Capabilities",
    "iacompass.d3.desc":     "Determines whether your team has the technical and strategic competencies to operate AI, or relies exclusively on external vendors.",
    "iacompass.d4.title":    "Operations & Implementation",
    "iacompass.d4.desc":     "Evaluates how many AI pilots reached production, their success metrics, and which processes were effectively transformed.",
    "iacompass.d5.title":    "Ethics & Governance",
    "iacompass.d5.desc":     "Measures whether your organization has AI governance frameworks, regulatory compliance, model transparency, and risk management.",
    "iacompass.deliverables.title": "Diagnostic Deliverables",
    "iacompass.del1.title":  "Full IA-COMPASS Report",
    "iacompass.del1.desc":   "5-dimension diagnostic with scoring, findings, and industry benchmarks",
    "iacompass.del2.title":  "Critical Gap Map",
    "iacompass.del2.desc":   "Visualization of the 3 highest-impact gaps with prioritization",
    "iacompass.del3.title":  "12-Month Roadmap",
    "iacompass.del3.desc":   "Implementation sequence with milestones, metrics, and owners",
    "iacompass.del4.title":  "Industry Benchmark",
    "iacompass.del4.desc":   "Anonymous comparison with same-sector organizations in LATAM",
    "iacompass.del5.title":  "Executive Findings Session",
    "iacompass.del5.desc":   "C-Suite presentation with key findings and recommendations",
    "iacompass.cta.headline":"Your organization already has an AI gap. The question is whether you know it.",
    "iacompass.cta.sub":     "The IA-COMPASS diagnostic takes 3 weeks and produces a report that changes the conversation in your boardroom.",
    "iacompass.cta.btn":     "Request a Diagnostic",

    /* ---- Blog page ---- */
    "blog.headline":         "Analysis That Outlasts the Next Trend",
    "blog.sub":              "Articles, research, and original perspectives on AI, digital transformation, and strategic decision-making in Latin America. Verified sources. Zero filler.",
    "blog.cat1":             "Applied Artificial Intelligence",
    "blog.cat2":             "Strategic Decisions",
    "blog.cat3":             "LATAM Context",
    "blog.cat4":             "Governance & Ethics",
    "blog.cat5":             "THS Perspective",
    "blog.all":              "All",
    "blog.readmore":         "Read article",
    "blog.a1.title":         "Why 73% of AI Pilots in Colombia Never Reach Production",
    "blog.a1.excerpt":       "The gap isn't technological — it's governance. Analysis of 40 AI projects in Colombian enterprises with 2024–2025 data.",
    "blog.a1.meta":          "Applied AI · 12 min · April 2026",
    "blog.a2.title":         "The Mistake Organizations Make When Buying ChatGPT Enterprise Without a Data Strategy",
    "blog.a2.excerpt":       "Licenses without data architecture produce expense, not transformation. A pre-purchase evaluation framework for IT directors.",
    "blog.a2.meta":          "Strategic Decisions · 10 min · April 2026",
    "blog.a3.title":         "AI Regulation in Colombia 2026: What Exists, What's Missing, and What Changes for Your Business",
    "blog.a3.excerpt":       "A complete map of Colombia's AI regulatory framework, with a Mexico-Chile-Brazil comparison and compliance checklist.",
    "blog.a3.meta":          "LATAM Context · 15 min · May 2026",
    "blog.a4.title":         "Theatrical Compliance: When AI Claims It Audited Its Own Code (and Lied)",
    "blog.a4.excerpt":       "A technical analysis of why language models cannot self-verify in a single cycle and what to do about it.",
    "blog.a4.meta":          "Governance & Ethics · 14 min · May 2026",
    "blog.a5.title":         "Hallucination-Free Educational RAG: How to Build a Virtual Tutor Anchored to Your Institutional Curriculum",
    "blog.a5.excerpt":       "A practical guide to Retrieval-Augmented Generation for educational institutions that want AI grounded in their own documents.",
    "blog.a5.meta":          "Applied AI · 18 min · June 2026",
    "blog.a6.title":         "We Don't Need More Prompt Engineers. We Need Cognitive Architects.",
    "blog.a6.excerpt":       "Why writing prompts will cease to be a differentiating skill and what role will replace it in 2027 organizations.",
    "blog.a6.meta":          "THS Perspective · 8 min · June 2026",

    /* ---- Frameworks Library page ---- */
    "frameworks.headline":   "Decision-Making Tools, Not Decoration",
    "frameworks.sub":        "A library of analytical frameworks created by THS. Every framework is designed to be applied this week, not archived until it's irrelevant.",
    "frameworks.desc":       "The Frameworks Library is the collection of proprietary decision-making tools from The Human Software. Each framework has a proper name, replicable structure, and defined application context.",
    "frameworks.col.name":   "Framework",
    "frameworks.col.cat":    "Category",
    "frameworks.col.desc":   "Description",
    "frameworks.col.level":  "Level",
    "frameworks.col.access": "Access",

    /* ---- Manifesto full page ---- */
    "manifesto.page.title":      "Why We Think Before We Automate",
    "manifesto.page.declaration": "There is an excess of content about artificial intelligence and an alarming scarcity of judgment to use it.",
    "manifesto.page.problem":    "Every week, thousands of articles about AI are published in Latin America. Most are translations from English-language publications. They don't account for Colombian regulation, the budget cycles of an SME in Medellín, or the technical talent gap at a public university in Peru.",
    "manifesto.page.whyexist.title": "Why We Exist",
    "manifesto.page.whyexist":   "The Human Software was born in Cali, Colombia, with a simple premise: before you automate, you must think. We are not a news outlet. We are not a consultancy that sells slide decks. We are not an academy that repackages English-language content with subtitles.",
    "manifesto.page.p1.title":   "Rigor as the Minimum Standard",
    "manifesto.page.p1.desc":    "Every claim we publish has a verifiable source. We don't cite 'experts agree' without names or data. When we lack certainty, we say so. If an edition of the Strategic Intelligence Digest doesn't survive an adversarial reading, it doesn't ship.",
    "manifesto.page.p2.title":   "Applicability Over Knowledge Accumulation",
    "manifesto.page.p2.desc":    "Every edition, every framework, every program answers one question: what do you do differently on Monday with this information? If our content doesn't produce action, we're failing.",
    "manifesto.page.p3.title":   "LATAM Context as Competitive Advantage",
    "manifesto.page.p3.desc":    "Every analysis answers: what does this mean for a leader in Colombia, Mexico, or Peru over the next 12 to 36 months? No English-language competitor answers that because their audience is different.",
    "manifesto.page.p4.title":   "Epistemic Transparency",
    "manifesto.page.p4.desc":    "We declare what we know, what we infer, and what we don't know. When we use AI in research, we disclose the percentage of its contribution.",
    "manifesto.page.p5.title":   "Verifiable Impact as the Only Success Metric",
    "manifesto.page.p5.desc":    "We don't measure success in followers, likes, or impressions. We measure whether a subscriber made a better decision after reading our edition.",
    "manifesto.page.commitment.title": "Our Commitment to You",
    "manifesto.page.commitment": "If you subscribe to the Strategic Intelligence Digest, you will receive every two weeks an analysis that respects your time and your intelligence. No clickbait. Frameworks you can use long after the trend fades.",
    "manifesto.page.signature":  "Julián Andrés Mosquera",
    "manifesto.page.sig.role":   "Founder, The Human Software · Cali, Colombia · 2026",

    /* ---- Portafolio page ---- */
    "portafolio.headline":       "Verifiable Track Record, Not Inflated Credentials",
    "portafolio.sub":            "Publications, projects, and research that back every claim we make. No self-promotion. With documented sources and results.",
    "portafolio.col.project":    "Project / Publication",
    "portafolio.col.type":       "Type",
    "portafolio.col.org":        "Organization",
    "portafolio.col.year":       "Year",
    "portafolio.col.desc":       "Description",

    /* ---- THSN page ---- */
    "thsn.headline":             "THSN — The Network for Those Who Think Before They Act",
    "thsn.sub":                  "THSN is the closed community of Strategic Intelligence Digest subscribers. It's not a social network. It's a space where Latin American leaders access proprietary analysis, decision frameworks, and conversations the open market doesn't produce.",
    "thsn.stat1.value":          "6+",
    "thsn.stat1.label":          "Proprietary frameworks planned",
    "thsn.stat2.value":          "18–25",
    "thsn.stat2.label":          "Average reading time (minutes)",
    "thsn.stat3.value":          "5,000",
    "thsn.stat3.label":          "Membership cap",
    "thsn.benefits.title":       "Benefits of Joining THSN",
    "thsn.b1.title":             "Analysis That Doesn't Expire",
    "thsn.b1.desc":              "Each edition includes a reusable framework that applies long after the trend stops making headlines.",
    "thsn.b2.title":             "Mandatory LATAM Context",
    "thsn.b2.desc":              "Every analysis answers what a global trend means for your decision in Colombia, Mexico, or Peru.",
    "thsn.b3.title":             "Zero Noise, Only Judgment",
    "thsn.b3.desc":              "No news roundups. No tool lists. No content designed to generate clicks and be forgotten.",
    "thsn.b4.title":             "A Community of Decision-Makers",
    "thsn.b4.desc":              "Access to a network of professionals who value rigor over speed and judgment over opinion.",
    "thsn.cta.headline":         "There are 5,000 spots. One could be yours.",
    "thsn.cta.btn":              "Subscribe to the Digest",

    /* ---- Changelog page ---- */
    "changelog.headline":        "What's New",
    "changelog.sub":             "Launch history, updates, and milestones from The Human Software.",
    "changelog.h1.date":         "April 2026",
    "changelog.h1.type":         "Launch",
    "changelog.h1.title":        "Portal thehumansoftware.com v1.0 Live",
    "changelog.h1.desc":         "The Human Software corporate hub is now operational with 13 pages, the full service ecosystem, and direct access to the Strategic Intelligence Digest.",
    "changelog.h2.date":         "March 2026",
    "changelog.h2.type":         "Launch",
    "changelog.h2.title":        "Edition #001 of the Strategic Intelligence Digest",
    "changelog.h2.desc":         "First SID edition published: \"The 2025 Career Map Is Already Obsolete.\" Introduces the Cognitive Update Framework (MAC).",
    "changelog.h3.date":         "March 2026",
    "changelog.h3.type":         "New",
    "changelog.h3.title":        "Framework IA-COMPASS v1.0 Published",
    "changelog.h3.desc":         "Proprietary institutional AI maturity diagnostic framework. Five dimensions, quantitative scoring, 20+ page report.",
    "changelog.h4.type":         "Announcement",
    "changelog.h4.title":        "THS Academy Cohort 1 — Registration Open",
    "changelog.h4.desc":         "First executive training program: \"Strategic Thinking with AI.\" Small cohorts, real projects, direct mentorship.",
    "changelog.h5.date":         "2025",
    "changelog.h5.type":         "Launch",
    "changelog.h5.title":        "The Human Software Founded",
    "changelog.h5.desc":         "Julián Andrés Mosquera founds THS in Cali, Colombia, with the mission of building cognitive infrastructure for Latin American decision-makers.",

    /* ---- About page ---- */
    "about.headline":            "Who We Are and Why It Matters",
    "about.sub":                 "The Human Software is an applied strategic intelligence firm founded in Cali, Colombia. We produce analysis, frameworks, and training for decision-makers who demand rigor.",
    "about.founder.title":       "Founder",
    "about.founder.bio":         "Julián Andrés Mosquera is an engineer and AI architect based in Cali, Colombia. He founded The Human Software in 2025 with the conviction that Latin America needs strategic intelligence produced from within the region, with its own standards of rigor and applicability.",
    "about.founder.motivation":  "After years of watching Latin American organizations adopt technology without strategic judgment — buying tools before understanding the problem — I decided to build what was missing: an applied intelligence operation that produces verifiable analysis, reusable frameworks, and training with measurable results.",
    "about.mission.title":       "Mission",
    "about.mission.text":        "To produce verifiable strategic intelligence, actionable decision frameworks, and high-impact training so that Latin American decision-makers make better decisions with AI.",
    "about.vision.title":        "Vision",
    "about.vision.text":         "By 2031, to be the reference cognitive infrastructure for the Spanish-speaking world: where leaders, organizations, and governments go before they decide.",
    "about.values.title":        "Values",
    "about.v1.title":            "Verifiable rigor",
    "about.v1.desc":             "Every claim has a source. Every framework has a replicable structure. If it's not verifiable, we don't publish it.",
    "about.v2.title":            "Immediate applicability",
    "about.v2.desc":             "Everything we produce answers one question: what do you do differently on Monday with this information?",
    "about.v3.title":            "Epistemic honesty",
    "about.v3.desc":             "We declare what we know, what we infer, and what we don't know. Uncertainty is not weakness.",
    "about.v4.title":            "An original perspective",
    "about.v4.desc":             "We analyze from Latin America, not translate from the Anglosphere. Our context is our advantage.",
    "about.coverage.title":      "Geographic Coverage",
    "about.coverage.text":       "Base of operations in Cali, Colombia. Analytical and consulting coverage for all of Latin America. Global remote operations. Languages: Spanish and English.",

    /* ---- Contact page ---- */
    "contact.headline":          "Let's Talk About What You Need to Decide",
    "contact.sub":               "We don't do sales pitches. We do diagnostics. Tell us what strategic decision you're facing and we'll assess whether we can contribute.",
    "contact.form.name":         "Your full name",
    "contact.form.name.ph":      "e.g., María García López",
    "contact.form.email":        "Professional email",
    "contact.form.email.ph":     "e.g., m.garcia@company.co",
    "contact.form.org":          "Your organization",
    "contact.form.org.ph":       "e.g., ABC Business Group",
    "contact.form.type":         "How can we help?",
    "contact.form.type.o1":      "AI maturity diagnostic (IA-COMPASS)",
    "contact.form.type.o2":      "Strategic AI and digital transformation consulting",
    "contact.form.type.o3":      "Executive or corporate training (THS Academy)",
    "contact.form.type.o4":      "Strategic Intelligence Digest subscription",
    "contact.form.type.o5":      "Institutional or academic partnership",
    "contact.form.type.o6":      "Collaboration or research proposal",
    "contact.form.type.o7":      "Inquiry about THS frameworks or methodology",
    "contact.form.type.o8":      "Other (describe in message)",
    "contact.form.message":      "Context of your inquiry",
    "contact.form.message.ph":   "Briefly describe the decision or challenge you're facing.",
    "contact.form.submit":       "Send Message",
    "contact.confirm.title":     "Your message arrived. We read it personally.",
    "contact.confirm.desc":      "We don't use generic auto-replies. Julián or his team will review your inquiry and respond within a reasonable timeframe.",
    "contact.info.title":        "Direct Contact",
    "contact.info.email":        "contacto@thehumansoftware.com",
    "contact.info.email.note":   "For direct inquiries that don't require the form.",
    "contact.info.response":     "We respond within 48 business hours.",
    "contact.info.coverage":     "We operate from Colombia for all of Latin America. Remote consulting available globally in Spanish and English.",
    "contact.info.notice":       "This is not a sales page. It's a professional point of contact. Write to us when you have a real decision that needs judgment.",

    /* ---- Brand Assets page ---- */
    "brand.headline":            "Brand Assets",
    "brand.sub":                 "Logos, color palette, typography, and brand usage guidelines for The Human Software.",
    "brand.logo.title":          "Logo",
    "brand.logo.desc":           "Download the official THS logo in SVG and PNG formats.",
    "brand.colors.title":        "Color Palette",
    "brand.colors.desc":         "THS corporate colors in light and dark modes.",
    "brand.typography.title":    "Typography",
    "brand.typography.desc":     "Inter as the primary typeface for body and display.",
    "brand.usage.title":         "Usage Guidelines",
    "brand.usage.desc":          "Usage rules, minimum spacing, and approved logo variants.",
    "brand.logo.note": "Text placeholder — the definitive logo will be provided by the founder.",

    /* ---- about ---- */
    "about.founder.bio2": "He is the creator of IA-COMPASS, a proprietary framework for institutional AI maturity diagnostics, and of the SOVEREIGN SUPREME framework, a multi-LLM cognitive orchestration system adopted as THS's internal work standard.",
    "about.founder.bio3": "He has published the Strategic Intelligence Digest since 2026 and leads THS's editorial, consulting, and training operations. He operates in Spanish and English.",
    "about.founder.name": "Julián Andrés Mosquera",
    "about.founder.role": "Engineer · AI Architect · Founder of The Human Software",
    "about.hero.subtitle": "The Human Software is an applied strategic intelligence firm founded in Cali, Colombia. We produce analysis, frameworks, and training for decision-makers who demand rigor.",
    "about.hero.title": "Who We Are and Why It Matters",
    "about.value1.desc": "Every claim has a source. Every framework has a replicable structure. If it's not verifiable, we don't publish it.",
    "about.value1.title": "Verifiable rigor",
    "about.value2.desc": "Everything we produce answers one question: what do you do differently on Monday with this information?",
    "about.value2.title": "Immediate applicability",
    "about.value3.desc": "We declare what we know, what we infer, and what we don't know. Uncertainty is not weakness.",
    "about.value3.title": "Epistemic honesty",
    "about.value4.desc": "We analyze from Latin America — we don't translate from Anglo-Saxon viewpoints. Our context is our advantage.",
    "about.value4.title": "Our own perspective",

    /* ---- academy ---- */
    "academy.cta.button": "Start a Conversation →",
    "academy.cta.description": "Let's discuss how THS can bring verified intelligence to your organization. No commitment, no sales pitch — just diagnosis.",
    "academy.cta.title": "Does your next strategic decision have the analytical backing it deserves?",
    "academy.faq.a1": "No. The programs are designed for decision-makers, not developers. If your job is to set strategic direction, this is your space.",
    "academy.faq.a2": "Cohorts of no more than 30 people, projects applied to your real organization, direct mentorship. No pre-recorded videos from 2019.",
    "academy.faq.a3": "Yes. Each module produces a deliverable you apply in your organization that same week. The final project is your documented AI strategy.",
    "academy.faq.a4": "Yes. THS certificate with a verifiable project portfolio. We don't issue decorative credentials.",
    "academy.faq.a5": "[Pending confirmation — Definitive pricing will be announced soon.]",
    "academy.faq.q1": "Is programming knowledge required?",
    "academy.faq.q2": "How is this different from a MOOC on Coursera or Udemy?",
    "academy.faq.q3": "Can I apply what I learn during the program, not after?",
    "academy.faq.q4": "Is there a certification?",
    "academy.faq.q5": "What is the investment?",
    "academy.hero.eyebrow": "Executive Training",
    "academy.hero.subtitle": "Intensive 8 to 12-week programs for professionals who need to apply artificial intelligence with strategic judgment. Small cohorts, real projects, direct mentorship.",
    "academy.hero.title": "Capabilities No AI Model Can Replace",
    "academy.program1.audience": "For whom: Senior professionals who make decisions and need judgment, not ChatGPT tutorials.",
    "academy.program1.cta": "Reserve a Spot in Cohort 1",
    "academy.program1.description": "For professionals who use AI as a tool but not as a strategic advantage. Learn to frame the problem before asking the model for an answer.",
    "academy.program1.duration": "Duration: 8 weeks",
    "academy.program1.level": "Beginner–Intermediate",
    "academy.program1.mod1": "Thinking architecture before automation",
    "academy.program1.mod2": "Strategic prompting: beyond literal instructions",
    "academy.program1.mod3": "Evaluating AI outputs with professional judgment",
    "academy.program1.mod4": "Integrative project applied to your organization",
    "academy.program1.title": "Strategic Thinking with AI",
    "academy.program2.audience": "For whom: Innovation directors, CTOs, and digital transformation managers.",
    "academy.program2.cta": "Request Program",
    "academy.program2.description": "Design your organization's AI adoption strategy with verified frameworks, real governance, and impact metrics. This is not a coding bootcamp: it's decision architecture.",
    "academy.program2.duration": "Duration: 10 weeks",
    "academy.program2.level": "Intermediate–Advanced",
    "academy.program2.mod1": "Organizational maturity diagnosis (IA-COMPASS applied)",
    "academy.program2.mod2": "AI governance: policies, risks, and compliance",
    "academy.program2.mod3": "Implementation roadmap with measurable deliverables",
    "academy.program2.mod4": "Case study applied to your company",
    "academy.program2.title": "Applied AI for Organizations",
    "academy.program3.audience": "For whom: CEOs, CFOs, and board members who need judgment, not technical jargon.",
    "academy.program3.cta": "Request Executive Program",
    "academy.program3.description": "For C-Suite leaders who need to understand the strategic implications of AI without becoming technical experts. Investment decisions, regulatory risk, and competitive advantage.",
    "academy.program3.duration": "Duration: 12 weeks",
    "academy.program3.level": "Executive",
    "academy.program3.mod1": "AI as a business valuation factor",
    "academy.program3.mod2": "Regulatory risks in LATAM: what changes in 2026–2028",
    "academy.program3.mod3": "Make vs. buy decisions in AI infrastructure",
    "academy.program3.mod4": "Direct mentorship with the THS team",
    "academy.program3.title": "Leadership in the AI Era",
    "academy.programs.title": "Programs",
    "academy.stats.hours.label": "Hours of applied content",
    "academy.stats.hours.note": "70% practical, 30% conceptual",
    "academy.stats.hours.value": "40–60",
    "academy.stats.programs.label": "Available programs",
    "academy.stats.programs.note": "Cornerstone + Advanced + Executive",
    "academy.stats.programs.value": "3",
    "academy.stats.projects.label": "Real projects per program",
    "academy.stats.projects.note": "Applied to your organization",
    "academy.stats.projects.value": "2–3",
    "academy.stats.ratio.label": "Applied vs. theoretical content",
    "academy.stats.ratio.note": "Differentiator vs. mass MOOCs",
    "academy.stats.ratio.value": "70/30",

    /* ---- advisory ---- */
    "advisory.areas.area1.desc": "We measure your real AI maturity with a 5-dimension framework and actionable deliverables.",
    "advisory.areas.area1.title": "IA-COMPASS Diagnosis",
    "advisory.areas.area2.desc": "We design policies, processes, and controls so your organization uses AI with verifiable accountability.",
    "advisory.areas.area2.title": "AI Governance",
    "advisory.areas.area3.desc": "We redesign decision-making processes so data stops being decorative and becomes operational.",
    "advisory.areas.area3.title": "Data-Driven Transformation",
    "advisory.areas.area4.desc": "We build the sequence of steps with milestones, budgets, and metrics to adopt AI without improvising.",
    "advisory.areas.area4.title": "Implementation Roadmaps",
    "advisory.areas.area5.desc": "We train your C-Suite and middle managers in strategic judgment about AI, not technical tutorials.",
    "advisory.areas.area5.title": "Leadership Training",
    "advisory.areas.area6.desc": "We analyze your sector with verified sources to identify advantages, threats, and market movements.",
    "advisory.areas.area6.title": "Competitive Intelligence",
    "advisory.cta.button": "Start a Conversation →",
    "advisory.cta.description": "Let's discuss how THS can bring verified intelligence to your organization. No commitment, no sales pitch — just diagnosis.",
    "advisory.cta.title": "Does your next strategic decision have the analytical backing it deserves?",
    "advisory.hero.eyebrow": "Strategic Consulting",
    "advisory.hero.subtitle": "AI diagnosis, governance, and implementation for organizations that need verifiable results, not trend-heavy PowerPoints. From Colombia, for all of Latin America.",
    "advisory.hero.title": "We Don't Install Tools. We Install Judgment.",
    "advisory.timeline.step1.deliverable": "Deliverable: Preliminary scope diagnosis",
    "advisory.timeline.step1.desc": "We understand your context, challenges, and level of urgency. No commitment, no sales pitch.",
    "advisory.timeline.step1.label": "Stage 1",
    "advisory.timeline.step1.title": "Initial Conversation",
    "advisory.timeline.step2.deliverable": "Deliverable: 20+ page IA-COMPASS report",
    "advisory.timeline.step2.desc": "We evaluate 5 AI maturity dimensions of your organization with data and interviews.",
    "advisory.timeline.step2.label": "Stage 2",
    "advisory.timeline.step2.title": "IA-COMPASS Diagnosis",
    "advisory.timeline.step3.deliverable": "Deliverable: 12-month strategic roadmap",
    "advisory.timeline.step3.desc": "We build the implementation roadmap with defined milestones, metrics, and owners.",
    "advisory.timeline.step3.label": "Stage 3",
    "advisory.timeline.step3.title": "Architecture Design",
    "advisory.timeline.step4.deliverable": "Deliverable: Monthly progress reports",
    "advisory.timeline.step4.desc": "We work alongside your team in the real implementation of the recommendations.",
    "advisory.timeline.step4.label": "Stage 4",
    "advisory.timeline.step4.title": "Execution Support",
    "advisory.timeline.step5.deliverable": "Deliverable: Verified impact dashboard",
    "advisory.timeline.step5.desc": "We evaluate results against the baseline from the initial diagnosis.",
    "advisory.timeline.step5.label": "Stage 5",
    "advisory.timeline.step5.title": "Impact Measurement",
    "advisory.timeline.step6.deliverable": "Deliverable: Institutional governance manual",
    "advisory.timeline.step6.desc": "Your team gains the capacity to operate without depending on THS.",
    "advisory.timeline.step6.label": "Stage 6",
    "advisory.timeline.step6.title": "Handover and Autonomy",
    "advisory.timeline.title": "Engagement Process",

    /* ---- blog ---- */
    "blog.article1.cat": "Applied AI",
    "blog.article1.date": "April 2026",
    "blog.article1.excerpt": "The gap is not technological: it's about governance. Analysis of 40 AI projects at Colombian companies with 2024–2025 data.",
    "blog.article1.reading": "12 min read",
    "blog.article1.title": "Why 73% of AI Pilots in Colombia Never Reach Production",
    "blog.article2.cat": "Strategic Decisions",
    "blog.article2.date": "April 2026",
    "blog.article2.excerpt": "Licenses without data architecture generate expense, not transformation. Pre-purchase evaluation framework for IT directors.",
    "blog.article2.reading": "10 min read",
    "blog.article2.title": "The Mistake Organizations Make When Buying ChatGPT Enterprise Without a Data Strategy",
    "blog.article3.cat": "LATAM Context",
    "blog.article3.date": "May 2026",
    "blog.article3.excerpt": "Complete map of the Colombian regulatory framework applicable to AI, with a Mexico-Chile-Brazil comparison and a compliance checklist.",
    "blog.article3.reading": "15 min read",
    "blog.article3.title": "AI Regulation in Colombia 2026: What Exists, What's Missing, and What Changes for Your Company",
    "blog.article4.cat": "Governance &amp; Ethics",
    "blog.article4.date": "May 2026",
    "blog.article4.excerpt": "Technical analysis of why language models cannot self-verify in a single cycle and what to do about it.",
    "blog.article4.reading": "14 min read",
    "blog.article4.title": "Theatrical Compliance: When AI Claims to Have Audited Its Own Code (and Lied)",
    "blog.article5.cat": "Applied AI",
    "blog.article5.date": "June 2026",
    "blog.article5.excerpt": "Practical guide to Retrieval-Augmented Generation for educational institutions that want AI based on their own documents.",
    "blog.article5.reading": "18 min read",
    "blog.article5.title": "Hallucination-Free Educational RAG: How to Build a Virtual Tutor Anchored to Your Institutional PEI",
    "blog.article6.cat": "THS Perspective",
    "blog.article6.date": "June 2026",
    "blog.article6.excerpt": "Why writing prompts will cease to be a differentiating skill and what role will replace it in 2027 organizations.",
    "blog.article6.reading": "8 min read",
    "blog.article6.title": "We Don't Need More Prompt Engineers. We Need Cognitive Architects.",
    "blog.cat.all": "All",
    "blog.cat.decisions": "Strategic Decisions",
    "blog.cat.governance": "Governance &amp; Ethics",
    "blog.cat.ia": "Applied Artificial Intelligence",
    "blog.cat.latam": "LATAM Context",
    "blog.cat.ths": "THS Perspective",
    "blog.hero.subtitle": "Original articles, research, and perspectives on AI, digital transformation, and strategic decision-making in Latin America. Verified sources. Zero filler.",
    "blog.hero.title": "Analysis That Outlasts the Next Trend",

    /* ---- brand ---- */
    "brand.colors.accent": "Accent (Purple 500)",
    "brand.colors.dark": "Dark Background",
    "brand.colors.light": "Light Background",
    "brand.colors.sky": "Sky Accent",
    "brand.colors.textprimary": "Text Primary",
    "brand.colors.textsecondary": "Text Secondary",
    "brand.guidelines.text": "Complete brand usage guidelines, including minimum logo spacing, permitted color combinations, and application restrictions, will be published soon. For inquiries about THS brand usage, contact contacto@thehumansoftware.com.",
    "brand.guidelines.title": "Usage Guidelines",
    "brand.hero.subtitle": "Brand resources, usage guidelines, and downloadable assets from The Human Software.",
    "brand.hero.title": "THS Visual Identity",
    "brand.typography.bold": "Bold 700 — Headlines and titles",
    "brand.typography.light": "Light 300 — Auxiliary text and metadata",
    "brand.typography.medium": "Medium 500 — Buttons and navigation",
    "brand.typography.note": "Inter is THS's primary typeface, used for both body text and headlines. Loaded from Google Fonts CDN in weights 300–700.",
    "brand.typography.regular": "Regular 400 — Body text and paragraphs",
    "brand.typography.semibold": "Semibold 600 — Subheadings and labels",

    /* ---- changelog ---- */
    "changelog.entry1.date": "April 2026",
    "changelog.entry1.desc": "The Human Software's corporate hub is live with 13 pages, a services ecosystem, and direct access to the Strategic Intelligence Digest.",
    "changelog.entry1.title": "Portal thehumansoftware.com v1.0 available",
    "changelog.entry1.type": "Launch",
    "changelog.entry2.date": "March 2026",
    "changelog.entry2.desc": "First SID edition published: \"The 2025 Professional Map Is Already Obsolete\". Includes the Cognitive Update Framework (CUF). [Pending confirmation of actual title]",
    "changelog.entry2.title": "Edition #001 of the Strategic Intelligence Digest",
    "changelog.entry2.type": "Launch",
    "changelog.entry3.date": "March 2026",
    "changelog.entry3.desc": "Proprietary institutional AI maturity diagnostic framework. Five dimensions, quantitative scoring, 20+ page report. Available to Enterprise clients.",
    "changelog.entry3.title": "IA-COMPASS Framework v1.0 published",
    "changelog.entry3.type": "New",
    "changelog.entry4.date": "[Pending]",
    "changelog.entry4.desc": "First executive training program: \"Strategic Thinking with AI\". Small cohorts, real projects, direct mentorship. [Pending date confirmation]",
    "changelog.entry4.title": "THS Academy Cohort 1 — Enrollment open",
    "changelog.entry4.type": "Announcement",
    "changelog.entry5.date": "2025",
    "changelog.entry5.desc": "Julián Andrés Mosquera founds THS in Cali, Colombia, with the mission of building cognitive infrastructure for decision-makers in Latin America.",
    "changelog.entry5.title": "Founding of The Human Software",
    "changelog.entry5.type": "Launch",
    "changelog.hero.subtitle": "Latest milestones, launches, and updates from the THS ecosystem.",
    "changelog.hero.title": "What's New",

    /* ---- contact ---- */
    "contact.confirmation.text": "We don't use generic auto-replies. Julián or his team will review your inquiry and respond within a reasonable timeframe. Maximum 48 business hours.",
    "contact.confirmation.title": "Your message arrived. We read it personally.",
    "contact.form.email.label": "Professional email",
    "contact.form.message.label": "Context of your inquiry",
    "contact.form.name.label": "Your full name",
    "contact.form.org.label": "Your organization",
    "contact.form.type.label": "How can we help?",
    "contact.form.type.opt1": "AI maturity diagnosis (IA-COMPASS)",
    "contact.form.type.opt2": "Strategic AI and digital transformation consulting",
    "contact.form.type.opt3": "Executive or corporate training (THS Academy)",
    "contact.form.type.opt4": "Strategic Intelligence Digest subscription",
    "contact.form.type.opt5": "Institutional or academic partnership",
    "contact.form.type.opt6": "Collaboration or research proposal",
    "contact.form.type.opt7": "Inquiry about THS frameworks or methodology",
    "contact.form.type.opt8": "Other (describe in message)",
    "contact.form.type.placeholder": "Select an option",
    "contact.hero.subtitle": "We don't do sales pitches. We do diagnosis. Tell us what strategic decision you have on the table and we'll assess whether we can add value.",
    "contact.hero.title": "Let's Talk About What You Need to Decide",
    "contact.info.coverage.label": "Geographic coverage",
    "contact.info.coverage.text": "We operate from Colombia for all of Latin America. Remote consulting available globally in Spanish and English.",
    "contact.info.email.label": "Email",
    "contact.info.response.label": "Response time",
    "contact.info.response.text": "We respond within 48 business hours.",

    /* ---- cta ---- */
    "cta.btn1": "Start a Conversation",
    "cta.btn2": "Explore the Intelligence Digest",
    "cta.label": "Next Step",

    /* ---- feat ---- */
    "feat.academy.desc": "Intensive programs where AI is a tool, not the subject. Real projects, small cohorts, measurable results.",
    "feat.academy.title": "Training with Judgment",
    "feat.advisory.desc": "AI diagnosis, governance, and implementation to IEEE standards. No decorative PowerPoints.",
    "feat.advisory.title": "In-Depth Consulting",
    "feat.compass.desc": "Proprietary 5-dimension framework that measures your organization's real AI maturity.",
    "feat.compass.title": "Diagnosis Before Deciding",
    "feat.frameworks.desc": "Open library of analytical frameworks created by THS. Downloadable, applicable, verified.",
    "feat.frameworks.title": "Decision-Making Tools",
    "feat.portfolio.desc": "Publications, projects, and research that back every claim we make. No inflated credentials.",
    "feat.portfolio.title": "Rigor with a Track Record",
    "feat.sid.desc": "Biweekly proprietary analysis with verified sources, applicable frameworks, and a LATAM perspective. For decision-makers.",
    "feat.sid.title": "Intelligence Every Two Weeks",

    /* ---- founder ---- */
    "founder.label": "Who is behind THS",
    "founder.tag1": "Data Science",
    "founder.tag2": "Applied AI",
    "founder.tag3": "Strategy",
    "founder.tag4": "LATAM",
    "founder.tag5": "IEEE",

    /* ---- frameworks ---- */
    "frameworks.description": "The Frameworks Library is The Human Software's collection of proprietary decision-making tools. Each framework has its own name, replicable structure, and defined application context. Some are published openly as brand assets. Others are available exclusively to SID subscribers and Enterprise clients.",
    "frameworks.hero.subtitle": "Library of analytical frameworks created by THS. Each framework is designed to be applied this week, not archived until it becomes irrelevant.",
    "frameworks.hero.title": "Decision-Making Tools, Not Decorations",
    "frameworks.row1.access": "Enterprise",
    "frameworks.row1.cat": "AI Governance",
    "frameworks.row1.desc": "Institutional AI maturity diagnosis with 5 dimensions and quantitative scoring",
    "frameworks.row1.format": "Report + session",
    "frameworks.row1.level": "Advanced",
    "frameworks.row2.cat": "Decision-making",
    "frameworks.row2.desc": "Assess whether your professional skills can withstand the impact of generative AI",
    "frameworks.row2.format": "Downloadable PDF",
    "frameworks.row2.level": "Intermediate",
    "frameworks.row3.cat": "Decision-making",
    "frameworks.row3.desc": "Classify the level of AI integration in organizational processes across 5 stages",
    "frameworks.row3.format": "Downloadable PDF",
    "frameworks.row3.level": "Intermediate",
    "frameworks.row4.access": "Open",
    "frameworks.row4.cat": "Competitive analysis",
    "frameworks.row4.desc": "Separate AI tools with real value from those that are marketing with a pretty interface",
    "frameworks.row4.format": "Downloadable PDF",
    "frameworks.row4.level": "Beginner",
    "frameworks.row5.cat": "Decision-making",
    "frameworks.row5.desc": "4-step protocol to decide whether a task should be automated, assisted, or kept human",
    "frameworks.row5.format": "Downloadable PDF",
    "frameworks.row5.level": "Intermediate",
    "frameworks.row6.access": "Open",
    "frameworks.row6.cat": "AI Governance",
    "frameworks.row6.desc": "3-stage architecture to eliminate Theatrical Compliance in LLM interactions",
    "frameworks.row6.format": "Technical guide",
    "frameworks.row6.level": "Advanced",
    "frameworks.row7.access": "Enterprise",
    "frameworks.row7.cat": "Competitive analysis",
    "frameworks.row7.desc": "Measures an organization's capacity to absorb technological disruptions without collapsing",
    "frameworks.row7.format": "Report + workshop",
    "frameworks.row7.level": "Advanced",
    "frameworks.row8.access": "Enterprise",
    "frameworks.row8.cat": "Organizational transformation",
    "frameworks.row8.desc": "Cognitive co-creation framework with multi-LLM orchestration and 5-dimension triage",
    "frameworks.row8.format": "Complete system",
    "frameworks.row8.level": "Expert",
    "frameworks.table.col.access": "Access",
    "frameworks.table.col.category": "Category",
    "frameworks.table.col.desc": "Description",
    "frameworks.table.col.format": "Format",
    "frameworks.table.col.level": "Level",
    "frameworks.table.col.name": "Framework",

    /* ---- iacompass ---- */
    "iacompass.cta.button": "Request Diagnosis →",
    "iacompass.cta.description": "The IA-COMPASS diagnosis takes 3 weeks and produces a report that changes the conversation at your board table.",
    "iacompass.cta.title": "Your organization already has an AI gap. The question is whether you know it.",
    "iacompass.deliverables.col.desc": "Description",
    "iacompass.deliverables.col.format": "Format",
    "iacompass.deliverables.col.name": "Deliverable",
    "iacompass.deliverables.col.time": "Timeline",
    "iacompass.deliverables.row1.desc": "5-dimension diagnosis with scoring, findings, and sector benchmarks",
    "iacompass.deliverables.row1.format": "20+ page PDF",
    "iacompass.deliverables.row1.name": "Complete IA-COMPASS Report",
    "iacompass.deliverables.row1.time": "Week 3",
    "iacompass.deliverables.row2.desc": "Visualization of the 3 highest-impact gaps with prioritization",
    "iacompass.deliverables.row2.format": "Interactive dashboard",
    "iacompass.deliverables.row2.name": "Critical Gaps Map",
    "iacompass.deliverables.row2.time": "Week 3",
    "iacompass.deliverables.row3.desc": "Implementation sequence with milestones, metrics, and owners",
    "iacompass.deliverables.row3.format": "Strategic document",
    "iacompass.deliverables.row3.name": "12-Month Roadmap",
    "iacompass.deliverables.row3.time": "Week 4",
    "iacompass.deliverables.row4.desc": "Anonymous comparison with organizations in the same sector in LATAM",
    "iacompass.deliverables.row4.format": "5-page report",
    "iacompass.deliverables.row4.name": "Sector Benchmark",
    "iacompass.deliverables.row4.time": "Week 4",
    "iacompass.deliverables.row5.desc": "C-Suite presentation with key findings and recommendations",
    "iacompass.deliverables.row5.format": "90-minute session",
    "iacompass.deliverables.row5.name": "Executive Findings Session",
    "iacompass.deliverables.row5.time": "Week 5",
    "iacompass.dim1.desc": "Assesses whether your organization's leadership has an articulated AI vision with allocated resources, defined governance, and declared success metrics.",
    "iacompass.dim1.ind1": "Existence of a formal AI strategy",
    "iacompass.dim1.ind2": "Allocated budget",
    "iacompass.dim1.ind3": "Identified executive sponsor",
    "iacompass.dim1.title": "Strategy &amp; Leadership",
    "iacompass.dim2.desc": "Measures the quality, accessibility, and governance of the data that feeds (or will feed) your organization's AI systems.",
    "iacompass.dim2.ind1": "Documented data quality",
    "iacompass.dim2.ind2": "Operational data pipelines",
    "iacompass.dim2.ind3": "Access and privacy policies",
    "iacompass.dim2.title": "Data &amp; Infrastructure",
    "iacompass.dim3.desc": "Determines whether your team has the technical and strategic competencies to operate AI, or whether it relies entirely on external vendors.",
    "iacompass.dim3.ind1": "Defined AI roles",
    "iacompass.dim3.ind2": "Upskilling programs",
    "iacompass.dim3.ind3": "Technical talent retention",
    "iacompass.dim3.title": "Talent &amp; Capabilities",
    "iacompass.dim4.desc": "Evaluates how many AI pilots reached production, with what success metrics they operate, and which processes were effectively transformed.",
    "iacompass.dim4.ind1": "Pilot-to-production ratio",
    "iacompass.dim4.ind2": "Automated processes",
    "iacompass.dim4.ind3": "Documented ROI of implementations",
    "iacompass.dim4.title": "Operations &amp; Implementation",
    "iacompass.dim5.desc": "Measures whether your organization has AI governance frameworks, regulatory compliance, transparency in model usage, and risk management.",
    "iacompass.dim5.ind1": "Published AI policy",
    "iacompass.dim5.ind2": "Bias audits",
    "iacompass.dim5.ind3": "Compliance with local regulation",
    "iacompass.dim5.title": "Ethics &amp; Governance",
    "iacompass.dimensions.title": "The 5 Framework Dimensions",
    "iacompass.hero.eyebrow": "Proprietary Framework",
    "iacompass.hero.subtitle": "Proprietary institutional diagnostic framework that evaluates 5 AI maturity dimensions. Produces a 20+ page report with verified findings, critical gaps, and an actionable roadmap.",
    "iacompass.hero.title": "IA-COMPASS — Measure Your Gap Before You Cross It",

    /* ---- insight1 ---- */
    "insight1.badge": "Edition 001",
    "insight1.cta": "Read Full Edition",
    "insight1.date": "March 2026",
    "insight1.excerpt": "The first edition of the Strategic Intelligence Digest analyzes why career paths designed before generative AI no longer work, and presents the Cognitive Update Framework (CUF).",
    "insight1.title": "The 2025 Professional Map Is Already Obsolete — And Nobody Told You",

    /* ---- insight2 ---- */
    "insight2.badge": "THS Analysis",
    "insight2.cta": "Explore the Framework",
    "insight2.date": "March 2026",
    "insight2.excerpt": "A practical introduction to the proprietary 5-dimension framework THS uses to diagnose the real state — not the declared state — of artificial intelligence adoption in Latin American organizations.",
    "insight2.title": "IA-COMPASS: How to Measure Your Organization's Real AI Maturity",

    /* ---- insight3 ---- */
    "insight3.badge": "Think &amp; Code",
    "insight3.cta": "Read the Manifesto",
    "insight3.date": "April 2026",
    "insight3.excerpt": "When language models democratize access to answers, the right question — framed with context, experience, and professional judgment — becomes the scarce resource that defines the advantage.",
    "insight3.title": "Why Human Judgment Is the Competitive Advantage of the Next Decade",

    /* ---- insights ---- */
    "insights.label": "Latest Insight",
    "insights.title": "Recent Analysis",

    /* ---- manifesto ---- */
    "manifesto.commitment.text": "If you subscribe to the Strategic Intelligence Digest, you will receive every two weeks an analysis that respects your time and your intelligence. You will not receive clickbait. You will not receive summaries of what you already read in three Anglo-Saxon newsletters. You will not receive opinions disguised as data. You will receive frameworks you can use after the trend goes out of fashion. You will receive context no one else produces. And you will receive honesty when we don't have the answer.",
    "manifesto.commitment.title": "Commitment to the Reader",
    "manifesto.declaration": "There is an excess of content about artificial intelligence and an alarming scarcity of judgment to use it. Every week thousands of articles about AI are published in Latin America. Most are translations of Anglo-Saxon publications. They don't consider Colombian regulation, nor the budget cycles of an SME in Medellín, nor the technical talent gap at a public university in Peru. They are mass-produced content for audiences that are not ours. Meanwhile, technology directors in Bogotá make investment decisions based on Silicon Valley benchmarks. University rectors adopt AI tools without governance policies. Innovation managers buy ChatGPT Enterprise licenses without knowing what problem they're solving. The cost of these poorly informed decisions is not measured in clicks or open rates. It is measured in wasted budgets, abandoned projects, and opportunities that don't return.",
    "manifesto.hero.title": "Why We Think Before We Automate",
    "manifesto.principle1.text": "Every claim we publish has a verifiable source. We don't cite \"experts agree\" without names or data. We don't use superlatives without evidence. When we are not certain, we say so. We adopt IEEE standards not for formalism, but because methodological rigor is what separates analysis from opinion. If an edition of the Strategic Intelligence Digest does not survive an adversarial reading, it is not published.",
    "manifesto.principle1.title": "Principle 1: Rigor as the Minimum Standard",
    "manifesto.principle2.text": "Every edition, every framework, every training program we produce answers one concrete question: what do you do differently on Monday with this information? We don't publish so you accumulate readings in your inbox. We publish so you make a better decision this week. If our content doesn't produce action, we are failing — regardless of how many people read it.",
    "manifesto.principle2.title": "Principle 2: Applicability Over Knowledge Accumulation",
    "manifesto.principle3.text": "Every analysis explicitly answers: what does this imply for a leader in Colombia, Mexico, or Peru over the next 12 to 36 months? This question is not an editorial ornament. It is our defensive moat. No Anglo-Saxon competitor answers it because their audience is different. We answer it because ours is ourselves: Latin American professionals making decisions in contexts no one else understands.",
    "manifesto.principle3.title": "Principle 3: LATAM Context as a Competitive Advantage",
    "manifesto.principle4.text": "We declare what we know, what we infer, and what we don't know. Each edition includes explicit confidence levels. When we use artificial intelligence in research, we declare it with participation percentages. When a data point has not been verified in a primary source, we mark it as pending verification. Intellectual honesty is not a vulnerability: it is the condition for a skeptical reader to trust us two years later.",
    "manifesto.principle4.title": "Principle 4: Epistemic Transparency",
    "manifesto.principle5.text": "We don't measure success in followers, likes, or impressions. We measure whether a subscriber made a better decision after reading our edition. We measure whether an organization diagnosed with IA-COMPASS changed its AI strategy. We measure whether a professional trained at the Academy applied what they learned in their real job. If the numbers don't connect to verifiable results, they are vanity, not metrics.",
    "manifesto.principle5.title": "Principle 5: Verifiable Impact as the Only Success Metric",
    "manifesto.principles.title": "The 5 Core Principles",
    "manifesto.signature.location": "Cali, Colombia · 2026",
    "manifesto.signature.name": "Julián Andrés Mosquera",
    "manifesto.signature.role": "Founder, The Human Software",
    "manifesto.why.text": "The Human Software was born in Cali, Colombia, with a simple premise: before automating, you must think. We are not a news outlet. We are not a consulting firm that sells PowerPoints. We are not an academy that recycles Anglo-Saxon content with subtitles. We are a strategic intelligence operation that produces proprietary analysis, builds verifiable decision frameworks, and contextualizes every global trend to the operational reality of Latin America. We exist because professional judgment cannot depend on second-hand summaries. And because Latin America deserves strategic intelligence with the same depth as any market in the world.",
    "manifesto.why.title": "Why We Exist",

    /* ---- portafolio ---- */
    "portafolio.hero.subtitle": "Publications, projects, and research that back every claim we make. No self-promotion. With documented sources and results.",
    "portafolio.hero.title": "Verifiable Track Record, Not Inflated Credentials",
    "portafolio.row1.access": "[Pending]",
    "portafolio.row1.desc": "[Pending]",
    "portafolio.row1.org": "[Pending]",
    "portafolio.row1.project": "[Pending confirmation]",
    "portafolio.row1.type": "Research",
    "portafolio.row1.year": "[Pending]",
    "portafolio.row2.access": "[Pending]",
    "portafolio.row2.desc": "[Pending]",
    "portafolio.row2.org": "[Pending]",
    "portafolio.row2.project": "[Pending confirmation]",
    "portafolio.row2.type": "Paper / Article",
    "portafolio.row2.year": "[Pending]",
    "portafolio.row3.access": "[Pending]",
    "portafolio.row3.desc": "[Pending]",
    "portafolio.row3.org": "[Pending]",
    "portafolio.row3.project": "[Pending confirmation]",
    "portafolio.row3.type": "Consulting",
    "portafolio.row3.year": "[Pending]",
    "portafolio.row4.access": "[Pending]",
    "portafolio.row4.desc": "[Pending]",
    "portafolio.row4.org": "[Pending]",
    "portafolio.row4.project": "[Pending confirmation]",
    "portafolio.row4.type": "Conference / Presentation",
    "portafolio.row4.year": "[Pending]",
    "portafolio.row5.access": "Internal documentation",
    "portafolio.row5.desc": "Multi-LLM cognitive orchestration framework with triage and pre-execution simulation",
    "portafolio.row5.type": "Framework",
    "portafolio.row6.access": "Available to Enterprise clients",
    "portafolio.row6.desc": "Institutional AI maturity diagnostic system with 5 dimensions",
    "portafolio.row6.type": "Proprietary framework",
    "portafolio.row7.desc": "Biweekly strategic intelligence publication with IEEE standards",
    "portafolio.row7.type": "Publication",
    "portafolio.table.col.access": "Access",
    "portafolio.table.col.desc": "Description",
    "portafolio.table.col.org": "Organization",
    "portafolio.table.col.project": "Project / Publication",
    "portafolio.table.col.type": "Type",
    "portafolio.table.col.year": "Year",

    /* ---- sid ---- */
    "sid.cta.button": "Subscribe on THSN →",
    "sid.cta.description": "Biweekly publication with a strict paywall. No free version, no partial summaries. Rigor has a fair price.",
    "sid.cta.title": "Access the analysis that precedes your decisions.",
    "sid.editions.col.date": "Date",
    "sid.editions.col.edition": "Edition",
    "sid.editions.col.status": "Status",
    "sid.editions.col.topic": "Central Topic",
    "sid.editions.col.words": "Words",
    "sid.editions.row1.date": "March 2026",
    "sid.editions.row1.status": "Published",
    "sid.editions.row1.topic": "The obsolete professional map: why pre-AI career paths no longer work",
    "sid.editions.row2.date": "April 2026",
    "sid.editions.row2.status": "In production",
    "sid.editions.row2.topic": "[Pending confirmation]",
    "sid.editions.row3.date": "May 2026",
    "sid.editions.row3.status": "Planned",
    "sid.editions.row3.topic": "[Pending confirmation]",
    "sid.hero.eyebrow": "Flagship Publication",
    "sid.hero.subtitle": "Proprietary 3,000+ word analysis with verified primary sources, applicable decision frameworks, and mandatory Latin American context. For those who make decisions with real consequences.",
    "sid.hero.title": "Biweekly Strategic Intelligence for LATAM Leaders",
    "sid.includes.item1": "Presents a central analysis with data from verified primary sources",
    "sid.includes.item2": "Introduces a proprietary decision framework with its own name",
    "sid.includes.item3": "Contextualizes every global trend to LATAM's operational reality",
    "sid.includes.item4": "Includes a strategic signal with a 12 to 36-month horizon",
    "sid.includes.item5": "Poses an open question that challenges sector assumptions",
    "sid.includes.item6": "Closes with concrete implications for your organization or career",
    "sid.stats.frameworks.label": "Proprietary frameworks per edition",
    "sid.stats.frameworks.note": "CUF, EIA, FVR planned",
    "sid.stats.frameworks.value": "1–2",
    "sid.stats.reading.label": "Deep reading time",
    "sid.stats.reading.note": "Estimated at 200 wpm",
    "sid.stats.reading.value": "18–25 min",
    "sid.stats.sources.label": "Verified sources per edition",
    "sid.stats.sources.note": "IEEE standard adopted",
    "sid.stats.sources.value": "15–25",
    "sid.stats.words.label": "Words per edition",
    "sid.stats.words.note": "Based on Edition #001",
    "sid.stats.words.value": "3,000–4,000",

    /* ---- tabs ---- */
    "tabs.academy.cta": "View available programs",
    "tabs.academy.desc": "Intensive programs in applied AI, strategic thinking, and digital transformation for senior professionals. 8 to 12-week programs designed for professionals who need to apply AI with judgment, not memorize features. Real projects, small cohorts, direct mentorship from the THS team.",
    "tabs.academy.f1": "Small cohorts with direct mentorship",
    "tabs.academy.f2": "Projects applied to your real organization",
    "tabs.academy.f3": "Native Spanish content for LATAM",
    "tabs.academy.f4": "Certification with a verifiable portfolio",
    "tabs.academy.label": "THS Academy",
    "tabs.academy.title": "Capabilities AI Cannot Replace",
    "tabs.advisory.cta": "Learn about the engagement process",
    "tabs.advisory.desc": "AI diagnosis, governance, and implementation for organizations that cannot afford shallow decisions. We don't sell generic implementations. We diagnose with IA-COMPASS, design your organization's cognitive architecture, and accompany execution until the indicators change.",
    "tabs.advisory.f1": "Institutional diagnosis with IA-COMPASS",
    "tabs.advisory.f2": "AI governance aligned with regulation",
    "tabs.advisory.f3": "Implementation roadmaps with measurable deliverables",
    "tabs.advisory.f4": "Accompaniment until verified results",
    "tabs.advisory.label": "Enterprise Advisory",
    "tabs.advisory.title": "Judgment Installed in Your Organization",
    "tabs.label": "THS Ecosystem",
    "tabs.sid.cta": "Explore the SID",
    "tabs.sid.desc": "Biweekly publication of verified analysis with proprietary frameworks and mandatory LATAM context. Each edition delivers a 3,000+ word central analysis with verified primary sources, an applicable decision framework, and the question no one in your sector is asking.",
    "tabs.sid.f1": "Biweekly analysis with verified IEEE sources",
    "tabs.sid.f2": "New proprietary framework in every edition",
    "tabs.sid.f3": "Mandatory LATAM context in every analysis",
    "tabs.sid.f4": "Access to the complete archive of editions",
    "tabs.sid.label": "SID — Strategic Intelligence Digest",
    "tabs.sid.title": "Analysis That Precedes the Decision",
    "tabs.subtitle": "Verified analysis, executive training, and strategic consulting — designed for organizations that cannot afford shallow decisions.",
    "tabs.tab1": "Strategic Intelligence",
    "tabs.tab2": "Executive Training",
    "tabs.tab3": "Strategic Consulting",
    "tabs.title": "Three business lines. One single standard.",

    /* ---- thsn ---- */
    "thsn.benefit1.desc": "Each edition includes a reusable framework that applies after the trend stops being news.",
    "thsn.benefit1.title": "Analysis That Doesn't Expire",
    "thsn.benefit2.desc": "Every analysis answers what a global trend implies for your decision in Colombia, Mexico, or Peru.",
    "thsn.benefit2.title": "Mandatory LATAM Context",
    "thsn.benefit3.desc": "No news summaries. No tool lists. No content designed to generate clicks and be forgotten.",
    "thsn.benefit3.title": "Zero Noise, Only Judgment",
    "thsn.benefit4.desc": "Access to a network of professionals who value rigor over speed and judgment over opinion.",
    "thsn.benefit4.title": "Community of Decision-Makers",
    "thsn.cta.button": "Subscribe to the Digest →",
    "thsn.cta.title": "There are 5,000 spots. One can be yours.",
    "thsn.hero.subtitle": "THSN is the closed community of Strategic Intelligence Digest subscribers. It is not a social network. It is a space where Latin American leaders access proprietary analysis, decision frameworks, and conversations the open market does not produce.",
    "thsn.hero.title": "THSN — The Network of Those Who Think Before They Act",
    "thsn.stats.cap.label": "Membership cap",
    "thsn.stats.cap.note": "Deliberate scarcity to preserve depth",
    "thsn.stats.cap.value": "5,000",
    "thsn.stats.editions.label": "Editions published",
    "thsn.stats.editions.note": "Biweekly frequency",
    "thsn.stats.editions.value": "[Pending]",
    "thsn.stats.frameworks.label": "Proprietary frameworks created",
    "thsn.stats.frameworks.note": "CUF, EIA, FVR, MDA, IRE + additional",
    "thsn.stats.frameworks.value": "6+",
    "thsn.stats.reading.label": "Average reading time",
    "thsn.stats.reading.note": "Estimated for 3,000–4,000 words",
    "thsn.stats.reading.value": "18–25 min",
  }
};


/* ==========================================================
   B. setLang(lang) — update all [data-i18n] elements
   ========================================================== */
var _currentLang = 'es';

function setLang(lang) {
  _currentLang = lang;
  document.documentElement.setAttribute('lang', lang);

  var dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Handle placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update the toggle button text
  var btn = document.querySelector('[data-lang-toggle]');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}


/* ==========================================================
   C. initLang() — set default language and attach handler
   ========================================================== */
function initLang() {
  var langBtn = document.querySelector('[data-lang-toggle]');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      setLang(_currentLang === 'es' ? 'en' : 'es');
    });
  }
  setLang('es');
}


/* ==========================================================
   D. Theme toggle
   ========================================================== */
/* Theme: Fixed Dark Premium — no toggle needed.
   data-theme="dark" is set directly on each HTML file. */
function initTheme() { /* no-op */ }


/* ==========================================================
   E. Navbar behaviours
   ========================================================== */
function initNavbar() {
  /* --- Dropdowns (hover on desktop) --- */
  var dropdowns = document.querySelectorAll('.nav-item.has-dropdown');
  dropdowns.forEach(function (item) {
    var btn = item.querySelector('.nav-link');
    var panel = item.querySelector('.dropdown-panel');

    // Desktop: hover
    item.addEventListener('mouseenter', function () {
      if (window.innerWidth > 768) {
        closeAllDropdowns();
        btn.setAttribute('aria-expanded', 'true');
        item.classList.add('open');
      }
    });
    item.addEventListener('mouseleave', function () {
      if (window.innerWidth > 768) {
        btn.setAttribute('aria-expanded', 'false');
        item.classList.remove('open');
      }
    });

    // Keyboard / click fallback
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      closeAllDropdowns();
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        item.classList.add('open');
      }
    });
  });

  function closeAllDropdowns() {
    dropdowns.forEach(function (d) {
      d.classList.remove('open');
      var b = d.querySelector('.nav-link');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item.has-dropdown')) {
      closeAllDropdowns();
    }
  });

  /* --- Hamburger / mobile drawer --- */
  var hamburger = document.querySelector('.hamburger');
  var drawerOverlay = document.getElementById('mobileDrawerOverlay');
  var drawerClose = document.querySelector('.mobile-drawer-close');

  function openDrawer() {
    if (drawerOverlay) drawerOverlay.classList.add('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
  }
  function closeDrawer() {
    if (drawerOverlay) drawerOverlay.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', function (e) {
      if (e.target === drawerOverlay) closeDrawer();
    });
  }

  /* --- Banner dismiss --- */
  var bannerDismiss = document.querySelector('.banner-dismiss');
  var banner = document.getElementById('siteBanner');
  if (bannerDismiss && banner) {
    bannerDismiss.addEventListener('click', function () {
      banner.style.display = 'none';
    });
  }

  /* --- Scroll: progress bar + .scrolled class --- */
  var navbar = document.querySelector('.navbar');
  var scrollProgress = document.getElementById('scrollProgress');

  window.addEventListener('scroll', function () {
    // Navbar scrolled class
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Progress bar width
    if (scrollProgress) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = pct + '%';
    }
  }, { passive: true });
}


/* ==========================================================
   F. IntersectionObserver — reveal on scroll (.fu → .iv)
   ========================================================== */
(function () {
  // Reduced-motion guard
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Immediately reveal all
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.fu').forEach(function (el) {
        el.classList.add('iv');
      });
    });
    return;
  }

  function initReveal() {
    var elements = document.querySelectorAll('.fu');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('iv');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Run after DOMContentLoaded and also re-run after partials inject
  document.addEventListener('DOMContentLoaded', function () {
    // Slight delay to ensure partials are injected
    setTimeout(initReveal, 100);
  });
})();


/* ==========================================================
   G. Tab system
   ========================================================== */
document.addEventListener('click', function (e) {
  var tabBtn = e.target.closest('.tab-btn');
  if (!tabBtn) return;

  var tabGroup = tabBtn.closest('.tab-group') || tabBtn.closest('.tabs-container') || tabBtn.parentElement.parentElement;
  if (!tabGroup) return;

  var targetId = tabBtn.getAttribute('data-tab');

  // Deactivate all tabs in this group
  tabGroup.querySelectorAll('.tab-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  tabBtn.classList.add('active');

  // Toggle corresponding content panels
  var panels = tabGroup.querySelectorAll('.tab-content');
  panels.forEach(function (panel) {
    if (panel.getAttribute('data-tab-content') === targetId) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
});


/* ==========================================================
   H. Accordion / FAQ system
   ========================================================== */
document.addEventListener('click', function (e) {
  var header = e.target.closest('.accordion-header, .faq-header');
  if (!header) return;

  var item = header.parentElement;
  var isOpen = item.classList.contains('open');

  // Close siblings (optional single-open mode — toggle)
  item.classList.toggle('open');

  // Animate max-height on the content panel
  var content = header.nextElementSibling;
  if (content) {
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  }
});


/* ==========================================================
   I. Smooth scroll for anchor links
   ========================================================== */
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;

  var hash = link.getAttribute('href');
  if (hash === '#' || hash.length < 2) return;

  var target = document.querySelector(hash);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});


/* ==========================================================
   J. Animated counters for .stat-number elements
   ========================================================== */
(function () {
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el) {
    var raw = el.getAttribute('data-target') || el.textContent;
    // Parse number, keeping prefix/suffix
    var match = raw.match(/([\D]*?)([\d,]+(?:\.\d+)?)([\D]*)/);
    if (!match) return;

    var prefix = match[1];
    var target = parseFloat(match[2].replace(/,/g, ''));
    var suffix = match[3];
    var hasComma = match[2].indexOf(',') !== -1;
    var duration = 2000;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = easeOutCubic(progress);
      var current = Math.floor(eased * target);

      var display = hasComma ? current.toLocaleString() : String(current);
      el.textContent = prefix + display + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initCounters, 150);
  });
})();
