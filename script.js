/* ============================================
   💖 PARA ALISSON - SCRIPT PRINCIPAL
   Versión: 2.0 (Senior Refactor)
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       1. CONFIGURACIÓN Y CONSTANTES
       ============================================ */

    const CONFIG = {
        startDate: new Date('2026-04-12T00:00:00'),
        musicUrl: 'https://files.catbox.moe/wy6029.mp3',
        // Fecha en que se desbloquea la carta sellada
        unlockDate: new Date('2027-08-26T00:00:00'),
        // Constantes mágicas -> nombres descriptivos
        LOADER_INCREMENT_MIN: 2,
        LOADER_INCREMENT_MAX: 7,
        LOADER_INTERVAL_MS: 200,
        PETAL_INTERVAL_MS: 800,
        BUTTERFLY_INTERVAL_MS: 3000,
        HEART_PARTICLE_INTERVAL_MS: 1200,
        COUNTER_INTERVAL_MS: 1000,
        FIREWORK_INTERVAL_MS: 3000,
        FIREWORK_BATCH: 20,
        PARTICLE_COUNT: 50,
        PARTICLE_DISTANCE: 100,
        PETAL_DURATION_MIN: 6,
        PETAL_DURATION_MAX: 11,
        BUTTERFLY_DURATION: 18000,
        HEART_PARTICLE_LIFETIME: 3000,
        
        wishes: [
            'Deseo que seas feliz siempre 💖',
            'Deseo cumplir tus sueños ✨',
            'Deseo verte sonreír 😊',
            'Deseo ser tu compañero 💑',
            'Deseo que este amor nunca termine 💕',
            'Deseo ser tu primer paciente 🦷',
            'Deseo que Kuromi te proteja 🎀',
            'Deseo construir un hogar contigo 🏡',
            'Deseo que seas la odontóloga más increíble ✨'
        ],
        
        gallery: [
            { url: 'https://i.imgur.com/SMMGWu9.jpg', title: 'Contigo, todo es mejor', description: 'Cada momento a tu lado se convierte en mi recuerdo favorito' },
            { url: 'https://i.imgur.com/EuSVvfJ.jpg', title: 'Mi persona favorita', description: 'No importa dónde ni cuándo, mientras sea contigo' },
            { url: 'https://i.imgur.com/7AH5MaT.jpg', title: 'Sonrisas que enamoran', description: 'Tu sonrisa es lo más bonito que mis ojos han visto' },
            { url: 'https://i.imgur.com/thv7LGX.jpg', title: 'Juntos para siempre', description: 'Así me imagino el resto de mi vida' },
            { url: 'https://i.imgur.com/LRY1iG6.jpg', title: 'Eres tú', description: 'Lo que me enamora es la mujer de las fotos' },
            { url: 'https://i.imgur.com/q8c7kFk.jpg', title: 'Mi lugar favorito', description: 'No es un sitio, eres tú' },
            { url: 'https://i.imgur.com/BHgx73N.jpg', title: 'Recuerdos eternos', description: 'Momentos que guardaré por siempre' },
            { url: 'https://i.imgur.com/7yL8zXZ.jpg', title: 'Mi niña hermosa', description: 'Cada día te veo más bonita' },
            { url: 'https://i.imgur.com/nAd02cU.jpg', title: 'Aventuras', description: 'Las mejores aventuras son contigo' },
            { url: 'https://i.imgur.com/x0kP7iI.jpg', title: 'Mi amor', description: 'Te amo más de lo que imaginas' },
            { url: 'https://i.imgur.com/lqQtIHe.jpg', title: 'Por siempre', description: 'Lo mejor está por venir' }
        ],
        
        letter: [
            'Mi niña,',
            'Hay personas que llegan a nuestra vida sin hacer ruido, y poco a poco terminan convirtiéndose en todo. Tú hiciste exactamente eso conmigo.',
            'Pienso en aquel 2023, cuando hablamos por primera vez gracias a Masha. Jamás imaginé que serías la mujer que más amo.',
            'Después llegó el 15 de tu prima. Yo no sabía bailar, pero todo era más fácil contigo.',
            'Cuando te vi pensé que eras muy bonita. Lo único que quería era conocerte más.',
            'Con cada conversación, con cada risa, fuiste ocupando un lugar en mi corazón.',
            'Me descubrí diciéndome: "Quiero que ella sea mi primer y única novia".',
            'Estaba enamorado de tu personalidad, de tus metas.',
            'El domingo 12 de abril de 2026 cambió mi vida para siempre.',
            'Si me preguntaran mil veces a quién elegiría, la respuesta siempre sería: a ti.',
            'Gracias por quedarte.',
            'Gracias por cada "Amor", cada "Ti amo", cada foto, cada abrazo.',
            'Gracias a ti soy una mejor versión de mí mismo.',
            'Tú me has enseñado a amar con paciencia.',
            'Un día normal se convierte en el mejor solo porque estás conmigo.',
            'Cuando no estamos juntos te extraño muchísimo.',
            'Me imagino abrazándote, escuchándote, viendo cómo sonríes.',
            'Me encanta cuando me gritas "Amoor", cuando jugamos Crash Team Racing.',
            'Esos momentos los quiero recordar siendo viejitos contigo.',
            'Gracias por estar a mi lado incluso cuando tenemos diferencias.',
            'No soy perfecto, pero jamás dejaré de esforzarme por ti.',
            'Quiero verte cumplir tu sueño de ser odontóloga.',
            'Quiero viajar contigo, conocer playas y montañas.',
            'Y sí, sueño con formar una familia contigo.',
            'Eres mi mejor elección.',
            'Si algún día dudas de cuánto te amo, recuerda:',
            'Te amo muchísimo con montones. ❣️',
            'Te amo de aquí a la Luna🌕 a pasito de tortuga🐢, del Sol☀️ al mar🌊 a pasito de calamar🐙. ❣️',
            'Gracias por existir.',
            'Con todo mi corazón que te ama, hoy, mañana y siempre,',
            'Tu niño de silicona ❤️'
        ],
        
        reasons: [
            'Tu sonrisa que ilumina mis días',
            'La forma en que dices "Amoor"',
            'Tu amor por el queso',
            'Cómo te ves cuando duermes',
            'Tu risa contagiosa',
            'Lo hermosa que eres por dentro y por fuera',
            'Cómo me cuidas sin darte cuenta',
            'Tus mensajes de "buenos días"',
            'Que siempre intentas responderme rápido',
            'Lo bien que bailas',
            'Tu personalidad única',
            'Que me pusiste de fondo de pantalla',
            'Cómo escribes mi nombre con cariño',
            'Tu valentía para elegir odontología',
            'Lo detallista que eres conmigo',
            'Tus abrazos que curan todo',
            'La forma en que me dices "mi niño"',
            'Tu pasión por tus sueños',
            'Que eres tú, simplemente tú',
            'Lo mucho que te amo, mi niña',
            'Y 80 razones más... ❤️'
        ],
        
        loadMsgs: [
            'Preparando algo especial para Alisson...',
            'Cargando recuerdos hermosos...',
            'Creando magia para ti, mi niña...',
            'El corazón late por ti...',
            'Casi listo para tu sorpresa...',
            'El amor se manifiesta...',
            'Toques finales de amor...',
            'Tu regalo está a punto de aparecer...'
        ]
    };

    /* ============================================
       2. UTILIDADES (Helpers)
       ============================================ */

    /**
     * Selecciona un elemento del DOM de forma segura
     */
    const $ = (id) => document.getElementById(id);
    
    /**
     * Selector con querySelector
     */
    const $$ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    /**
     * Throttle con requestAnimationFrame (para mousemove, scroll)
     */
    function rafThrottle(callback) {
        let ticking = false;
        return function(...args) {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    callback.apply(this, args);
                    ticking = false;
                });
            }
        };
    }

    /**
     * Debounce simple
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    /**
     * Genera un número aleatorio entre min y max
     */
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    /**
     * Logger con prefijo
     */
    const log = {
        info: (msg, ...args) => console.log(`%c[Alisson] ${msg}`, 'color: #ff6b9d; font-weight: bold', ...args),
        warn: (msg, ...args) => console.warn(`[Alisson] ${msg}`, ...args),
        error: (msg, ...args) => console.error(`[Alisson] ${msg}`, ...args)
    };

    /**
     * Verifica si el usuario prefiere movimiento reducido
     */
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /**
     * Verifica si la pestaña está visible
     */
    let isPageVisible = !document.hidden;

    document.addEventListener('visibilitychange', () => {
        isPageVisible = !document.hidden;
        log.info('Visibilidad cambiada:', isPageVisible ? 'visible' : 'oculta');
    });

    /* ============================================
       3. GESTOR DE INTERVALOS (Cleanup)
       ============================================ */

    const IntervalManager = {
        intervals: new Set(),
        
        set(callback, delay) {
            const id = setInterval(() => {
                if (isPageVisible && !prefersReducedMotion) {
                    callback();
                }
            }, delay);
            this.intervals.add(id);
            return id;
        },
        
        setTimeout(callback, delay) {
            const id = setTimeout(() => {
                if (isPageVisible || !prefersReducedMotion) {
                    callback();
                }
            }, delay);
            return id;
        },
        
        clearAll() {
            this.intervals.forEach(id => clearInterval(id));
            this.intervals.clear();
            log.info('Todos los intervalos limpiados');
        }
    };

    /* ============================================
       4. LOADER
       ============================================ */

    const Loader = {
        progress: 0,
        messageIndex: 0,
        
        updateMessage() {
            const msgEl = $('loaderMessage');
            if (msgEl && this.messageIndex < CONFIG.loadMsgs.length) {
                msgEl.textContent = CONFIG.loadMsgs[this.messageIndex];
                this.messageIndex++;
            }
        },
        
        start() {
            const bar = $('loaderBar');
            const percent = $('loaderPercent');
            const barContainer = $('loaderBarContainer');
            
            const tick = () => {
                this.progress += randomInRange(CONFIG.LOADER_INCREMENT_MIN, CONFIG.LOADER_INCREMENT_MAX);
                
                if (this.progress >= 100) {
                    this.progress = 100;
                    if (bar) bar.style.width = '100%';
                    if (percent) percent.textContent = '100%';
                    if (barContainer) barContainer.setAttribute('aria-valuenow', 100);
                    
                    setTimeout(() => this.finish(), 500);
                    return;
                }
                
                if (bar) bar.style.width = `${this.progress}%`;
                if (percent) percent.textContent = `${Math.floor(this.progress)}%`;
                if (barContainer) barContainer.setAttribute('aria-valuenow', Math.floor(this.progress));
                
                // Actualizar mensaje según progreso
                const msgThreshold = (this.messageIndex + 1) * (100 / CONFIG.loadMsgs.length);
                if (this.progress > msgThreshold) {
                    this.updateMessage();
                }
            };
            
            const interval = setInterval(tick, CONFIG.LOADER_INTERVAL_MS);
            IntervalManager.intervals.add(interval);
        },
        
        finish() {
            const loader = $('loader');
            const welcome = $('welcomeScreen');
            
            if (loader) {
                loader.classList.add('fade-out');
                IntervalManager.setTimeout(() => {
                    loader.style.display = 'none';
                    if (welcome) {
                        welcome.classList.remove('hidden');
                        // Anunciar a lectores de pantalla
                        welcome.setAttribute('aria-hidden', 'false');
                    }
                }, 1500);
            }
        }
    };

    /* ============================================
       5. CURSOR PERSONALIZADO
       ============================================ */

    const Cursor = {
        init() {
            if (prefersReducedMotion || window.innerWidth <= 768) {
                document.body.style.cursor = 'auto';
                return;
            }
            
            this.cursor = $('cursor');
            this.follower = $('cursorFollower');
            this.mouseX = 0;
            this.mouseY = 0;
            this.followerX = 0;
            this.followerY = 0;
            
            this.bindEvents();
            this.animate();
        },
        
        bindEvents() {
            const updateMouse = rafThrottle((e) => {
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
                if (this.cursor) {
                    this.cursor.style.left = `${this.mouseX}px`;
                    this.cursor.style.top = `${this.mouseY}px`;
                }
            });
            
            document.addEventListener('mousemove', updateMouse, { passive: true });
            
            // Activar/Desactivar cursor en hover
            const interactiveEls = $$$('button, a, .gallery-item, .promesa-card, .star, .envelope, [role="button"]');
            interactiveEls.forEach(el => {
                el.addEventListener('mouseenter', () => this.activate(true));
                el.addEventListener('mouseleave', () => this.activate(false));
            });
        },
        
        activate(isActive) {
            if (this.cursor) this.cursor.classList.toggle('active', isActive);
            if (this.follower) this.follower.classList.toggle('active', isActive);
        },
        
        animate() {
            if (!this.follower) return;
            
            this.followerX += (this.mouseX - this.followerX) * 0.1;
            this.followerY += (this.mouseY - this.followerY) * 0.1;
            
            this.follower.style.left = `${this.followerX}px`;
            this.follower.style.top = `${this.followerY}px`;
            
            if (isPageVisible) {
                requestAnimationFrame(() => this.animate());
            } else {
                setTimeout(() => this.animate(), 500);
            }
        }
    };

    /* ============================================
       6. PARTÍCULAS (Canvas)
       ============================================ */

    const Particles = {
        canvas: null,
        ctx: null,
        particles: [],
        animationId: null,
        isPaused: false,
        
        init() {
            if (prefersReducedMotion) return;
            
            this.canvas = $('particlesCanvas');
            if (!this.canvas) return;
            
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            
            window.addEventListener('resize', debounce(() => this.resize(), 250));
            
            // Crear partículas
            for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
                this.particles.push(this.createParticle());
            }
            
            this.animate();
        },
        
        createParticle() {
            return {
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.2
            };
        },
        
        resize() {
            if (!this.canvas) return;
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },
        
        animate() {
            if (!this.ctx || this.isPaused || !isPageVisible) {
                if (isPageVisible && !this.isPaused) {
                    this.animationId = requestAnimationFrame(() => this.animate());
                }
                return;
            }
            
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Actualizar y dibujar partículas
            this.particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                
                // Rebotar en bordes
                if (p.x <= 0 || p.x >= this.canvas.width) p.speedX *= -1;
                if (p.y <= 0 || p.y >= this.canvas.height) p.speedY *= -1;
                
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(255, 179, 209, ${p.opacity})`;
                this.ctx.fill();
            });
            
            // Dibujar líneas (solo entre partículas cercanas)
            for (let i = 0; i < this.particles.length; i++) {
                for (let j = i + 1; j < this.particles.length; j++) {
                    const dx = this.particles[i].x - this.particles[j].x;
                    const dy = this.particles[i].y - this.particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < CONFIG.PARTICLE_DISTANCE) {
                        this.ctx.beginPath();
                        this.ctx.strokeStyle = `rgba(255, 179, 209, ${0.08 * (1 - dist / CONFIG.PARTICLE_DISTANCE)})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                        this.ctx.stroke();
                    }
                }
            }
            
            this.animationId = requestAnimationFrame(() => this.animate());
        },
        
        pause() {
            this.isPaused = true;
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
                this.animationId = null;
            }
        },
        
        resume() {
            this.isPaused = false;
            this.animate();
        }
    };

    /* ============================================
       7. CONTADOR (TIEMPO TRANSCURRIDO)
       ============================================ */

    const Counter = {
        elements: {},
        intervalId: null,
        
        init() {
            this.elements = {
                years: $('years'),
                months: $('months'),
                days: $('days'),
                hours: $('hours'),
                minutes: $('minutes'),
                seconds: $('seconds')
            };
            
            this.update();
            this.intervalId = IntervalManager.set(() => this.update(), CONFIG.COUNTER_INTERVAL_MS);
        },
        
        update() {
            const now = new Date();
            const diff = now - CONFIG.startDate;
            
            if (diff < 0) {
                // Aún no es la fecha
                Object.values(this.elements).forEach(el => {
                    if (el) el.textContent = '0';
                });
                return;
            }
            
            const y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            const mo = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
            const dy = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mi = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            
            if (this.elements.years) this.elements.years.textContent = y;
            if (this.elements.months) this.elements.months.textContent = mo;
            if (this.elements.days) this.elements.days.textContent = dy;
            if (this.elements.hours) this.elements.hours.textContent = h;
            if (this.elements.minutes) this.elements.minutes.textContent = mi;
            if (this.elements.seconds) this.elements.seconds.textContent = s;
        },
        
        destroy() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                IntervalManager.intervals.delete(this.intervalId);
                this.intervalId = null;
            }
        }
    };

    /* ============================================
       8. MÚSICA
       ============================================ */

    const Music = {
        audio: null,
        playBtn: null,
        volumeBtn: null,
        visualizer: null,
        playerEl: null,
        previousVolume: 0.5,
        
        init() {
            this.audio = $('bgMusic');
            this.playBtn = $('playBtn');
            this.volumeBtn = $('volumeBtn');
            this.visualizer = $('musicVisualizer');
            this.playerEl = $('musicPlayer');
            
            if (!this.audio || !this.playBtn) return;
            
            this.audio.volume = this.previousVolume;
            this.bindEvents();
        },
        
        bindEvents() {
            this.playBtn.addEventListener('click', () => this.toggle());
            this.volumeBtn.addEventListener('click', () => this.toggleVolume());
            
            // Manejar autoplay bloqueado
            this.audio.addEventListener('error', (e) => {
                log.error('Error cargando audio:', e);
                this.playBtn.textContent = '❌';
                this.playBtn.disabled = true;
            });
        },
        
        play() {
            if (!this.audio) return;
            
            const playPromise = this.audio.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        this.playBtn.textContent = '⏸';
                        this.playBtn.setAttribute('aria-label', 'Pausar música');
                        if (this.visualizer) this.visualizer.classList.add('playing');
                    })
                    .catch(err => {
                        log.warn('Autoplay bloqueado por el navegador:', err);
                        this.playBtn.textContent = '▶';
                        this.playBtn.setAttribute('aria-label', 'Reproducir música');
                        if (this.visualizer) this.visualizer.classList.remove('playing');
                    });
            }
        },
        
        pause() {
            if (!this.audio) return;
            this.audio.pause();
            this.playBtn.textContent = '▶';
            this.playBtn.setAttribute('aria-label', 'Reproducir música');
            if (this.visualizer) this.visualizer.classList.remove('playing');
        },
        
        toggle() {
            if (!this.audio) return;
            if (this.audio.paused) {
                this.play();
            } else {
                this.pause();
            }
        },
        
        toggleVolume() {
            if (!this.audio || !this.volumeBtn) return;
            
            if (this.audio.volume > 0) {
                this.previousVolume = this.audio.volume;
                this.audio.volume = 0;
                this.volumeBtn.textContent = '🔇';
                this.volumeBtn.setAttribute('aria-label', 'Activar volumen');
            } else {
                this.audio.volume = this.previousVolume || 0.5;
                this.volumeBtn.textContent = '🔊';
                this.volumeBtn.setAttribute('aria-label', 'Silenciar volumen');
            }
        },
        
        show() {
            if (this.playerEl) this.playerEl.classList.remove('hidden');
        }
    };

    /* ============================================
       9. EFECTOS AMBIENTALES (Pétalos y Mariposas)
       ============================================ */

    const Ambience = {
        init() {
            if (prefersReducedMotion) return;
            this.createPetals();
            this.createButterflies();
        },
        
        createPetals() {
            const container = $('petalsContainer');
            if (!container) return;
            
            IntervalManager.set(() => {
                if (!isPageVisible) return;
                
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.style.left = `${Math.random() * 100}vw`;
                petal.style.animationDuration = `${randomInRange(CONFIG.PETAL_DURATION_MIN, CONFIG.PETAL_DURATION_MAX)}s`;
                container.appendChild(petal);
                
                setTimeout(() => petal.remove(), CONFIG.PETAL_DURATION_MAX * 1000);
            }, CONFIG.PETAL_INTERVAL_MS);
        },
        
        createButterflies() {
            const container = $('butterfliesContainer');
            if (!container) return;
            
            const butterflies = ['🦋', '🌸', '✨'];
            
            IntervalManager.set(() => {
                if (!isPageVisible) return;
                
                const butterfly = document.createElement('div');
                butterfly.className = 'butterfly';
                butterfly.textContent = butterflies[Math.floor(Math.random() * butterflies.length)];
                butterfly.style.left = '-50px';
                butterfly.style.top = `${Math.random() * 100}vh`;
                container.appendChild(butterfly);
                
                setTimeout(() => butterfly.remove(), CONFIG.BUTTERFLY_DURATION);
            }, CONFIG.BUTTERFLY_INTERVAL_MS);
        }
    };

    /* ============================================
       10. SECCIÓN CORAZÓN
       ============================================ */

    const Heart = {
        colorIndex: 0,
        colors: ['#ff6b9d', '#9b59b6', '#e74c3c', '#ffb3d1', '#d4af37', '#ff4081'],
        heartEl: null,
        containerEl: null,
        ringsContainer: null,
        isAnimating: false,
        
        init() {
            this.heartEl = $('mainHeart');
            this.containerEl = $('heartContainer');
            this.ringsContainer = $('heartRings');
            
            if (!this.heartEl || !this.containerEl) return;
            
            this.createRings();
            this.bindEvents();
            this.startColorCycle();
            this.startParticleGeneration();
        },
        
        createRings() {
            if (!this.ringsContainer) return;
            this.ringsContainer.innerHTML = '<div class="heart-ring"></div><div class="heart-ring"></div><div class="heart-ring"></div>';
        },
        
        bindEvents() {
            if (prefersReducedMotion) return;
            
            // Mouse interaction
            this.containerEl.addEventListener('mousemove', rafThrottle((e) => {
                const rect = this.heartEl.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                this.heartEl.style.transform = `scale(1.3) translate(${x * 20}px, ${y * 20}px)`;
            }));
            
            this.containerEl.addEventListener('mouseleave', () => {
                this.heartEl.style.transform = 'scale(1)';
            });
            
            // Touch interaction
            this.containerEl.addEventListener('touchstart', (e) => {
                this.heartEl.style.transform = 'scale(1.3)';
                const touch = e.touches[0];
                this.createParticle(touch.clientX, touch.clientY);
            }, { passive: true });
            
            this.containerEl.addEventListener('touchend', () => {
                this.heartEl.style.transform = 'scale(1)';
            });
        },
        
        startColorCycle() {
            IntervalManager.set(() => {
                this.colorIndex = (this.colorIndex + 1) % this.colors.length;
                const next = this.colors[(this.colorIndex + 1) % this.colors.length];
                
                const g1 = $('grad1');
                const g2 = $('grad2');
                const g3 = $('grad3');
                const svg = $('heartSvg');
                
                if (g1) g1.setAttribute('stop-color', this.colors[this.colorIndex]);
                if (g2) g2.setAttribute('stop-color', next);
                if (g3) g3.setAttribute('stop-color', this.colors[this.colorIndex]);
                if (svg) svg.style.filter = `drop-shadow(0 0 50px ${this.colors[this.colorIndex]})`;
            }, 2500);
        },
        
        startParticleGeneration() {
            IntervalManager.set(() => {
                if (!this.containerEl || !isPageVisible) return;
                const rect = this.containerEl.getBoundingClientRect();
                this.createParticle(
                    rect.left + rect.width / 2 + (Math.random() - 0.5) * 150,
                    rect.top + rect.height / 2 + (Math.random() - 0.5) * 150
                );
            }, CONFIG.HEART_PARTICLE_INTERVAL_MS);
        },
        
        createParticle(x, y) {
            const particle = document.createElement('div');
            particle.className = 'heart-particle';
            const emojis = ['❤', '💕', '💖', '✨'];
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 200}px`);
            particle.style.setProperty('--ty', `${-120 - Math.random() * 120}px`);
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), CONFIG.HEART_PARTICLE_LIFETIME);
        }
    };

    /* ============================================
       11. GALERÍA Y LIGHTBOX
       ============================================ */

    const Gallery = {
        lightboxIndex: 0,
        lightboxEl: null,
        
        init() {
            this.buildGrid();
            this.bindLightbox();
        },
        
        buildGrid() {
            const grid = $('galleryGrid');
            if (!grid) return;
            
            CONFIG.gallery.forEach((img, i) => {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.setAttribute('role', 'listitem');
                item.innerHTML = `
                    <img src="${img.url}" 
                         alt="${img.title}" 
                         loading="lazy" 
                         onerror="this.onerror=null;this.src='https://via.placeholder.com/400/ff6b9d/ffffff?text=Alisson'">
                    <div class="gallery-item-overlay">
                        <h3>${this.escapeHtml(img.title)}</h3>
                        <p>${this.escapeHtml(img.description)}</p>
                    </div>
                `;
                item.addEventListener('click', () => this.openLightbox(i));
                grid.appendChild(item);
            });
        },
        
        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        },
        
        bindLightbox() {
            this.lightboxEl = $('lightbox');
            if (!this.lightboxEl) return;
            
            $('lightboxClose').addEventListener('click', () => this.close());
            $('lightboxPrev').addEventListener('click', () => this.prev());
            $('lightboxNext').addEventListener('click', () => this.next());
            
            // Cerrar al hacer click fuera de la imagen
            this.lightboxEl.addEventListener('click', (e) => {
                if (e.target === this.lightboxEl) this.close();
            });
            
            // Soporte de teclado
            document.addEventListener('keydown', (e) => {
                if (!this.lightboxEl.classList.contains('active')) return;
                
                switch (e.key) {
                    case 'Escape': this.close(); break;
                    case 'ArrowLeft': this.prev(); break;
                    case 'ArrowRight': this.next(); break;
                }
            });
        },
        
        open(index) {
            this.lightboxIndex = index;
            this.update();
            this.lightboxEl.classList.add('active');
            this.lightboxEl.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            
            // Focus al botón de cerrar para accesibilidad
            setTimeout(() => $('lightboxClose').focus(), 100);
        },
        
        close() {
            this.lightboxEl.classList.remove('active');
            this.lightboxEl.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        },
        
        next() {
            this.lightboxIndex = (this.lightboxIndex + 1) % CONFIG.gallery.length;
            this.update();
        },
        
        prev() {
            this.lightboxIndex = (this.lightboxIndex - 1 + CONFIG.gallery.length) % CONFIG.gallery.length;
            this.update();
        },
        
        update() {
            const img = CONFIG.gallery[this.lightboxIndex];
            const imgEl = $('lightboxImg');
            const titleEl = $('lightboxTitle');
            const descEl = $('lightboxDescription');
            const counterEl = $('lightboxCounter');
            
            if (imgEl) {
                imgEl.src = img.url;
                imgEl.alt = img.title;
            }
            if (titleEl) titleEl.textContent = img.title;
            if (descEl) descEl.textContent = img.description;
            if (counterEl) counterEl.textContent = `${this.lightboxIndex + 1} / ${CONFIG.gallery.length}`;
        }
    };

    /* ============================================
       12. CARTA, RAZONES Y CONSTELACIÓN
       ============================================ */

    const ContentSections = {
        init() {
            this.initLetter();
            this.initReasons();
            this.initConstellation();
        },
        
        initLetter() {
            const container = $('letterContent');
            if (!container) return;
            
            CONFIG.letter.forEach((text, i) => {
                const p = document.createElement('p');
                if (i === 0 || i === CONFIG.letter.length - 1) {
                    p.className = 'signature';
                }
                p.textContent = text;
                container.appendChild(p);
            });
        },
        
        initReasons() {
            const container = $('reasonsContainer');
            if (!container) return;
            
            CONFIG.reasons.forEach((reason, i) => {
                const card = document.createElement('article');
                card.className = 'reason-card';
                card.setAttribute('role', 'listitem');
                card.innerHTML = `
                    <div class="reason-number">${i + 1}</div>
                    <div class="reason-text">${reason}</div>
                `;
                container.appendChild(card);
            });
        },
        
        initConstellation() {
            const container = $('constellation');
            if (!container) return;
            
            const positions = [
                { x: 20, y: 20 }, { x: 50, y: 15 }, { x: 80, y: 25 },
                { x: 15, y: 50 }, { x: 45, y: 55 }, { x: 75, y: 50 },
                { x: 25, y: 80 }, { x: 55, y: 85 }, { x: 85, y: 80 }
            ];
            
            positions.forEach((pos, i) => {
                const star = document.createElement('button');
                star.className = 'star';
                star.type = 'button';
                star.textContent = '⭐';
                star.setAttribute('aria-label', `Deseo ${i + 1}`);
                star.style.left = `${pos.x}%`;
                star.style.top = `${pos.y}%`;
                star.style.animationDelay = `${i * 0.2}s`;
                
                star.addEventListener('click', () => this.showWish(star));
                container.appendChild(star);
            });
        },
        
        showWish(starEl) {
            const wish = CONFIG.wishes[Math.floor(Math.random() * CONFIG.wishes.length)];
            const display = $('wishDisplay');
            
            if (display) {
                display.innerHTML = `<p class="wish-text">${wish}</p>`;
                display.classList.remove('pop');
                // Forzar reflow para reiniciar animación
                void display.offsetWidth;
                display.classList.add('pop');
            }
        }
    };

    /* ============================================
       13. CARTA SELLADA (FUTURO)
       ============================================ */

    const SealedLetter = {
        isOpened: false,
        
        init() {
            const envelope = $('envelope');
            if (!envelope) return;
            
            envelope.addEventListener('click', () => this.tryOpen());
            envelope.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.tryOpen();
                }
            });
            
            this.updateUI();
        },
        
        tryOpen() {
            if (this.isOpened) {
                this.showContent();
                return;
            }
            
            const now = new Date();
            if (now >= CONFIG.unlockDate) {
                this.isOpened = true;
                this.showContent();
                this.updateUI();
            } else {
                this.showCountdown();
            }
        },
        
        updateUI() {
            const envelope = $('envelope');
            if (!envelope) return;
            
            const now = new Date();
            if (now >= CONFIG.unlockDate) {
                envelope.classList.remove('opened');
                envelope.setAttribute('aria-label', 'Abrir carta sellada');
            } else {
                envelope.classList.add('opened');
                envelope.setAttribute('aria-label', 'Carta sellada - aún no disponible');
                envelope.setAttribute('tabindex', '-1');
            }
        },
        
        showCountdown() {
            const now = new Date();
            const diff = CONFIG.unlockDate - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            const display = $('sealed-instruction') || $('sealedLetter');
            if (display) {
                const original = display.innerHTML;
                display.innerHTML = `
                    <p class="sealed-instruction" style="color: var(--gold); font-size: 1.2rem;">
                        🔒 Podrás abrirla en ${days} días y ${hours} horas
                    </p>
                `;
                setTimeout(() => {
                    display.innerHTML = original;
                }, 3000);
            }
        },
        
        showContent() {
            const sealedLetter = $('sealedLetter');
            if (!sealedLetter) return;
            
            sealedLetter.innerHTML = `
                <div class="future-letter-content">
                    <article class="future-letter glass shine-effect">
                        <h3>Para ti, mi amor, en tu próximo cumpleaños:</h3>
                        <p>Mi niña,</p>
                        <p>Un año más ha pasado y mi amor por ti sigue creciendo. Cada día a tu lado confirma que eres la mujer con la que quiero compartir mi vida entera.</p>
                        <p>Si estás leyendo esto, es porque el tiempo ha pasado y sigo eligiéndote. Una y mil veces.</p>
                        <p>Espero que en este nuevo año de vida hayas cumplido muchos sueños, especialmente el de convertirte en odontóloga.</p>
                        <p>Gracias por seguir a mi lado, por cada momento, cada risa, cada "Ti amo".</p>
                        <p>Te amo muchísimo con montones, hoy, mañana y siempre.</p>
                        <p class="future-signature">Tu niño de silicona ❤️</p>
                    </article>
                </div>
            `;
        }
    };

    /* ============================================
       14. FIREWORKS (SORPRESA FINAL)
       ============================================ */

    const Fireworks = {
        container: null,
        colors: ['#ff6b9d', '#c8a8e9', '#e74c3c', '#ffb3d1', '#d4af37', '#9b59b6'],
        isRunning: false,
        timeoutId: null,
        
        init() {
            this.container = $('fireworks');
        },
        
        start() {
            if (this.isRunning || !this.container) return;
            this.isRunning = true;
            this.launch();
        },
        
        stop() {
            this.isRunning = false;
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }
            if (this.container) {
                this.container.innerHTML = '';
            }
        },
        
        launch() {
            if (!this.isRunning || !isPageVisible) {
                if (this.isRunning) {
                    this.timeoutId = setTimeout(() => this.launch(), 500);
                }
                return;
            }
            
            for (let i = 0; i < CONFIG.FIREWORK_BATCH; i++) {
                this.timeoutId = setTimeout(() => this.createFirework(), i * 200);
            }
            
            this.timeoutId = setTimeout(() => this.launch(), CONFIG.FIREWORK_INTERVAL_MS);
        },
        
        createFirework() {
            if (!this.container) return;
            
            const fw = document.createElement('div');
            fw.className = 'firework';
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            fw.style.left = `${Math.random() * 100}vw`;
            fw.style.top = `${Math.random() * 100}vh`;
            fw.style.background = color;
            fw.style.boxShadow = `0 0 30px ${color}`;
            
            this.container.appendChild(fw);
            setTimeout(() => fw.remove(), 1500);
        }
    };

    /* ============================================
       15. NAVEGACIÓN
       ============================================ */

    const Navigation = {
        toggleEl: null,
        navEl: null,
        links: [],
        observer: null,
        
        init() {
            this.toggleEl = $('navToggle');
            this.navEl = $('navigation');
            
            if (!this.toggleEl || !this.navEl) return;
            
            this.links = $$$('.nav-link', this.navEl);
            this.bindEvents();
            this.setupScrollObserver();
        },
        
        bindEvents() {
            this.toggleEl.addEventListener('click', () => this.toggle());
            
            this.links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = $(link.getAttribute('href').substring(1));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    this.close();
                });
            });
            
            // Cerrar con Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.navEl.classList.contains('active')) {
                    this.close();
                    this.toggleEl.focus();
                }
            });
        },
        
        setupScrollObserver() {
            // Usar IntersectionObserver en vez de scroll listener
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        this.setActiveLink(id);
                    }
                });
            }, {
                rootMargin: '-30% 0px -70% 0px',
                threshold: 0
            });
            
            $$$('.section').forEach(section => this.observer.observe(section));
        },
        
        setActiveLink(sectionId) {
            this.links.forEach(link => {
                const isActive = link.dataset.section === sectionId;
                link.classList.toggle('active', isActive);
            });
        },
        
        toggle() {
            const isOpen = this.navEl.classList.toggle('active');
            this.toggleEl.classList.toggle('active', isOpen);
            this.toggleEl.setAttribute('aria-expanded', isOpen);
            this.navEl.setAttribute('aria-hidden', !isOpen);
        },
        
        close() {
            this.navEl.classList.remove('active');
            this.toggleEl.classList.remove('active');
            this.toggleEl.setAttribute('aria-expanded', 'false');
            this.navEl.setAttribute('aria-hidden', 'true');
        }
    };

    /* ============================================
       16. BARRA DE PROGRESO DE SCROLL
       ============================================ */

    const ScrollProgress = {
        barEl: null,
        
        init() {
            this.barEl = $('scrollProgress');
            if (!this.barEl) return;
            
            const update = rafThrottle(() => this.update());
            window.addEventListener('scroll', update, { passive: true });
            this.update();
        },
        
        update() {
            if (!this.barEl) return;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            
            this.barEl.style.width = `${percent}%`;
            this.barEl.setAttribute('aria-valuenow', Math.floor(percent));
        }
    };

    /* ============================================
       17. EFECTOS DE CLICK
       ============================================ */

    const ClickEffects = {
        emojis: ['❤', '✨', '💖', '💕', '⭐', '🌸'],
        
        init() {
            document.addEventListener('click', (e) => this.create(e));
        },
        
        create(e) {
            if (e.target.closest('button') || e.target.closest('a')) {
                for (let i = 0; i < 4; i++) {
                    this.spawnParticle(e);
                }
            }
        },
        
        spawnParticle(e) {
            const effect = document.createElement('div');
            effect.className = 'click-effect';
            effect.textContent = this.emojis[Math.floor(Math.random() * this.emojis.length)];
            effect.style.left = `${e.clientX + (Math.random() - 0.5) * 40}px`;
            effect.style.top = `${e.clientY + (Math.random() - 0.5) * 40}px`;
            effect.style.color = `hsl(${Math.random() * 60 + 320}, 100%, 70%)`;
            
            document.body.appendChild(effect);
            setTimeout(() => effect.remove(), 1000);
        }
    };

    /* ============================================
       18. INTERSECTION OBSERVER (Animaciones al scroll)
       ============================================ */

    const ScrollReveal = {
        init() {
            if (prefersReducedMotion) return;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // Observar elementos animables
            const animatableSelectors = [
                '.counter-item',
                '.story-item',
                '.gallery-item',
                '.dream-item',
                '.reason-card',
                '.promesa-card',
                '.wish-item'
            ];
            
            animatableSelectors.forEach(selector => {
                $$$(selector).forEach(el => observer.observe(el));
            });
        }
    };

    /* ============================================
       19. INICIALIZACIÓN PRINCIPAL
       ============================================ */

    const App = {
        init() {
            log.info('Inicializando aplicación...');
            
            try {
                this.initPreWelcome();
                this.bindStartButton();
            } catch (err) {
                log.error('Error inicializando:', err);
            }
        },
        
        initPreWelcome() {
            // Solo lo que se necesita antes del welcome
            Navigation.init();
            ScrollProgress.init();
            Cursor.init();
            Loader.start();
        },
        
        bindStartButton() {
            const startBtn = $('startBtn');
            if (!startBtn) return;
            
            startBtn.addEventListener('click', () => this.startExperience());
        },
        
        startExperience() {
            log.info('Iniciando experiencia...');
            
            const welcome = $('welcomeScreen');
            const main = $('mainContent');
            
            if (welcome) {
                welcome.classList.add('hidden');
                welcome.setAttribute('aria-hidden', 'true');
            }
            if (main) {
                main.classList.remove('hidden');
            }
            
            // Iniciar todo
            Music.show();
            Music.play();
            
            this.initPostWelcome();
        },
        
        initPostWelcome() {
            Counter.init();
            Ambience.init();
            Heart.init();
            Gallery.init();
            ContentSections.init();
            SealedLetter.init();
            Fireworks.init();
            ClickEffects.init();
            ScrollReveal.init();
            
            // Bind del botón sorpresa
            const surpriseBtn = $('surpriseBtn');
            if (surpriseBtn) {
                surpriseBtn.addEventListener('click', () => this.showFinalSurprise());
            }
            
            const finalClose = $('finalClose');
            if (finalClose) {
                finalClose.addEventListener('click', () => this.closeFinalSurprise());
            }
        },
        
        showFinalSurprise() {
            const overlay = $('finalOverlay');
            if (overlay) {
                overlay.classList.remove('hidden');
                Fireworks.start();
            }
        },
        
        closeFinalSurprise() {
            const overlay = $('finalOverlay');
            if (overlay) {
                overlay.classList.add('hidden');
                Fireworks.stop();
            }
        }
    };

    /* ============================================
       20. CLEANUP AL DESCARGAR LA PÁGINA
       ============================================ */

    window.addEventListener('beforeunload', () => {
        IntervalManager.clearAll();
        Particles.pause();
        Fireworks.stop();
        log.info('Limpieza completada');
    });

    // Pausar partículas cuando la pestaña no es visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            Particles.pause();
        } else {
            Particles.resume();
        }
    });

    /* ============================================
       21. SERVICE WORKER (Opcional - PWA)
       ============================================ */

    if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => log.info('Service Worker registrado:', reg.scope))
                .catch(err => log.warn('Error registrando Service Worker:', err));
        });
    }

    /* ============================================
       ARRANQUE
       ============================================ */

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => App.init());
    } else {
        App.init();
    }

})();
