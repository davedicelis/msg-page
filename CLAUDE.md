# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Description

MediScience Group is a corporate website for a leading company in medical technology and scientific solutions. The site showcases advanced medical products, research services, and specialized consulting for the healthcare and pharmaceutical industries.

## Project Structure

This is a modern, responsive single-page application built with vanilla HTML, CSS, and JavaScript:

- **index.html**: Main landing page with all sections (hero with carousel, about, products & services, clients, contact)
- **css/styles.css**: Main stylesheet with CSS custom properties and responsive design
- **css/hero-variants.css**: Additional hero section styling variations
- **js/main.js**: Core JavaScript functionality for interactivity
- **js/hero-animations.js**: Hero section specific animations
- **assets/images/**: Image assets and promotional content
- **assets/Fonts/**: Custom font files (Heading Now Trial, Metropolis, Phosphate)

## Architecture & Design System

### CSS Architecture
- **CSS Custom Properties**: Centralized design tokens in `:root` for colors, fonts, spacing
- **Color Palette**: Medical-themed colors (turquoise `#00BCD4`, purple `#8E44AD`, magenta `#E91E63`)
- **Typography**: Outfit (headings) + Saira (body text) from Google Fonts
- **Component-based**: Modular CSS classes for reusable components (cards, buttons, sections)
- **Responsive Design**: Mobile-first approach using Bootstrap 5 grid system

### JavaScript Architecture
- **Module Pattern**: Organized into initialization functions for different features
- **Event-driven**: Uses modern event listeners and Intersection Observer API
- **Performance Optimized**: Includes debouncing, throttling, and lazy loading
- **Key Features**:
  - Navbar scroll effects with backdrop blur
  - Scroll-triggered animations using Intersection Observer
  - Contact form validation and submission
  - Service information display
  - Mobile navigation handling

### Section Layout
1. **Hero Section**: Main CTA with promotional carousel featuring 3 service highlights
2. **About Section**: Labmark-inspired grid layout with varying card sizes (maintained as-is)
3. **Products & Services Section**: 6 technology and service offerings with detailed descriptions
4. **Clients Section**: Pharmaceutical and hospital client logos (maintained as-is)
5. **Contact Section**: Form with validation + contact information (maintained as-is)
6. **Footer**: Organized links and social media with updated service references

## Development Commands

### Local Development Server
```bash
# PHP development server (recommended)
php -S localhost:8000

# Python alternative
python -m http.server 8000

# Access at http://localhost:8000
```

### File Structure for Development
```
medisg-speakers/
├── index.html              # Single page application
├── css/
│   ├── styles.css          # Main stylesheet with design system
│   └── hero-variants.css   # Hero section variations
├── js/
│   ├── main.js            # Core functionality and initialization
│   └── hero-animations.js  # Hero-specific animations
└── assets/images/          # Image assets and speaker photos
```

## Key Technologies & Dependencies

- **Bootstrap 5**: CSS framework for responsive grid and components
- **Bootstrap Icons**: Icon library for UI elements
- **Google Fonts**: Outfit & Saira font families
- **Vanilla JavaScript**: No framework dependencies for core functionality
- **Modern CSS**: Custom properties, flexbox, grid, animations

## Design Inspiration & Style

The site combines aesthetic inspiration from labmark.co (visual design) with functional elements from hicuespeakers.com. Features a medical/professional color scheme with interactive elements designed for healthcare industry audiences.

## Performance Features

- Intersection Observer API for scroll animations
- Lazy loading implementation for images
- Optimized asset loading and minimal dependencies
- Mobile-first responsive design approach