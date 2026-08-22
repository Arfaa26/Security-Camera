/**
 * AAN Security & IT Solutions — Core Engine & Interactive Tools
 * Owner & Lead Specialist: Faheem Abbas Alekar
 * Servicing: Mahad, Poladpur, Mangaon, Birwadi MIDC, Raigad
 */

// Global App State
const state = {
  phone: '917218197119',
  phoneDisplay: '+91 72181 97119',
  email: 'aanss182014@gmail.com',
  currentModal: null
};

// Security Hardware & Cameras Catalog
const cameras = [
  {
    name: 'Turret Security Camera',
    desc: 'Clean, anti-glare all-purpose surveillance with zero IR reflection. Ideal for porches and shopfronts.',
    icon: '📹',
    tags: ['4MP QHD', 'COLORVU NIGHT', 'INDOOR / OUTDOOR', 'IP67']
  },
  {
    name: 'Bullet Outdoor Camera',
    desc: 'Long-range visual deterrence designed for gates, driveways, perimeter walls, and open yards.',
    icon: '📷',
    tags: ['4K ULTRA HD', 'LONG RANGE IR', 'WEATHERPROOF', 'IP67']
  },
  {
    name: 'Vandal Dome Camera',
    desc: 'Discreet and impact-resistant dome housing for offices, cash counters, corridors, and living areas.',
    icon: '🎥',
    tags: ['2K / 4K', 'IK10 VANDAL', 'WIDE ANGLE', 'DISCREET']
  },
  {
    name: '360° PTZ Motorized Camera',
    desc: 'Pan, tilt, and optical zoom to scan massive industrial areas, factory floors, and warehouse perimeters.',
    icon: '🔭',
    tags: ['25X OPTICAL ZOOM', 'AUTO-TRACKING', '360° COVERAGE', 'NIGHT IR 150M']
  },
  {
    name: 'AI Smart Detection IP Camera',
    desc: 'Deep learning algorithms to detect and classify human bodies and vehicles, preventing false alerts.',
    icon: '🧠',
    tags: ['AI HUMAN FILTER', 'VEHICLE DETECTION', 'LINE-CROSSING', 'PUSH ALERTS']
  },
  {
    name: 'ColorVu / Starlight Night Camera',
    desc: 'Advanced large-aperture lens providing full vibrant color video even in pitch-black night conditions.',
    icon: '🌙',
    tags: ['F1.0 APERTURE', 'FULL COLOR 24/7', 'WARM SUPPLEMENT', 'AUDIO MIC']
  },
  {
    name: 'Two-Way Audio Talkback Camera',
    desc: 'Built-in microphone and high-output speaker allowing you to hear and speak to visitors remotely.',
    icon: '🎙️',
    tags: ['BUILT-IN MIC', 'SPEAKER', 'SIREN DETERRENCE', 'MOBILE TALK']
  },
  {
    name: 'Biometric & Video Door Phone',
    desc: 'Modern video doorbell and fingerprint access control to screen and unlock visitors from your phone.',
    icon: '🔑',
    tags: ['FINGERPRINT', 'RFID CARD', 'APP UNLOCK', 'DOORBELL CAMERA']
  }
];

// Industries & Environments
const industries = [
  {
    name: 'Residential & Bungalows',
    desc: 'Secure main entrance, parking, perimeter fencing, and living areas with unobtrusive, crystal-clear surveillance and remote smartphone access.',
    focus: ['Main Gate Entrance', 'Driveway & Parking', 'Perimeter Boundary', 'Porch / Living Room'],
    stack: ['ColorVu Turret Cameras', '8CH PoE NVR', '2TB WD Purple Storage', 'AAN Mobile App Setup'],
    cta: 'Protect My Home →'
  },
  {
    name: 'Retail Shops & Showrooms',
    desc: 'Protect inventory, prevent shoplifting, and monitor cash counters with high-resolution video and audio recording.',
    focus: ['Cash Billing Counter', 'Customer Aisles', 'Entry & Exit Door', 'Back Storage Room'],
    stack: ['4K Dome Cameras with Audio Mic', 'Wide-Angle Entrance Bullet', 'Dedicated Cash View Lens', 'Remote Mobile App'],
    cta: 'Secure My Shop →'
  },
  {
    name: 'Corporate Offices',
    desc: 'Combine HD surveillance with biometric fingerprint attendance and secure server room access control.',
    focus: ['Reception / Waiting Area', 'Biometric Staff Entry', 'Workstation Floor', 'Server & Records Room'],
    stack: ['eSSL Biometric Attendance', 'IP PoE Dome Cameras', 'Gigabit Network Switch', 'Visitor Logging'],
    cta: 'Plan Office Security →'
  },
  {
    name: 'Factories & Industrial Units (MIDC)',
    desc: 'Heavy-duty surveillance engineered for harsh industrial dust, wide perimeter fences, weighbridges, and loading bays.',
    focus: ['Entry / Exit Weighbridge', 'Raw Material Godown', 'Production Machinery', 'Perimeter Fencing (300m+)'],
    stack: ['360° PTZ Long-Range Cameras', 'Industrial PoE Switches', '16/32CH NVR with RAID', 'Backup UPS Power'],
    cta: 'Secure My Factory →'
  },
  {
    name: 'Warehouses & Logistics',
    desc: 'High-ceiling surveillance covering storage racks, loading docks, and nighttime boundary activity with zero blind spots.',
    focus: ['Loading / Unloading Shutter', 'Storage Aisles', 'Truck Parking', 'Inventory Checkpoint'],
    stack: ['Wide-Angle 4MP Cameras', 'Night Color Vision', 'Motion Detection Alerts', 'Centralized NVR Rack'],
    cta: 'Protect My Warehouse →'
  }
];

