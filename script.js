// ============================================
// NUESTRO PEQUEÑO MUNDO - LÓGICA v3.0
// Para Alisson - Con todo mi amor
// ============================================

const CONFIG = {
    startDate: new Date('2026-04-12T00:00:00'),
    birthdayDate: new Date('2026-08-26T00:00:00'),
    musicUrl: 'https://raw.githubusercontent.com/Dy7034/paramialisson/refs/heads/main/musica.mp3',
    musicTitle: 'Calm Romantic',
    musicArtist: 'The_Mountain',
    
    galleryImages: [
        { url: 'https://i.imgur.com/SMMGWu9.jpg', title: 'Contigo, todo es mejor', description: 'Cada momento a tu lado se convierte en mi recuerdo favorito' },
        { url: 'https://i.imgur.com/EuSVvfJ.jpg', title: 'Mi persona favorita', description: 'No importa dónde ni cuándo, mientras sea contigo' },
        { url: 'https://i.imgur.com/7AH5MaT.jpg', title: 'Sonrisas que enamoran', description: 'Tu sonrisa es lo más bonito que mis ojos han visto' },
        { url: 'https://i.imgur.com/thv7LGX.jpg', title: 'Juntos para siempre', description: 'Así me imagino el resto de mi vida, siempre a tu lado' },
        { url: 'https://i.imgur.com/LRY1iG6.jpg', title: 'Eres tú, simplemente tú', description: 'Lo que me enamora no son las fotos, sino la mujer que sale en ellas' },
        { url: 'https://i.imgur.com/q8c7kFk.jpg', title: 'Mi lugar favorito', description: 'No es un sitio, eres tú. Contigo en cualquier lugar estoy bien' },
        { url: 'https://i.imgur.com/BHgx73N.jpg', title: 'Recuerdos eternos', description: 'Momentos como estos son los que guardaré por siempre' },
        { url: 'https://i.imgur.com/7yL8zXZ.jpg', title: 'Mi niña hermosa', description: 'Cada día te veo más bonita, ¿cómo es posible?' },
        { url: 'https://i.imgur.com/nAd02cU.jpg', title: 'Aventuras de nosotros', description: 'Las mejores aventuras son las que vivo contigo' },
        { url: 'https://i.imgur.com/x0kP7iI.jpg', title: 'Mi amor, mi vida', description: 'Te amo más de lo que estas fotos pueden expresar' },
        { url: 'https://i.imgur.com/lqQtIHe.jpg', title: 'Por muchos más momentos', description: 'Esto apenas comienza, mi niña. Lo mejor está por venir' }
    ],
    
    letterText: [
        'Mi niña,',
        'Hay personas que llegan a nuestra vida sin hacer ruido, y poco a poco terminan convirtiéndose en todo. Tú hiciste exactamente eso conmigo.',
        'A veces me pongo a pensar en todo lo que tuvo que pasar para que hoy estemos aquí. Pienso en aquel 2023, cuando hablamos por primera vez gracias a Masha. En ese momento jamás imaginé que algún día serías la mujer que más amo en el mundo.',
        'Después llegó aquel 15 años donde me invitaron a ser chambelán y tú eras mi compañera de baile. Todavía me da risa recordar que yo no sabía bailar casi nada, pero de alguna manera todo era más fácil cuando estaba contigo.',
        'Cuando te vi por primera vez pensé que eras una muchacha muy bonita. Te veías un poco introvertida, y sin darme cuenta lo único que quería era conocerte más.',
        'Sin hacer grandes cosas, con cada conversación, con cada risa y con cada momento, fuiste ocupando un lugar en mi corazón que nadie más había ocupado.',
        'Hubo un momento en el que me descubrí diciéndome a mí mismo: "Quiero que ella sea mi primer y única novia".',
        'Estaba enamorado de ti. Enamorado de tu personalidad, de tus metas, de tu forma de cuidar a las personas.',
        'El domingo 12 de abril de 2026 cambió mi vida para siempre.',
        'Desde entonces entendí que amar también significa elegir a alguien todos los días. Y si me preguntaran mil veces a quién volvería a elegir, mi respuesta siempre sería la misma: a ti.',
        'Gracias por quedarte.',
        'Gracias por cada "Amor", por cada "Ti amo", por cada "mi niño", por cada foto, por ponerme de fondo de pantalla, por abrazarme, por cuidarme.',
        'Hay algo que quiero que nunca olvides: gracias a ti soy una mejor versión de mí mismo.',
        'Tú me has enseñado a amar con paciencia, a pensar en alguien antes que en mí.',
        'Gracias a ti he aprendido que un día normal puede convertirse en el mejor de todos solo porque estás conmigo.',
        'Cuando no estamos juntos te extraño muchísimo.',
        'Me imagino abrazándote, escuchándote hablar, viendo cómo sonríes. Son esas pequeñas cosas las que hacen que te ame todavía más.',
        'Me encanta cuando me gritas "Amoor", cuando jugamos Crash Team Racing, cuando vemos películas, cuando caminamos juntos.',
        'Esos momentos son los que algún día quiero recordar siendo viejitos contigo.',
        'También quiero agradecerte por estar a mi lado incluso cuando hemos tenido diferencias.',
        'No voy a decirte que soy perfecto, porque no lo soy.',
        'Pero sí puedo prometerte algo: jamás dejaré de esforzarme por ser un mejor novio para ti.',
        'Quiero construir un futuro contigo. Quiero verte cumplir tu sueño de convertirte en odontóloga.',
        'Quiero viajar contigo, conocer playas, montañas. Quiero que algún día tengamos nuestro hogar.',
        'Y sí, también sueño con formar una familia contigo.',
        'Dicen que encontrar a la persona correcta cambia la vida. Yo no solo lo creo; lo vivo todos los días desde que llegaste a la mía.',
        'Eres mi mejor elección.',
        'Y si algún día dudas de cuánto te amo, recuerda esto:',
        'Te amo muchísimo con montones. ❣️',
        'Te amo de aquí a la Luna🌕 a pasito de tortuga🐢, de la Luna🌕 al Sol☀️ a pasito de caracol🐌 y del Sol☀️ al mar🌊 a pasito de calamar🐙. ❣️',
        'Gracias por convertirte en mi hogar, en mi tranquilidad, en mi lugar favorito.',
        'Gracias por existir.',
        'Con todo mi corazón que te ama, hoy, mañana y siempre,',
        'Tu niño de silicona ❤️'
    ],
    
    reasons: [
        'Tu sonrisa que ilumina mis días', 'La forma en que dices "Amoor"', 'Tu amor por el queso', 'Cómo te ves cuando duermes',
        'Tu risa contagiosa', 'Lo hermosa que eres por dentro y por fuera', 'Cómo me cuidas sin darte cuenta', 'Tus mensajes de "buenos días"',
        'Que siempre intentas responderme rápido', 'Lo bien que bailas', 'Tu personalidad única', 'Que me pusiste de fondo de pantalla',
        'Cómo escribes mi nombre con corazón', 'Tu valentía para elegir odontología', 'Lo detallista que eres conmigo', 'Tus abrazos que curan todo',
        'La forma en que me dices "mi niño"', 'Tu pasión por tus sueños', 'Que eres tú, simplemente tú', 'Lo mucho que te amo, mi niña',
        'Y 80 razones más que no caben aquí... ❤️'
    ],
    
    loaderMessages: [
        'Preparando algo especial para Alisson...', 'Cargando recuerdos hermosos...', 'Creando magia para ti, mi niña...',
        'El corazón está latiendo por ti...', 'Casi listo para tu sorpresa...', 'El amor se está manifestando...',
        'Toques finales de amor...', 'Tu regalo está a punto de aparecer...'
    ]
};

