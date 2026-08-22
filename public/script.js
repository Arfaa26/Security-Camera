/**
 * AAN Security & IT Solutions — Core Interactive Controller
 * Built for performance, high conversions, and seamless WhatsApp lead generation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Copyright Year
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Mobile Navbar Toggle & Header Scroll
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menuToggle');
  
  if (menuToggle && header) {
    menuToggle.addEventListener('click', () => {
      header.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => header.classList.remove('mobile-open'));
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. CCTV Storage Calculator Engine
  initStorageCalculator();

  // 4. 4-Step Smart Security Planner Wizard
  initPlannerWizard();

  // 5. Day vs Night Comparison Slider
  initNightLab();

  // 6. Area Checker
  initAreaChecker();

  // 7. FAQ Accordion
  initFaqAccordion();

  // 8. Modal Handlers
  initModals();
});

/* ==========================================================================
   CCTV STORAGE CALCULATOR
   ========================================================================== */
function initStorageCalculator() {
  const range = document.getElementById('cameraCountRange');
  const countDisplay = document.getElementById('cameraCountDisplay');
  const resBtns = document.querySelectorAll('#resolutionSelector .select-btn');
  const daysBtns = document.querySelectorAll('#daysSelector .select-btn');
  const modeBtns = document.querySelectorAll('#modeSelector .select-btn');

  const hddSizeResult = document.getElementById('hddSizeResult');
  const hddNameResult = document.getElementById('hddNameResult');
  const dailyGbResult = document.getElementById('dailyGbResult');
  const totalGbResult = document.getElementById('totalGbResult');
  const bandwidthResult = document.getElementById('bandwidthResult');
  const btnShareStorageWA = document.getElementById('btnShareStorageWA');

  let cameras = 4;
  let resolution = '2K';
  let days = 15;
  let mode = 'continuous';

  function calculate() {
    // Bitrate mappings for H.265+ (in Mbps per stream at 25fps)
    const bitrates = {
      '1080p': 1.5,
      '2K': 3.0,
      '4K': 6.0
    };

    const mbps = bitrates[resolution] || 3.0;
    const hours = mode === 'continuous' ? 24 : 14;

    // Daily GB = (Bitrate Mbps * 3600s * Hours / 8192) * Cameras
    const dailyGb = Math.round(((mbps * 3600 * hours) / 8192) * cameras);
    const totalGb = Math.round(dailyGb * days);
    const totalTb = totalGb / 1000;

    // Determine standard Surveillance HDD size
    let recommendedHdd = '1 TB';
    let brandModel = 'Western Digital Purple / Seagate SkyHawk';

    if (totalTb <= 1) recommendedHdd = '1 TB';
    else if (totalTb <= 2) recommendedHdd = '2 TB';
    else if (totalTb <= 4) recommendedHdd = '4 TB';
    else if (totalTb <= 6) recommendedHdd = '6 TB';
    else if (totalTb <= 8) recommendedHdd = '8 TB';
    else if (totalTb <= 10) recommendedHdd = '10 TB';
    else recommendedHdd = '16 TB (RAID Storage)';

    // Bandwidth
    const uploadSpeed = Math.ceil(cameras * (mbps * 0.85));

    // Update UI
    if (countDisplay) countDisplay.textContent = `${cameras} ${cameras === 1 ? 'Camera' : 'Cameras'}`;
    if (hddSizeResult) hddSizeResult.textContent = recommendedHdd;
    if (hddNameResult) hddNameResult.textContent = `${brandModel} (24/7 Dedicated)`;
    if (dailyGbResult) dailyGbResult.textContent = `~${dailyGb.toLocaleString()} GB / day`;
    if (totalGbResult) totalGbResult.textContent = `~${totalTb >= 1 ? totalTb.toFixed(1) + ' TB' : totalGb + ' GB'}`;
    if (bandwidthResult) bandwidthResult.textContent = `${uploadSpeed} Mbps Upload`;

    // WhatsApp Action URL
    if (btnShareStorageWA) {
      btnShareStorageWA.onclick = () => {
        const text = [
          `*AAN Security — Storage Estimate*`,
          `━━━━━━━━━━━━━━━━━━━`,
          `📹 *Cameras:* ${cameras}`,
          `🎯 *Resolution:* ${resolution === '1080p' ? '1080p Full HD' : resolution === '2K' ? '4MP 2K Super HD' : '8MP 4K Ultra HD'}`,
          `📅 *Retention Days:* ${days} Days`,
          `⚙️ *Recording Mode:* ${mode === 'continuous' ? '24/7 Continuous' : 'Smart Motion (~14h/day)'}`,
          `💾 *Recommended HDD:* ${recommendedHdd} WD Purple / SkyHawk`,
          `━━━━━━━━━━━━━━━━━━━`,
          `Hi Faheem, please give me a quotation for this CCTV storage setup.`
        ].join('\n');

        window.open(`https://wa.me/917218197119?text=${encodeURIComponent(text)}`, '_blank');
      };
    }
  }

  // Event Listeners
  if (range) {
    range.addEventListener('input', (e) => {
      cameras = parseInt(e.target.value, 10);
      calculate();
    });
  }

  resBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      resBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      resolution = btn.dataset.val;
      calculate();
    });
  });

  daysBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      daysBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      days = parseInt(btn.dataset.val, 10);
      calculate();
    });
  });

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mode = btn.dataset.val;
      calculate();
    });
  });

  calculate();
}