// Comprehensive FAQ List
const faqs = [
  {
    q: 'How much does a complete CCTV installation cost?',
    a: 'Costs depend on the number of cameras, resolution (1080p, 4MP, or 4K), storage drive capacity (1TB to 4TB), and cable piping distance. For homes and small shops, complete packages start affordably. We offer a ₹500 on-site assessment in Mahad, Mangaon, and Poladpur to inspect your property and provide an itemized, transparent quotation with zero hidden charges.',
    cat: 'cost'
  },
  {
    q: 'How many cameras does my property need?',
    a: 'A typical 1-2 floor home usually needs 4–6 cameras (Main Gate, Front Porch, Parking/Driveway, Backyard, and Living room). A retail shop needs 2–4 cameras, while factories in MIDC often require 8–16+ cameras. You can use our 5-Step Smart Planner on this page to get an instant calculation.',
    cat: 'cost'
  },
  {
    q: 'Do the cameras record in full color at night?',
    a: 'Yes! We install modern ColorVu and Starlight cameras equipped with large F1.0 apertures and warm supplemental LEDs that capture vivid, full-color footage in pitch darkness, allowing you to clearly identify clothing colors, vehicle models, and faces at night.',
    cat: 'cameras'
  },
  {
    q: 'Can I view live CCTV footage on my phone when I am away?',
    a: 'Yes, absolutely! We connect your DVR/NVR to your home Wi-Fi or broadband router and configure the secure mobile application on your iPhone, Android, or tablet. You can view live streams, review past recordings, and receive push notifications from anywhere in the world.',
    cat: 'remote'
  },
  {
    q: 'Do CCTV cameras need internet to record video?',
    a: 'No. The CCTV cameras record locally to the internal Western Digital Purple or Seagate hard drive 24/7 regardless of internet availability. Internet is only required when you want to view the live camera feed on your phone while away from the property.',
    cat: 'remote'
  },
  {
    q: 'What happens to CCTV during a power cut or electricity outage?',
    a: 'Standard CCTV systems require power. We provide and connect dedicated CCTV UPS and battery backup systems that keep your cameras and recording system operational for hours during power cuts.',
    cat: 'installation'
  },
  {
    q: 'What is included in the ₹500 on-site assessment visit?',
    a: 'Faheem Abbas Alekar (Lead Security Specialist) physically visits your property in Mahad, Poladpur, Mangaon, or nearby areas. We map all blind spots, test nighttime lighting, plan clean conduit piping routes, check Wi-Fi signal strength, and hand you a complete equipment checklist and quote.',
    cat: 'cost'
  },
  {
    q: 'Do you provide maintenance and repairs for existing CCTV systems?',
    a: 'Yes. If your current cameras are blurry, offline, not recording, or your mobile app has stopped working, we provide on-site diagnostics, lens cleaning, cable rewiring, hard drive replacements, and system upgrades.',
    cat: 'maintenance'
  }
];

// Helper: Escape HTML string
function esc(str) {
  return String(str ?? '').replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[m]));
}

