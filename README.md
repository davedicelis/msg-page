# Mediscience Speakers

Landing page profesional para Mediscience Speakers, una empresa que organiza eventos y conferencias con médicos y líderes de la industria farmacéutica.

## 🚀 Estructura del Proyecto

```
medisg-speakers/
├── index.html              # Página principal (HTML limpio)
├── css/
│   └── styles.css          # Estilos CSS personalizados
├── js/
│   └── main.js            # Funcionalidad JavaScript
├── assets/
│   ├── images/
│   │   ├── hero-bg.svg    # Imagen de fondo del hero
│   │   ├── placeholder.svg # Placeholder genérico
│   │   └── speakers/      # Imágenes de conferencistas
│   ├── videos/            # Videos (vacío por ahora)
│   └── icons/             # Iconos personalizados (vacío por ahora)
└── README.md              # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Flexbox, Grid, animaciones
- **Bootstrap 5**: Framework CSS responsive
- **JavaScript Vanilla**: Interactividad sin dependencias
- **Bootstrap Icons**: Iconografía
- **Google Fonts**: Tipografías (Outfit & Saira)

## 🎨 Características de Diseño

### Estética Visual
- **Paleta de colores**: Azul marino, turquesa médico, naranja de acento
- **Tipografía**: Outfit (headings) + Saira (body text)
- **Estilo**: Minimalista, elegante, profesional
- **Inspiración**: Combinación de labmark.co (estética) + hicuespeakers.com (funcionalidad)

### Interactividad
- Navbar sticky con efecto blur al hacer scroll
- Animaciones suaves con Intersection Observer
- Validación completa de formularios
- Modales para perfiles detallados
- Smooth scrolling entre secciones
- Sistema de alertas para feedback

## 📱 Responsive Design

- **Breakpoints**: Mobile-first approach
- **Grid system**: Bootstrap 5
- **Optimización**: Todas las secciones adaptadas para móvil
- **Performance**: Lazy loading de imágenes

## 🚦 Cómo Ejecutar

1. **Servidor local con PHP**:
   ```bash
   php -S localhost:8000
   ```

2. **Servidor simple con Python**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

3. **Live Server**: Usar extensión de VS Code o cualquier servidor local

4. **Acceder**: Abrir `http://localhost:8000`

## 📋 Secciones de la Landing Page

1. **Hero Section**: Título principal + CTAs
2. **Sobre Nosotros**: Misión con cards de características
3. **Conferencistas**: Grid de 6 perfiles médicos
4. **Eventos Próximos**: Timeline de eventos
5. **Clientes**: Logos de laboratorios y hospitales
6. **Contacto**: Formulario + información de contacto
7. **Footer**: Enlaces organizados y redes sociales

## 🔧 Funcionalidades JavaScript

- **Navbar scroll effect**: Cambia apariencia al hacer scroll
- **Scroll animations**: Fade-in elements con Intersection Observer
- **Form validation**: Validación completa con feedback visual
- **Modal system**: Perfiles detallados de conferencistas
- **Mobile navigation**: Colapso automático en móvil
- **Alert system**: Notificaciones toast personalizadas
- **Performance**: Lazy loading + debounce/throttle

## 🎯 Próximos Pasos

1. **Imágenes reales**: Reemplazar placeholders con fotos profesionales
2. **Contenido**: Actualizar con información real de la empresa
3. **Integración**: Conectar formulario con backend
4. **SEO**: Optimizar meta tags y structured data
5. **Analytics**: Implementar Google Analytics/Tag Manager

## 📄 Licencia

Proyecto desarrollado para Mediscience Speakers. Todos los derechos reservados.

---

**Nota**: Este es un prototipo inicial listo para ser escalado a un sitio web completo. La estructura modular permite fácil mantenimiento y expansión de funcionalidades.