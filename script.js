const CONFIG = {
    startDate: new Date('2026-04-12T00:00:00'),
    musicUrl: 'https://files.catbox.moe/wy6029.mp3',
    wishes: ['Deseo que seas feliz siempre 💖', 'Deseo cumplir tus sueños ✨', 'Deseo verte sonreír 😊', 'Deseo ser tu compañero 💑', 'Deseo que este amor nunca termine 💕', 'Deseo ser tu primer paciente 🦷', 'Deseo que cumplas 18 años rodeada de amor 🎂', 'Deseo construir un hogar contigo 🏡', 'Deseo que Kuromi te proteja 🎀'],
    galleryImages: [
        { url: 'https://i.imgur.com/SMMGWu9.jpg', title: 'Contigo, todo es mejor', description: 'Cada momento a tu lado se convierte en mi recuerdo favorito' },
        { url: 'https://i.imgur.com/EuSVvfJ.jpg', title: 'Mi persona favorita', description: 'No importa dónde ni cuándo, mientras sea contigo' },
        { url: 'https://i.imgur.com/7AH5MaT.jpg', title: 'Sonrisas que enamoran', description: 'Tu sonrisa es lo más bonito que mis ojos han visto' },
        { url: 'https://i.imgur.com/thv7LGX.jpg', title: 'Juntos para siempre', description: 'Así me imagino el resto de mi vida' },
        { url: 'https://i.imgur.com/LRY1iG6.jpg', title: 'Eres tú, simplemente tú', description: 'Lo que me enamora es la mujer de las fotos' },
        { url: 'https://i.imgur.com/q8c7kFk.jpg', title: 'Mi lugar favorito', description: 'No es un sitio, eres tú' },
        { url: 'https://i.imgur.com/BHgx73N.jpg', title: 'Recuerdos eternos', description: 'Momentos que guardaré por siempre' },
        { url: 'https://i.imgur.com/7yL8zXZ.jpg', title: 'Mi niña hermosa', description: 'Cada día te veo más bonita' },
        { url: 'https://i.imgur.com/nAd02cU.jpg', title: 'Aventuras de nosotros', description: 'Las mejores aventuras son contigo' },
        { url: 'https://i.imgur.com/x0kP7iI.jpg', title: 'Mi amor, mi vida', description: 'Te amo más de lo que imaginas' },
        { url: 'https://i.imgur.com/lqQtIHe.jpg', title: 'Por muchos más momentos', description: 'Lo mejor está por venir' }
    ],
    letterText: ['Mi niña,', 'Hay personas que llegan a nuestra vida sin hacer ruido, y poco a poco terminan convirtiéndose en todo. Tú hiciste exactamente eso conmigo.', 'Pienso en aquel 2023, cuando hablamos por primera vez gracias a Masha. Jamás imaginé que serías la mujer que más amo.', 'Después llegó el 15 de tu prima. Yo no sabía bailar, pero todo era más fácil cuando estaba contigo.', 'Cuando te vi por primera vez pensé que eras muy bonita. Lo único que quería era conocerte más.', 'Con cada conversación, con cada risa, fuiste ocupando un lugar en mi corazón.', 'Me descubrí diciéndome: "Quiero que ella sea mi primer y única novia".', 'Estaba enamorado de ti, de tu personalidad, de tus metas.', 'El domingo 12 de abril de 2026 cambió mi vida para siempre.', 'Si me preguntaran mil veces a quién elegiría, la respuesta siempre sería: a ti.', 'Gracias por quedarte.', 'Gracias por cada "Amor", cada "Ti amo", cada foto, cada abrazo.', 'Gracias a ti soy una mejor versión de mí mismo.', 'Tú me has enseñado a amar con paciencia.', 'Un día normal se convierte en el mejor solo porque estás conmigo.', 'Cuando no estamos juntos te extraño muchísimo.', 'Me imagino abrazándote, escuchándote hablar, viendo cómo sonríes.', 'Me encanta cuando me gritas "Amoor", cuando jugamos Crash Team Racing, cuando caminamos juntos.', 'Esos momentos los quiero recordar siendo viejitos contigo.', 'Gracias por estar a mi lado incluso cuando hemos tenido diferencias.', 'No soy perfecto, pero jamás dejaré de esforzarme por ti.', 'Quiero verte cumplir tu sueño de ser odontóloga.', 'Quiero viajar contigo, conocer playas y montañas.', 'Y sí, sueño con formar una familia contigo.', 'Eres mi mejor elección.', 'Si algún día dudas de cuánto te amo, recuerda:', 'Te amo muchísimo con montones. ❣️', 'Te amo de aquí a la Luna🌕 a pasito de tortuga🐢, del Sol☀️ al mar🌊 a pasito de calamar🐙. ❣️', 'Gracias por convertirte en mi hogar.', 'Gracias por existir.', 'Con todo mi corazón que te ama, hoy, mañana y siempre,', 'Tu niño de silicona ❤️'],
    reasons: ['Tu sonrisa que ilumina mis días', 'La forma en que dices "Amoor"', 'Tu amor por el queso', 'Cómo te ves cuando duermes', 'Tu risa contagiosa', 'Lo hermosa que eres por dentro y por fuera', 'Cómo me cuidas sin darte cuenta', 'Tus mensajes de "buenos días"', 'Que siempre intentas responderme rápido', 'Lo bien que bailas', 'Tu personalidad única', 'Que me pusiste de fondo de pantalla', 'Cómo escribes mi nombre con corazón', 'Tu valentía para elegir odontología', 'Lo detallista que eres conmigo', 'Tus abrazos que curan todo', 'La forma en que me dices "mi niño"', 'Tu pasión por tus sueños', 'Que eres tú, simplemente tú', 'Lo mucho que te amo, mi niña', 'Y 80 razones más... ❤️'],
    loaderMessages: ['Preparando algo especial para Alisson...', 'Cargando recuerdos hermosos...', 'Creando magia para ti, mi niña...', 'El corazón está latiendo por ti...', 'Casi listo para tu sorpresa...', 'El amor se está manifestando...', 'Toques finales de amor...', 'Tu regalo está a punto de aparecer...']
};

