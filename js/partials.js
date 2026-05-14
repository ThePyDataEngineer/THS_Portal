/* ============================================================
   partials.js — THS Portal v2.0
   Injects shared navbar + footer into every page.
   Edit once → changes propagate to all 16+ pages on reload.

   CHANGELOG v2.0:
   - C-02: Skip link added
   - "Blog" → "Insights" (rename + new URL)
   - "Subscribe" added to navbar + mobile drawer
   - Newsletter compact form added to footer
   - Depth detection updated for pages/articles/ subdirectory
   ============================================================ */

/* ---------- prefix placeholder ---------- */
const PATH_PREFIX = '__PREFIX__';

/* ============================
   NAVBAR HTML
   ============================ */
const NAVBAR_HTML = `
<!-- Skip Link (Accessibility — C-02) -->
<a href="#main-content" class="skip-link" data-i18n="skip.link">Saltar al contenido principal</a>

<!-- Scroll progress bar -->
<div class="scroll-progress" id="scrollProgress"></div>

<!-- Announcement banner -->
<div class="banner" id="siteBanner">
  <div class="banner-inner">
    <p>
      <span data-i18n="banner.text">Edición #001 del Strategic Intelligence Digest — disponible ahora</span>
      <a href="https://thsn.tech" target="_blank" rel="noopener" data-i18n="banner.link">→ Leer en THSN</a>
    </p>
    <button class="banner-dismiss" aria-label="Cerrar banner">&times;</button>
  </div>
</div>

<!-- Main navigation -->
<nav class="navbar" role="navigation">
  <div class="nav-inner">

    <!-- Logo -->
    <a href="\${PATH_PREFIX}index.html" class="nav-logo" aria-label="The Human Software — Inicio">
      <img
        src="https://github.com/ThePyDataEngineer/THS-Brand/blob/397cfaa430e9a2b3c5bcee47c47a2aa318485efb/THSNoBG.png?raw=true"
        alt="The Human Software"
        class="logo-img"
        height="28"
        loading="eager"
      >
    </a>

    <!-- Main menu -->
    <ul class="nav-menu" role="menubar">

      <!-- Dropdown 1: Servicios -->
      <li class="nav-item has-dropdown" role="none">
        <button class="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false">
          <span data-i18n="nav.servicios">Servicios</span>
          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l3 3 3-3"/></svg>
        </button>
        <div class="dropdown-panel" role="menu">
          <a href="\${PATH_PREFIX}pages/sid.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><rect x="3" y="2" width="14" height="16" rx="2"/><line x1="7" y1="6" x2="13" y2="6"/><line x1="7" y1="10" x2="13" y2="10"/><line x1="7" y1="14" x2="10" y2="14"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.sid.title">Strategic Intelligence Digest</strong>
              <span data-i18n="nav.sid.desc">Análisis quincenal verificado para decisores LATAM</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/academy.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M10 2L2 7l8 5 8-5-8-5z"/><path d="M4 9v5c0 2 6 3 6 3s6-1 6-3V9"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.academy.title">THS Academy</strong>
              <span data-i18n="nav.academy.desc">Formación ejecutiva en IA con criterio estratégico</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/advisory.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.advisory.title">Enterprise Advisory</strong>
              <span data-i18n="nav.advisory.desc">Consultoría estratégica de IA para organizaciones</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/ia-compass.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><circle cx="10" cy="10" r="7"/><path d="M10 3v2M10 15v2M3 10h2M15 10h2"/><circle cx="10" cy="10" r="2"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.iacompass.title">IA-COMPASS</strong>
              <span data-i18n="nav.iacompass.desc">Framework de diagnóstico de madurez en IA</span>
            </div>
          </a>
        </div>
      </li>

      <!-- Dropdown 2: Recursos -->
      <li class="nav-item has-dropdown" role="none">
        <button class="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false">
          <span data-i18n="nav.recursos">Recursos</span>
          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l3 3 3-3"/></svg>
        </button>
        <div class="dropdown-panel" role="menu">
          <a href="\${PATH_PREFIX}pages/insights.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"/><line x1="7" y1="7" x2="13" y2="7"/><line x1="7" y1="11" x2="11" y2="11"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.insights.title">Insights</strong>
              <span data-i18n="nav.insights.desc">Análisis, frameworks y perspectivas originales</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/frameworks.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="11" y="3" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><rect x="11" y="11" width="6" height="6" rx="1"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.frameworks.title">Frameworks Library</strong>
              <span data-i18n="nav.frameworks.desc">Herramientas de decisión propietarias de THS</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/manifesto.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M6 2v16M6 2h8l3 3v11a2 2 0 01-2 2H6"/><path d="M14 2v3h3"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.manifesto.title">Manifiesto</strong>
              <span data-i18n="nav.manifesto.desc">Por qué pensamos antes de automatizar</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/portafolio.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M4 4h12v12H4z"/><path d="M8 4V2h4v2"/><line x1="4" y1="9" x2="16" y2="9"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.portafolio.title">Portafolio Académico</strong>
              <span data-i18n="nav.portafolio.desc">Publicaciones y proyectos con trayectoria verificable</span>
            </div>
          </a>
        </div>
      </li>

      <!-- Dropdown 3: THSN -->
      <li class="nav-item has-dropdown" role="none">
        <button class="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false">
          <span data-i18n="nav.thsn">THSN</span>
          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l3 3 3-3"/></svg>
        </button>
        <div class="dropdown-panel" role="menu">
          <a href="\${PATH_PREFIX}pages/thsn.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><circle cx="10" cy="5" r="3"/><circle cx="5" cy="14" r="3"/><circle cx="15" cy="14" r="3"/><line x1="10" y1="8" x2="5" y2="11"/><line x1="10" y1="8" x2="15" y2="11"/><line x1="5" y1="14" x2="15" y2="14"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.thsn.title">THSN Network</strong>
              <span data-i18n="nav.thsn.desc">Comunidad cerrada de decisores LATAM</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/subscribe.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M2 4l8 6 8-6"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.subscribe.title">Suscribirse</strong>
              <span data-i18n="nav.subscribe.desc">Recibe inteligencia que precede a la decisión</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/changelog.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><circle cx="6" cy="5" r="2"/><circle cx="6" cy="10" r="2"/><circle cx="6" cy="15" r="2"/><line x1="10" y1="5" x2="17" y2="5"/><line x1="10" y1="10" x2="17" y2="10"/><line x1="10" y1="15" x2="17" y2="15"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.changelog.title">Novedades</strong>
              <span data-i18n="nav.changelog.desc">Changelog y últimos lanzamientos de THS</span>
            </div>
          </a>
        </div>
      </li>

      <!-- Dropdown 4: Empresa -->
      <li class="nav-item has-dropdown" role="none">
        <button class="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false">
          <span data-i18n="nav.empresa">Empresa</span>
          <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5l3 3 3-3"/></svg>
        </button>
        <div class="dropdown-panel" role="menu">
          <a href="\${PATH_PREFIX}pages/about.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><circle cx="10" cy="7" r="4"/><path d="M3 18c0-3 3-5 7-5s7 2 7 5"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.about.title">Acerca de THS</strong>
              <span data-i18n="nav.about.desc">Quiénes somos, misión, visión y valores</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/brand-assets.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><rect x="2" y="4" width="16" height="12" rx="2"/><circle cx="7" cy="9" r="2"/><path d="M18 16l-5-5-3 3-2-2-6 4"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.brand.title">Brand Assets</strong>
              <span data-i18n="nav.brand.desc">Logotipos, paleta y guía de marca</span>
            </div>
          </a>
          <a href="\${PATH_PREFIX}pages/contact.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--accent)" stroke-width="1.5"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M2 4l8 6 8-6"/></svg>
            </div>
            <div>
              <strong data-i18n="nav.contact.title">Contacto</strong>
              <span data-i18n="nav.contact.desc">Conversemos sobre lo que necesitas decidir</span>
            </div>
          </a>
        </div>
      </li>

    </ul>

    <!-- Right controls -->
    <div class="nav-controls">
      <button data-lang-toggle class="lang-btn" aria-label="Cambiar idioma">EN</button>
      <a href="\${PATH_PREFIX}pages/subscribe.html" class="btn btn-primary nav-cta" data-i18n="nav.cta.subscribe">Suscribirse</a>
    </div>

    <!-- Hamburger (mobile) -->
    <button class="hamburger" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

  </div>
</nav>

<!-- Mobile drawer overlay -->
<div class="mobile-drawer-overlay" id="mobileDrawerOverlay">
  <div class="mobile-drawer" id="mobileDrawer">
    <div class="mobile-drawer-header">
      <a href="\${PATH_PREFIX}index.html" class="nav-logo" aria-label="The Human Software — Inicio">
        <img
          src="https://github.com/ThePyDataEngineer/THS-Brand/blob/397cfaa430e9a2b3c5bcee47c47a2aa318485efb/THSNoBG.png?raw=true"
          alt="The Human Software"
          class="logo-img"
          height="24"
        >
      </a>
      <button class="mobile-drawer-close" aria-label="Cerrar menú">&times;</button>
    </div>
    <div class="mobile-drawer-body">
      <div class="mobile-nav-group">
        <h4 data-i18n="nav.servicios">Servicios</h4>
        <a href="\${PATH_PREFIX}pages/sid.html" data-i18n="nav.sid.title">Strategic Intelligence Digest</a>
        <a href="\${PATH_PREFIX}pages/academy.html" data-i18n="nav.academy.title">THS Academy</a>
        <a href="\${PATH_PREFIX}pages/advisory.html" data-i18n="nav.advisory.title">Enterprise Advisory</a>
        <a href="\${PATH_PREFIX}pages/ia-compass.html" data-i18n="nav.iacompass.title">IA-COMPASS</a>
      </div>
      <div class="mobile-nav-group">
        <h4 data-i18n="nav.recursos">Recursos</h4>
        <a href="\${PATH_PREFIX}pages/insights.html" data-i18n="nav.insights.title">Insights</a>
        <a href="\${PATH_PREFIX}pages/frameworks.html" data-i18n="nav.frameworks.title">Frameworks Library</a>
        <a href="\${PATH_PREFIX}pages/manifesto.html" data-i18n="nav.manifesto.title">Manifiesto</a>
        <a href="\${PATH_PREFIX}pages/portafolio.html" data-i18n="nav.portafolio.title">Portafolio Académico</a>
      </div>
      <div class="mobile-nav-group">
        <h4 data-i18n="nav.thsn">THSN</h4>
        <a href="\${PATH_PREFIX}pages/thsn.html" data-i18n="nav.thsn.title">THSN Network</a>
        <a href="\${PATH_PREFIX}pages/subscribe.html" data-i18n="nav.subscribe.title">Suscribirse</a>
        <a href="\${PATH_PREFIX}pages/changelog.html" data-i18n="nav.changelog.title">Novedades</a>
      </div>
      <div class="mobile-nav-group">
        <h4 data-i18n="nav.empresa">Empresa</h4>
        <a href="\${PATH_PREFIX}pages/about.html" data-i18n="nav.about.title">Acerca de THS</a>
        <a href="\${PATH_PREFIX}pages/brand-assets.html" data-i18n="nav.brand.title">Brand Assets</a>
        <a href="\${PATH_PREFIX}pages/contact.html" data-i18n="nav.contact.title">Contacto</a>
      </div>
      <div class="mobile-drawer-cta">
        <a href="\${PATH_PREFIX}pages/subscribe.html" class="btn btn-primary" data-i18n="nav.cta.subscribe">Suscribirse</a>
      </div>
    </div>
  </div>
</div>
`;