// LOADER
let loaderProgress = 0, currentMessageIndex = 0;
function updateLoaderMessage() {
    const m = document.getElementById('loaderMessage');
    if (currentMessageIndex < CONFIG.loaderMessages.length) { m.textContent = CONFIG.loaderMessages[currentMessageIndex]; currentMessageIndex++; }
}
function simulateLoader() {
    const bar = document.getElementById('loaderBar'), percent = document.getElementById('loaderPercent');
    const interval = setInterval(() => {
        loaderProgress += Math.random() * 5 + 2;
        if (loaderProgress >= 100) {
            loaderProgress = 100; clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').classList.add('fade-out');
                setTimeout(() => { document.getElementById('loader').style.display = 'none'; showWelcomeScreen(); }, 1500);
            }, 500);
        }
        bar.style.width = loaderProgress + '%'; percent.textContent = Math.floor(loaderProgress) + '%';
        if (loaderProgress > (currentMessageIndex * (100 / CONFIG.loaderMessages.length))) updateLoaderMessage();
    }, 200);
}
function showWelcomeScreen() {
    document.getElementById('welcomeScreen').classList.remove('hidden');
    createPetals(); createButterflies();
}
function createPetals() {
    const c = document.getElementById('petalsContainer');
    setInterval(() => {
        const p = document.createElement('div'); p.className = 'petal';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = (Math.random() * 5 + 6) + 's';
        p.style.opacity = Math.random() * 0.5 + 0.3;
        c.appendChild(p); setTimeout(() => p.remove(), 12000);
    }, 800);
}
function createButterflies() {
    const c = document.getElementById('butterfliesContainer');
    const b = ['🦋', '🌸', '✨'];
    setInterval(() => {
        const bf = document.createElement('div'); bf.className = 'butterfly';
        bf.textContent = b[Math.floor(Math.random() * b.length)];
        bf.style.left = '-50px'; bf.style.top = Math.random() * 100 + 'vh';
        bf.style.animationDuration = (Math.random() * 5 + 12) + 's';
        c.appendChild(bf); setTimeout(() => bf.remove(), 18000);
    }, 3000);
}