// Centralized WhatsApp Dynamic URL Generator
function buildWhatsAppUrl({ type, data = {} }) {
  const phone = state.phone;
  let message = '';

  switch (type) {
    case 'storage_calc':
      message = `*AAN Security — Storage & Camera Estimate* 💾\n\n` +
        `• *Number of Cameras:* ${data.cams} Cameras\n` +
        `• *Resolution:* ${data.resolution}\n` +
        `• *Backup Duration:* ${data.days} Days\n` +
        `• *Recording Mode:* ${data.mode}\n` +
        `• *Estimated HDD Required:* *${data.hddSize}* (${data.hddLabel})\n` +
        `• *Daily Data Usage:* ~${data.dailyData}\n\n` +
        `Hi Faheem, I calculated this storage requirement on your website. Please share availability and pricing for this setup!`;
      break;

    case 'assessment_plan':
      message = `*AAN Security — Smart Security Plan* 📋\n\n` +
        `• *Property Type:* ${data.property}\n` +
        `• *Estimated Cameras:* *${data.camRange}*\n` +
        `• *Floors / Entrances:* ${data.floors} Floor(s), ${data.entrances} Entrance(s)\n` +
        `• *Outdoor Areas:* ${data.outdoor || 'None specified'}\n` +
        `• *Primary Priority:* ${data.priorities || 'General security'}\n` +
        `• *Security Tier:* ${data.level}\n` +
        `• *Remote Mobile Viewing:* ${data.remote}\n\n` +
        `Hello Faheem, I completed the security planner on your website and would like to arrange an on-site assessment for my property!`;
      break;

    case 'zone_planner':
      message = `*AAN Security — Property Zone Blueprint* 🎯\n\n` +
        `• *Selected Property Zones:* ${data.zones}\n` +
        `• *Recommended Camera:* ${data.camera}\n` +
        `• *Primary Concern:* ${data.priority || 'General monitoring'}\n\n` +
        `Hello AAN Security, I built a custom zone blueprint on your website and would like to get a quote and site inspection!`;
      break;

    case 'area_check':
      message = `Hello Faheem (AAN Security), I would like to check service availability for CCTV installation in: *${data.location}*. Please confirm if your team covers this area!`;
      break;

    case 'general_inquiry':
    default:
      message = data.text || `Hello AAN Security & IT Solutions, I visited your website and would like to consult about CCTV camera installation for my property.`;
      break;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// -------------------------------------------------------------
// 1. Render Cameras & Categories
// -------------------------------------------------------------
function renderCameras() {
  const grid = document.getElementById('cameraGrid');
  if (!grid) return;

  grid.innerHTML = cameras.map((c, i) => `
    <article class="camera-card">
      <div class="camera-visual-box">${c.icon}</div>
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.desc)}</p>
      <div class="card-tags">
        ${c.tags.map(t => `<span>${esc(t)}</span>`).join('')}
      </div>
      <button type="button" data-cam-idx="${i}">Inquire about this camera →</button>
    </article>
  `).join('');

  grid.querySelectorAll('[data-cam-idx]').forEach(btn => {
    btn.onclick = () => {
      const c = cameras[+btn.dataset.camIdx];
      const text = `Hi Faheem, I am interested in learning more about the *${c.name}* (${c.tags.join(', ')}) for my property.`;
      window.open(buildWhatsAppUrl({ type: 'general_inquiry', data: { text } }), '_blank', 'noopener');
    };
  });
}

// -------------------------------------------------------------
// 2. Render Industries & Environment Tabs
// -------------------------------------------------------------
function renderIndustries() {
  const list = document.getElementById('industryList');
  if (!list) return;

  list.innerHTML = industries.map((ind, i) => `
    <button type="button" class="${i === 0 ? 'active' : ''}" data-ind-idx="${i}">
      <span>0${i + 1}</span> ${esc(ind.name)}
    </button>
  `).join('');

  list.querySelectorAll('button').forEach(btn => {
    btn.onclick = () => selectIndustry(+btn.dataset.indIdx);
  });

  selectIndustry(0);
}

function selectIndustry(index) {
  const ind = industries[index];
  const panel = document.getElementById('industryPanel');
  if (!panel || !ind) return;

  document.querySelectorAll('.industry-list button').forEach(b => {
    b.classList.toggle('active', +b.dataset.indIdx === index);
  });

  panel.querySelector('.industry-number').textContent = `0${index + 1}`;
  panel.querySelector('h3').textContent = ind.name;
  panel.querySelector('p').textContent = ind.desc;

  const focusBox = document.getElementById('industryFocus');
  if (focusBox) {
    focusBox.innerHTML = ind.focus.map((f, i) => `<span><b>0${i + 1}</b> ${esc(f)}</span>`).join('');
  }

  const stackBox = document.getElementById('industryStack');
  if (stackBox) {
    stackBox.innerHTML = ind.stack.map(s => `<span>${esc(s)}</span>`).join('');
  }

  const cta = document.getElementById('industryCta');
  if (cta) {
    cta.textContent = ind.cta;
    cta.onclick = () => {
      openModal('assessment', `I am looking for a customized security solution for: ${ind.name}.`);
    };
  }
}

// -------------------------------------------------------------
// 3. Standalone CCTV Storage & Hard Drive Calculator (NEW)
// -------------------------------------------------------------
function initStorageCalculator() {
  const camInput = document.getElementById('calcCams');
  const camMinus = document.getElementById('camMinus');
  const camPlus = document.getElementById('camPlus');
  const camVal = document.getElementById('calcCamsVal');
  const resSelect = document.getElementById('calcResolution');
  const daysSelector = document.getElementById('daysSelector');
  const modeSelector = document.getElementById('modeSelector');
  const sendWaBtn = document.getElementById('sendStorageWa');

  if (!camInput || !resSelect) return;

  let currentDays = 15;
  let currentModeHours = 24;

  const updateCalculations = () => {
    const cams = parseInt(camInput.value, 10) || 4;
    camVal.textContent = `${cams} Camera${cams > 1 ? 's' : ''}`;

    const resMp = parseInt(resSelect.value, 10) || 4;
    let resName = '4MP 2K QHD';
    let mbpsPerCam = 3.5; // H.265+ high efficiency bitrate

    if (resMp === 2) {
      resName = '2MP 1080p Full HD';
      mbpsPerCam = 2.0;
    } else if (resMp === 8) {
      resName = '8MP 4K Ultra HD';
      mbpsPerCam = 7.0;
    }

    // Daily GB per camera = (Mbps * 3600 * hours) / (8 * 1024)
    const dailyGbPerCam = (mbpsPerCam * 3600 * currentModeHours) / 8192;
    const totalDailyGb = dailyGbPerCam * cams;
    const totalGigabytes = totalDailyGb * currentDays;
    const totalTerabytes = totalGigabytes / 1000;

    // Recommended Drive Sizing
    let recommendedHdd = '1 TB';
    let hddLabel = 'Western Digital Purple / Seagate SkyHawk Surveillance HDD';

    if (totalTerabytes <= 0.85) {
      recommendedHdd = '1 TB';
    } else if (totalTerabytes <= 1.8) {
      recommendedHdd = '2 TB';
    } else if (totalTerabytes <= 3.6) {
      recommendedHdd = '4 TB';
    } else if (totalTerabytes <= 5.5) {
      recommendedHdd = '6 TB';
    } else if (totalTerabytes <= 7.5) {
      recommendedHdd = '8 TB';
    } else {
      recommendedHdd = '10 TB+ (Dual Drive NVR)';
    }

    // Required Internet Upload Speed for Remote App
    const minUploadMbps = Math.max(2, Math.round(cams * 1.2));

    // Update DOM
    document.getElementById('hddResultSize').textContent = recommendedHdd;
    document.getElementById('hddResultLabel').textContent = hddLabel;
    document.getElementById('dailyDataVal').textContent = `~${Math.round(totalDailyGb)} GB / Day`;
    document.getElementById('totalDataVal').textContent = `${totalTerabytes.toFixed(2)} TB Needed`;
    document.getElementById('uploadSpeedVal').textContent = `${minUploadMbps}–${minUploadMbps * 2} Mbps (For Smooth App Streaming)`;

    // Attach data for WhatsApp Button
    if (sendWaBtn) {
      sendWaBtn.onclick = () => {
        const payload = {
          cams,
          resolution: resName,
          days: currentDays,
          mode: currentModeHours === 24 ? '24/7 Continuous' : 'Smart Motion (~12 hrs/day)',
          hddSize: recommendedHdd,
          hddLabel,
          dailyData: `${Math.round(totalDailyGb)} GB/day`
        };
        window.open(buildWhatsAppUrl({ type: 'storage_calc', data: payload }), '_blank', 'noopener');
      };
    }
  };

  // Event Listeners
  camInput.oninput = updateCalculations;

  if (camMinus) {
    camMinus.onclick = () => {
      camInput.value = Math.max(1, parseInt(camInput.value, 10) - 1);
      updateCalculations();
    };
  }

  if (camPlus) {
    camPlus.onclick = () => {
      camInput.value = Math.min(32, parseInt(camInput.value, 10) + 1);
      updateCalculations();
    };
  }

  resSelect.onchange = updateCalculations;

  if (daysSelector) {
    daysSelector.querySelectorAll('.pill-btn').forEach(btn => {
      btn.onclick = () => {
        daysSelector.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDays = parseInt(btn.dataset.days, 10) || 15;
        document.getElementById('calcDaysVal').textContent = `${currentDays} Days`;
        updateCalculations();
      };
    });
  }

  if (modeSelector) {
    modeSelector.querySelectorAll('.pill-btn').forEach(btn => {
      btn.onclick = () => {
        modeSelector.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentModeHours = parseInt(btn.dataset.mode, 10) || 24;
        updateCalculations();
      };
    });
  }

  updateCalculations();
}

// -------------------------------------------------------------
// 4. Interactive Property Planner & 2D Blueprint Cones
// -------------------------------------------------------------
const plannerZones = {
  'Terrace': {
    camera: 'Turret / Bullet (4MP)', coverage: 'Wide Angle (105°)', night: 'Starlight Color LED', ai: 'Line-Crossing Filter',
    text: 'Elevated open terrace requires wide-angle visibility covering roof access stairs and parapet edges.',
    pos: ['45%', '10%', '0deg'], profile: [85, 75, 90, 25]
  },
  'Side Entrance': {
    camera: 'Turret / Dome (4MP)', coverage: 'Medium Field (85°)', night: 'Infrared Night 30m', ai: 'Human Motion Alert',
    text: 'Side walkways are frequent blind spots; camera placement should cover the footpath without street glare.',
    pos: ['14%', '24%', '-50deg'], profile: [75, 70, 75, 45]
  },
  'Backyard': {
    camera: 'Bullet Outdoor (4MP)', coverage: 'Long-Range (90°)', night: 'ColorVu Night LED', ai: 'Perimeter Intrusion Alert',
    text: 'Covers rear boundary walls, garden sheds, and perimeter fence lines often unlit at night.',
    pos: ['78%', '22%', '50deg'], profile: [80, 85, 85, 30]
  },
  'Gate': {
    camera: 'Bullet / PTZ (4K)', coverage: 'Long Distance (110°)', night: 'ColorVu + Warm Spotlight', ai: 'Vehicle Plate & Face ID',
    text: 'The main vehicle and pedestrian entry checkpoint. Highest priority for license plate recognition.',
    pos: ['10%', '48%', '-90deg'], profile: [95, 90, 95, 15]
  },
  'Stairway': {
    camera: 'Discreet Dome (2MP/4MP)', coverage: 'Focused Corridor (75°)', night: 'Standard IR', ai: 'Motion Logging',
    text: 'Internal transition zone monitoring movement between ground and upper levels.',
    pos: ['82%', '48%', '90deg'], profile: [70, 65, 65, 30]
  },
  'Front Door': {
    camera: 'Dome / Turret (4MP)', coverage: 'Wide Angle (105°)', night: 'ColorVu / Starlight LED', ai: 'Human & Package Detection',
    text: 'A wide-angle turret or dome covers the main entrance and approach path without creating blind spots.',
    pos: ['45%', '64%', '180deg'], profile: [90, 85, 90, 20]
  },
  'Parking': {
    camera: 'Bullet Outdoor (4MP)', coverage: 'Wide Driveway (100°)', night: 'ColorVu Full Color', ai: 'Vehicle Motion Filter',
    text: 'Positioned to clearly record vehicle arrivals, garage doors, and parked cars.',
    pos: ['16%', '82%', '-140deg'], profile: [85, 80, 90, 25]
  },
  'Driveway': {
    camera: 'Long-Range Bullet (4MP)', coverage: 'Deep Sightline (90°)', night: 'IR 50m / Warm LED', ai: 'Vehicle Detection',
    text: 'Provides early advance visibility of approaching vehicles along the private driveway.',
    pos: ['45%', '86%', '180deg'], profile: [90, 85, 95, 20]
  },
  'Living Area': {
    camera: 'Discreet Mini Dome', coverage: 'Wide Indoor (110°)', night: 'Smart IR', ai: 'Privacy Masking',
    text: 'Indoor monitoring of key transit hallways while respecting family privacy zones.',
    pos: ['76%', '80%', '135deg'], profile: [65, 55, 75, 20]
  }
};

const plannerState = {
  current: 'Front Door',
  selected: new Set(['Front Door']),
  style: null
};

function renderZoneDetail(name) {
  const z = plannerZones[name] || plannerZones['Front Door'];
  document.getElementById('zoneTitle').textContent = name;
  document.getElementById('zoneText').textContent = z.text;
  document.getElementById('zoneCamera').textContent = plannerState.style ? `${plannerState.style} Camera` : z.camera;
  document.getElementById('zoneCoverage').textContent = z.coverage;
  document.getElementById('zoneNight').textContent = z.night;
  document.getElementById('zoneAI').textContent = z.ai;

  const [l, tp, r] = z.pos;
  const pin = document.getElementById('camPin');
  const fov = document.getElementById('fov');

  if (pin && fov) {
    pin.style.left = l;
    pin.style.top = tp;
    fov.style.left = l;
    fov.style.top = tp;
    fov.style.transform = `translate(-50%, -100%) rotate(${r})`;
  }

  const profileLabels = ['Coverage Width', 'Night Clarity', 'Detail Resolving', 'Blind-Spot Mitigation'];
  const profileBox = document.getElementById('coverageProfile');
  if (profileBox) {
    profileBox.innerHTML = z.profile.map((v, i) => `
      <div class="coverage-row">
        <span>${profileLabels[i]}</span>
        <div class="coverage-track"><div class="coverage-fill" style="width:${v}%"></div></div>
      </div>
    `).join('');
  }
}

function updatePlannerSummary() {
  const n = plannerState.selected.size;
  document.getElementById('sumAreas').textContent = `0${n} / 09`;
  document.getElementById('sumPriority').textContent = n > 3 ? 'High' : 'Normal';
  document.getElementById('sumCoverage').textContent = plannerState.style ? plannerState.style.toUpperCase() : 'OPTIMIZED MIX';
}

function setupPlanner() {
  document.querySelectorAll('.zone').forEach(btn => {
    btn.onclick = () => {
      const name = btn.dataset.zone;
      plannerState.current = name;

      if (plannerState.selected.has(name) && plannerState.selected.size > 1) {
        plannerState.selected.delete(name);
      } else {
        plannerState.selected.add(name);
      }

      document.querySelectorAll('.zone').forEach(z => {
        z.classList.toggle('active', plannerState.selected.has(z.dataset.zone));
      });

      renderZoneDetail(name);
      updatePlannerSummary();
    };
  });

  document.querySelectorAll('.camera-style-row button').forEach(btn => {
    btn.onclick = () => {
      const wasActive = btn.classList.contains('active');
      document.querySelectorAll('.camera-style-row button').forEach(b => b.classList.remove('active'));
      plannerState.style = wasActive ? null : btn.dataset.style;
      if (!wasActive) btn.classList.add('active');
      renderZoneDetail(plannerState.current);
      updatePlannerSummary();
    };
  });

  document.querySelectorAll('.priority-chips button').forEach(btn => {
    btn.onclick = () => {
      const wasActive = btn.classList.contains('active');
      document.querySelectorAll('.priority-chips button').forEach(b => b.classList.remove('active'));
      if (!wasActive) {
        btn.classList.add('active');
        document.getElementById('priorityNote').textContent = `Suggested target: ${btn.dataset.priority} optimized lens & IR illuminator.`;
      } else {
        document.getElementById('priorityNote').textContent = 'Select a priority above to see targeted equipment considerations.';
      }
    };
  });

  document.getElementById('zoneAssessBtn').onclick = () => {
    openModal('assessment', `I am interested in getting a CCTV site survey for: ${plannerState.current}.`);
  };

  document.getElementById('summaryAssessBtn').onclick = () => {
    const list = Array.from(plannerState.selected).join(', ');
    openModal('assessment', `I built a custom blueprint covering: ${list}. Please arrange a ₹500 site visit.`);
  };

  document.getElementById('plannerWaBtn').onclick = () => {
    const list = Array.from(plannerState.selected).join(', ');
    const currentZ = plannerZones[plannerState.current];
    const payload = {
      zones: list,
      camera: plannerState.style ? `${plannerState.style} Camera` : currentZ.camera,
      priority: document.querySelector('.priority-chips button.active')?.dataset.priority || 'General coverage'
    };
    window.open(buildWhatsAppUrl({ type: 'zone_planner', data: payload }), '_blank', 'noopener');
  };

  renderZoneDetail('Front Door');
  updatePlannerSummary();
}

// -------------------------------------------------------------
// 5. 5-Step Smart Security Assessment Wizard
// -------------------------------------------------------------
const assessmentState = {
  step: 1,
  property: 'Home / Villa',
  floors: 1,
  entrances: 2,
  outdoor: ['Parking / Garage', 'Main Entry Gate'],
  priorities: ['Visitor Identification', 'Night Trespassing'],
  level: 'Smart Pro (2K IP)',
  time: '24 / 7 Continuous',
  remote: 'Yes, definitely (Mobile App)'
};

function calculateAssessmentCameras() {
  let count = 2 + Math.min(assessmentState.floors, 4) + Math.min(assessmentState.entrances, 3) + Math.min(assessmentState.outdoor.length, 3);
  if (['Factory / MIDC Unit', 'Warehouse / Godown'].includes(assessmentState.property)) count += 3;
  if (assessmentState.level.includes('Enterprise')) count += 2;
  return { min: count, max: count + 2 };
}

function renderAssessmentPlan() {
  const c = calculateAssessmentCameras();
  document.getElementById('assessmentResult').textContent = `${c.min}–${c.max} Cameras`;
  document.getElementById('planProperty').textContent = assessmentState.property;
  document.getElementById('planLevel').textContent = assessmentState.level;
  document.getElementById('planRemoteText').textContent = `Remote App: ${assessmentState.remote.includes('Yes') ? 'Yes' : 'Local Only'}`;

  const allAreas = Array.from(new Set([...assessmentState.outdoor, ...assessmentState.priorities]));
  document.getElementById('planZones').innerHTML = (allAreas.length ? allAreas : ['Main Entry', 'Perimeter']).map(z => `
    <span class="plan-zone-pill">${esc(z)}</span>
  `).join('');
}

function assessmentGo(step) {
  assessmentState.step = step;
  document.querySelectorAll('.assessment-step').forEach(p => {
    p.classList.toggle('active', +p.dataset.panel === step);
  });

  document.querySelectorAll('.progress-step').forEach(p => {
    const n = +p.dataset.step;
    p.classList.toggle('active', n === step);
    p.classList.toggle('done', n < step);
  });

  if (step === 5) renderAssessmentPlan();
  document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setupAssessment() {
  // Step 1: Property
  document.querySelectorAll('.property-option').forEach(b => {
    b.onclick = () => {
      document.querySelectorAll('.property-option').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      assessmentState.property = b.querySelector('span').textContent;
    };
  });

  // Step 2: Steppers
  document.querySelectorAll('[data-count]').forEach(b => {
    b.onclick = () => {
      const key = b.dataset.count;
      const dir = +b.dataset.dir;
      assessmentState[key] = Math.max(1, Math.min(10, assessmentState[key] + dir));
      document.getElementById('assessment' + key.charAt(0).toUpperCase() + key.slice(1)).textContent = assessmentState[key];
    };
  });

  // Step 2: Checkboxes
  document.querySelectorAll('#assessmentOutdoor button').forEach(b => {
    b.onclick = () => {
      b.classList.toggle('active');
      const z = b.dataset.zone;
      if (assessmentState.outdoor.includes(z)) {
        assessmentState.outdoor = assessmentState.outdoor.filter(x => x !== z);
      } else {
        assessmentState.outdoor.push(z);
      }
    };
  });

  document.querySelectorAll('#assessmentPriority button').forEach(b => {
    b.onclick = () => {
      b.classList.toggle('active');
      const z = b.dataset.zone;
      if (assessmentState.priorities.includes(z)) {
        assessmentState.priorities = assessmentState.priorities.filter(x => x !== z);
      } else {
        assessmentState.priorities.push(z);
      }
    };
  });

  // Step 3: Protection Level & Time
  document.querySelectorAll('.protection-options button').forEach(b => {
    b.onclick = () => {
      document.querySelectorAll('.protection-options button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      assessmentState.level = b.querySelector('b').textContent;
    };
  });

  document.querySelectorAll('#assessmentTime button').forEach(b => {
    b.onclick = () => {
      document.querySelectorAll('#assessmentTime button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      assessmentState.time = b.textContent;
    };
  });

  // Step 4: Remote
  document.querySelectorAll('#assessmentRemote button').forEach(b => {
    b.onclick = () => {
      document.querySelectorAll('#assessmentRemote button').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      assessmentState.remote = b.textContent;
    };
  });

  // Navigation
  document.querySelectorAll('.assessment-next').forEach(b => {
    b.onclick = () => assessmentGo(Math.min(5, assessmentState.step + 1));
  });

  document.querySelectorAll('.assessment-prev').forEach(b => {
    b.onclick = () => assessmentGo(Math.max(1, assessmentState.step - 1));
  });

  document.getElementById('editAssessment').onclick = () => assessmentGo(1);

  // WhatsApp Plan Dispatch
  document.getElementById('whatsappPlan').onclick = () => {
    const c = calculateAssessmentCameras();
    const payload = {
      property: assessmentState.property,
      camRange: `${c.min}–${c.max} Cameras`,
      floors: assessmentState.floors,
      entrances: assessmentState.entrances,
      outdoor: assessmentState.outdoor.join(', '),
      priorities: assessmentState.priorities.join(', '),
      level: assessmentState.level,
      remote: assessmentState.remote
    };
    window.open(buildWhatsAppUrl({ type: 'assessment_plan', data: payload }), '_blank', 'noopener');
  };

  document.getElementById('bookPlan').onclick = () => {
    const c = calculateAssessmentCameras();
    openModal('assessment', `I completed the online planner for my ${assessmentState.property} (${c.min}-${c.max} cameras). Please arrange an on-site inspection visit.`);
  };
}

// -------------------------------------------------------------
// 6. Monitoring & Mobile App Simulation
// -------------------------------------------------------------
function setupMonitoring() {
  const tabs = {
    live: ['LIVE STREAM', 'Viewing HD connected cameras in real-time with zero latency.'],
    alerts: ['SMART ALERTS', 'Person detected crossing boundary wall at 03:42 AM.'],
    playback: ['PLAYBACK TIMELINE', 'Reviewing stored surveillance video from WD Purple Hard Drive.'],
    devices: ['DEVICE HEALTH', 'All 4 PoE cameras online, NVR recording, network healthy.']
  };

  document.querySelectorAll('[data-monitor]').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('[data-monitor]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const [title, desc] = tabs[btn.dataset.monitor] || tabs.live;
      document.getElementById('monitorInfo').innerHTML = `<b>${title}</b><span>${desc}</span>`;
    };
  });

  document.querySelectorAll('.monitor-feed').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.monitor-feed').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const name = btn.dataset.feed;
      document.getElementById('phonePreviewFeed').querySelector('span').textContent = `● LIVE • ${name.toUpperCase()}`;
    };
  });

  document.querySelectorAll('[data-phone-feed]').forEach(btn => {
    btn.onclick = () => {
      const name = btn.dataset.phoneFeed;
      document.getElementById('phonePreviewFeed').querySelector('span').textContent = `● LIVE • ${name.toUpperCase()}`;
    };
  });
}