// LOADER
let loaderProgress = 0, currentMessageIndex = 0;
function updateLoaderMessage() {
    const m = document.getElementById('loaderMessage');
    if (m && currentMessageIndex < CONFIG.loaderMessages.length) { m.textContent = CONFIG.loaderMessages[currentMessageIndex]; currentMessageIndex++; }
}
function simulateLoader() {
    const bar = document.getElementById('loaderBar'), percent = document.getElementById('loaderPercent');
    const interval = setInterval(() => {
        loaderProgress += Math.random() * 5 + 2;
        if (loaderProgress >= 100) {
            loaderProgress = 100; clearInterval(interval);
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if (loader) loader.classList.add('fade-out');
                setTimeout(() => { if (loader) loader.style.display = 'none'; showWelcomeScreen(); }, 1500);
            }, 500);
        }
        if (bar) bar.style.width = loaderProgress + '%';
        if (percent) percent.textContent = Math.floor(loaderProgress) + '%';
        if (loaderProgress > (currentMessageIndex * (100 / CONFIG.loaderMessages.length))) updateLoaderMessage();
    }, 200);
}
function showWelcomeScreen() {
    const ws = document.getElementById('welcomeScreen');
    if (ws) ws.classList.remove('hidden');
    createPetals(); createButterflies();
}
function createPetals() {
    const c = document.getElementById('petalsContainer');
    if (!c) return;
    setInterval(() => {
        const p = document.createElement('div'); p.className = 'petal';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = (Math.random() * 5 + 6) + 's';
        c.appendChild(p); setTimeout(() => p.remove(), 12000);
    }, 800);
}
function createButterflies() {
    const c = document.getElementById('butterfliesContainer');
    if (!c) return;
    setInterval(() => {
        const bf = document.createElement('div'); bf.className = 'butterfly'; bf.textContent = '🦋';
        bf.style.left = '-50px'; bf.style.top = Math.random() * 100 + 'vh';
        c.appendChild(bf); setTimeout(() => bf.remove(), 18000);
    }, 3000);
}

// CURSOR
const cursor = document.getElementById('cursor'), cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    if (cursor) { cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; }
});
function animateFollower() {
    followerX += (mouseX - followerX) * 0.1; followerY += (mouseY - followerY) * 0.1;
    if (cursorFollower) { cursorFollower.style.left = followerX + 'px'; cursorFollower.style.top = followerY + 'px'; }
    requestAnimationFrame(animateFollower);
}
animateFollower();
document.querySelectorAll('button, a, .gallery-item, .promesa-card, .star, .nav-toggle').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor && cursor.classList.add('active'); cursorFollower && cursorFollower.classList.add('active'); });
    el.addEventListener('mouseleave', () => { cursor && cursor.classList.remove('active'); cursorFollower && cursorFollower.classList.remove('active'); });
});

