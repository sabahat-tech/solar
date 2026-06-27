// ═══════════════════════════════════════════════════════
//  SOLAR SYSTEM VISUALIZER — script.js
// ═══════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════
//  SECTION 1: PLANET DATA
//  All 8 planets with their properties and facts
// ═══════════════════════════════════════════════════════

const PLANETS = [
  {
    name: "Mercury",
    color: "#b5b5b5",
    size: 6,
    orbitRadius: 80,
    speed: 4.74,
    type: "Rocky Planet",
    typeBg: "#6c757d",
    desc: "The smallest planet and closest to the Sun, Mercury has extreme temperature swings.",
    distance: "57.9 million km",
    period: "88 Earth days",
    diameter: "4,879 km",
    moons: "0",
    temp: "-180°C to 430°C",
    facts: [
      "A year on Mercury lasts only 88 Earth days.",
      "Despite being closest to the Sun, it's not the hottest planet.",
      "Mercury has no atmosphere to retain heat.",
      "It has a massive iron core making up 85% of its radius."
    ]
  },
  {
    name: "Venus",
    color: "#e8cda0",
    size: 10,
    orbitRadius: 120,
    speed: 3.50,
    type: "Rocky Planet",
    typeBg: "#e6a817",
    desc: "Venus is the hottest planet in our solar system, shrouded in thick toxic clouds.",
    distance: "108.2 million km",
    period: "225 Earth days",
    diameter: "12,104 km",
    moons: "0",
    temp: "465°C (average)",
    facts: [
      "Venus rotates backwards compared to most planets.",
      "A day on Venus is longer than its year.",
      "Atmospheric pressure is 90x that of Earth.",
      "Venus is sometimes called Earth's twin due to its similar size."
    ]
  },
  {
    name: "Earth",
    color: "#4a9eff",
    size: 11,
    orbitRadius: 165,
    speed: 2.98,
    type: "Rocky Planet",
    typeBg: "#0d6efd",
    desc: "Our home planet — the only known world harboring life, with liquid water on the surface.",
    distance: "149.6 million km",
    period: "365.25 days",
    diameter: "12,742 km",
    moons: "1 (The Moon)",
    temp: "-88°C to 58°C",
    facts: [
      "Earth is the densest planet in the solar system.",
      "71% of Earth's surface is covered by water.",
      "Earth's magnetic field protects us from solar winds.",
      "The Moon stabilizes Earth's axial tilt."
    ]
  },
  {
    name: "Mars",
    color: "#c1440e",
    size: 8,
    orbitRadius: 215,
    speed: 2.41,
    type: "Rocky Planet",
    typeBg: "#dc3545",
    desc: "The Red Planet hosts Olympus Mons, the tallest volcano in the solar system.",
    distance: "227.9 million km",
    period: "687 Earth days",
    diameter: "6,779 km",
    moons: "2 (Phobos & Deimos)",
    temp: "-125°C to 20°C",
    facts: [
      "Mars has the tallest volcano in the solar system — Olympus Mons.",
      "A Martian day is 24 hours and 37 minutes.",
      "Mars has the largest canyon — Valles Marineris.",
      "Evidence suggests Mars once had liquid water."
    ]
  },
  {
    name: "Jupiter",
    color: "#c88b3a",
    size: 22,
    orbitRadius: 290,
    speed: 1.31,
    type: "Gas Giant",
    typeBg: "#fd7e14",
    desc: "The king of planets — a massive gas giant with the iconic Great Red Spot storm.",
    distance: "778.5 million km",
    period: "11.86 Earth years",
    diameter: "139,820 km",
    moons: "95 known",
    temp: "-110°C (cloud tops)",
    facts: [
      "Jupiter's Great Red Spot is a storm larger than Earth.",
      "Jupiter has the shortest day — just 10 hours.",
      "It acts as a cosmic vacuum cleaner, absorbing asteroids.",
      "Jupiter has at least 95 known moons."
    ]
  },
  {
    name: "Saturn",
    color: "#e4d191",
    size: 19,
    orbitRadius: 365,
    speed: 0.97,
    hasRings: true,
    type: "Gas Giant",
    typeBg: "#ffc107",
    desc: "Famous for its stunning ring system, Saturn is the least dense planet — it could float on water!",
    distance: "1.43 billion km",
    period: "29.46 Earth years",
    diameter: "116,460 km",
    moons: "146 known",
    temp: "-140°C (cloud tops)",
    facts: [
      "Saturn's rings are made of ice and rock.",
      "Saturn is less dense than water — it would float!",
      "Winds on Saturn can reach 1,800 km/h.",
      "Its moon Titan has a thick nitrogen atmosphere."
    ]
  },
  {
    name: "Uranus",
    color: "#7de8e8",
    size: 15,
    orbitRadius: 430,
    speed: 0.68,
    type: "Ice Giant",
    typeBg: "#0dcaf0",
    desc: "Uranus rotates on its side with an axial tilt of 98°, giving it extreme seasons.",
    distance: "2.87 billion km",
    period: "84 Earth years",
    diameter: "50,724 km",
    moons: "28 known",
    temp: "-195°C (average)",
    facts: [
      "Uranus rotates on its side — axial tilt of 98°.",
      "It has 13 known rings.",
      "Uranus was the first planet discovered with a telescope.",
      "One pole faces the Sun for 42 years at a time."
    ]
  },
  {
    name: "Neptune",
    color: "#4b70dd",
    size: 14,
    orbitRadius: 495,
    speed: 0.54,
    type: "Ice Giant",
    typeBg: "#0d6efd",
    desc: "The windiest planet, Neptune has storms with speeds over 2,000 km/h.",
    distance: "4.5 billion km",
    period: "164.8 Earth years",
    diameter: "49,244 km",
    moons: "16 known",
    temp: "-200°C (average)",
    facts: [
      "Neptune has the strongest winds in the solar system.",
      "It takes 165 Earth years to orbit the Sun.",
      "Neptune was predicted mathematically before it was observed.",
      "Its moon Triton orbits backwards and is slowly spiraling inward."
    ]
  }
];