// -------------------------------------------------------------
// 7. Night Lab Slider & Meters
// -------------------------------------------------------------
function setupNightLab() {
  const slider = document.getElementById('nightSlider');
  const layer = document.querySelector('.night-scene-layer');

  if (slider && layer) {
    slider.oninput = () => {
      layer.style.clipPath = `inset(0 0 0 ${slider.value}%)`;
    };
  }

  const techBenchmarks = {
    'Standard Low-Light': [50, 45, 20, 40],
    'IR Night Vision': [75, 70, 10, 80],
    'Color Night Vision': [90, 85, 95, 80]
  };

  document.querySelectorAll('[data-night-tech]').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('[data-night-tech]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const [v, d, c, l] = techBenchmarks[btn.dataset.nightTech] || techBenchmarks['Color Night Vision'];
      document.getElementById('meterVisibility').style.width = `${v}%`;
      document.getElementById('meterDetail').style.width = `${d}%`;
      document.getElementById('meterColor').style.width = `${c}%`;
      document.getElementById('meterLight').style.width = `${l}%`;
    };
  });

  const envData = {
    Home: ['HOME ENVIRONMENT', 'Entry points, porch lights, and driveway approaches benefit greatly from warm Starlight illumination.', 'Color Night Vision Turret Cameras'],
    Parking: ['PARKING & GARAGE', 'Vehicle headlights and reflections are mitigated by Wide Dynamic Range (WDR) sensors.', '4MP Bullet with License Plate Mode'],
    Shop: ['RETAIL SHOPFRONT', 'Shutter approaches and glass storefronts maintain 24/7 full-color recording.', 'ColorVu Mini Domes + Audio Mic'],
    Factory: ['MIDC INDUSTRIAL PERIMETER', 'Long 150m boundary walls require dual IR illuminators and line-crossing alerts.', '360° PTZ + Long-Range Bullets'],
    Warehouse: ['WAREHOUSE & GODOWN', 'High ceilings and dimly lit storage aisles benefit from high-sensitivity Starlight sensors.', '4K Ultra-HD Turret Cameras']
  };

  document.querySelectorAll('#nightEnvironment button').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('#nightEnvironment button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const env = envData[btn.dataset.environment] || envData.Home;
      document.getElementById('nightEnvironmentTitle').textContent = env[0];
      document.getElementById('nightEnvironmentText').textContent = env[1];
      document.getElementById('nightRecommendation').textContent = env[2];
    };
  });
}