// PARTICLES
const canvas = document.getElementById('particlesCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    class Particle { constructor() { this.reset(); } reset() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 0.5; this.speedX = (Math.random() - 0.5) * 0.3; this.speedY = (Math.random() - 0.5) * 0.3; } update() { this.x += this.speedX; this.y += this.speedY; if (this.x < 0 || this.x > canvas.width) this.speedX *= -1; if (this.y < 0 || this.y > canvas.height) this.speedY *= -1; } draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 179, 209, 0.5)'; ctx.fill(); } }
    for (let i = 0; i < 50; i++) particles.push(new Particle());
    function animateParticles() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animateParticles); }
    animateParticles();
}

// COUNTER
function updateCounter() {
    const now = new Date(), diff = now - CONFIG.startDate;
    if (diff < 0) { ['years','months','days','hours','minutes','seconds'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = '0'; }); return; }
    const y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const mo = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const d = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mi = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('years', y); set('months', mo); set('days', d); set('hours', h); set('minutes', mi); set('seconds', s);
}
setInterval(updateCounter, 1000); updateCounter();

// MUSIC
const audio = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const volumeBtn = document.getElementById('volumeBtn');
const musicVisualizer = document.getElementById('musicVisualizer');

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('musicPlayer').classList.remove('hidden');
    audio.volume = 0.5;
    audio.play().then(() => { playBtn.textContent = '⏸'; musicVisualizer.classList.add('playing'); }).catch(err => console.log(err));
    initAllSections();
});

if (playBtn) playBtn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); playBtn.textContent = '⏸'; musicVisualizer.classList.add('playing'); }
    else { audio.pause(); playBtn.textContent = '▶'; musicVisualizer.classList.remove('playing'); }
});
if (volumeBtn) volumeBtn.addEventListener('click', () => {
    if (audio.volume > 0) { audio.volume = 0; volumeBtn.textContent = '🔇'; }
    else { audio.volume = 0.5; volumeBtn.textContent = '🔊'; }
});

// CORAZÓN
let currentColorIndex = 0;
const heartColors = [{c1:'#ff6b9d',c2:'#e74c3c',w:'#ff6b9d'},{c1:'#9b59b6',c2:'#c8a8e9',w:'#9b59b6'},{c1:'#e74c3c',c2:'#c0392b',w:'#e74c3c'},{c1:'#ffb3d1',c2:'#ff6b9d',w:'#ffb3d1'},{c1:'#d4af37',c2:'#ff6b9d',w:'#d4af37'}];
function initHeartSection() {
    const heart = document.getElementById('mainHeart');
    if (!heart) return;
    setInterval(() => {
        currentColorIndex = (currentColorIndex + 1) % heartColors.length;
        const c = heartColors[currentColorIndex];
        const g1 = document.getElementById('grad1'), g2 = document.getElementById('grad2');
        if (g1) g1.setAttribute('stop-color', c.c1);
        if (g2) g2.setAttribute('stop-color', c.c2);
        const svg = document.getElementById('heartSvg');
        if (svg) svg.style.filter = `drop-shadow(0 0 50px ${c.w})`;
        const ecg = document.getElementById('ecgPath');
        if (ecg) ecg.setAttribute('stroke', c.w);
    }, 2500);
    const c = document.getElementById('heartContainer');
    if (c) {
        c.addEventListener('mousemove', (e) => { const r = heart.getBoundingClientRect(); const x = (e.clientX - r.left - r.width/2) / r.width; const y = (e.clientY - r.top - r.height/2) / r.height; heart.style.transform = `scale(1.2) translate(${x*20}px, ${y*20}px)`; });
        c.addEventListener('mouseleave', () => heart.style.transform = 'scale(1)');
        setInterval(() => { const r = c.getBoundingClientRect(); createHeartParticle(r.left + r.width/2 + (Math.random()-0.5)*120, r.top + r.height/2 + (Math.random()-0.5)*120); }, 400);
    }
}
function createHeartParticle(x, y) {
    const p = document.createElement('div'); p.className = 'heart-particle'; p.innerHTML = '❤';
    p.style.left = x + 'px'; p.style.top = y + 'px';
    p.style.setProperty('--tx', (Math.random()-0.5)*180 + 'px'); p.style.setProperty('--ty', -100 - Math.random()*100 + 'px');
    document.body.appendChild(p); setTimeout(() => p.remove(), 3000);
}

