# The Human Software — Portal v2.0 (AMD-Style)

## Stack
HTML5 + CSS3 + JavaScript vanilla (ES2020+). Cero frameworks, cero dependencias, cero build tools.
Unica dependencia externa: Google Fonts (Inter).

## Abrir en WebStorm
```
File → Open → seleccionar carpeta ths-portal-v2/
Click derecho en index.html → Open in → Browser → Chrome
```

## Abrir en VS Code
```
File → Open Folder → seleccionar carpeta ths-portal-v2/
Instalar extensiones recomendadas (VS Code las sugiere automaticamente)
Click derecho en index.html → Open with Live Server
```

## Estructura (30+ archivos)
```
ths-portal-v2/
├── index.html                   ← Home AMD-style (hero slider 4 slides)
├── .htaccess                    ← HTTPS + security headers + HSTS
├── .gitignore
├── robots.txt
├── sitemap.xml
├── css/
│   ├── variables.css            ← Design tokens AMD-adapted
│   ├── base.css                 ← Reset + a11y (skip-link, focus-visible)
│   ├── navbar.css               ← Transparent → solid on scroll (AMD)
│   ├── hero-slider.css          ← Full-screen slides + Ken Burns
│   ├── footer.css               ← Newsletter section + 5 columns
│   ├── pages.css                ← Paginas internas
│   ├── insights.css             ← Content Hub editorial
│   └── article.css              ← Template articulo premium
├── js/
│   ├── partials.js              ← Navbar + Footer (inyeccion global)
│   ├── main.js                  ← i18n (901 claves x 2 idiomas)
│   └── hero-slider.js           ← Autoplay, bullets, touch, keyboard
├── data/
│   └── articles.json            ← Metadata de articulos y ediciones THSN
├── pages/
│   ├── about.html
│   ├── academy.html
│   ├── advisory.html
│   ├── brand-assets.html
│   ├── changelog.html
│   ├── contact.html
│   ├── frameworks.html
│   ├── ia-compass.html
│   ├── insights.html            ← Content Hub (ex blog.html)
│   ├── manifesto.html
│   ├── portafolio.html
│   ├── sid.html
│   ├── subscribe.html           ← Suscripcion unificada THS/THSN
│   ├── thsn.html
│   └── articles/
│       └── template.html        ← Template base para articulos
├── img/
│   ├── slides/                  ← 4 imagenes hero (1920x1080, por generar)
│   ├── icons/
│   └── brand/
└── .vscode/
    ├── settings.json
    └── extensions.json
```

## Editar Navbar o Footer (afecta TODAS las paginas)
Abrir `js/partials.js` → editar NAVBAR_HTML o FOOTER_HTML.

## Cambiar colores o tipografia (afecta TODO el sitio)
Abrir `css/variables.css` → modificar el token correspondiente.

## Crear un articulo nuevo
1. Copiar `pages/articles/template.html` → `pages/articles/[slug].html`
2. Reemplazar todos los placeholders [ENTRE CORCHETES]
3. Agregar entrada en `data/articles.json`
4. Vincular desde `pages/insights.html`

## Deploy a Hostinger
WebStorm: Tools → Deployment → SFTP → Upload to server
VS Code: extensión SFTP (Natizyskunk) → configurar sftp.json

---
(c) 2026 The Human Software | Cali, Colombia