// Rotating space facts shown in the ticker
const SPACE_FACTS = [
  "The Sun contains 99.86% of the total mass of the Solar System.",
  "Light from the Sun takes about 8 minutes to reach Earth.",
  "There are more stars in the universe than grains of sand on all of Earth's beaches.",
  "A neutron star is so dense a teaspoon would weigh a billion tons.",
  "The footprints left on the Moon will last for 100 million years.",
  "Saturn's moon Enceladus has geysers of water ice shooting into space.",
  "The Milky Way galaxy is about 100,000 light-years across.",
  "Jupiter's moon Europa may have a liquid water ocean beneath its icy surface.",
  "One day on Venus is longer than one year on Venus.",
  "The International Space Station travels at 28,000 km/h."
];


// ═══════════════════════════════════════════════════════
//  SECTION 2: STAR BACKGROUND
//  Draws a twinkling star field on a full-screen canvas
// ═══════════════════════════════════════════════════════

const starsCanvas = document.getElementById('stars-canvas');
const sCtx = starsCanvas.getContext('2d');
let stars = [];

// Create random star data and resize canvas to window
function resizeStars() {
  starsCanvas.width  = window.innerWidth;
  starsCanvas.height = window.innerHeight;

  stars = Array.from({ length: 220 }, () => ({
    x:            Math.random() * starsCanvas.width,
    y:            Math.random() * starsCanvas.height,
    r:            Math.random() * 1.4 + 0.2,
    alpha:        Math.random() * 0.7 + 0.3,
    twinkleSpeed: Math.random() * 0.02 + 0.005
  }));
}

resizeStars();
window.addEventListener('resize', resizeStars);

// Draw all stars with twinkle effect each frame
function drawStars(timestamp) {
  sCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);

  stars.forEach(s => {
    // Slowly shift alpha for twinkling
    s.alpha += Math.sin(timestamp * s.twinkleSpeed) * 0.01;
    s.alpha  = Math.max(0.1, Math.min(1, s.alpha));

    sCtx.beginPath();
    sCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    sCtx.fillStyle = `rgba(255,255,255,${s.alpha})`;
    sCtx.fill();
  });
}


// ═══════════════════════════════════════════════════════
//  SECTION 3: SOLAR SYSTEM CANVAS SETUP
// ═══════════════════════════════════════════════════════

const canvas = document.getElementById('solar-canvas');
const ctx    = canvas.getContext('2d');
const CX     = canvas.width  / 2;   // center X
const CY     = canvas.height / 2;   // center Y