// GALERÍA
function initGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    CONFIG.galleryImages.forEach((img, i) => {
        const item = document.createElement('div'); item.className = 'gallery-item';
        item.innerHTML = `<img src="${img.url}" alt="${img.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400/ff6b9d/ffffff?text=Alisson'"><div class="gallery-item-overlay"><h3>${img.title}</h3><p>${img.description}</p></div>`;
        item.addEventListener('click', () => openLightbox(i));
        grid.appendChild(item);
    });
}
let currentLightboxIndex = 0;
function openLightbox(i) { currentLightboxIndex = i; updateLightbox(); document.getElementById('lightbox').classList.add('active'); }
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); }
function updateLightbox() { const img = CONFIG.galleryImages[currentLightboxIndex]; document.getElementById('lightboxImg').src = img.url; document.getElementById('lightboxTitle').textContent = img.title; document.getElementById('lightboxDescription').textContent = img.description; }
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => { currentLightboxIndex = (currentLightboxIndex - 1 + CONFIG.galleryImages.length) % CONFIG.galleryImages.length; updateLightbox(); });
document.getElementById('lightboxNext').addEventListener('click', () => { currentLightboxIndex = (currentLightboxIndex + 1) % CONFIG.galleryImages.length; updateLightbox(); });
document.getElementById('lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeLightbox(); });

// LETTER
function initLetter() { const c = document.getElementById('letterContent'); if (!c) return; CONFIG.letterText.forEach((t, i) => { const p = document.createElement('p'); if (i === 0 || i === CONFIG.letterText.length - 1) p.className = 'signature'; p.textContent = t; p.style.animationDelay = (i * 0.4) + 's'; c.appendChild(p); }); }

// REASONS
function initReasons() { const c = document.getElementById('reasonsContainer'); if (!c) return; CONFIG.reasons.forEach((r, i) => { const card = document.createElement('div'); card.className = 'reason-card'; card.innerHTML = `<div class="reason-number">${i + 1}</div><div class="reason-text">${r}</div>`; c.appendChild(card); }); }

// CONSTELLATION
function initConstellation() {
    const container = document.getElementById('constellation');
    if (!container) return;
    const positions = [{x:20,y:20},{x:50,y:15},{x:80,y:25},{x:15,y:50},{x:45,y:55},{x:75,y:50},{x:25,y:80},{x:55,y:85},{x:85,y:80}];
    positions.forEach(pos => {
        const star = document.createElement('div'); star.className = 'star'; star.textContent = '⭐';
        star.style.left = pos.x + '%'; star.style.top = pos.y + '%';
        star.addEventListener('click', () => { star.classList.add('clicked'); setTimeout(() => star.classList.remove('clicked'), 600); const wish = CONFIG.wishes[Math.floor(Math.random() * CONFIG.wishes.length)]; document.getElementById('wishDisplay').innerHTML = `<p class="wish-text">${wish}</p>`; });
        container.appendChild(star);
    });
}

// PROMESAS
function initPromesas() {
    document.querySelectorAll('.promesa-card').forEach((card, i) => {
        card.style.transitionDelay = (i * 0.1) + 's';
        card.addEventListener('click', () => card.classList.add('animated'));
    });
}

// SORPRESA
document.getElementById('surpriseBtn').addEventListener('click', () => { document.getElementById('finalOverlay').classList.remove('hidden'); createFireworks(); });
document.getElementById('finalClose').addEventListener('click', () => { document.getElementById('finalOverlay').classList.add('hidden'); });
function createFireworks() {
    const c = document.getElementById('fireworks'); const colors = ['#ff6b9d', '#c8a8e9', '#e74c3c', '#ffb3d1', '#d4af37', '#9b59b6'];
    for (let i = 0; i < 20; i++) setTimeout(() => { const fw = document.createElement('div'); fw.className = 'firework'; fw.style.left = Math.random() * 100 + 'vw'; fw.style.top = Math.random() * 100 + 'vh'; fw.style.background = colors[Math.floor(Math.random() * colors.length)]; fw.style.boxShadow = `0 0 30px ${fw.style.background}`; c.appendChild(fw); setTimeout(() => fw.remove(), 1500); }, i * 200);
    setTimeout(() => createFireworks(), 3000);
}

// NAV TOGGLE
const navToggle = document.getElementById('navToggle');
const navigation = document.getElementById('navigation');
if (navToggle && navigation) {
    navToggle.addEventListener('click', () => { navigation.classList.toggle('active'); navToggle.classList.toggle('active'); });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const t = document.querySelector(link.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior: 'smooth' });
            navigation.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// SCROLL
window.addEventListener('scroll', () => {
    const sp = document.getElementById('scrollProgress');
    if (sp) { const ws = document.body.scrollTop || document.documentElement.scrollTop; const h = document.documentElement.scrollHeight - document.documentElement.clientHeight; sp.style.width = (ws / h) * 100 + '%'; }
    const sections = document.querySelectorAll('.section'); let current = '';
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 200) current = section.getAttribute('id'); });
    document.querySelectorAll('.nav-link').forEach(link => { link.classList.remove('active'); if (link.dataset.section === current) link.classList.add('active'); });
});