// CURSOR
const cursor = document.getElementById('cursor'), cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px';
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    document.querySelectorAll('.light').forEach((l, i) => { l.style.transform = `translate(${x * (i+1) * 0.4}px, ${y * (i+1) * 0.4}px)`; });
});
function animateFollower() {
    followerX += (mouseX - followerX) * 0.1; followerY += (mouseY - followerY) * 0.1;
    cursorFollower.style.left = followerX + 'px'; cursorFollower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
}
animateFollower();
document.querySelectorAll('button, a, .gallery-item, .promesa-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('active'); cursorFollower.classList.add('active'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('active'); cursorFollower.classList.remove('active'); });
});

// PARTICLES
const canvas = document.getElementById('particlesCanvas'), ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas(); window.addEventListener('resize', resizeCanvas);
class Particle { constructor() { this.reset(); } reset() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.size = Math.random() * 2 + 0.5; this.speedX = (Math.random() - 0.5) * 0.3; this.speedY = (Math.random() - 0.5) * 0.3; this.opacity = Math.random() * 0.5 + 0.2; } update() { this.x += this.speedX; this.y += this.speedY; if (this.x < 0 || this.x > canvas.width) this.speedX *= -1; if (this.y < 0 || this.y > canvas.height) this.speedY *= -1; } draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = `rgba(255, 179, 209, ${this.opacity})`; ctx.fill(); } }
for (let i = 0; i < 50; i++) particles.push(new Particle());
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) { ctx.beginPath(); ctx.strokeStyle = `rgba(255, 179, 209, ${0.08 * (1 - dist/100)})`; ctx.lineWidth = 0.5; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

// COUNTERS
function updateCounter() {
    const now = new Date(), diff = now - CONFIG.startDate;
    if (diff < 0) { ['years','months','days','hours','minutes','seconds'].forEach(id => document.getElementById(id).textContent = '0'); return; }
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('years').textContent = years; document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days; document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes; document.getElementById('seconds').textContent = seconds;
}
function updateBirthdayCountdown() {
    const now = new Date(); let birthday = new Date(CONFIG.birthdayDate);
    if (now > birthday) birthday.setFullYear(birthday.getFullYear() + 1);
    const diff = birthday - now;
    if (diff < 0) { ['cd-days','cd-hours','cd-minutes','cd-seconds'].forEach(id => document.getElementById(id).textContent = '0'); return; }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('cd-days').textContent = days; document.getElementById('cd-hours').textContent = hours;
    document.getElementById('cd-minutes').textContent = minutes; document.getElementById('cd-seconds').textContent = seconds;
}
setInterval(updateCounter, 1000); setInterval(updateBirthdayCountdown, 1000);
updateCounter(); updateBirthdayCountdown();

// 🎵 MÚSICA
const audio = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const volumeBtn = document.getElementById('volumeBtn');
const musicVisualizer = document.getElementById('musicVisualizer');

document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('navigation').classList.remove('hidden');
    document.getElementById('musicPlayer').classList.remove('hidden');
    
    audio.volume = 0.5;
    audio.play().then(() => {
        playBtn.textContent = '⏸';
        musicVisualizer.classList.add('playing');
    }).catch(err => console.log('Autoplay bloqueado'));
    
    initAllSections();
});

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
        musicVisualizer.classList.add('playing');
    } else {
        audio.pause();
        playBtn.textContent = '▶';
        musicVisualizer.classList.remove('playing');
    }
});