// Make canvas responsive (scales to screen width)
function resizeCanvas() {
  const maxW = Math.min(700, window.innerWidth - 20);
  canvas.style.width  = maxW + 'px';
  canvas.style.height = maxW + 'px';
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Animation state
let angles          = PLANETS.map(() => Math.random() * Math.PI * 2);
let speedMultiplier = 1;
let paused          = false;
let lastTime        = 0;
let planetPositions = [];   // Used for click & hover detection

// ── Moon position tracked separately ──
let moonPosition = null;

// ── Moon data object (used for modal & React legend) ──
const MOON_DATA = {
  name:        "Moon",
  color:       "#c8c8d8",
  type:        "Natural Satellite",
  typeBg:      "#6c757d",
  desc:        "Earth's only natural satellite and the fifth largest moon in the Solar System. The Moon stabilizes Earth's axial tilt and drives ocean tides.",
  distance:    "384,400 km from Earth",
  period:      "27.3 Earth days",
  diameter:    "3,474 km",
  moons:       "None",
  temp:        "-173°C to 127°C",
  facts: [
    "The Moon is slowly drifting away from Earth at 3.8 cm per year.",
    "The same side of the Moon always faces Earth — called tidal locking.",
    "Footprints left on the Moon will last 100 million years (no wind!).",
    "The Moon was likely formed from debris after a Mars-sized body hit Earth.",
  ]
};


// ═══════════════════════════════════════════════════════
//  SECTION 4: DRAWING FUNCTIONS
// ═══════════════════════════════════════════════════════

// Draw the glowing Sun at the center
function drawSun(timestamp) {
  // Outer soft glow
  const g1 = ctx.createRadialGradient(CX, CY, 0, CX, CY, 55);
  g1.addColorStop(0,   'rgba(255,240,80,0.9)');
  g1.addColorStop(0.5, 'rgba(255,160,20,0.4)');
  g1.addColorStop(1,   'rgba(255,100,0,0)');
  ctx.beginPath();
  ctx.arc(CX, CY, 55, 0, Math.PI * 2);
  ctx.fillStyle = g1;
  ctx.fill();

  // Sun body with radial gradient
  const g2 = ctx.createRadialGradient(CX - 8, CY - 8, 2, CX, CY, 26);
  g2.addColorStop(0,   '#fff9a0');
  g2.addColorStop(0.4, '#ffdd57');
  g2.addColorStop(1,   '#ff8c00');
  ctx.beginPath();
  ctx.arc(CX, CY, 26, 0, Math.PI * 2);
  ctx.fillStyle = g2;
  ctx.fill();

  // Pulsing ring around the sun
  const pulse = Math.sin(timestamp * 0.002) * 4;
  ctx.beginPath();
  ctx.arc(CX, CY, 30 + pulse, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(255,220,50,${0.15 + Math.sin(timestamp * 0.002) * 0.1})`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Draw a dashed orbit ring at radius r
function drawOrbitRing(r) {
  ctx.beginPath();
  ctx.arc(CX, CY, r, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 8]);
  ctx.stroke();
  ctx.setLineDash([]);   // reset dash
}

// Draw a single planet at its orbit angle
function drawPlanet(planet, angle, index) {
  // Calculate planet position using trigonometry
  const x = CX + Math.cos(angle) * planet.orbitRadius;
  const y = CY + Math.sin(angle) * planet.orbitRadius;

  // Save position for click/hover detection
  planetPositions[index] = { x, y, r: planet.size + 4, name: planet.name, idx: index };

  // ── Glow effect ──
  const glow = ctx.createRadialGradient(x, y, 0, x, y, planet.size * 2.5);
  glow.addColorStop(0, planet.color + 'aa');
  glow.addColorStop(1, planet.color + '00');
  ctx.beginPath();
  ctx.arc(x, y, planet.size * 2.5, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  // ── Planet body with gradient shading ──
  const pg = ctx.createRadialGradient(
    x - planet.size * 0.3, y - planet.size * 0.3, planet.size * 0.1,
    x, y, planet.size
  );
  pg.addColorStop(0, lightenColor(planet.color));
  pg.addColorStop(1, darkenColor(planet.color));
  ctx.beginPath();
  ctx.arc(x, y, planet.size, 0, Math.PI * 2);
  ctx.fillStyle = pg;
  ctx.fill();

  // ── Saturn's rings (special case) ──
  if (planet.hasRings) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, 0.35);   // flatten to make it look angled

    ctx.beginPath();
    ctx.arc(0, 0, planet.size + 14, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(228,209,145,0.55)';
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, planet.size + 8, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(228,209,145,0.3)';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();
  }

  // ── Earth's Moon (special case) ──
  if (planet.name === 'Earth') {
    const moonAngle = angle * 12;
    const mx = x + Math.cos(moonAngle) * (planet.size + 14);
    const my = y + Math.sin(moonAngle) * (planet.size + 14);

    // Save Moon position for click & hover detection
    moonPosition = { x: mx, y: my, r: 6 };

    // Moon glow
    const moonGlow = ctx.createRadialGradient(mx, my, 0, mx, my, 12);
    moonGlow.addColorStop(0, 'rgba(200,200,220,0.4)');
    moonGlow.addColorStop(1, 'rgba(200,200,220,0)');
    ctx.beginPath();
    ctx.arc(mx, my, 12, 0, Math.PI * 2);
    ctx.fillStyle = moonGlow;
    ctx.fill();

    // Moon body
    const moonGrad = ctx.createRadialGradient(mx - 2, my - 2, 0.5, mx, my, 5);
    moonGrad.addColorStop(0, '#e8e8f0');
    moonGrad.addColorStop(1, '#8899aa');
    ctx.beginPath();
    ctx.arc(mx, my, 5, 0, Math.PI * 2);
    ctx.fillStyle = moonGrad;
    ctx.fill();

    // Moon label
    ctx.fillStyle = 'rgba(200,210,230,0.7)';
    ctx.font = '7px Orbitron, monospace';
    ctx.fillText('Moon', mx + 7, my + 3);
  }
}

// ── Color Helpers ──

// Make a hex color lighter (for planet highlight)
function lightenColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.min(255, r + 60)}, ${Math.min(255, g + 60)}, ${Math.min(255, b + 60)})`;
}

// Make a hex color darker (for planet shadow)
function darkenColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.max(0, r - 40)}, ${Math.max(0, g - 40)}, ${Math.max(0, b - 40)})`;
}


// ═══════════════════════════════════════════════════════
//  SECTION 5: ANIMATION LOOP
//  Runs every frame using requestAnimationFrame
// ═══════════════════════════════════════════════════════

function animate(timestamp) {
  lastTime = timestamp;

  // Clear both canvases
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw star background
  drawStars(timestamp);

  // Draw all orbit rings first (behind planets)
  PLANETS.forEach(p => drawOrbitRing(p.orbitRadius));

  // Draw the Sun
  drawSun(timestamp);

  // Update and draw each planet
  PLANETS.forEach((planet, i) => {
    if (!paused) {
      // Move planet forward along its orbit
      angles[i] += planet.speed * 0.001 * speedMultiplier;
    }
    drawPlanet(planet, angles[i], i);
  });

  // Keep looping
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);


// ═══════════════════════════════════════════════════════
//  SECTION 6: CONTROL PANEL FUNCTIONS
// ═══════════════════════════════════════════════════════

// Pause or resume the animation
function togglePause() {
  paused = !paused;
  const btn = document.getElementById('btn-pause');
  btn.textContent = paused ? '▶ RESUME' : '⏸ PAUSE';
  btn.classList.toggle('active', paused);
}

// Set orbit speed multiplier
function setSpeed(value) {
  speedMultiplier = value;
  document.getElementById('speed-slider').value = value;
  document.getElementById('speed-val').textContent = value.toFixed(1) + 'x';

  // Remove active class from all speed buttons (except pause & danger)
  document.querySelectorAll('.btn-space:not(#btn-pause):not(.btn-space-danger)')
    .forEach(btn => btn.classList.remove('active'));
}


// ═══════════════════════════════════════════════════════
//  SECTION 7: CANVAS MOUSE EVENTS
//  Hover tooltip + Click to open planet modal
// ═══════════════════════════════════════════════════════

const tooltip = document.getElementById('planet-tooltip');

// Show tooltip when hovering over a planet
canvas.addEventListener('mousemove', function(event) {
  const rect   = canvas.getBoundingClientRect();
  const scaleX = canvas.width  / rect.width;
  const scaleY = canvas.height / rect.height;

  // Convert mouse position to canvas coordinates
  const mouseX = (event.clientX - rect.left) * scaleX;
  const mouseY = (event.clientY - rect.top)  * scaleY;

  let hoveringPlanet = false;

  planetPositions.forEach(pp => {
    const distance = Math.hypot(mouseX - pp.x, mouseY - pp.y);

    if (distance < pp.r + 8) {
      // Show tooltip near cursor
      tooltip.style.display = 'block';
      tooltip.style.left    = (event.clientX + 14) + 'px';
      tooltip.style.top     = (event.clientY - 10) + 'px';
      tooltip.textContent   = pp.name.toUpperCase();
      canvas.style.cursor   = 'pointer';
      hoveringPlanet = true;
    }
  });

  // ── Check Moon hover ──
  if (moonPosition) {
    const moonDist = Math.hypot(mouseX - moonPosition.x, mouseY - moonPosition.y);
    if (moonDist < moonPosition.r + 8) {
      tooltip.style.display = 'block';
      tooltip.style.left    = (event.clientX + 14) + 'px';
      tooltip.style.top     = (event.clientY - 10) + 'px';
      tooltip.textContent   = '🌙 MOON';
      canvas.style.cursor   = 'pointer';
      hoveringPlanet = true;
    }
  }

  if (!hoveringPlanet) {
    tooltip.style.display = 'none';
    canvas.style.cursor   = 'default';
  }
});

// Hide tooltip when mouse leaves canvas
canvas.addEventListener('mouseleave', function() {
  tooltip.style.display = 'none';
});

// Open modal when a planet is clicked
canvas.addEventListener('click', function(event) {
  const rect   = canvas.getBoundingClientRect();
  const scaleX = canvas.width  / rect.width;
  const scaleY = canvas.height / rect.height;

  const mouseX = (event.clientX - rect.left) * scaleX;
  const mouseY = (event.clientY - rect.top)  * scaleY;

  planetPositions.forEach(pp => {
    const distance = Math.hypot(mouseX - pp.x, mouseY - pp.y);
    if (distance < pp.r + 8) {
      openPlanetModal(PLANETS[pp.idx]);
    }
  });

  // ── Check Moon click ──
  if (moonPosition) {
    const moonDist = Math.hypot(mouseX - moonPosition.x, mouseY - moonPosition.y);
    if (moonDist < moonPosition.r + 8) {
      openPlanetModal(MOON_DATA);
    }
  }
});


// ═══════════════════════════════════════════════════════
//  SECTION 8: PLANET MODAL (Bootstrap)
//  Fills in planet data and opens Bootstrap modal
// ═══════════════════════════════════════════════════════

function openPlanetModal(planet) {
  // Set planet name and color
  const nameEl = document.getElementById('modal-planet-name');
  nameEl.textContent = planet.name;
  nameEl.style.color = planet.color;

  // Set planet type badge
  document.getElementById('modal-planet-badges').innerHTML =
    `<span class="planet-type-badge"
      style="background:${planet.typeBg}22; color:${planet.typeBg}; border:1px solid ${planet.typeBg}55">
      ${planet.type}
    </span>`;

  // Set planet visual circle
  const visual = document.getElementById('modal-planet-visual');
  visual.style.background = `radial-gradient(circle at 35% 35%, ${lightenColor(planet.color)}, ${planet.color}, ${darkenColor(planet.color)})`;
  visual.style.setProperty('--planet-color', planet.color);

  // Add ring shadow for Saturn
  if (planet.hasRings) {
    visual.style.boxShadow = `0 0 30px ${planet.color}99, 0 0 60px ${planet.color}44, 0 12px 0 ${planet.color}55, 0 -12px 0 ${planet.color}55`;
  } else {
    visual.style.boxShadow = `0 0 30px ${planet.color}99, 0 0 60px ${planet.color}44`;
  }

  // Set description
  document.getElementById('modal-planet-desc').textContent = planet.desc;

  // Set stats
  document.getElementById('stat-distance').textContent = planet.distance;
  document.getElementById('stat-period').textContent   = planet.period;
  document.getElementById('stat-diameter').textContent = planet.diameter;
  document.getElementById('stat-moons').textContent    = planet.moons;
  document.getElementById('stat-temp').textContent     = planet.temp;

  // Set fun facts list
  const factsList = document.getElementById('modal-facts');
  factsList.innerHTML = planet.facts
    .map(fact => `<li>${fact}</li>`)
    .join('');

  // Open Bootstrap modal
  new bootstrap.Modal(document.getElementById('planetModal')).show();
}


// ═══════════════════════════════════════════════════════
//  SECTION 9: PLANET LEGEND
//  ⚛️ This section is now handled by React!
//  See PlanetLegend.jsx for the React component.
//  React renders into <div id="react-legend-root">
// ═══════════════════════════════════════════════════════

// openPlanetModal is still called from the React component
// so it stays here in script.js — React and JS work together!


// ═══════════════════════════════════════════════════════
//  SECTION 10: SPACE FACTS TICKER
//  Rotates a new fact every 6 seconds with fade effect
// ═══════════════════════════════════════════════════════

let currentFactIndex = 0;

// Show the first fact immediately
document.getElementById('fact-text').textContent = SPACE_FACTS[0];

// Rotate to next fact every 6 seconds
function rotateFact() {
  const factEl = document.getElementById('fact-text');

  // Fade out
  factEl.style.opacity = 0;

  // Wait for fade, then change text and fade in
  setTimeout(() => {
    currentFactIndex = (currentFactIndex + 1) % SPACE_FACTS.length;
    factEl.textContent = SPACE_FACTS[currentFactIndex];
    factEl.style.opacity = 1;
  }, 500);
}

setInterval(rotateFact, 6000);