// -------------------------------------------------------------
// 8. Installation Workflow Tabs
// -------------------------------------------------------------
function setupInstallationWorkflow() {
  const serviceData = {
    discover: {
      eyebrow: '01 / SITE ASSESSMENT',
      title: 'Understand before we install.',
      text: 'We inspect the property, identify coverage zones, evaluate cable conduit paths, check internet connectivity, and calculate power loads.',
      items: ['✓ Complete blind-spot review', '✓ Camera positioning & viewing angles', '✓ Cable conduit & casing route planning', '✓ Power backup & UPS assessment']
    },
    plan: {
      eyebrow: '02 / SYSTEM ENGINEERING',
      title: 'Right camera lens for each location.',
      text: 'Lens millimeter sizing matters. Wide-angle 2.8mm for indoors, narrow 6mm for long driveways, and optical zoom for boundaries.',
      items: ['✓ Optical focal length selection', '✓ Storage hard drive calculations', '✓ PoE power budget sizing', '✓ Router network configuration']
    },
    install: {
      eyebrow: '03 / CLEAN CONDUIT CABLING',
      title: 'Craftsmanship you can be proud of.',
      text: 'Zero sagging or loose wires. All cabling is secured inside heavy-duty PVC casing pipes and weather-sealed junction boxes.',
      items: ['✓ Heavy-duty PVC conduits', '✓ Weatherproof junction boxes', '✓ Copper RJ45 Cat6 cabling', '✓ Organized NVR rack mounting']
    },
    configure: {
      eyebrow: '04 / NVR & STORAGE SETUP',
      title: 'Configured for high efficiency & privacy.',
      text: 'We set up H.265+ compression, schedule continuous vs. motion recording, and configure hard drive health monitoring.',
      items: ['✓ H.265+ smart video compression', '✓ 24/7 continuous & motion recording', '✓ Hard drive health SMART alert', '✓ Admin password configuration']
    },
    connect: {
      eyebrow: '05 / REMOTE APP SETUP',
      title: 'Live viewing on all family devices.',
      text: 'We install and configure the mobile app on all your household or manager smartphones with secure encryption.',
      items: ['✓ iPhone & Android app setup', '✓ Real-time motion push alerts', '✓ Multi-user access permission', '✓ Live stream latency tuning']
    },
    verify: {
      eyebrow: '06 / TESTING & CLIENT HANDOVER',
      title: 'We test every pixel before signoff.',
      text: 'Full physical test of night vision, recording playback, camera angles, and a complete tutorial on how to use your system.',
      items: ['✓ Night-vision illumination test', '✓ Video playback verification', '✓ 1-Year on-site warranty card', '✓ Full client master handover']
    }
  };

  const updateService = key => {
    const d = serviceData[key] || serviceData.discover;
    document.getElementById('serviceDetailEyebrow').textContent = d.eyebrow;
    document.getElementById('serviceDetailTitle').textContent = d.title;
    document.getElementById('serviceDetailText').textContent = d.text;
    document.getElementById('serviceDetailIncludes').innerHTML = d.items.map(x => `<span>${esc(x)}</span>`).join('');
    document.querySelectorAll('.service-step').forEach(b => b.classList.toggle('active', b.dataset.serviceStep === key));
  };

  document.querySelectorAll('.service-step').forEach(b => {
    b.onclick = () => updateService(b.dataset.serviceStep);
  });
}

