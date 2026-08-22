/**
 * AAN Security & IT Solutions — Executive Corporate Controller
 * Interactive Storage Calculator, Day/Night Lab, Modals, Fullscreen Album Lightbox, and WhatsApp Quotation Builders
 */

document.addEventListener('DOMContentLoaded', () => {
  // Developer Credit Console Signature
  console.log(
    `%c ⚡ Designed & Developed by Arfa Altaf %c LinkedIn: https://www.linkedin.com/in/arfa-altaf-1050a827b/ | GitHub: https://github.com/Arfaa26 `,
    'background: #0F243E; color: #67BAF4; font-size: 12px; font-weight: bold; padding: 6px 10px; border-radius: 4px 0 0 4px;',
    'background: #388EE6; color: #FFFFFF; font-size: 12px; font-weight: 600; padding: 6px 10px; border-radius: 0 4px 4px 0;'
  );

  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Mobile Navbar Toggle
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

  // 3. CCTV Storage Calculator
  initStorageCalculator();

  // 4. Day vs Night Comparison Slider
  initNightLab();

  // 5. Area Coverage Checker
  initAreaChecker();

  // 6. FAQ Accordion
  initFaqAccordion();

  // 7. Modals & Consultation Forms
  initModalsAndForms();

  // 8. Fullscreen Project Album Lightbox
  initGalleryLightbox();
});

/* ==========================================================================
   FULLSCREEN PROJECT ALBUM LIGHTBOX
   ========================================================================== */
function initGalleryLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  const imgEl = document.getElementById('lightboxImg');
  const counterEl = document.getElementById('lightboxCounter');
  const tagEl = document.getElementById('lightboxTag');
  const locEl = document.getElementById('lightboxLocation');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');
  const waBtn = document.getElementById('lightboxWaBtn');

  const items = document.querySelectorAll('.clickable-gallery-item');
  if (!lightbox || !items.length) return;

  let currentIndex = 0;
  const albumData = [];

  items.forEach((item, idx) => {
    albumData.push({
      img: item.dataset.img || '',
      title: item.dataset.title || '',
      location: item.dataset.location || '',
      tag: item.dataset.tag || '',
      desc: item.dataset.desc || ''
    });

    item.addEventListener('click', (e) => {
      // If user clicked the direct WhatsApp link inside card, let it open
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('https://wa.me')) {
        return;
      }
      openLightbox(idx);
    });
  });

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const data = albumData[currentIndex];
    if (!data) return;

    if (imgEl) {
      imgEl.src = data.img;
      imgEl.alt = data.title;
    }
    if (counterEl) counterEl.textContent = `Project ${currentIndex + 1} of ${albumData.length}`;
    if (tagEl) tagEl.textContent = data.tag;
    if (locEl) locEl.textContent = data.location;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    if (waBtn) {
      const waMsg = `Hello Mr. Alekar (AAN Security and IT Solutions), I saw your live project "${data.title}" (${data.location}) and I want to get a quote for a similar setup for my property.`;
      waBtn.href = `https://wa.me/917218197119?text=${encodeURIComponent(waMsg)}`;
    }
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % albumData.length;
    updateLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + albumData.length) % albumData.length;
    updateLightbox();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) showNext();
      else showPrev();
    }
  }
}

/* ==========================================================================
   CCTV STORAGE CALCULATOR
   ========================================================================== */
