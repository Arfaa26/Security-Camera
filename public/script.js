/**
 * AAN Security & IT Solutions — Executive Corporate Controller
 * Interactive 3D Coverflow Polaroid Album, Storage Calculator, Day/Night Lab, Modals, Fullscreen Lightbox, and WhatsApp Quotation Builders
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

  // 3. 3D Coverflow Polaroid Album & Lightbox
  initCoverflowAlbum();

  // 4. CCTV Storage Calculator
  initStorageCalculator();

  // 5. Day vs Night Comparison Slider
  initNightLab();

  // 6. Area Coverage Checker
  initAreaChecker();

  // 7. FAQ Accordion
  initFaqAccordion();

  // 8. Modals & Consultation Forms
  initModalsAndForms();
});

/* ==========================================================================
   3D COVERFLOW POLAROID ALBUM ENGINE & FULLSCREEN LIGHTBOX
   ========================================================================== */
function initCoverflowAlbum() {
  const container = document.getElementById('coverflowContainer');
  const cards = document.querySelectorAll('.cf-card');
  const prevBtn = document.getElementById('cfPrevBtn');
  const nextBtn = document.getElementById('cfNextBtn');
  const dotsContainer = document.getElementById('cfDots');

  const activeTag = document.getElementById('cfActiveTag');
  const activeLoc = document.getElementById('cfActiveLoc');
  const activeCounter = document.getElementById('cfActiveCounter');
  const activeTitle = document.getElementById('cfActiveTitle');
  const activeDesc = document.getElementById('cfActiveDesc');
  const activeWaBtn = document.getElementById('cfActiveWaBtn');
  const activeEnlargeBtn = document.getElementById('cfActiveEnlargeBtn');

  // Lightbox Modal Elements
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxLoc = document.getElementById('lightboxLocation');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');

  if (!container || !cards.length) return;

  const totalCards = cards.length;
  let currentIndex = 0;
  const albumData = [];

  // Parse card metadata and generate dot indicators
  cards.forEach((card, i) => {
    albumData.push({
      img: card.dataset.img || '',
      title: card.dataset.title || '',
      location: card.dataset.location || '',
      tag: card.dataset.tag || '',
      desc: card.dataset.desc || ''
    });

    // Create dot
    if (dotsContainer) {
      const dot = document.createElement('button');
      dot.className = `cf-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => updateCoverflow(i));
      dotsContainer.appendChild(dot);
    }

    // Card click: if active center -> enlarge, if side -> rotate to it
    card.addEventListener('click', () => {
      if (i === currentIndex) {
        openLightbox(i);
      } else {
        updateCoverflow(i);
      }
    });
  });

  const dots = document.querySelectorAll('.cf-dot');

  function updateCoverflow(newIndex) {
    currentIndex = (newIndex + totalCards) % totalCards;

    const isMobile = window.innerWidth <= 768;
    const spacing = isMobile ? 55 : 95;
    const centerOffset = isMobile ? 70 : 130;

    cards.forEach((card, i) => {
      let offset = i - currentIndex;

      // Wrap-around shortest distance logic for circular carousel feel
      if (offset > totalCards / 2) offset -= totalCards;
      if (offset < -totalCards / 2) offset += totalCards;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      if (offset === 0) {
        // Center Active Card
        card.style.transform = `translateX(0px) translateZ(80px) scale(1.08)`;
        card.style.zIndex = '35';
        card.style.opacity = '1';
        card.style.filter = 'none';
        card.classList.add('is-active');
      } else if (absOffset <= 4) {
        // Visible Fanned-Out Cards (Left and Right Wings)
        const xTrans = sign * (centerOffset + (absOffset - 1) * spacing);
        const zTrans = -40 * absOffset;
        const yRot = sign * -30; // 3D Angled Rotation like coverflow polaroid
        const scale = Math.max(0.72, 1 - absOffset * 0.08);
        const opacity = Math.max(0.35, 1 - absOffset * 0.16);

        card.style.transform = `translateX(${xTrans}px) translateZ(${zTrans}px) rotateY(${yRot}deg) scale(${scale})`;
        card.style.zIndex = `${30 - absOffset}`;
        card.style.opacity = `${opacity}`;
        card.style.filter = `brightness(${Math.max(0.7, 1 - absOffset * 0.1)})`;
        card.classList.remove('is-active');
      } else {
        // Hidden distant cards
        const xTrans = sign * (centerOffset + 4 * spacing);
        card.style.transform = `translateX(${xTrans}px) translateZ(-200px) scale(0.6)`;
        card.style.zIndex = '1';
        card.style.opacity = '0';
        card.classList.remove('is-active');
      }
    });

    // Update Dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // Update Active Details Panel
    const cur = albumData[currentIndex];
    if (cur) {
      if (activeTag) activeTag.textContent = cur.tag;
      if (activeLoc) activeLoc.textContent = cur.location;
      if (activeCounter) activeCounter.textContent = `Project ${currentIndex + 1} of ${totalCards}`;
      if (activeTitle) activeTitle.textContent = cur.title;
      if (activeDesc) activeDesc.textContent = cur.desc;

      if (activeWaBtn) {
        const waMsg = `Hello Mr. Alekar (AAN Security and IT Solutions), I saw your live project "${cur.title}" (${cur.location}) and I want to get a quote for a similar setup for my property.`;
        activeWaBtn.href = `https://wa.me/917218197119?text=${encodeURIComponent(waMsg)}`;
      }
    }
  }

  // Navigation handlers
  if (prevBtn) prevBtn.addEventListener('click', () => updateCoverflow(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateCoverflow(currentIndex + 1));
  if (activeEnlargeBtn) activeEnlargeBtn.addEventListener('click', () => openLightbox(currentIndex));

  // Lightbox Modal Functions
  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    if (lightbox) {
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  function updateLightbox() {
    const cur = albumData[currentIndex];
    if (!cur) return;

    if (lightboxImg) {
      lightboxImg.src = cur.img;
      lightboxImg.alt = cur.title;
    }
    if (lightboxCounter) lightboxCounter.textContent = `Project ${currentIndex + 1} of ${totalCards}`;
    if (lightboxTag) lightboxTag.textContent = cur.tag;
    if (lightboxLoc) lightboxLoc.textContent = cur.location;
    if (lightboxTitle) lightboxTitle.textContent = cur.title;
    if (lightboxDesc) lightboxDesc.textContent = cur.desc;

    if (lightboxWaBtn) {
      const waMsg = `Hello Mr. Alekar (AAN Security and IT Solutions), I saw your live project "${cur.title}" (${cur.location}) and I want to get a quote for a similar setup for my property.`;
      lightboxWaBtn.href = `https://wa.me/917218197119?text=${encodeURIComponent(waMsg)}`;
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % totalCards;
      updateLightbox();
      updateCoverflow(currentIndex);
    });
  }
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateLightbox();
      updateCoverflow(currentIndex);
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % totalCards;
        updateLightbox();
        updateCoverflow(currentIndex);
      }
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateLightbox();
        updateCoverflow(currentIndex);
      }
    } else {
      if (e.key === 'ArrowRight') updateCoverflow(currentIndex + 1);
      if (e.key === 'ArrowLeft') updateCoverflow(currentIndex - 1);
    }
  });

  // Touch Swipe for Coverflow Stage
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) updateCoverflow(currentIndex + 1);
      else updateCoverflow(currentIndex - 1);
    }
  }, { passive: true });

  // Initial layout render
  updateCoverflow(0);
  window.addEventListener('resize', () => updateCoverflow(currentIndex));
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