// CLICK EFFECTS
document.addEventListener('click', (e) => {
    const effects = ['❤', '✨', '💖', '💕', '⭐'];
    for (let i = 0; i < 3; i++) { const ef = document.createElement('div'); ef.className = 'click-effect'; ef.textContent = effects[Math.floor(Math.random() * effects.length)]; ef.style.left = (e.clientX + (Math.random()-0.5)*40) + 'px'; ef.style.top = (e.clientY + (Math.random()-0.5)*40) + 'px'; document.body.appendChild(ef); setTimeout(() => ef.remove(), 1000); }
});

// ⭐ GSAP SCROLLTRIGGER - Animaciones profesionales
function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP no cargó, saltando animaciones');
        return;
    }
    gsap.registerPlugin(ScrollTrigger);
    
    // Animación de cada sección al entrar
    gsap.utils.toArray('.section').forEach((section, i) => {
        const title = section.querySelector('.section-title, .hero-title, .birthday-title, .surprise-title');
        const subtitle = section.querySelector('.section-subtitle, .hero-message, .birthday-subtitle, .surprise-subtitle');
        const content = section.querySelectorAll('.counter-item, .story-item, .gallery-item, .reason-card, .dream-item, .promesa-card');
        
        if (title) {
            gsap.from(title, {
                scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
                opacity: 0, y: 50, duration: 1, ease: 'power3.out'
            });
        }
        if (subtitle) {
            gsap.from(subtitle, {
                scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none reverse' },
                opacity: 0, y: 30, duration: 1, delay: 0.2, ease: 'power3.out'
            });
        }
        if (content.length > 0) {
            gsap.from(content, {
                scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none reverse' },
                opacity: 0, y: 40, scale: 0.95, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)'
            });
        }
    });
    
    // Corazón especial
    const heart = document.querySelector('.heart-container');
    if (heart) {
        gsap.from(heart, {
            scrollTrigger: { trigger: heart, start: 'top 80%', toggleActions: 'play none none reverse' },
            opacity: 0, scale: 0.3, duration: 1.5, ease: 'elastic.out(1, 0.5)'
        });
    }
    
    // Carta
    const letter = document.querySelector('.letter');
    if (letter) {
        gsap.from(letter, {
            scrollTrigger: { trigger: letter, start: 'top 80%', toggleActions: 'play none none reverse' },
            opacity: 0, scale: 0.8, rotationX: 20, duration: 1.2, ease: 'power3.out'
        });
    }
    
    // Envelope
    const envelope = document.querySelector('.envelope');
    if (envelope) {
        gsap.from(envelope, {
            scrollTrigger: { trigger: envelope, start: 'top 80%', toggleActions: 'play none none reverse' },
            opacity: 0, rotationY: -90, duration: 1.2, ease: 'back.out(1.5)'
        });
    }
    
    // Constellation
    const stars = document.querySelectorAll('.star');
    if (stars.length > 0) {
        gsap.from(stars, {
            scrollTrigger: { trigger: '.constellation', start: 'top 70%', toggleActions: 'play none none reverse' },
            opacity: 0, scale: 0, rotation: 180, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)'
        });
    }
    
    console.log('✅ GSAP ScrollTrigger activo');
}

function initAllSections() {
    initHeartSection();
    initGallery();
    initLetter();
    initReasons();
    initConstellation();
    initPromesas();
    setTimeout(() => initGSAPAnimations(), 100);
}

window.addEventListener('load', () => { setTimeout(simulateLoader, 500); });