function initStorageCalculator() {
  const range = document.getElementById('cameraCountRange');
  const countDisplay = document.getElementById('cameraCountDisplay');
  const resBtns = document.querySelectorAll('#resolutionSelector .calc-pill');
  const daysBtns = document.querySelectorAll('#daysSelector .calc-pill');
  const modeBtns = document.querySelectorAll('#modeSelector .calc-pill');

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
    const bitrates = {
      '1080p': 1.5,
      '2K': 3.0,
      '4K': 6.0
    };

    const mbps = bitrates[resolution] || 3.0;
    const hours = mode === 'continuous' ? 24 : 14;

    const dailyGb = Math.round(((mbps * 3600 * hours) / 8192) * cameras);
    const totalGb = Math.round(dailyGb * days);
    const totalTb = totalGb / 1000;

    let recommendedHdd = '1 TB';
    let brandModel = 'Western Digital Purple / Seagate SkyHawk';

    if (totalTb <= 1) recommendedHdd = '1 TB';
    else if (totalTb <= 2) recommendedHdd = '2 TB';
    else if (totalTb <= 4) recommendedHdd = '4 TB';
    else if (totalTb <= 6) recommendedHdd = '6 TB';
    else if (totalTb <= 8) recommendedHdd = '8 TB';
    else if (totalTb <= 10) recommendedHdd = '10 TB';
    else recommendedHdd = '16 TB (RAID Enterprise)';

    const uploadSpeed = Math.ceil(cameras * (mbps * 0.85));

    if (countDisplay) countDisplay.textContent = `${cameras} ${cameras === 1 ? 'Camera' : 'Cameras'}`;
    if (hddSizeResult) hddSizeResult.textContent = recommendedHdd;
    if (hddNameResult) hddNameResult.textContent = `${brandModel} (24/7 Dedicated)`;
    if (dailyGbResult) dailyGbResult.textContent = `~${dailyGb.toLocaleString()} GB / day`;
    if (totalGbResult) totalGbResult.textContent = `~${totalTb >= 1 ? totalTb.toFixed(1) + ' TB' : totalGb + ' GB'}`;
    if (bandwidthResult) bandwidthResult.textContent = `${uploadSpeed} Mbps Upload`;

    if (btnShareStorageWA) {
      btnShareStorageWA.onclick = () => {
        const text = [
          `Hello Mr. Alekar (AAN Security and IT Solutions), I want to get a quote for my property.`,
          `━━━━━━━━━━━━━━━━━━━`,
          `📹 Cameras: ${cameras}`,
          `🎯 Resolution: ${resolution === '1080p' ? '1080p Full HD' : resolution === '2K' ? '4MP 2K Super HD' : '8MP 4K Ultra HD'}`,
          `📅 Retention: ${days} Days`,
          `⚙️ Recording Mode: ${mode === 'continuous' ? '24/7 Continuous' : 'Smart Motion (~14h/day)'}`,
          `💾 Recommended HDD: ${recommendedHdd} WD Purple / SkyHawk`,
          `━━━━━━━━━━━━━━━━━━━`,
          `Please provide price and installation details.`
        ].join('\n');

        window.open(`https://wa.me/917218197119?text=${encodeURIComponent(text)}`, '_blank');
      };
    }
  }

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
   DAY VS NIGHT COMPARISON LAB
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
    'varandh', 'tala', 'shrivardhan', 'nagothane', 'roha', 'raigad', 'rajewadi', 'pale', 'kamble'
  ];

  function check() {
    const val = input.value.trim().toLowerCase();
    if (!val) {
      feedback.style.color = '#93BDE8';
      feedback.textContent = 'Please enter your town or village name.';
      return;
    }

    const matched = validAreas.some(area => val.includes(area) || area.includes(val));

    if (matched) {
      feedback.style.color = '#4ADE80';
      feedback.innerHTML = `✅ <b>Yes!</b> AAN Security actively services <strong>${input.value.trim()}</strong> with rapid on-site dispatch.`;
    } else {
      feedback.style.color = '#67BAF4';
      feedback.innerHTML = `📍 We service most of Raigad. <a href="https://wa.me/917218197119?text=Hello%20Mr.%20Alekar%20(AAN%20Security%20and%20IT%20Solutions),%20I%20want%20to%20get%20a%20quote%20for%20my%20property%20in%20${encodeURIComponent(input.value.trim())}." target="_blank" style="color:#67BAF4; text-decoration:underline; font-weight:700;">Click to confirm ${input.value.trim()} on WhatsApp →</a>`;
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
  const faqBoxes = document.querySelectorAll('.faq-box');
  
  faqBoxes.forEach(box => {
    const btn = box.querySelector('.faq-q-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = box.classList.contains('open');
      faqBoxes.forEach(b => b.classList.remove('open'));
      if (!isOpen) box.classList.add('open');
    });
  });
}

/* ==========================================================================
   MODALS & LEAD FORMS
   ========================================================================== */
function initModalsAndForms() {
  const modal = document.getElementById('quoteModal');
  const closeBtn = document.getElementById('modalClose');
  const leadModalForm = document.getElementById('leadModalForm');
  const modalTitle = document.getElementById('modalTitle');
  const mService = document.getElementById('mService');
  const quickConsultForm = document.getElementById('quickConsultForm');

  if (modal) {
    document.querySelectorAll('[data-modal-open="quoteModal"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const service = btn.dataset.service;
        if (service && mService) {
          mService.value = service;
          if (modalTitle) modalTitle.textContent = `Enquire: ${service}`;
        } else if (modalTitle) {
          modalTitle.textContent = 'Book Property Inspection';
        }
        modal.classList.add('open');
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });

    if (leadModalForm) {
      leadModalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('mName')?.value.trim() || '';
        const phone = document.getElementById('mPhone')?.value.trim() || '';
        const location = document.getElementById('mLocation')?.value.trim() || '';
        const service = document.getElementById('mService')?.value || 'CCTV Security';
        const notes = document.getElementById('mNotes')?.value.trim() || 'None';

        const text = [
          `Hello Mr. Alekar (AAN Security and IT Solutions), I want to get a quote for my property.`,
          `━━━━━━━━━━━━━━━━━━━`,
          `👤 Name: ${name}`,
          `📞 Phone: ${phone}`,
          `📍 Town / Area: ${location}`,
          `🛠️ Service: ${service}`,
          `📝 Notes: ${notes}`,
          `━━━━━━━━━━━━━━━━━━━`
        ].join('\n');

        modal.classList.remove('open');
        window.open(`https://wa.me/917218197119?text=${encodeURIComponent(text)}`, '_blank');
      });
    }
  }

  if (quickConsultForm) {
    quickConsultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const qcName = document.getElementById('qcName')?.value.trim() || '';
      const qcPhone = document.getElementById('qcPhone')?.value.trim() || '';
      const qcService = document.getElementById('qcService')?.value || 'Security Consultation';

      const text = [
        `Hello Mr. Alekar (AAN Security and IT Solutions), I want to get a quote for my property.`,
        `━━━━━━━━━━━━━━━━━━━`,
        `👤 Name: ${qcName}`,
        `📞 Phone: ${qcPhone}`,
        `🛠️ Interested In: ${qcService}`
      ].join('\n');

      window.open(`https://wa.me/917218197119?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
}
