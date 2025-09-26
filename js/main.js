/*
==============================================
MEDISCIENCE SPEAKERS - MAIN JAVASCRIPT
==============================================
*/

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== INITIALIZE WEBSITE =====
function initializeWebsite() {
    initNavbarScrollEffect();
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initMobileNavigation();
    initLoadingAnimations();
    initPerformanceOptimizations();
    initPortfolioNavigation();
    initBackgroundAnimations();
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScrollEffect() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar-custom');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ===== CONTACT FORM VALIDATION AND SUBMISSION =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const formData = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            phone: document.getElementById('phone'),
            company: document.getElementById('company'),
            subject: document.getElementById('subject'),
            message: document.getElementById('message')
        };
        
        // Validate form
        if (validateContactForm(formData)) {
            submitContactForm(formData, this);
        } else {
            showAlert('Por favor completa todos los campos requeridos correctamente.', 'error');
        }
    });
}

// ===== FORM VALIDATION =====
function validateContactForm(formData) {
    let isValid = true;
    
    // Clear previous error styles
    Object.values(formData).forEach(field => {
        if (field) field.classList.remove('is-invalid');
    });
    
    // Validate required fields
    if (!formData.name.value.trim()) {
        formData.name.classList.add('is-invalid');
        isValid = false;
    }
    
    if (!formData.email.value.trim() || !isValidEmail(formData.email.value)) {
        formData.email.classList.add('is-invalid');
        isValid = false;
    }
    
    if (!formData.subject.value) {
        formData.subject.classList.add('is-invalid');
        isValid = false;
    }
    
    if (!formData.message.value.trim()) {
        formData.message.classList.add('is-invalid');
        isValid = false;
    }
    
    return isValid;
}

// ===== EMAIL VALIDATION =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== SUBMIT CONTACT FORM =====
function submitContactForm(formData, form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Update button state
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        showAlert('¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Remove validation classes
        Object.values(formData).forEach(field => {
            if (field) field.classList.remove('is-invalid');
        });
    }, 2000);
}

// ===== SHOW SPEAKER DETAILS IN MODAL =====
function showSpeakerDetails(name, specialty, description) {
    const modal = document.getElementById('speakerModal');
    if (!modal) return;
    
    document.getElementById('modalSpeakerName').textContent = name;
    document.getElementById('modalSpeakerSpecialty').textContent = specialty;
    document.getElementById('modalSpeakerDescription').textContent = description;
}

// ===== ALERT SYSTEM =====
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
    alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; max-width: 400px;';
    
    const iconMap = {
        success: 'check-circle',
        error: 'exclamation-circle',
        info: 'info-circle'
    };
    
    alert.innerHTML = `
        <i class="bi bi-${iconMap[type]} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert && alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

// ===== NAVBAR COLLAPSE ON LINK CLICK (MOBILE) =====
function initMobileNavigation() {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// ===== LOADING ANIMATIONS =====
function initLoadingAnimations() {
    window.addEventListener('load', function() {
        document.body.style.overflow = 'visible';
        
        // Trigger initial animations
        setTimeout(() => {
            document.querySelectorAll('.hero-section .fade-in').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 200);
            });
        }, 100);
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initPerformanceOptimizations() {
    // Lazy load images when they come into view
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== PORTFOLIO CARDS NAVIGATION =====
function initPortfolioNavigation() {
    document.querySelectorAll('.labmark-card').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            
            // Simular navegación a páginas específicas o mostrar contenido detallado
            switch(href) {
                case '#excelencia-medica':
                    showPortfolioModal('Excelencia Médica', 
                        'Contamos con los profesionales médicos más reconocidos y especializados en diversas áreas de la salud y medicina. Nuestros conferencistas han desarrollado carreras destacadas en instituciones de prestigio mundial.',
                        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                case '#innovacion-cientifica':
                    showPortfolioModal('Innovación Científica', 
                        'Facilitamos el intercambio de conocimientos científicos más avanzados y las últimas investigaciones en salud. Conectamos la ciencia de vanguardia con aplicaciones prácticas.',
                        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                case '#alcance-global':
                    showPortfolioModal('Alcance Global', 
                        'Conectamos audiencias internacionales con líderes de opinión médicos de prestigio mundial. Nuestra red abarca los cinco continentes con expertos de clase mundial.',
                        'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                case '#networking-medico':
                    showPortfolioModal('Networking Médico', 
                        'Creamos espacios de conexión estratégica entre profesionales de la salud, facilitando el intercambio de experiencias y el establecimiento de colaboraciones profesionales valiosas.',
                        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                case '#educacion-continua':
                    showPortfolioModal('Educación Continua', 
                        'Ofrecemos programas de formación especializada y actualización profesional para mantener a los profesionales de la salud a la vanguardia del conocimiento médico.',
                        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                case '#tecnologia-salud':
                    showPortfolioModal('Tecnología en Salud', 
                        'Exploramos y promovemos las últimas innovaciones tecnológicas aplicadas al sector salud, desde telemedicina hasta inteligencia artificial en diagnósticos.',
                        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                case '#investigacion-clinica':
                    showPortfolioModal('Investigación Clínica', 
                        'Conectamos con líderes en investigación clínica que desarrollan estudios avanzados y ensayos clínicos que transforman la medicina moderna.',
                        'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                case '#telemedicina':
                    showPortfolioModal('Telemedicina', 
                        'Especialistas en consultas remotas y medicina digital que están revolucionando la atención médica a distancia.',
                        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                case '#especializaciones':
                    showPortfolioModal('Especializaciones Médicas', 
                        'Acceso a conferencistas especializados en múltiples áreas médicas: cardiología, neurología, oncología, pediatría y más.',
                        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                    );
                    break;
                default:
                    // Scroll suave a la sección si existe
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
            }
        });
    });
}

function showPortfolioModal(title, description, imageUrl) {
    // Crear modal dinámico
    const modalHTML = `
        <div class="modal fade" id="portfolioModal" tabindex="-1" aria-labelledby="portfolioModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="portfolioModalLabel">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${imageUrl}" alt="${title}" class="img-fluid rounded mb-3" style="width: 100%; height: 300px; object-fit: cover;">
                        <p class="lead">${description}</p>
                        <div class="mt-4">
                            <h6>Próximos Eventos</h6>
                            <ul class="list-unstyled">
                                <li><i class="bi bi-calendar-event text-primary me-2"></i>Congreso Internacional de Medicina - Madrid 2024</li>
                                <li><i class="bi bi-calendar-event text-primary me-2"></i>Simposio de Innovación en Salud - México 2024</li>
                                <li><i class="bi bi-calendar-event text-primary me-2"></i>Conferencia Global de Investigación - Brasil 2024</li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-custom btn-outline-custom" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-custom btn-primary-custom">Solicitar Información</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remover modal anterior si existe
    const existingModal = document.getElementById('portfolioModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Agregar modal al DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    modal.show();
    
    // Limpiar modal después de cerrarlo
    document.getElementById('portfolioModal').addEventListener('hidden.bs.modal', function () {
        this.remove();
    });
}

// ===== BACKGROUND ANIMATIONS ON SCROLL =====
function initBackgroundAnimations() {
    const aboutSection = document.querySelector('.about-section');
    
    if (!aboutSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('bg-visible');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
    });
    
    observer.observe(aboutSection);
}

// ===== GLOBAL FUNCTIONS (for onclick handlers) =====
window.showSpeakerDetails = showSpeakerDetails;