volumeBtn.addEventListener('click', () => {
    if (audio.volume > 0) {
        audio.volume = 0;
        volumeBtn.textContent = '🔇';
    } else {
        audio.volume = 0.5;
        volumeBtn.textContent = '🔊';
    }
});

// STORY TIMELINE
function initStoryTimeline() {
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); }, { threshold: 0.3 });
    document.querySelectorAll('.story-item').forEach(item => observer.observe(item));
}

// ❤️ CORAZÓN MEJORADO CON ECG
let currentColorIndex = 0;
const heartColors = [{c1:'#ff6b9d',c2:'#e74c3c',c3:'#ff6b9d',w:'#ff6b9d'},{c1:'#9b59b6',c2:'#c8a8e9',c3:'#9b59b6',w:'#9b59b6'},{c1:'#e74c3c',c2:'#c0392b',c3:'#e74c3c',w:'#e74c3c'},{c1:'#ffb3d1',c2:'#ff6b9d',c3:'#ffb3d1',w:'#ffb3d1'},{c1:'#d4af37',c2:'#ff6b9d',c3:'#d4af37',w:'#d4af37'}];

function initHeartSection() {
    const heart = document.getElementById('mainHeart'); 
    if (!heart) return;
    
    // Cambio de color
    setInterval(() => {
        currentColorIndex = (currentColorIndex + 1) % heartColors.length;
        const c = heartColors[currentColorIndex];
        const g1 = document.getElementById('grad1'), g2 = document.getElementById('grad2'), g3 = document.getElementById('grad3');
        if (g1) g1.setAttribute('stop-color', c.c1); 
        if (g2) g2.setAttribute('stop-color', c.c2); 
        if (g3) g3.setAttribute('stop-color', c.c3);
        const svg = document.getElementById('heartSvg'); 
        if (svg) svg.style.filter = `drop-shadow(0 0 50px ${c.w})`;
        
        // Cambiar color de la línea ECG
        const ecg = document.getElementById('ecgPath');
        if (ecg) ecg.setAttribute('stroke', c.w);
    }, 2500);
    
    // Reacción al mouse
    const c = document.getElementById('heartContainer');
    c.addEventListener('mousemove', (e) => { 
        const r = heart.getBoundingClientRect(); 
        const x = (e.clientX - r.left - r.width/2) / r.width; 
        const y = (e.clientY - r.top - r.height/2) / r.height; 
        heart.style.transform = `scale(1.2) translate(${x*20}px, ${y*20}px)`; 
    });
    c.addEventListener('mouseleave', () => heart.style.transform = 'scale(1)');
    c.addEventListener('touchstart', (e) => { 
        heart.style.transform = 'scale(1.3)'; 
        createHeartParticle(e.touches[0].clientX, e.touches[0].clientY);
    });
    c.addEventListener('touchend', () => heart.style.transform = 'scale(1)');
    
    // Partículas
    setInterval(() => { 
        if (!c) return; 
        const r = c.getBoundingClientRect(); 
        createHeartParticle(r.left + r.width/2 + (Math.random()-0.5)*120, r.top + r.height/2 + (Math.random()-0.5)*120); 
    }, 400);
}

