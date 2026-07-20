/* ============================================
   💖 PARA ALISSON - SCRIPT PRINCIPAL
   Versión: 3.1 (Con fixes de carta y partículas)
   ============================================ */

(function() {
    'use strict';

    const $ = (id) => document.getElementById(id);
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const CONFIG = {
        startDate: new Date('2026-04-12T00:00:00'),
        musicUrl: 'https://files.catbox.moe/wy6029.mp3',
        unlockDate: new Date('2027-08-26T00:00:00'),
        LOADER_INTERVAL_MS: 200,
        COUNTER_INTERVAL_MS: 1000,
        PETAL_INTERVAL_MS: 800,
        BUTTERFLY_INTERVAL_MS: 3000,
        HEART_PARTICLE_INTERVAL_MS: 1200,
        PARTICLE_COUNT: 50,
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

    let loaderProgress = 0;
    let loaderMessageIndex = 0;
    let loaderInterval = null;
    let lightboxIndex = 0;
    let fireworksActive = false;
    let fireworksTimeout = null;
    let experienceStarted = false;

    /* ============================================
       LOADER
       ============================================ */

    function updateLoaderMessage() {
        const msgEl = $('loaderMessage');
        if (msgEl && loaderMessageIndex < CONFIG.loadMsgs.length) {
            msgEl.textContent = CONFIG.loadMsgs[loaderMessageIndex];
            loaderMessageIndex++;
        }
    }

    function startLoader() {
        const bar = $('loaderBar');
        const percent = $('loaderPercent');
        
        loaderInterval = setInterval(() => {
            loaderProgress += randomInRange(2, 7);
            
            if (loaderProgress >= 100) {
                loaderProgress = 100;
                if (bar) bar.style.width = '100%';
                if (percent) percent.textContent = '100%';
                clearInterval(loaderInterval);
                loaderInterval = null;
                setTimeout(finishLoader, 500);
                return;
            }
            
            if (bar) bar.style.width = `${loaderProgress}%`;
            if (percent) percent.textContent = `${Math.floor(loaderProgress)}%`;
            
            const threshold = (loaderMessageIndex + 1) * (100 / CONFIG.loadMsgs.length);
            if (loaderProgress > threshold) updateLoaderMessage();
        }, CONFIG.LOADER_INTERVAL_MS);
    }

    function finishLoader() {
        const loader = $('loader');
        const welcome = $('welcomeScreen');
        
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                if (loader) loader.style.display = 'none';
                if (welcome) welcome.classList.remove('hidden');
            }, 1500);
        }
    }

    /* ============================================
       INICIAR EXPERIENCIA
       ============================================ */

    function startExperience() {
        if (experienceStarted) return;
        experienceStarted = true;
        
        console.log('🎉 Iniciando experiencia...');
        
        const welcome = $('welcomeScreen');
        const main = $('mainContent');
        const musicPlayer = $('musicPlayer');
        
        if (welcome) welcome.classList.add('hidden');
        if (main) main.classList.remove('hidden');
        if (musicPlayer) musicPlayer.classList.remove('hidden');
        
        try {
            initCounter();
            initAmbience();
            initHeart();
            initGallery();
            initLightbox();
            initLetter();
            initReasons();
            initConstellation();
            initSealedLetter();
            initClickEffects();
            initMusic();
            initSurprise();
        } catch (err) {
            console.error('❌ Error:', err);
        }
    }

    /* ============================================
       CONTADOR
       ============================================ */

    function updateCounter() {
        const now = new Date();
        const diff = now - CONFIG.startDate;
        
        const elements = {
            years: $('years'),
            months: $('months'),
            days: $('days'),
            hours: $('hours'),
            minutes: $('minutes'),
            seconds: $('seconds')
        };
        
        if (diff < 0) {
            Object.values(elements).forEach(el => { if (el) el.textContent = '0'; });
            return;
        }
        
        const y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const mo = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const dy = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mi = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        if (elements.years) elements.years.textContent = y;
        if (elements.months) elements.months.textContent = mo;
        if (elements.days) elements.days.textContent = dy;
        if (elements.hours) elements.hours.textContent = h;
        if (elements.minutes) elements.minutes.textContent = mi;
        if (elements.seconds) elements.seconds.textContent = s;
    }

    function initCounter() {
        updateCounter();
        setInterval(() => {
            if (!document.hidden) updateCounter();
        }, CONFIG.COUNTER_INTERVAL_MS);
    }

    /* ============================================
       MÚSICA
       ============================================ */

    function initMusic() {
        const audio = $('bgMusic');
        const playBtn = $('playBtn');
        const volumeBtn = $('volumeBtn');
        const visualizer = $('musicVisualizer');
        
        if (!audio || !playBtn) return;
        
        audio.volume = 0.5;
        
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                playBtn.textContent = '⏸';
                if (visualizer) visualizer.classList.add('playing');
            }).catch(() => {
                playBtn.textContent = '▶';
                if (visualizer) visualizer.classList.remove('playing');
            });
        }
        
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = '⏸';
                if (visualizer) visualizer.classList.add('playing');
            } else {
                audio.pause();
                playBtn.textContent = '▶';
                if (visualizer) visualizer.classList.remove('playing');
            }
        });
        
        if (volumeBtn) {
            volumeBtn.addEventListener('click', () => {
                if (audio.volume > 0) {
                    audio.volume = 0;
                    volumeBtn.textContent = '🔇';
                } else {
                    audio.volume = 0.5;
                    volumeBtn.textContent = '🔊';
                }
            });
        }
    }

    /* ============================================
       EFECTOS AMBIENTALES
       ============================================ */

    function initAmbience() {
        const petalsContainer = $('petalsContainer');
        const butterfliesContainer = $('butterfliesContainer');
        
        if (petalsContainer) {
            setInterval(() => {
                if (document.hidden) return;
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.style.left = `${Math.random() * 100}vw`;
                petal.style.animationDuration = `${randomInRange(6, 11)}s`;
                petalsContainer.appendChild(petal);
                setTimeout(() => petal.remove(), 12000);
            }, CONFIG.PETAL_INTERVAL_MS);
        }
        
        if (butterfliesContainer) {
            const butterflies = ['🦋', '🌸', '✨'];
            setInterval(() => {
                if (document.hidden) return;
                const butterfly = document.createElement('div');
                butterfly.className = 'butterfly';
                butterfly.textContent = butterflies[Math.floor(Math.random() * butterflies.length)];
                butterfly.style.left = '-50px';
                butterfly.style.top = `${Math.random() * 100}vh`;
                butterfliesContainer.appendChild(butterfly);
                setTimeout(() => butterfly.remove(), 18000);
            }, CONFIG.BUTTERFLY_INTERVAL_MS);
        }
    }

    /* ============================================
       CORAZÓN - CORREGIDO
       ============================================ */

    function initHeart() {
        const heart = $('mainHeart');
        const container = $('heartContainer');
        const ringsContainer = $('heartRings');
        
        if (!heart || !container) return;
        
        if (ringsContainer) {
            ringsContainer.innerHTML = '<div class="heart-ring"></div><div class="heart-ring"></div><div class="heart-ring"></div>';
        }
        
        const colors = ['#ff6b9d', '#9b59b6', '#e74c3c', '#ffb3d1', '#d4af37', '#ff4081'];
        let colorIndex = 0;
        
        setInterval(() => {
            if (document.hidden) return;
            colorIndex = (colorIndex + 1) % colors.length;
            const g1 = $('grad1');
            const g2 = $('grad2');
            const g3 = $('grad3');
            const svg = $('heartSvg');
            if (g1) g1.setAttribute('stop-color', colors[colorIndex]);
            if (g2) g2.setAttribute('stop-color', colors[(colorIndex + 1) % colors.length]);
            if (g3) g3.setAttribute('stop-color', colors[colorIndex]);
            if (svg) svg.style.filter = `drop-shadow(0 0 50px ${colors[colorIndex]})`;
        }, 2500);
        
        container.addEventListener('mousemove', (e) => {
            const rect = heart.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
            const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
            heart.style.transform = `scale(1.3) translate(${x * 20}px, ${y * 20}px)`;
        });
        
        container.addEventListener('mouseleave', () => {
            heart.style.transform = 'scale(1)';
        });
        
        setInterval(() => {
            if (document.hidden) return;
            const rect = container.getBoundingClientRect();
            createHeartParticle(
                rect.left + rect.width / 2 + (Math.random() - 0.5) * 150,
                rect.top + rect.height / 2 + (Math.random() - 0.5) * 150
            );
        }, CONFIG.HEART_PARTICLE_INTERVAL_MS);
    }

    /* ============================================
       PARTICULAS DEL CORAZÓN - CORREGIDO
       Se posicionan respecto al viewport (fixed)
       y se ocultan al salir de la pantalla
       ============================================ */

    function createHeartParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'heart-particle';
        const emojis = ['❤', '💕', '💖', '✨'];
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Posición inicial en viewport
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.position = 'fixed';
        
        // Movimiento aleatorio pero acotado
        const tx = (Math.random() - 0.5) * 150; // -75 a 75px
        const ty = -80 - Math.random() * 100;     // -80 a -180px (siempre hacia arriba)
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        document.body.appendChild(particle);
        
        // Limpieza más agresiva para evitar acumulación
        setTimeout(() => {
            if (particle && particle.parentNode) {
                particle.remove();
            }
        }, 3000);
    }

    /* ============================================
       GALERÍA Y LIGHTBOX
       ============================================ */

    function initGallery() {
        const grid = $('galleryGrid');
        if (!grid) return;
        
        CONFIG.gallery.forEach((img, i) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="${img.url}" alt="${img.title}" loading="lazy" 
                     onerror="this.src='https://via.placeholder.com/400/ff6b9d/ffffff?text=Alisson'">
                <div class="gallery-item-overlay">
                    <h3>${img.title}</h3>
                    <p>${img.description}</p>
                </div>
            `;
            item.addEventListener('click', () => openLightbox(i));
            grid.appendChild(item);
        });
    }

    function initLightbox() {
        const lightboxEl = $('lightbox');
        if (!lightboxEl) return;
        
        $('lightboxClose').addEventListener('click', closeLightbox);
        $('lightboxPrev').addEventListener('click', () => navigateLightbox(-1));
        $('lightboxNext').addEventListener('click', () => navigateLightbox(1));
        
        lightboxEl.addEventListener('click', (e) => {
            if (e.target === lightboxEl) closeLightbox();
        });
        
        document.addEventListener('keydown', (e) => {
            if (!lightboxEl.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        });
    }

    function openLightbox(index) {
        lightboxIndex = index;
        updateLightbox();
        const lightboxEl = $('lightbox');
        if (lightboxEl) {
            lightboxEl.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        const lightboxEl = $('lightbox');
        if (lightboxEl) {
            lightboxEl.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function navigateLightbox(direction) {
        lightboxIndex = (lightboxIndex + direction + CONFIG.gallery.length) % CONFIG.gallery.length;
        updateLightbox();
    }

    function updateLightbox() {
        const img = CONFIG.gallery[lightboxIndex];
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
        if (counterEl) counterEl.textContent = `${lightboxIndex + 1} / ${CONFIG.gallery.length}`;
    }

    /* ============================================
       CARTA - CORREGIDA
       Se crea con un wrapper que permite scroll
       natural en la página
       ============================================ */

    function initLetter() {
        const container = $('letterContent');
        if (!container) return;
        
        CONFIG.letter.forEach((text, i) => {
            const p = document.createElement('p');
            if (i === 0 || i === CONFIG.letter.length - 1) p.className = 'signature';
            p.textContent = text;
            container.appendChild(p);
        });
    }

    function initReasons() {
        const container = $('reasonsContainer');
        if (!container) return;
        
        CONFIG.reasons.forEach((reason, i) => {
            const card = document.createElement('div');
            card.className = 'reason-card';
            card.innerHTML = `<div class="reason-number">${i + 1}</div><div class="reason-text">${reason}</div>`;
            container.appendChild(card);
        });
    }

    function initConstellation() {
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
            
            star.addEventListener('click', () => {
                const wish = CONFIG.wishes[Math.floor(Math.random() * CONFIG.wishes.length)];
                const display = $('wishDisplay');
                if (display) display.innerHTML = `<p class="wish-text">${wish}</p>`;
            });
            
            container.appendChild(star);
        });
    }

    function initSealedLetter() {
        const envelope = $('envelope');
        if (!envelope) return;
        
        const now = new Date();
        const isUnlocked = now >= CONFIG.unlockDate;
        
        if (!isUnlocked) {
            envelope.classList.add('opened');
            envelope.setAttribute('tabindex', '-1');
        }
        
        envelope.addEventListener('click', () => {
            if (isUnlocked) {
                showSealedContent();
            } else {
                const diff = CONFIG.unlockDate - now;
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const instruction = $('sealed-instruction');
                if (instruction) {
                    const original = instruction.textContent;
                    instruction.textContent = `🔒 Podrás abrirla en ${days} días y ${hours} horas`;
                    instruction.style.color = 'var(--gold)';
                    setTimeout(() => {
                        instruction.textContent = original;
                        instruction.style.color = '';
                    }, 3000);
                }
            }
        });
    }

    function showSealedContent() {
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

    function startFireworks() {
        const container = $('fireworks');
        if (!container || fireworksActive) return;
        
        fireworksActive = true;
        const colors = ['#ff6b9d', '#c8a8e9', '#e74c3c', '#ffb3d1', '#d4af37', '#9b59b6'];
        
        function launch() {
            if (!fireworksActive) return;
            if (!document.hidden) {
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        if (!fireworksActive) return;
                        const fw = document.createElement('div');
                        fw.className = 'firework';
                        const color = colors[Math.floor(Math.random() * colors.length)];
                        fw.style.left = `${Math.random() * 100}vw`;
                        fw.style.top = `${Math.random() * 100}vh`;
                        fw.style.background = color;
                        fw.style.boxShadow = `0 0 30px ${color}`;
                        container.appendChild(fw);
                        setTimeout(() => fw.remove(), 1500);
                    }, i * 200);
                }
            }
            fireworksTimeout = setTimeout(launch, 3000);
        }
        launch();
    }

    function stopFireworks() {
        fireworksActive = false;
        if (fireworksTimeout) {
            clearTimeout(fireworksTimeout);
            fireworksTimeout = null;
        }
        const container = $('fireworks');
        if (container) container.innerHTML = '';
    }

    function initNavigation() {
        const navToggle = $('navToggle');
        const navigation = $('navigation');
        if (!navToggle || !navigation) return;
        
        const navLinks = document.querySelectorAll('.nav-link');
        
        navToggle.addEventListener('click', () => {
            navigation.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = $(link.getAttribute('href').substring(1));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
                navigation.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    function initScrollProgress() {
        const bar = $('scrollProgress');
        if (!bar) return;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = `${percent}%`;
        }, { passive: true });
    }

    function initClickEffects() {
        const emojis = ['❤', '✨', '💖', '💕', '⭐', '🌸'];
        
        document.addEventListener('click', (e) => {
            if (e.target.closest('button, a, .gallery-item, .star, .envelope')) {
                for (let i = 0; i < 4; i++) {
                    const effect = document.createElement('div');
                    effect.className = 'click-effect';
                    effect.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    effect.style.left = `${e.clientX + (Math.random() - 0.5) * 40}px`;
                    effect.style.top = `${e.clientY + (Math.random() - 0.5) * 40}px`;
                    effect.style.color = `hsl(${Math.random() * 60 + 320}, 100%, 70%)`;
                    document.body.appendChild(effect);
                    setTimeout(() => effect.remove(), 1000);
                }
            }
        });
    }

    function initSurprise() {
        const surpriseBtn = $('surpriseBtn');
        const finalClose = $('finalClose');
        
        if (surpriseBtn) {
            surpriseBtn.addEventListener('click', () => {
                const overlay = $('finalOverlay');
                if (overlay) {
                    overlay.classList.remove('hidden');
                    startFireworks();
                }
            });
        }
        
        if (finalClose) {
            finalClose.addEventListener('click', () => {
                const overlay = $('finalOverlay');
                if (overlay) {
                    overlay.classList.add('hidden');
                    stopFireworks();
                }
            });
        }
    }

    function initCursor() {
        if (window.innerWidth <= 768) return;
        
        const cursor = $('cursor');
        const follower = $('cursorFollower');
        if (!cursor || !follower) return;
        
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        }, { passive: true });
        
        function animate() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            if (!document.hidden) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(animate, 500);
            }
        }
        animate();
    }

    function initParticles() {
        const canvas = $('particlesCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const particles = [];
        
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);
        
        for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;
                if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1;
                if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 179, 209, ${p.opacity})`;
                ctx.fill();
            });
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 179, 209, ${0.08 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            if (!document.hidden) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(animate, 500);
            }
        }
        animate();
    }

    function init() {
        console.log('💖 Para Alisson v3.1');
        
        initCursor();
        initParticles();
        initNavigation();
        initScrollProgress();
        
        const startBtn = $('startBtn');
        if (startBtn) {
            startBtn.addEventListener('click', startExperience);
        }
        
        setTimeout(startLoader, 500);
    }

    window.addEventListener('beforeunload', () => {
        if (loaderInterval) clearInterval(loaderInterval);
        if (fireworksTimeout) clearTimeout(fireworksTimeout);
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