/* ==========================================================================
   4-STEP SMART PLANNER WIZARD
   ========================================================================== */
function initPlannerWizard() {
  const wizard = document.getElementById('plannerWizard');
  if (!wizard) return;

  const steps = wizard.querySelectorAll('.wizard-step');
  let selectedProp = 'Home / Flat';
  let selectedScale = 'Compact (1-4 Cameras)';
  let selectedFeature = 'Color Night Vision';

  // Selection handlers
  wizard.querySelectorAll('.wizard-card').forEach(card => {
    card.addEventListener('click', () => {
      const parent = card.closest('.wizard-grid');
      parent.querySelectorAll('.wizard-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      if (card.dataset.prop) selectedProp = card.dataset.prop;
      if (card.dataset.scale) selectedScale = card.dataset.scale;
      if (card.dataset.feature) selectedFeature = card.dataset.feature;
    });
  });

  // Navigation handlers
  wizard.querySelectorAll('.next-step, .prev-step').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStep = btn.dataset.goto;
      steps.forEach(s => s.classList.remove('active'));
      
      const activeStep = wizard.querySelector(`.wizard-step[data-step="${targetStep}"]`);
      if (activeStep) activeStep.classList.add('active');

      if (targetStep === '4') {
        const bpProp = document.getElementById('bpProp');
        const bpScale = document.getElementById('bpScale');
        const bpFeature = document.getElementById('bpFeature');
        
        if (bpProp) bpProp.textContent = selectedProp;
        if (bpScale) bpScale.textContent = selectedScale;
        if (bpFeature) bpFeature.textContent = selectedFeature;
      }
    });
  });

  // WhatsApp share
  const btnSharePlannerWA = document.getElementById('btnSharePlannerWA');
  if (btnSharePlannerWA) {
    btnSharePlannerWA.addEventListener('click', () => {
      const text = [
        `*AAN Security — Property Security Blueprint*`,
        `━━━━━━━━━━━━━━━━━━━`,
        `🏢 *Property Type:* ${selectedProp}`,
        `📹 *Scale:* ${selectedScale}`,
        `🌟 *Priority Feature:* ${selectedFeature}`,
        `🛡️ *Includes:* NVR/DVR + WD Purple HDD + PoE Switch + Mobile App`,
        `━━━━━━━━━━━━━━━━━━━`,
        `Hi Faheem, I generated this security plan on your website. Please give me an exact price estimate.`
      ].join('\n');

      window.open(`https://wa.me/917218197119?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
}

/* ==========================================================================
   DAY VS NIGHT OPTICAL LAB
   ========================================================================== */
function initNightLab() {
  const slider = document.getElementById('compareSlider');
  const layerBw = document.getElementById('layerBw');

  if (!slider || !layerBw) return;

  slider.addEventListener('input', (e) => {
    const val = e.target.value;
    layerBw.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
  });
}

/* ==========================================================================
   SERVICE AREA CHECKER
   ========================================================================== */
function initAreaChecker() {
  const input = document.getElementById('areaInput');
  const btn = document.getElementById('btnCheckArea');
  const feedback = document.getElementById('areaFeedback');

  if (!input || !btn || !feedback) return;

  const validAreas = [
    'mahad', 'mangaon', 'poladpur', 'birwadi', 'lonere', 'goregaon', 
    'nizampur', 'khed', 'dasgaon', 'nandgaon', 'vinhere', 'indapur', 
    'varandh', 'tala', 'shrivardhan', 'nagothane', 'roha', 'raigad'
  ];

  function check() {
    const val = input.value.trim().toLowerCase();
    if (!val) {
      feedback.style.color = '#B3C8DB';
      feedback.textContent = 'Please enter your locality or town name.';
      return;
    }

    const matched = validAreas.some(area => val.includes(area) || area.includes(val));

    if (matched) {
      feedback.style.color = '#54D4B5';
      feedback.innerHTML = `✅ <b>Yes!</b> AAN Security actively services <strong>${input.value.trim()}</strong> with 24–48h on-site technician visit.`;
    } else {
      feedback.style.color = '#67BAF4';
      feedback.innerHTML = `📍 We cover most of Raigad district. <a href="https://wa.me/917218197119?text=Hi%20Faheem,%20do%20you%20service%20${encodeURIComponent(input.value.trim())}?" target="_blank" style="color:#67BAF4; text-decoration:underline;">Click to confirm ${input.value.trim()} on WhatsApp →</a>`;
    }
  }

  btn.addEventListener('click', check);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') check();
  });
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ==========================================================================
   MODALS & LEAD FORMS
   ========================================================================== */
function initModals() {
  const quoteModal = document.getElementById('quoteModal');
  const modalClose = document.getElementById('modalClose');
  const leadForm = document.getElementById('leadForm');
  const modalTitle = document.getElementById('modalTitle');
  const leadService = document.getElementById('leadService');

  if (!quoteModal) return;

  // Open triggers
  document.querySelectorAll('[data-modal-open="quoteModal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const customService = btn.dataset.service;
      if (customService && leadService) {
        leadService.value = customService;
        if (modalTitle) modalTitle.textContent = `Enquire: ${customService}`;
      } else if (modalTitle) {
        modalTitle.textContent = 'Schedule On-Site Inspection';
      }
      quoteModal.classList.add('open');
    });
  });

  // Close triggers
  if (modalClose) {
    modalClose.addEventListener('click', () => quoteModal.classList.remove('open'));
  }

  quoteModal.addEventListener('click', (e) => {
    if (e.target === quoteModal) quoteModal.classList.remove('open');
  });

  // Form submit -> WhatsApp dispatch
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('leadName')?.value.trim() || '';
      const phone = document.getElementById('leadPhone')?.value.trim() || '';
      const location = document.getElementById('leadLocation')?.value.trim() || '';
      const service = document.getElementById('leadService')?.value || 'CCTV Security Setup';
      const notes = document.getElementById('leadNotes')?.value.trim() || 'No additional notes';

      const text = [
        `*AAN Security — On-Site Inspection Request*`,
        `━━━━━━━━━━━━━━━━━━━`,
        `👤 *Client Name:* ${name}`,
        `📞 *Phone:* ${phone}`,
        `📍 *Location:* ${location}`,
        `🛠️ *Service Required:* ${service}`,
        `📝 *Notes:* ${notes}`,
        `━━━━━━━━━━━━━━━━━━━`,
        `Hello Faheem, I would like to schedule a ₹500 property assessment visit.`
      ].join('\n');

      quoteModal.classList.remove('open');
      window.open(`https://wa.me/917218197119?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
}