function createHeartParticle(x, y) {
    const p = document.createElement('div'); 
    p.className = 'heart-particle'; 
    p.innerHTML = '❤';
    p.style.left = x + 'px'; 
    p.style.top = y + 'px';
    p.style.setProperty('--tx', (Math.random()-0.5)*180 + 'px'); 
    p.style.setProperty('--ty', -100 - Math.random()*100 + 'px');
    document.body.appendChild(p); 
    setTimeout(() => p.remove(), 3000);
}

// GALLERY
function initGallery() {
    const grid = document.getElementById('galleryGrid');
    CONFIG.galleryImages.forEach((img, i) => {
        const item = document.createElement('div'); 
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${img.url}" alt="${img.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400/ff6b9d/ffffff?text=Alisson'"><div class="gallery-item-overlay"><h3>${img.title}</h3><p>${img.description}</p></div>`;
        item.addEventListener('click', () => openLightbox(i)); 
        grid.appendChild(item);
    });
}
let currentLightboxIndex = 0;
function openLightbox(i) { currentLightboxIndex = i; updateLightbox(); document.getElementById('lightbox').classList.add('active'); }
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); }
function updateLightbox() { 
    const img = CONFIG.galleryImages[currentLightboxIndex]; 
    document.getElementById('lightboxImg').src = img.url; 
    document.getElementById('lightboxTitle').textContent = img.title; 
    document.getElementById('lightboxDescription').textContent = img.description; 
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => { currentLightboxIndex = (currentLightboxIndex - 1 + CONFIG.galleryImages.length) % CONFIG.galleryImages.length; updateLightbox(); });
document.getElementById('lightboxNext').addEventListener('click', () => { currentLightboxIndex = (currentLightboxIndex + 1) % CONFIG.galleryImages.length; updateLightbox(); });
document.getElementById('lightbox').addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeLightbox(); });

// LETTER
function initLetter() { 
    const c = document.getElementById('letterContent'); 
    CONFIG.letterText.forEach((t, i) => { 
        const p = document.createElement('p'); 
        if (i === 0 || i === CONFIG.letterText.length - 1) p.className = 'signature'; 
        p.textContent = t; 
        p.style.animationDelay = (i * 0.4) + 's'; 
        c.appendChild(p); 
    }); 
}

// REASONS
function initReasons() { 
    const c = document.getElementById('reasonsContainer'); 
    CONFIG.reasons.forEach((r, i) => { 
        const card = document.createElement('div'); 
        card.className = 'reason-card'; 
        card.innerHTML = `<div class="reason-number">${i + 1}</div><div class="reason-text">${r}</div>`; 
        c.appendChild(card); 
    }); 
}

// 💌 PROMESAS - NUEVO
function initPromesas() {
    const promesas = document.querySelectorAll('.promesa-card');
    
    // Intersection Observer para revelar al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, Array.from(promesas).indexOf(entry.target) * 300);
            }
        });
    }, { threshold: 0.3 });
    
    promesas.forEach(promesa => observer.observe(promesa));
    
    // Click para revelar manualmente
    promesas.forEach(promesa => {
        promesa.addEventListener('click', () => {
            promesa.classList.add('revealed');
        });
    });
}