// -------------------------------------------------------------
// 9. FAQ Categorizer & Accordion
// -------------------------------------------------------------
function renderFaq(category = 'all', openIdx = null) {
  const box = document.getElementById('faq');
  if (!box) return;

  const visible = faqs.map((f, i) => ({ ...f, i })).filter(f => category === 'all' || f.cat === category);

  box.innerHTML = visible.map(f => `
    <div class="faq-item ${openIdx === f.i ? 'open' : ''}" data-faq-index="${f.i}">
      <button class="faq-q" type="button" aria-expanded="${openIdx === f.i}">
        <span>${esc(f.q)}</span>
        <b>${openIdx === f.i ? '−' : '+'}</b>
      </button>
      <div class="faq-a">
        <p>${esc(f.a)}</p>
      </div>
    </div>
  `).join('');

  box.querySelectorAll('.faq-q').forEach(btn => {
    btn.onclick = () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      box.querySelectorAll('.faq-item.open').forEach(x => {
        x.classList.remove('open');
        x.querySelector('b').textContent = '+';
        x.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.querySelector('b').textContent = '−';
        btn.setAttribute('aria-expanded', 'true');
      }
    };
  });
}

function initFaq() {
  document.querySelectorAll('.faq-filter').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.faq-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFaq(btn.dataset.faqCat);
    };
  });

  renderFaq('all', 0);
}