/* ============================
   FOOTER HTML
   ============================ */
const FOOTER_HTML = `
<footer class="site-footer">

  <!-- Newsletter Section (above columns) -->
  <div class="footer-newsletter">
    <div class="footer-newsletter-inner">
      <div class="footer-newsletter-text">
        <h3 data-i18n="footer.newsletter.title">Inteligencia que precede a la decisión.</h3>
        <p data-i18n="footer.newsletter.desc">Análisis quincenal con fuentes verificadas, frameworks propietarios y contexto LATAM. Sin clickbait.</p>
      </div>
      <div class="footer-newsletter-form">
        <input type="email" placeholder="tu@email.com" data-i18n-placeholder="footer.newsletter.placeholder" aria-label="Email para suscripción">
        <button type="button" data-i18n="footer.newsletter.btn">Suscribirse</button>
      </div>
    </div>
  </div>

  <div class="footer-inner">

    <!-- Column 1: Brand -->
    <div class="footer-brand">
      <a href="\${PATH_PREFIX}index.html" class="footer-logo" aria-label="The Human Software — Inicio">
        <img
          src="https://github.com/ThePyDataEngineer/THS-Brand/blob/397cfaa430e9a2b3c5bcee47c47a2aa318485efb/THSNoBG.png?raw=true"
          alt="The Human Software"
          class="logo-img logo-img--footer"
          height="20"
        >
      </a>
      <p data-i18n="footer.tagline">Inteligencia estratégica aplicada para decisores de América Latina. Análisis propietario. Contexto LATAM. Sin ruido.</p>
      <p class="footer-seal" data-i18n="footer.seal">Piensa primero. Automatiza después.</p>
    </div>

    <!-- Column 2: Servicios -->
    <div class="footer-col">
      <h4 data-i18n="footer.col.servicios">Servicios</h4>
      <ul>
        <li><a href="\${PATH_PREFIX}pages/sid.html" data-i18n="nav.sid.title">Strategic Intelligence Digest</a></li>
        <li><a href="\${PATH_PREFIX}pages/academy.html" data-i18n="nav.academy.title">THS Academy</a></li>
        <li><a href="\${PATH_PREFIX}pages/advisory.html" data-i18n="nav.advisory.title">Enterprise Advisory</a></li>
        <li><a href="\${PATH_PREFIX}pages/ia-compass.html" data-i18n="nav.iacompass.title">IA-COMPASS</a></li>
      </ul>
    </div>

    <!-- Column 3: Recursos -->
    <div class="footer-col">
      <h4 data-i18n="footer.col.recursos">Recursos</h4>
      <ul>
        <li><a href="\${PATH_PREFIX}pages/insights.html" data-i18n="nav.insights.title">Insights</a></li>
        <li><a href="\${PATH_PREFIX}pages/frameworks.html" data-i18n="nav.frameworks.title">Frameworks Library</a></li>
        <li><a href="\${PATH_PREFIX}pages/manifesto.html" data-i18n="nav.manifesto.title">Manifiesto</a></li>
        <li><a href="\${PATH_PREFIX}pages/portafolio.html" data-i18n="nav.portafolio.title">Portafolio Académico</a></li>
      </ul>
    </div>

    <!-- Column 4: Empresa -->
    <div class="footer-col">
      <h4 data-i18n="footer.col.empresa">Empresa</h4>
      <ul>
        <li><a href="\${PATH_PREFIX}pages/about.html" data-i18n="nav.about.title">Acerca de THS</a></li>
        <li><a href="\${PATH_PREFIX}pages/thsn.html" data-i18n="nav.thsn.title">THSN Network</a></li>
        <li><a href="\${PATH_PREFIX}pages/subscribe.html" data-i18n="nav.subscribe.title">Suscribirse</a></li>
        <li><a href="\${PATH_PREFIX}pages/contact.html" data-i18n="nav.contact.title">Contacto</a></li>
        <li><a href="\${PATH_PREFIX}pages/changelog.html" data-i18n="nav.changelog.title">Novedades</a></li>
      </ul>
    </div>

    <!-- Column 5: Red THS -->
    <div class="footer-col">
      <h4 data-i18n="footer.col.red">Red THS</h4>
      <ul>
        <li><a href="https://thsn.tech" target="_blank" rel="noopener">THSN.tech</a></li>
        <li><a href="\${PATH_PREFIX}pages/brand-assets.html" data-i18n="nav.brand.title">Brand Assets</a></li>
      </ul>
    </div>

  </div>

  <!-- Legal bar -->
  <div class="footer-legal">
    <p data-i18n="footer.copyright">&copy; 2026 The Human Software. Todos los derechos reservados.</p>
    <p data-i18n="footer.location">Cali, Colombia · América Latina</p>
    <p>
      <a href="\${PATH_PREFIX}pages/privacidad.html" data-i18n="footer.privacy">Política de Privacidad (Ley 1581/2012)</a>
    </p>
  </div>
</footer>
`;

/* ============================
   INJECTION FUNCTION
   ============================ */
function injectPartials() {
  /* Detect depth:
     - root (index.html)           → './'
     - pages/ (about.html, etc.)   → '../'
     - pages/articles/ (articles)  → '../../'
  */
  var path = window.location.pathname;
  var depth = './';
  if (path.includes('/pages/articles/')) {
    depth = '../../';
  } else if (path.includes('/pages/')) {
    depth = '../';
  }

  var navPlaceholder = document.getElementById('navbar-placeholder');
  var footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) {
    navPlaceholder.innerHTML = NAVBAR_HTML.replace(/__PREFIX__/g, depth);
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML.replace(/__PREFIX__/g, depth);
  }

  // After injection, initialise behaviours defined in main.js
  if (typeof initNavbar === 'function')  initNavbar();
  if (typeof initLang === 'function')    initLang();
}

document.addEventListener('DOMContentLoaded', injectPartials);