// SURPRISE
document.getElementById('surpriseBtn').addEventListener('click', () => { 
    document.getElementById('finalOverlay').classList.remove('hidden'); 
    createFireworks(); 
});
document.getElementById('finalClose').addEventListener('click', () => { 
    document.getElementById('finalOverlay').classList.add('hidden'); 
});

function createFireworks() {
    const c = document.getElementById('fireworks'); 
    const colors = ['#ff6b9d', '#c8a8e9', '#e74c3c', '#ffb3d1', '#d4af37', '#9b59b6'];
    for (let i = 0; i < 20; i++) setTimeout(() => { 
        const fw = document.createElement('div'); 
        fw.className = 'firework'; 
        fw.style.left = Math.random() * 100 + 'vw'; 
        fw.style.top = Math.random() * 100 + 'vh'; 
        fw.style.background = colors[Math.floor(Math.random() * colors.length)]; 
        fw.style.boxShadow = `0 0 30px ${fw.style.background}`; 
        c.appendChild(fw); 
        setTimeout(() => fw.remove(), 1500); 
    }, i * 200);
    setTimeout(() => createFireworks(), 3000);
}

// NAVIGATION
const navLinks = document.querySelectorAll('.nav-link'), 
      navIndicator = document.getElementById('navIndicator');

function updateNavIndicator(link) { 
    if (!link || !navIndicator) return; 
    const r = link.getBoundingClientRect(); 
    const nr = link.parentElement.parentElement.getBoundingClientRect(); 
    navIndicator.style.width = r.width + 'px'; 
    navIndicator.style.transform = `translateX(${r.left - nr.left - 8}px)`; 
}

navLinks.forEach(link => { 
    link.addEventListener('click', (e) => { 
        e.preventDefault(); 
        const t = document.querySelector(link.getAttribute('href')); 
        if (t) t.scrollIntoView({ behavior: 'smooth' }); 
    }); 
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section'); 
    let current = '';
    sections.forEach(section => { 
        if (window.scrollY >= section.offsetTop - 150) current = section.getAttribute('id'); 
    });
    navLinks.forEach(link => { 
        link.classList.remove('active'); 
        if (link.dataset.section === current) { 
            link.classList.add('active'); 
            updateNavIndicator(link); 
        } 
    });
});

// CLICK EFFECTS
document.addEventListener('click', (e) => {
    const effects = ['❤', '✨', '💖', '💕', '⭐', '🌸', '🦋'];
    for (let i = 0; i < 4; i++) { 
        const ef = document.createElement('div'); 
        ef.className = 'click-effect'; 
        ef.textContent = effects[Math.floor(Math.random() * effects.length)]; 
        ef.style.left = (e.clientX + (Math.random()-0.5)*40) + 'px'; 
        ef.style.top = (e.clientY + (Math.random()-0.5)*40) + 'px'; 
        ef.style.color = `hsl(${Math.random()*60 + 320}, 100%, 70%)`; 
        document.body.appendChild(ef); 
        setTimeout(() => ef.remove(), 1000); 
    }
});

// SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => { 
    entries.forEach(e => { 
        if (e.isIntersecting) e.target.classList.add('active'); 
    }); 
}, { threshold: 0.1 });

function initAllSections() {
    initStoryTimeline(); 
    initHeartSection(); 
    initGallery(); 
    initLetter(); 
    initReasons(); 
    initPromesas();
    
    document.querySelectorAll('.section-title, .section-subtitle, .counter-container, .birthday-countdown, .heart-container, .gallery-item, .dream-item, .reason-card').forEach(el => { 
        el.classList.add('reveal'); 
        revealObserver.observe(el); 
    });
    
    setTimeout(() => { 
        const al = document.querySelector('.nav-link.active'); 
        if (al) updateNavIndicator(al); 
    }, 100);
}

window.addEventListener('load', () => { 
    setTimeout(simulateLoader, 500); 
});