// -------------------------------------------------------------
// 10. Service Area Live Checker
// -------------------------------------------------------------
function setupServiceAreaChecker() {
  const checkBtn = document.getElementById('checkServiceArea');
  const input = document.getElementById('serviceLocation');
  const result = document.getElementById('serviceAreaResult');

  if (!checkBtn || !input) return;

  const localAreas = [
    'mahad', 'mangaon', 'poladpur', 'birwadi', 'midc', 'goregaon', 'lonere', 'khed', 'nizampur', 'dasgaon', 'nandgaon'
  ];

  checkBtn.onclick = () => {
    const loc = input.value.trim();
    if (!loc) {
      result.textContent = 'Please enter your town or area name.';
      return;
    }

    const lower = loc.toLowerCase();
    const isCovered = localAreas.some(a => lower.includes(a));

    if (isCovered) {
      result.innerHTML = `✅ <strong>Yes!</strong> We provide fast same-day/next-day site assessments in <strong>${esc(loc)}</strong>.`;
      setTimeout(() => {
        window.open(buildWhatsAppUrl({ type: 'area_check', data: { location: loc } }), '_blank', 'noopener');
      }, 600);
    } else {
      result.innerHTML = `📍 Confirming coverage for <strong>${esc(loc)}</strong>... opening WhatsApp with Faheem.`;
      window.open(buildWhatsAppUrl({ type: 'area_check', data: { location: loc } }), '_blank', 'noopener');
    }
  };
}

