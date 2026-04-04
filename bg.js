// ══ ANIMATED CANVAS BACKGROUND ══
// A rich layered scene: deep red gradient + slow drifting wave + golden ember particles

const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');

function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// ── Particles (golden embers / sparks) ──
const PARTICLE_COUNT = 120;

class Particle {
    constructor() { this.reset(true); }

    reset(randomY = false) {
        this.x      = Math.random() * canvas.width;
        this.y      = randomY ? Math.random() * canvas.height : canvas.height + 10;
        this.size   = Math.random() * 3.5 + 0.8;
        this.speedY = -(Math.random() * 0.9 + 0.3);   // float upwards
        this.speedX = (Math.random() - 0.5) * 0.6;   // gentle sideways drift
        this.life   = 1;
        this.decay  = Math.random() * 0.004 + 0.002;
        // Pick from amber/gold/orange/white-hot palette
        const palette = [
            '#ffc300', '#ff9800', '#ff6d00',
            '#ffe082', '#ffccbc', '#fff9c4', '#ffffff'
        ];
        this.color  = palette[Math.floor(Math.random() * palette.length)];
    }

    update() {
        this.x    += this.speedX;
        this.y    += this.speedY;
        this.life -= this.decay;
        if (this.life <= 0) this.reset();
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life) * 0.85;
        ctx.fillStyle   = this.color;
        ctx.shadowBlur  = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

// ── Wave layer ──
let waveOffset = 0;

function drawWaves() {
    const h = canvas.height;
    const w = canvas.width;

    // Wave 1 – slow, large, semi-opaque red
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 3) {
        const y = h * 0.72 + Math.sin((x / w) * Math.PI * 3 + waveOffset) * 40
                           + Math.cos((x / w) * Math.PI * 2 + waveOffset * 0.6) * 20;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = 'rgba(180, 20, 10, 0.28)';
    ctx.fill();

    // Wave 2 – faster, smaller, darker
    ctx.beginPath();
    ctx.moveTo(0, h);
    for (let x = 0; x <= w; x += 3) {
        const y = h * 0.82 + Math.sin((x / w) * Math.PI * 4 + waveOffset * 1.4) * 28
                           + Math.cos((x / w) * Math.PI * 3 + waveOffset * 0.8) * 15;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = 'rgba(100, 8, 4, 0.35)';
    ctx.fill();
}

// ── Radial vignette ──
function drawVignette() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const r  = Math.max(canvas.width, canvas.height) * 0.85;
    const grd = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r);
    grd.addColorStop(0, 'rgba(0,0,0,0)');
    grd.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// ── Main gradient background ──
function drawBackground() {
    const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd.addColorStop(0,    '#0d0202');
    grd.addColorStop(0.35, '#5a0b07');
    grd.addColorStop(0.7,  '#9e1710');
    grd.addColorStop(1,    '#6b0e08');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// ── Animation loop ──
function animate() {
    requestAnimationFrame(animate);

    drawBackground();
    drawWaves();

    particles.forEach(p => { p.update(); p.draw(); });

    drawVignette();

    waveOffset += 0.012;
}

animate();
