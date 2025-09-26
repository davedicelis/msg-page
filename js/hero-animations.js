/*
==============================================
MEDISCIENCE SPEAKERS - HERO ANIMATIONS CONTROLLER
==============================================
Optimización y control avanzado de animaciones
*/

class HeroAnimationController {
    constructor() {
        this.heroSection = document.querySelector('#home');
        this.isAnimationComplete = false;
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.lowPowerMode = this.detectLowPowerDevice();
        
        this.init();
    }
    
    init() {
        if (this.reducedMotion) {
            this.disableAnimations();
            return;
        }
        
        this.setupPerformanceOptimizations();
        this.setupIntersectionObserver();
        this.setupResizeOptimization();
        this.preloadCriticalResources();
    }
    
    // Detecta dispositivos de baja potencia
    detectLowPowerDevice() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const memory = navigator.deviceMemory;
        const cores = navigator.hardwareConcurrency;
        
        // Heurística para detectar dispositivos de baja potencia
        if (memory && memory < 4) return true;
        if (cores && cores < 4) return true;
        if (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) return true;
        
        return false;
    }
    
    // Optimizaciones de rendimiento
    setupPerformanceOptimizations() {
        if (this.lowPowerMode) {
            this.heroSection.classList.add('low-power-mode');
            // Reducir número de partículas
            const particles = this.heroSection.querySelectorAll('.floating-particle');
            particles.forEach((particle, index) => {
                if (index > 2) particle.style.display = 'none';
            });
        }
        
        // Usar will-change para optimizar el rendering
        this.heroSection.style.willChange = 'transform, opacity';
        
        // Limpiar will-change después de las animaciones
        setTimeout(() => {
            this.heroSection.style.willChange = 'auto';
        }, 4000);
    }
    
    // Observer para iniciar animaciones solo cuando el elemento es visible
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isAnimationComplete) {
                    this.startAnimations();
                    this.isAnimationComplete = true;
                    observer.unobserve(this.heroSection);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        });
        
        observer.observe(this.heroSection);
    }
    
    // Optimización para cambios de tamaño de ventana
    setupResizeOptimization() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }
    
    handleResize() {
        const isMobile = window.innerWidth < 768;
        const particles = this.heroSection.querySelectorAll('.floating-particle');
        
        particles.forEach(particle => {
            if (isMobile && this.lowPowerMode) {
                particle.style.display = 'none';
            } else {
                particle.style.display = 'block';
            }
        });
    }
    
    // Precargar recursos críticos
    preloadCriticalResources() {
        const bgImage = new Image();
        bgImage.src = './assets/images/bg.svg';
        
        // Precalentamiento de animaciones CSS
        this.heroSection.style.transform = 'translateZ(0)';
    }
    
    // Iniciar animaciones manualmente
    startAnimations() {
        this.heroSection.classList.add('animation-started');
        
        // Callback cuando termine la animación principal
        this.heroSection.addEventListener('animationend', (e) => {
            if (e.animationName === 'heroBackgroundSweepIn') {
                this.onMainAnimationComplete();
            }
        });
    }
    
    onMainAnimationComplete() {
        // Optimizaciones post-animación
        this.heroSection.style.willChange = 'auto';
        
        // Disparar evento personalizado
        this.heroSection.dispatchEvent(new CustomEvent('heroAnimationComplete', {
            detail: { timestamp: Date.now() }
        }));
    }
    
    // Desactivar todas las animaciones
    disableAnimations() {
        this.heroSection.classList.add('no-animations');
        document.documentElement.style.setProperty('--animation-duration', '0s');
    }
    
    // API pública para controlar variantes
    switchVariant(variant) {
        this.heroSection.classList.remove('variant-zen', 'variant-dynamic');
        if (variant !== 'default') {
            this.heroSection.classList.add(`variant-${variant}`);
        }
    }
    
    // Método para pausar/reanudar animaciones
    toggleAnimations(pause = false) {
        const animatedElements = this.heroSection.querySelectorAll('[style*="animation"]');
        animatedElements.forEach(el => {
            el.style.animationPlayState = pause ? 'paused' : 'running';
        });
    }
}

// Estilos CSS adicionales inyectados dinámicamente
const dynamicStyles = `
.hero-section.low-power-mode::before {
    animation-duration: 2s !important;
    filter: none !important;
}

.hero-section.low-power-mode .floating-particle {
    animation-duration: 6s !important;
}

.hero-section.no-animations,
.hero-section.no-animations * {
    animation: none !important;
    transition: none !important;
}

.hero-section.animation-started::before {
    animation-delay: 0.2s;
}

/* Optimización de GPU */
.hero-section::before,
.hero-section::after,
.floating-particle {
    will-change: transform, opacity;
    backface-visibility: hidden;
    perspective: 1000px;
    transform: translateZ(0);
}
`;

// Inyectar estilos dinámicos
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.heroAnimationController = new HeroAnimationController();
});

// Exposer API global para controles manuales
window.HeroAnimations = {
    switchVariant: (variant) => window.heroAnimationController?.switchVariant(variant),
    toggleAnimations: (pause) => window.heroAnimationController?.toggleAnimations(pause),
    getPerformanceInfo: () => ({
        reducedMotion: window.heroAnimationController?.reducedMotion,
        lowPowerMode: window.heroAnimationController?.lowPowerMode,
        animationComplete: window.heroAnimationController?.isAnimationComplete
    })
};

/* ===== DEBUGGING Y DESARROLLO ===== */
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Agregar controles de debug en desarrollo
    window.DebugHero = {
        logPerformance: () => {
            console.log('Hero Animation Performance:', window.HeroAnimations.getPerformanceInfo());
        },
        testVariants: () => {
            const variants = ['default', 'zen', 'dynamic'];
            let index = 0;
            const interval = setInterval(() => {
                window.HeroAnimations.switchVariant(variants[index]);
                console.log(`Switched to variant: ${variants[index]}`);
                index++;
                if (index >= variants.length) clearInterval(interval);
            }, 3000);
        }
    };
    
    console.log('🎨 Hero Animation Debug Mode - Use window.DebugHero for testing');
}