// -------------------------------------------------------------
// 11. Modal Forms & Lead Dispatch
// -------------------------------------------------------------
function openModal(type, prefillMessage = '') {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  const titles = {
    assessment: 'Book a ₹500 On-Site Security Assessment',
    quote: 'Request a Personalized CCTV Quotation',
    technician: 'Book an On-Site Technician Visit'
  };

  const descriptions = {
    assessment: 'Faheem Abbas Alekar will physically inspect your property, check blind spots, and prepare an itemized quote.',
    quote: 'Tell us your camera count and property details, and we will send an estimate via WhatsApp or call.',
    technician: 'Fast diagnostic visit for existing CCTV repair, lens cleaning, hard drive replacement, or mobile viewing issues.'
  };

  content.innerHTML = `
    <div>
      <div class="eyebrow">AAN SECURITY • DIRECT BOOKING</div>
      <h2>${titles[type] || 'Contact AAN Security'}</h2>
      <p>${descriptions[type] || 'Fill in your details below for a fast response.'}</p>
      
      <form id="leadForm" data-type="${type}">
        <div class="form-grid">
          <div class="form-field">
            <label>YOUR NAME *</label>
            <input name="name" required placeholder="e.g. Rahul Patil" autocomplete="name">
          </div>
          <div class="form-field">
            <label>MOBILE NUMBER *</label>
            <input name="phone" required type="tel" placeholder="e.g. 98220 XXXXX" autocomplete="tel">
          </div>
          <div class="form-field">
            <label>TOWN / LOCALITY *</label>
            <input name="locality" required placeholder="e.g. Mahad, Mangaon, Birwadi">
          </div>
          <div class="form-field">
            <label>PROPERTY TYPE</label>
            <select name="propertyType">
              <option>Home / Villa</option>
              <option>Apartment / Flat</option>
              <option>Retail Shop / Showroom</option>
              <option>Office / Corporate</option>
              <option>Factory / MIDC Unit</option>
              <option>Warehouse / Godown</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-field full">
            <label>SPECIFIC REQUIREMENT / MESSAGE</label>
            <textarea name="message" placeholder="Tell us about your property, number of cameras needed, or existing CCTV problem...">${esc(prefillMessage)}</textarea>
          </div>
          <div class="honeypot"><input name="website_trap" tabindex="-1" autocomplete="off"></div>
        </div>
        
        <div class="form-actions">
          <button class="btn btn-gold" type="submit">💬 Send via WhatsApp ↗</button>
          <button class="btn btn-outline" type="button" data-close>Cancel</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  const form = document.getElementById('leadForm');
  form.onsubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    // Anti-spam check
    if (data.website_trap) return;

    // Save lead locally
    localStorage.setItem('aan_last_lead', JSON.stringify(data));

    const msg = `*AAN Security — Website Request* 📋\n\n` +
      `• *Name:* ${data.name}\n` +
      `• *Phone:* ${data.phone}\n` +
      `• *Location:* ${data.locality}\n` +
      `• *Property:* ${data.propertyType}\n` +
      `• *Details:* ${data.message || 'Standard consultation requested'}\n\n` +
      `Hi Faheem, please confirm receipt of my request and contact me!`;

    window.open(`https://wa.me/${state.phone}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    closeModal();
  };
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function setupModals() {
  document.querySelectorAll('[data-modal]').forEach(b => {
    b.onclick = () => openModal(b.dataset.modal);
  });

  document.querySelectorAll('[data-close]').forEach(b => {
    b.onclick = closeModal;
  });

  document.getElementById('modal')?.addEventListener('click', e => {
    if (e.target.dataset.close !== undefined) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// -------------------------------------------------------------
// 12. Header Scroll & Mobile Navigation
// -------------------------------------------------------------
function setupHeader() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');

  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }
  });

  if (toggle && header) {
    toggle.onclick = () => {
      const open = header.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', String(open));
    };

    document.querySelectorAll('.nav a').forEach(a => {
      a.onclick = () => {
        header.classList.remove('mobile-open');
        toggle.setAttribute('aria-expanded', 'false');
      };
    });
  }
}

// -------------------------------------------------------------
// 13. Smooth Scroll Triggers
// -------------------------------------------------------------
function setupSmoothScroll() {
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.onclick = () => {
      const target = document.querySelector(btn.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  });
}

// Initialize Everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  renderCameras();
  renderIndustries();
  initStorageCalculator();
  setupPlanner();
  setupAssessment();
  setupMonitoring();
  setupNightLab();
  setupInstallationWorkflow();
  initFaq();
  setupServiceAreaChecker();
  setupModals();
  setupHeader();
  setupSmoothScroll();
});
