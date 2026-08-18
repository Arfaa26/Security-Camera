const state={config:{},modal:null};

const cameras=[
  {name:'Dome Camera',desc:'Discreet indoor and commercial coverage.',tags:['INDOOR','WIDE VIEW']},
  {name:'Bullet Camera',desc:'Outdoor entrances, parking and perimeter coverage.',tags:['OUTDOOR','IR NIGHT']},
  {name:'PTZ Camera',desc:'Pan, tilt and zoom for wide-area monitoring.',tags:['PTZ','LONG RANGE']},
  {name:'Turret Camera',desc:'Clean professional surveillance for everyday spaces.',tags:['4MP+','IR NIGHT']},
  {name:'IP Camera',desc:'Network-based high-resolution surveillance systems.',tags:['POE','NETWORK']},
  {name:'AI Camera',desc:'Smart detection features where supported.',tags:['AI','PERSON/VEHICLE']},
  {name:'4K Camera',desc:'High-detail imaging for demanding scenes.',tags:['4K','DETAIL']},
  {name:'Color Night Vision',desc:'Enhanced low-light visibility where supported.',tags:['LOW LIGHT','COLOR']},
  {name:'Thermal Camera',desc:'Specialized thermal monitoring for industrial use.',tags:['THERMAL','SPECIALIZED']},
  {name:'Wireless Camera',desc:'Flexible options where cabling is difficult.',tags:['WIRELESS','FLEXIBLE']}
];
const industries=[
 {name:'Residential',desc:'Secure entrances, parking, perimeter and key indoor areas with a system designed for everyday visibility.',focus:['Entrance','Parking','Perimeter'],stack:['CCTV Surveillance','Night Vision','Mobile Viewing','Recording'],cta:'Protect My Home →'},
 {name:'Retail',desc:'Cover counters, customer areas, stock rooms and entrances to protect customers, staff and inventory.',focus:['Cash Counter','Entrance','Storage'],stack:['CCTV Surveillance','AI Detection','Cash Counter Coverage','Remote Monitoring'],cta:'Secure My Store →'},
 {name:'Corporate',desc:'Cover entry visibility, common areas and restricted zones across the workplace.',focus:['Reception','Entry Points','Restricted Rooms'],stack:['CCTV Surveillance','Access Control','Networking','Video Door Phone'],cta:'Plan Office Security →'},
 {name:'Industrial',desc:'Cover perimeter, operations, machinery and restricted areas across the facility.',focus:['Perimeter','Gates','Production Areas'],stack:['Long-range CCTV','PTZ Cameras','Access Control','Networking'],cta:'Secure My Facility →'},
 {name:'Warehouse',desc:'Cover inventory, loading bays, entrances and blind spots across the storage area.',focus:['Loading Bays','Storage Aisles','Entry/Exit'],stack:['Wide-angle CCTV','Night Vision','PTZ Cameras','AI Detection'],cta:'Protect My Warehouse →'},
 {name:'Hospitality',desc:'Cover guest safety, common areas, staff zones and entry points across the property.',focus:['Entrance','Lobby','Corridors'],stack:['Discreet CCTV','Access Control','Video Door Systems','Networking'],cta:'Secure My Property →'},
 {name:'Healthcare',desc:'Cover entrances, common areas and sensitive zones with visitor-aware monitoring.',focus:['Entrance','Reception','Restricted Areas'],stack:['CCTV Surveillance','Access Control','Visitor Monitoring','Networking'],cta:'Plan Healthcare Security →'},
 {name:'Education',desc:'Cover entry points, corridors, playgrounds and perimeter across the campus.',focus:['Main Gate','Corridors','Playgrounds'],stack:['CCTV Surveillance','Access Control','Visitor Monitoring','Remote Viewing'],cta:'Secure Our Campus →'},
 {name:'Construction',desc:'Cover equipment, material storage, access and site activity before the project is complete.',focus:['Site Perimeter','Entry Gate','Material Storage'],stack:['Outdoor CCTV','Night Vision','Mobile Monitoring','Temporary Surveillance'],cta:'Protect My Site →'}
];
const faqs=[
 {q:'How much does a CCTV system cost?',a:'The cost depends on the number and type of cameras, resolution, night-vision requirements, recording capacity, cabling, installation conditions and any additional equipment required. A site assessment can help determine the appropriate setup.',cat:'cost',cta:'Get a Security Assessment →',action:'assessment'},
 {q:'How many cameras does my property need?',a:"There isn't a fixed number for every property. Camera requirements depend on entrances, parking, perimeter areas, blind spots, indoor spaces and the level of coverage required.",cat:'cost',cta:'Use the Smart Assessment →',action:'assessment'},
 {q:'Can I get a quotation before installation?',a:'A preliminary estimate can be discussed based on your requirements. Final equipment selection, camera positions and installation requirements are best confirmed after assessing the property.',cat:'cost',cta:'Request an Assessment →',action:'assessment'},
 {q:'Which type of CCTV camera is right for my property?',a:'Different locations may require different camera types. Dome, turret, bullet, PTZ and other options can be considered depending on viewing area, installation location, lighting and coverage requirements.',cat:'cameras',cta:'Explore Camera Types →',action:'cameras'},
 {q:'Do CCTV cameras work at night?',a:'Yes, cameras designed for low-light or night surveillance can provide visibility after dark. Performance depends on the camera technology, available lighting, scene conditions, placement and installation.',cat:'cameras',cta:'Explore Security After Dark →',action:'night'},
 {q:'Can CCTV detect people or vehicles?',a:'Some compatible cameras and recording systems support intelligent detection features such as person, vehicle, motion or other event-based alerts. Available features depend on the specific equipment and configuration.',cat:'cameras'},
 {q:'Can I view my cameras from my phone?',a:'Where supported by the installed system and network, cameras can be configured for remote live viewing, playback and supported notifications through a compatible mobile application.',cat:'remote',cta:'Plan Mobile Viewing →',action:'remote'},
 {q:'Do CCTV cameras need internet to work?',a:'Not always. A CCTV system can generally record locally through a DVR/NVR without an internet connection. Internet connectivity is typically required for features such as remote viewing and certain cloud-based services.',cat:'remote'},
 {q:'How long will my CCTV recordings be stored?',a:'Recording duration depends on factors such as the number of cameras, resolution, recording mode, storage capacity and activity levels.',cat:'remote',storage:true},
 {q:'What happens when the DVR/NVR storage becomes full?',a:'Many systems can be configured to overwrite the oldest recordings automatically when storage is full. The exact behavior depends on the recording system and configuration.',cat:'remote'},
 {q:'What happens during a CCTV installation?',a:'A typical installation involves understanding the property, planning camera positions, mounting equipment, routing cables, configuring the DVR/NVR and network, setting up supported mobile viewing, testing the system and completing the handover.',cat:'installation',cta:'See How AAN Works →',action:'process'},
 {q:'Can AAN upgrade my existing CCTV system?',a:'In many cases, existing systems can be upgraded rather than completely replaced. Compatibility of cameras, DVR/NVR, cabling, power, storage and networking should be assessed before recommending an upgrade.',cat:'installation',cta:'Assess My Existing System →',action:'technician'},
 {q:'Do you provide CCTV maintenance and technical support?',a:'Yes. AAN can assist with system troubleshooting, camera issues, recording problems, mobile-viewing issues, equipment replacement and other supported security-system requirements.',cat:'maintenance',cta:'Book a Technician →',action:'technician'},
 {q:'What if one of my cameras stops working?',a:'The issue may involve the camera, power supply, cabling, network connection, DVR/NVR or configuration. A technical assessment can help identify the cause and determine the appropriate repair or replacement.',cat:'maintenance',cta:'Request Service →',action:'technician'},
 {q:'What happens to CCTV during a power cut?',a:'A standard CCTV system requires power for cameras and recording equipment. Backup-power solutions such as UPS systems can be considered where continued operation during power interruptions is important.',cat:'maintenance'},
 {q:'Can CCTV continue recording if the internet goes down?',a:'If the system is configured for local recording, cameras can generally continue recording to the DVR/NVR even when internet connectivity is unavailable. Remote viewing and internet-dependent features may not be available until connectivity is restored.',cat:'remote'}
];

function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function waUrl(message){
 const n=(state.config.whatsappNumber||'').replace(/\D/g,'');
 return n ? `https://wa.me/${n}?text=${encodeURIComponent(message)}` : '#';
}
function phoneUrl(){
 const n=(state.config.phone||'').replace(/\D/g,''); return n?`tel:+${n}`:'#';
}

async function loadConfig(){
 try{const r=await fetch('/api/config');state.config=await r.json();}
 catch{state.config={};}
 const f=document.getElementById('footerPhone'); const e=document.getElementById('footerEmail');
 if(f){f.textContent=state.config.phone?`+${state.config.phone}`:'Configure phone';}
 if(e){e.textContent=state.config.email||'';}
 document.querySelectorAll('[data-phone]').forEach(a=>a.href=phoneUrl());
}

function renderCameras(){
 const grid=document.getElementById('cameraGrid');
 grid.innerHTML=cameras.map((c,i)=>`<article class="camera-card">
  <div class="product-visual"><div class="product-shape"></div></div>
  <h3>${esc(c.name)}</h3><p>${esc(c.desc)}</p>
  <div class="card-tags">${c.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
  <button data-camera="${i}">Explore camera ↗</button>
 </article>`).join('');
 grid.querySelectorAll('[data-camera]').forEach(b=>b.onclick=()=>openCamera(+b.dataset.camera));
}
function renderIndustries(){
 const list=document.getElementById('industryList');
 list.innerHTML=industries.map((x,i)=>`<button class="${i===0?'active':''}" data-industry="${i}"><span>${String(i+1).padStart(2,'0')}</span> ${esc(x.name)}</button>`).join('');
 list.querySelectorAll('button').forEach(b=>b.onclick=()=>selectIndustry(+b.dataset.industry));
 selectIndustry(0);
}
function selectIndustry(i){
 const x=industries[i], panel=document.getElementById('industryPanel');
 document.querySelectorAll('.industry-list button').forEach(b=>b.classList.toggle('active',+b.dataset.industry===i));
 panel.querySelector('.industry-number').textContent=String(i+1).padStart(2,'0');
 panel.querySelector('h3').textContent=x.name;
 panel.querySelector('p').textContent=x.desc;
 document.getElementById('industryFocus').innerHTML=x.focus.map((f,j)=>`<span><b>${String(j+1).padStart(2,'0')}</b> ${esc(f)}</span>`).join('');
 document.getElementById('industryStack').innerHTML=x.stack.map((s,j)=>`<span><b>${String(j+1).padStart(2,'0')}</b> ${esc(s)}</span>`).join('');
 document.getElementById('industryCta').textContent=x.cta;
}
function renderFaq(category='all', openIndex=null){
 const box=document.getElementById('faq');
 const visible=faqs.map((f,i)=>({...f,i})).filter(f=>category==='all'||f.cat===category);
 box.innerHTML=visible.map(f=>`<div class="faq-item" data-faq-index="${f.i}">
   <button class="faq-q" aria-expanded="${openIndex===f.i}"><span>${String(f.i+1).padStart(2,'0')} &nbsp; ${esc(f.q)}</span><b>${openIndex===f.i?'−':'+'}</b></button>
   <div class="faq-a"><p>${esc(f.a)}</p>
   ${f.storage?`<div class="faq-storage"><label>CAMERAS <b id="storageCams">8</b></label><input id="storageSlider" type="range" min="4" max="16" step="4" value="8" aria-label="Number of cameras"></div><div class="storage-result">ILLUSTRATIVE STORAGE NEED <strong id="storageNeed">Varies by quality, recording mode & activity</strong></div>`:''}
   ${f.cta?`<button class="faq-inline-cta" data-faq-action="${f.action}">${esc(f.cta)}</button>`:''}
   </div></div>`).join('');
 box.querySelectorAll('.faq-q').forEach(b=>b.onclick=()=>{
   const item=b.parentElement, idx=+item.dataset.faqIndex, willOpen=!item.classList.contains('open');
   box.querySelectorAll('.faq-item.open').forEach(x=>{x.classList.remove('open');x.querySelector('.faq-q b').textContent='+';x.querySelector('.faq-q').setAttribute('aria-expanded','false');});
   if(willOpen){item.classList.add('open');b.querySelector('b').textContent='−';b.setAttribute('aria-expanded','true');}
 });
 box.querySelectorAll('.faq-inline-cta').forEach(b=>b.onclick=()=>{
   const a=b.dataset.faqAction;
   if(a==='assessment') document.getElementById('assessment')?.scrollIntoView({behavior:'smooth'});
   else if(a==='cameras') document.getElementById('cameras')?.scrollIntoView({behavior:'smooth'});
   else if(a==='night') document.getElementById('night-security')?.scrollIntoView({behavior:'smooth'});
   else if(a==='remote') document.getElementById('monitoring')?.scrollIntoView({behavior:'smooth'});
   else if(a==='process') document.getElementById('process')?.scrollIntoView({behavior:'smooth'});
   else if(a==='technician') document.querySelector('[data-modal="technician"]')?.click();
 });
 const slider=document.getElementById('storageSlider');
 if(slider){slider.oninput=()=>{const n=+slider.value;document.getElementById('storageCams').textContent=n;document.getElementById('storageNeed').textContent=`${n} cameras • final capacity depends on resolution, recording mode and activity`;};}
}
function initFaq(){
 document.querySelectorAll('.faq-filter').forEach(b=>b.onclick=()=>{
   document.querySelectorAll('.faq-filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderFaq(b.dataset.faqCat);
 });
 const map={new:'cost',more:'cost',repair:'maintenance',mobile:'remote',night:'cameras',maintenance:'maintenance'};
 document.querySelectorAll('[data-faq-help]').forEach(b=>b.onclick=()=>{
   const cat=map[b.dataset.faqHelp]; document.querySelectorAll('.faq-filter').forEach(x=>x.classList.toggle('active',x.dataset.faqCat===cat));
   const first=faqs.find(f=>f.cat===cat); renderFaq(cat,first?.i);
   setTimeout(()=>document.querySelector('.faq-item.open')?.scrollIntoView({behavior:'smooth',block:'center'}),80);
 });
 renderFaq();
}
function updateCalc(){
 const floors=+document.getElementById('calcFloors').value||1, ent=+document.getElementById('calcEntrances').value||1, out=+document.getElementById('calcOutdoor').value||0, prop=document.getElementById('calcProperty').value;
 let min=2+Math.min(floors,4)+Math.min(ent,3)+Math.min(out,3), max=min+2;
 if(['Warehouse','Factory'].includes(prop)){min+=2;max+=4;}
 document.getElementById('calcResult').textContent=`${min}–${max} cameras`;
 document.getElementById('calcHint').textContent=prop==='Home'?'Planning estimate for key entry + general coverage.':'Planning estimate for key zones; a site assessment is recommended.';
}

const plannerZones={
 'Terrace':{camera:'Turret / Bullet',coverage:'Wide',night:'Recommended',ai:'Optional*',text:'Elevated outdoor areas benefit from wide coverage that accounts for open sightlines.',why:'Terraces and elevated open areas are exposed and benefit from wide, unobstructed coverage.',pos:['45%','8%','0deg'],profile:[72,62,88,30],priority:false},
 'Side Entrance':{camera:'Turret / Bullet',coverage:'Medium',night:'Recommended',ai:'Optional*',text:'A side approach is a common blind spot; placement should avoid glare and obstruction.',why:'Side approaches are a frequent blind spot and a common point of unauthorized entry.',pos:['12%','22%','-50deg'],profile:[60,58,70,55],priority:false},
 'Backyard':{camera:'Bullet / Turret',coverage:'Wide',night:'Recommended',ai:'Optional*',text:'Outdoor coverage should consider boundary lines, lighting and weather exposure.',why:'Covers boundary lines and rear access points that are often left unmonitored.',pos:['78%','20%','50deg'],profile:[65,60,80,45],priority:false},
 'Gate':{camera:'Bullet / PTZ',coverage:'Wide',night:'Recommended',ai:'Recommended',text:'Main gates and perimeter entry points are a priority for most properties.',why:'The gate is usually the first and most important checkpoint for people and vehicles entering the property.',pos:['8%','46%','-90deg'],profile:[80,72,85,20],priority:true},
 'Stairway':{camera:'Dome / Turret',coverage:'Narrow',night:'Standard',ai:'Optional*',text:'Stairways and internal transitions benefit from focused, narrower coverage.',why:'Stairways connect multiple areas and are worth covering to track movement between floors or levels.',pos:['84%','46%','90deg'],profile:[50,45,55,40],priority:false},
 'Front Door':{camera:'Dome / Turret',coverage:'Wide',night:'Recommended',ai:'Optional*',text:'A wide-angle dome or turret can cover an entrance while keeping the approach visible.',why:'Helps monitor approaching visitors and movement around the entrance while reducing common blind spots.',pos:['45%','62%','180deg'],profile:[78,70,85,30],priority:true},
 'Parking':{camera:'Bullet / IP Camera',coverage:'Long-range',night:'Recommended',ai:'Recommended',text:'A bullet or suitable outdoor camera can be positioned to cover vehicle movement and access.',why:'Supports monitoring of vehicle activity, arrivals and unauthorized access to parking areas.',pos:['15%','80%','-150deg'],profile:[70,65,90,35],priority:true},
 'Driveway':{camera:'Bullet / IP Camera',coverage:'Long-range',night:'Recommended',ai:'Recommended',text:'Long, open driveways benefit from wide-angle or long-range coverage of vehicle movement.',why:'Provides early visibility of arriving vehicles and activity along the approach to the property.',pos:['45%','86%','180deg'],profile:[75,68,92,28],priority:true},
 'Living Area':{camera:'Dome',coverage:'Medium',night:'Standard',ai:'Optional*',text:'Indoor coverage can focus on important access paths while respecting privacy.',why:'Helps confirm activity around key internal access points without over-monitoring living spaces.',pos:['75%','80%','140deg'],profile:[55,40,65,25],priority:false}
};
const priorityNotes={
 'People':'Suggested consideration: turret or dome camera with human-detection AI where supported.',
 'Vehicles':'Suggested consideration: outdoor bullet or suitable IP camera with an appropriate field of view for vehicle movement.',
 'Entrances':'Suggested consideration: wide-angle dome or turret positioned to cover the full approach.',
 'Perimeter':'Suggested consideration: bullet or PTZ cameras positioned along boundary lines and access points.',
 'General Activity':'Suggested consideration: a balanced mix of dome and turret cameras across key zones.',
 'Low-Light Visibility':'Suggested consideration: cameras with strong IR or color night vision for low-light areas.'
};
const profileLabels=['Visibility','Night Coverage','Field of View','Blind-Spot Risk'];
const plannerState={current:'Front Door',selected:new Set(),style:null};

function renderZoneDetail(name){
 const z=plannerZones[name];
 document.getElementById('zoneTitle').textContent=name;
 document.getElementById('zoneText').textContent=z.text;
 document.getElementById('zoneCamera').textContent=plannerState.style?`${plannerState.style} Camera`:z.camera;
 document.getElementById('zoneCoverage').textContent=z.coverage;
 document.getElementById('zoneNight').textContent=z.night;
 document.getElementById('zoneAI').textContent=z.ai;
 document.getElementById('zoneWhy').textContent=z.why;
 const [l,tp,r]=z.pos;
 const pin=document.getElementById('camPin'), fov=document.getElementById('fov');
 pin.style.left=l;pin.style.top=tp;fov.style.left=l;fov.style.top=tp;fov.style.transform=`translate(-50%,-100%) rotate(${r})`;
 document.getElementById('coverageProfile').innerHTML=z.profile.map((v,i)=>`<div class="coverage-row"><span>${profileLabels[i]}</span><div class="coverage-track"><div class="coverage-fill" style="width:${v}%"></div></div></div>`).join('');
}
function renderPlannerSummary(){
 const n=plannerState.selected.size;
 document.getElementById('sumAreas').textContent=`${String(n).padStart(2,'0')} / 09`;
 let priorityCount=0; const families=new Set();
 plannerState.selected.forEach(zn=>{
   const z=plannerZones[zn];
   if(z.priority)priorityCount++;
   families.add(z.camera.split(' / ')[0]);
 });
 document.getElementById('sumPriority').textContent=priorityCount;
 document.getElementById('sumCoverage').textContent=n===0?'—':(families.size>1?'MIXED':families.values().next().value.toUpperCase());
}
function plannerWaMessage(){
 const zones=[...plannerState.selected];
 if(zones.length===0)return 'Hello AAN Security & IT Solutions. I used your Security Planner and would like help assessing my property.';
 let list;
 if(zones.length===1)list=zones[0];
 else list=`${zones.slice(0,-1).join(', ')} and ${zones[zones.length-1]}`;
 return `Hello AAN Security & IT Solutions. I used your Security Planner and would like help assessing my property. I'm interested in coverage for ${list}.`;
}
function plannerAssessMessage(){
 const zones=[...plannerState.selected];
 if(zones.length===0)return `I used the AAN Security Planner and would like a site assessment for ${plannerState.current}.`;
 return `I used the AAN Security Planner. I'm interested in coverage for: ${zones.join(', ')}. Please help me arrange a site assessment.`;
}
function setupPlanner(){
 document.querySelectorAll('.zone').forEach(btn=>btn.onclick=()=>{
   const name=btn.dataset.zone;
   plannerState.current=name;
   plannerState.style=null;
   document.querySelectorAll('.camera-style-row button').forEach(b=>b.classList.remove('active'));
   if(plannerState.selected.has(name))plannerState.selected.delete(name);
   else plannerState.selected.add(name);
   document.querySelectorAll('.zone').forEach(z=>z.classList.toggle('active',plannerState.selected.has(z.dataset.zone)));
   renderZoneDetail(name);
   renderPlannerSummary();
 });
 document.querySelectorAll('.camera-style-row button').forEach(btn=>btn.onclick=()=>{
   const active=btn.classList.contains('active');
   document.querySelectorAll('.camera-style-row button').forEach(b=>b.classList.remove('active'));
   plannerState.style=active?null:btn.dataset.style;
   if(!active)btn.classList.add('active');
   document.getElementById('zoneCamera').textContent=plannerState.style?`${plannerState.style} Camera`:plannerZones[plannerState.current].camera;
 });
 document.querySelectorAll('.priority-chips button').forEach(btn=>btn.onclick=()=>{
   const active=btn.classList.contains('active');
   document.querySelectorAll('.priority-chips button').forEach(b=>b.classList.remove('active'));
   if(!active){btn.classList.add('active');document.getElementById('priorityNote').textContent=priorityNotes[btn.dataset.priority];}
   else document.getElementById('priorityNote').textContent='Select a priority to see a suggested consideration.';
 });
 document.getElementById('zoneAssessBtn').onclick=()=>openModal('quote',`I'd like more information about coverage for ${plannerState.current}.`);
 document.getElementById('summaryAssessBtn').onclick=()=>openModal('assessment',plannerAssessMessage());
 document.getElementById('plannerWaBtn').onclick=()=>window.open(waUrl(plannerWaMessage()),'_blank','noopener');
 renderZoneDetail(plannerState.current);
 renderPlannerSummary();
}

const assessmentSteps=[
 ['01 — Understand the property','We discuss the areas you want to protect.'],
 ['02 — Identify coverage requirements','We look at entrances, blind spots, parking, perimeter and other relevant areas.'],
 ['03 — Check infrastructure','We consider cabling, power, network connectivity and recording requirements.'],
 ['04 — Discuss the system','We explain suitable options based on the property and requirements.']
];
function renderAssessmentFaq(){
 const box=document.getElementById('assessmentFaq');
 if(!box)return;
 box.innerHTML=assessmentSteps.map(f=>`<div class="faq-item"><button class="faq-q">${esc(f[0])}<span>+</span></button><div class="faq-a">${esc(f[1])}</div></div>`).join('');
 box.querySelectorAll('.faq-q').forEach(b=>b.onclick=()=>{const item=b.parentElement;item.classList.toggle('open');b.querySelector('span').textContent=item.classList.contains('open')?'−':'+';});
}
function setupProcessTrack(){
 const track=document.getElementById('processTrack'), articles=document.querySelectorAll('#processGrid article');
 if(!track||!articles.length||!('IntersectionObserver' in window))return;
 const io=new IntersectionObserver(entries=>{
   entries.forEach(e=>{
     if(e.isIntersecting){
       track.querySelectorAll('span').forEach(s=>s.classList.toggle('active',s.dataset.stage===e.target.dataset.stage));
     }
   });
 },{threshold:.55});
 articles.forEach(a=>io.observe(a));
}

function openModal(type,prefillMessage){
 const modal=document.getElementById('modal'), content=document.getElementById('modalContent');
 const titles={quote:'Get your personalized security quote',assessment:'Build your security assessment',technician:'Connect with a technician',contact:'Contact AAN'};
 const desc={quote:'Tell us what you need and we’ll capture the details for follow-up.',assessment:'A short form to understand your property and security requirements.',technician:'Choose a preferred time and tell us what you need help with.',contact:'Send an inquiry and the AAN team can follow up.'};
 content.innerHTML=`<div><div class="eyebrow">AAN / ${type.toUpperCase()}</div><h2>${titles[type]}</h2><p>${desc[type]}</p>
 <form id="leadForm" data-type="${type}">
 <div class="form-grid">
 <div class="form-field"><label>Name</label><input name="name" required autocomplete="name"></div>
 <div class="form-field"><label>Phone</label><input name="phone" required autocomplete="tel"></div>
 <div class="form-field"><label>Email</label><input name="email" type="email" autocomplete="email"></div>
 <div class="form-field"><label>Property type</label><select name="propertyType"><option>Home</option><option>Apartment</option><option>Shop</option><option>Office</option><option>Warehouse</option><option>Factory</option><option>School</option><option>Hotel</option><option>Other</option></select></div>
 <div class="form-field"><label>Service required</label><select name="service"><option>CCTV Installation</option><option>CCTV Service / Maintenance</option><option>DVR / NVR Setup</option><option>Mobile Viewing</option><option>AI Security</option><option>Networking / IT</option><option>Access Control</option><option>Security Assessment</option><option>Other</option></select></div>
 <div class="form-field"><label>Preferred date</label><input name="date" type="date"></div>
 <div class="form-field"><label>Preferred time</label><input name="time" type="time"></div>
 <div class="form-field full"><label>Message</label><textarea name="message" placeholder="Tell us about the property, current CCTV system, problem or requirement.">${esc(prefillMessage||'')}</textarea></div>
 <div class="honeypot"><input name="website" tabindex="-1" autocomplete="off"></div>
 </div>
 <div class="form-actions"><button class="btn btn-gold" type="submit">Submit Request ↗</button><button class="btn btn-outline" type="button" id="waForm">Continue on WhatsApp</button></div>
 </form></div>`;
 modal.classList.add('show');document.body.style.overflow='hidden';
 const form=document.getElementById('leadForm');
 document.getElementById('waForm').onclick=()=>openWhatsAppFromForm(form);
 form.onsubmit=async e=>{e.preventDefault();await submitLead(form)};
}
function closeModal(){document.getElementById('modal').classList.remove('show');document.body.style.overflow='';}
function formDataObject(form){return Object.fromEntries(new FormData(form).entries());}
function messageFromLead(d){
 return `Hi AAN Security & IT Solutions,\n\nI would like to enquire about: ${d.service||'security solutions'}.\nName: ${d.name||''}\nPhone: ${d.phone||''}\nProperty: ${d.propertyType||''}\nPreferred date: ${d.date||'Not specified'}\nPreferred time: ${d.time||'Not specified'}\nMessage: ${d.message||'Please contact me.'}`;
}
function openWhatsAppFromForm(form){
 const d=formDataObject(form);window.open(waUrl(messageFromLead(d)),'_blank','noopener');
}
async function submitLead(form){
 const d=formDataObject(form); d.source='website';d.requestType=form.dataset.type;
 const btn=form.querySelector('button[type="submit"]');btn.disabled=true;btn.textContent='Sending…';
 try{
   const r=await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});
   if(!r.ok) throw new Error('request failed');
   const out=await r.json();
   form.parentElement.innerHTML=`<div class="success"><b>Request received.</b><br>Your reference is <strong>${esc(out.leadId||'AAN')}</strong>. You can also continue on WhatsApp for a faster conversation.<div class="form-actions"><button class="btn btn-gold" id="successWa">WhatsApp AAN ↗</button><button class="btn btn-outline" data-close>Close</button></div></div>`;
   document.getElementById('successWa').onclick=()=>window.open(waUrl(messageFromLead(d)),'_blank','noopener');
 }catch(err){
   localStorage.setItem('aan_last_lead',JSON.stringify(d));
   form.parentElement.insertAdjacentHTML('afterbegin',`<div class="success" style="margin-bottom:12px">The request could not be sent to the server right now. Your details are saved in this browser for retry, and WhatsApp is available below.</div>`);
   btn.disabled=false;btn.textContent='Try Again ↗';
 }
}
function openCamera(i){
 const c=cameras[i];openSimple(`${c.name}`,`<p>${c.desc}</p><div class="spec-list"><span><b>Typical use</b><strong>${c.tags.join(' · ')}</strong></span><span><b>Night vision</b><strong>Model dependent</strong></span><span><b>AI features</b><strong>Model dependent</strong></span><span><b>Installation</b><strong>Site dependent</strong></span></div><button class="btn btn-gold" id="cameraQuote">Ask AAN about this camera ↗</button>`);
 document.getElementById('cameraQuote').onclick=()=>{closeModal();openModal('quote')};
}
function openSimple(title,body){
 const modal=document.getElementById('modal'),content=document.getElementById('modalContent');
 content.innerHTML=`<div><div class="eyebrow">AAN / CAMERA</div><h2>${esc(title)}</h2>${body}</div>`;
 modal.classList.add('show');document.body.style.overflow='hidden';
}
function setupWA(){
 document.querySelectorAll('[data-wa]').forEach(b=>b.onclick=()=>{
   const msg=b.dataset.wa==='quote'?'Hi AAN, I would like a CCTV/security quotation.':
    b.dataset.wa==='consultation'?'Hi AAN, I would like to speak with a security expert about my property.':
    b.dataset.wa==='contact'?'Hello AAN Security & IT Solutions, I found your website and would like to discuss a security solution for my property.':
    'Hi AAN, I would like a free security consultation.';
   window.open(waUrl(msg),'_blank','noopener');
 });
}
function setupModals(){
 document.querySelectorAll('[data-modal]').forEach(b=>b.onclick=()=>openModal(b.dataset.modal));
 document.querySelectorAll('[data-close]').forEach(b=>b.onclick=closeModal);
 document.getElementById('modal').addEventListener('click',e=>{if(e.target.dataset.close!==undefined)closeModal()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
}
function setupHeader(){
 const header=document.querySelector('.site-header');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>40));
 document.querySelector('.menu-toggle').onclick=()=>header.classList.toggle('mobile-open');
 document.querySelectorAll('.nav a').forEach(a=>a.onclick=()=>header.classList.remove('mobile-open'));
}
function setupSolutions(){
 document.querySelectorAll('.solution-card').forEach(c=>{
   c.addEventListener('click',e=>{
     if(e.target.closest('button'))return;
     const wasActive=c.classList.contains('active');
     document.querySelectorAll('.solution-card.active').forEach(x=>x.classList.remove('active'));
     if(!wasActive)c.classList.add('active');
   });
 });
}

const assessmentState={
 step:1, property:'Home', floors:1, entrances:2, outdoor:[], priorities:[], level:'Smart', time:'24 / 7', remote:'Yes, definitely'
};
function assessmentCount(){
 let base=2+Math.min(assessmentState.floors,4)+Math.min(assessmentState.entrances,3)+Math.min(assessmentState.outdoor.length,3);
 if(['Warehouse','Factory','Construction'].includes(assessmentState.property))base+=2;
 if(assessmentState.level==='Complete')base+=1;
 if(assessmentState.priorities.includes('Vehicles')||assessmentState.priorities.includes('Property perimeter'))base+=1;
 return {min:Math.max(2,base),max:base+2};
}
function renderAssessmentPlan(){
 const c=assessmentCount();
 document.getElementById('assessmentResult').textContent=`${c.min}–${c.max} cameras`;
 document.getElementById('planProperty').textContent=assessmentState.property;
 document.getElementById('planLevel').textContent=assessmentState.level;
 document.getElementById('planRemoteText').textContent=`Remote viewing: ${assessmentState.remote==='No'?'No':'Yes'}`;
 document.getElementById('planRemote').textContent=assessmentState.remote==='No'?'—':'✓';
 document.getElementById('planNight').textContent=(assessmentState.time==='Night'||assessmentState.time==='24 / 7')?'✓':'Optional';
 document.getElementById('planEntry').textContent='●'.repeat(Math.min(5,Math.max(3,assessmentState.entrances+2)));
 document.getElementById('planOutdoor').textContent='●'.repeat(Math.min(5,Math.max(2,assessmentState.outdoor.length+2)));
 document.getElementById('planIndoor').textContent='●'.repeat(Math.min(5,Math.max(2,assessmentState.floors+2)));
 const zones=[...new Set([...assessmentState.outdoor,...assessmentState.priorities])];
 document.getElementById('planZones').innerHTML=(zones.length?zones:['Main Entrance','General Coverage']).map(z=>`<span class="plan-zone-pill">${esc(z)}</span>`).join('');
}
function assessmentGo(step){
 assessmentState.step=step;
 document.querySelectorAll('.assessment-step').forEach(p=>p.classList.toggle('active',+p.dataset.panel===step));
 document.querySelectorAll('.progress-step').forEach(p=>{
   const n=+p.dataset.step;p.classList.toggle('active',n===step);p.classList.toggle('done',n<step);
 });
 if(step===5)renderAssessmentPlan();
 document.getElementById('assessment')?.scrollIntoView({behavior:'smooth',block:'start'});
}
function assessmentMessage(){
 const c=assessmentCount();
 return `Hello AAN Security & IT Solutions. I completed the AAN Smart Assessment.\nProperty: ${assessmentState.property}\nEstimated cameras: ${c.min}–${c.max}\nFloors: ${assessmentState.floors}\nEntrances: ${assessmentState.entrances}\nOutdoor areas: ${assessmentState.outdoor.join(', ')||'None selected'}\nPriority: ${assessmentState.priorities.join(', ')||'General monitoring'}\nProtection: ${assessmentState.level}\nProtection time: ${assessmentState.time}\nRemote viewing: ${assessmentState.remote}\nPlease help me arrange a site assessment.`;
}
function setupAssessment(){
 document.querySelectorAll('.property-option').forEach(b=>b.onclick=()=>{
   document.querySelectorAll('.property-option').forEach(x=>x.classList.remove('active'));b.classList.add('active');assessmentState.property=b.dataset.property;
 });
 document.querySelectorAll('[data-count]').forEach(b=>b.onclick=()=>{
   const k=b.dataset.count;assessmentState[k]=Math.max(k==='floors'?1:1,Math.min(20,assessmentState[k]+(+b.dataset.dir)));
   document.getElementById('assessment'+k[0].toUpperCase()+k.slice(1)).textContent=assessmentState[k];
 });
 document.querySelectorAll('#assessmentOutdoor button').forEach(b=>b.onclick=()=>{
   b.classList.toggle('active');const z=b.dataset.zone;if(assessmentState.outdoor.includes(z))assessmentState.outdoor=assessmentState.outdoor.filter(x=>x!==z);else assessmentState.outdoor.push(z);
 });
 document.querySelectorAll('#assessmentPriority button').forEach(b=>b.onclick=()=>{
   b.classList.toggle('active');const z=b.dataset.zone;if(assessmentState.priorities.includes(z))assessmentState.priorities=assessmentState.priorities.filter(x=>x!==z);else assessmentState.priorities.push(z);
 });
 document.querySelectorAll('.protection-options button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.protection-options button').forEach(x=>x.classList.remove('active'));b.classList.add('active');assessmentState.level=b.dataset.level;});
 document.querySelectorAll('#assessmentTime button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#assessmentTime button').forEach(x=>x.classList.remove('active'));b.classList.add('active');assessmentState.time=b.dataset.time;});
 document.querySelectorAll('#assessmentRemote button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#assessmentRemote button').forEach(x=>x.classList.remove('active'));b.classList.add('active');assessmentState.remote=b.dataset.remote;});
 document.querySelectorAll('.assessment-next').forEach(b=>b.onclick=()=>assessmentGo(Math.min(5,assessmentState.step+1)));
 document.querySelectorAll('.assessment-prev').forEach(b=>b.onclick=()=>assessmentGo(Math.max(1,assessmentState.step-1)));
 document.getElementById('editAssessment').onclick=()=>assessmentGo(1);
 document.getElementById('bookPlan').onclick=()=>openModal('assessment',assessmentMessage());
 document.getElementById('whatsappPlan').onclick=()=>window.open(waUrl(assessmentMessage()),'_blank','noopener');
}
function setupMonitoring(){
 const info=document.getElementById('monitorInfo');
 const texts={
  live:['LIVE VIEW','Viewing supported connected cameras remotely.'],
  alerts:['MOTION ALERT','Example alert: motion detected near a monitored zone.'],
  playback:['PLAYBACK','Review recorded footage using the supported recorder timeline.'],
  devices:['DEVICE STATUS','Check connected system components where supported.']
 };
 document.querySelectorAll('[data-monitor]').forEach(b=>b.onclick=()=>{
   document.querySelectorAll('[data-monitor]').forEach(x=>x.classList.remove('active'));b.classList.add('active');
   const t=texts[b.dataset.monitor];info.innerHTML=`<b>${t[0]}</b><span>${t[1]}</span>`;
 });
 document.querySelectorAll('.monitor-feed').forEach(b=>b.onclick=()=>{
   document.querySelectorAll('.monitor-feed').forEach(x=>x.classList.remove('active'));b.classList.add('active');
   const name=b.dataset.feed;document.getElementById('phonePreviewFeed').querySelector('span').textContent=`● LIVE · ${name.toUpperCase()}`;
 });
 document.querySelectorAll('[data-phone-feed]').forEach(b=>b.onclick=()=>{
   const name=b.dataset.phoneFeed;document.getElementById('phonePreviewFeed').querySelector('span').textContent=`● LIVE · ${name.toUpperCase()}`;
 });
}
function setupNightLab(){
 const slider=document.getElementById('nightSlider'),layer=document.querySelector('.night-scene-layer');
 if(slider&&layer) slider.oninput=()=>layer.style.clipPath=`inset(0 0 0 ${slider.value}%)`;
 const tech={
  'Standard Low-Light':[68,60,62,72],
  'IR Night Vision':[84,80,28,35],
  'Color Night Vision':[82,78,76,42]
 };
 document.querySelectorAll('[data-night-tech]').forEach(b=>b.onclick=()=>{
   document.querySelectorAll('[data-night-tech]').forEach(x=>x.classList.remove('active'));b.classList.add('active');
   const v=tech[b.dataset.nightTech]||tech['Standard Low-Light'];
   ['Visibility','Detail','Color','Light'].forEach((n,i)=>document.getElementById('meter'+n).style.width=v[i]+'%');
 });
 document.querySelector('[data-night-tech].active')?.click();
 const envText={
  Home:'Night coverage should consider entry points, lighting conditions, camera position and required field of view.',
  Parking:'Parking coverage should consider vehicle movement, lighting, glare and the camera field of view.',
  Shop:'Shop coverage should consider entrances, customer movement, counters and low-light areas.',
  Factory:'Industrial night coverage should consider perimeter, gates, operations and lighting conditions.',
  Warehouse:'Warehouse coverage should consider loading bays, storage aisles, entry points and blind spots.',
  Construction:'Construction coverage should consider temporary access points, material storage and changing site conditions.'
 };
 document.querySelectorAll('#nightEnvironment button').forEach(b=>b.onclick=()=>{
   document.querySelectorAll('#nightEnvironment button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
   const env=b.dataset.environment;document.getElementById('nightEnvironmentTitle').textContent=env.toUpperCase();document.getElementById('nightEnvironmentText').textContent=envText[env]||envText.Home;
   document.getElementById('nightRecommendation').textContent=env==='Construction'?'Outdoor camera + suitable night capability':'Outdoor camera + suitable night capability';
 });
 const scenarioText={
  'Normal Lighting':'NORMAL LIGHTING / CLEAR VISIBILITY',
  'Low Light':'LOW LIGHT / VISIBILITY REDUCED',
  'Dark':'DARK / NIGHT CAPABILITY RECOMMENDED',
  'Movement':'MOTION DETECTED / CONCEPTUAL ALERT',
  'Vehicle':'VEHICLE DETECTED / CONCEPTUAL ALERT'
 };
 document.querySelectorAll('[data-scenario]').forEach(b=>b.onclick=()=>{
   document.querySelectorAll('[data-scenario]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById('scenarioResult').textContent=scenarioText[b.dataset.scenario];
 });
}

function setupAboutAAN(){
 const approach={UNDERSTAND:'Understand the property, important areas, access points, lighting and existing infrastructure before recommending a solution.',ASSESS:'Assess coverage needs, possible blind spots, priorities, connectivity and the practical requirements of the site.',PLAN:'Plan camera positions, system components and coverage around the actual environment — not a one-size-fits-all layout.',INSTALL:'Install with attention to placement, cabling, equipment configuration and a clean professional finish.',SUPPORT:'Verify core functions and remain available for troubleshooting, maintenance and upgrades when required.'};
 document.querySelectorAll('.approach-step').forEach(b=>b.onclick=()=>{document.querySelectorAll('.approach-step').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById('approachDetail').textContent=approach[b.dataset.approach]||'';});
 const eco={CCTV:'Surveillance and recording solutions.',ACCESS:'Access control, biometric systems, door phones and related entry solutions.',NETWORK:'Wi-Fi, LAN, router configuration and security-system connectivity.',IT:'Device and infrastructure support.',MAINTENANCE:'Troubleshooting, upgrades and system servicing.'};
 document.querySelectorAll('.eco-node').forEach(b=>b.onclick=()=>{document.querySelectorAll('.eco-node').forEach(x=>x.classList.remove('active'));b.classList.add('active');const key=b.dataset.eco;document.getElementById('ecoDetail').innerHTML='<b>'+esc(key)+'</b><span>'+esc(eco[key]||'')+'</span>';});
 document.getElementById('checkServiceArea')?.addEventListener('click',()=>{const location=(document.getElementById('serviceLocation').value||'').trim(),out=document.getElementById('serviceAreaResult');if(!location){out.textContent='Enter your locality and AAN can confirm availability.';return;}out.textContent='Availability for '+location+' should be confirmed with AAN before booking.';window.open(waUrl('Hello AAN Security & IT Solutions. I want to check service availability for: '+location+'. Please confirm whether AAN can serve this location.'),'_blank','noopener');});
 document.getElementById('serviceVisitInfo')?.addEventListener('click',()=>openModal('assessment','Service visit information request: Please confirm what is included in the advertised ₹500 visit charge, the applicable scope and any additional charges before booking.'));
}

function setupServicesAndProjects(){
 const serviceData={
  discover:{eyebrow:'01 / SITE ASSESSMENT',title:'Understand before we install.',text:'We look at the property, important areas, possible blind spots, lighting, access points and existing infrastructure.',items:['✓ Coverage planning','✓ Blind-spot review','✓ Camera positioning','✓ Network/power considerations']},
  plan:{eyebrow:'02 / CAMERA PLACEMENT',title:'Put the right view in the right place.',text:'Camera position matters as much as the camera itself. We consider viewing angles, entrances, height, lighting and the area that needs protection.',items:['INDOOR → Dome / Turret','OUTDOOR → Bullet / Turret','LARGE AREA → PTZ','ENTRY → Wide-angle coverage']},
  install:{eyebrow:'03 / CLEAN CABLING',title:'Protection should look as good as it works.',text:'Plan cable routes, connections and equipment placement for a cleaner and more reliable installation.',items:['✓ Neat routing','✓ Secure connections','✓ Organized equipment','✓ Practical equipment placement']},
  configure:{eyebrow:'04 / DVR / NVR SETUP',title:'Your recordings, configured properly.',text:'We configure recording equipment, storage and connected cameras according to the installed system.',items:['RECORDING','STORAGE','CAMERA SETUP','PLAYBACK','SYSTEM CONFIGURATION']},
  connect:{eyebrow:'05 / MOBILE VIEWING',title:'Security beyond your screen.',text:'Where supported by the installed equipment and network, we configure remote viewing so you can access your system from a compatible phone or device.',items:['LIVE VIEW','PLAYBACK','ALERTS','CAMERA SELECTION']},
  verify:{eyebrow:'06 / TESTING & HANDOVER',title:"We don't just install. We verify.",text:'Final checks help confirm camera connection, positioning, recording, storage, night visibility, network connectivity and mobile viewing where supported.',items:['✓ Camera connection','✓ Camera positioning','✓ Recording','✓ Storage','✓ Night visibility','✓ Network connectivity','✓ Mobile viewing','✓ Core system functions']}
 };
 const updateService=(key)=>{
  const d=serviceData[key]||serviceData.discover;
  document.getElementById('serviceDetailEyebrow').textContent=d.eyebrow;
  document.getElementById('serviceDetailTitle').textContent=d.title;
  document.getElementById('serviceDetailText').textContent=d.text;
  document.getElementById('serviceDetailIncludes').innerHTML=d.items.map(x=>`<span>${esc(x)}</span>`).join('');
  document.getElementById('serviceVisual').dataset.mode=key;
  document.querySelectorAll('.service-step').forEach(b=>b.classList.toggle('active',b.dataset.serviceStep===key));
 };
 document.querySelectorAll('.service-step').forEach(b=>b.onclick=()=>updateService(b.dataset.serviceStep));
 updateService('discover');

 const appData={
  Residential:{label:'RESIDENTIAL',title:'Homes & Villas',text:'Entrance, parking, perimeter and remote-viewing planning.',meters:[86,82,78],solutions:['Outdoor CCTV','Night Vision','Recording','Remote Monitoring']},
  Retail:{label:'RETAIL',title:'Shops & Showrooms',text:'Monitor entrances, customer areas, counters, stock rooms and key movement zones.',meters:[92,74,72],solutions:['CCTV','Remote Viewing','Recording','Supported AI Video']},
  Commercial:{label:'COMMERCIAL',title:'Offices & Workspaces',text:'Entry visibility, reception areas, common spaces, restricted zones and network-connected security.',meters:[88,68,75],solutions:['CCTV','Access','Networking','Remote Viewing']},
  Industrial:{label:'INDUSTRIAL',title:'Factories & Warehouses',text:'Perimeter monitoring, gates, loading areas, inventory zones and operational visibility.',meters:[96,98,94],solutions:['Outdoor CCTV','PTZ','Perimeter','Night Vision','Networking']}
 };
 const openApp=(key)=>{
  const d=appData[key]||appData.Residential;
  document.getElementById('appDetailLabel').textContent=d.label;
  document.getElementById('appDetailTitle').textContent=d.title;
  document.getElementById('appDetailText').textContent=d.text;
  d.meters.forEach((v,i)=>document.getElementById('appMeter'+(i+1)).style.width=v+'%');
  document.getElementById('appSolutions').innerHTML=d.solutions.map(x=>`<span>${esc(x)}</span>`).join('');
  document.getElementById('applicationDetail').classList.add('open');
  document.querySelectorAll('.application-card').forEach(c=>c.classList.toggle('active',c.dataset.application===key));
 };
 document.querySelectorAll('.application-card').forEach(c=>c.onclick=()=>openApp(c.dataset.application));
 document.querySelectorAll('.application-open').forEach(b=>b.onclick=e=>{e.stopPropagation();openApp(b.closest('.application-card').dataset.application)});
 document.getElementById('applicationDetailClose').onclick=()=>{
   document.getElementById('applicationDetail').classList.remove('open');
   document.querySelectorAll('.application-card').forEach(c=>c.classList.remove('active'));
 };
 document.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>{
   const el=document.querySelector(b.dataset.scroll);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
 });
}


function openServiceArea(){
 const modal=document.getElementById('modal'),content=document.getElementById('modalContent');
 content.innerHTML=`<div><div class="eyebrow">AAN / SERVICE AREA</div><h2>Do we cover your location?</h2><p>AAN serves Mahad, Poladpur, Mangaon and nearby areas. Enter your locality and we'll help confirm availability.</p><form id="areaForm"><div class="form-field"><label>Locality / Area</label><input name="location" required placeholder="e.g. Mahad, Raigad"></div><div class="form-actions"><button class="btn btn-gold" type="submit">Check Availability →</button><button class="btn btn-outline" type="button" data-close>Cancel</button></div></form></div>`;
 modal.classList.add('show');document.body.style.overflow='hidden';
 document.getElementById('areaForm').onsubmit=e=>{e.preventDefault();const loc=new FormData(e.currentTarget).get('location')||'';const msg=`Hello AAN Security & IT Solutions, I would like to confirm whether service is available in ${loc}.`;window.open(waUrl(msg),'_blank','noopener');};
}
function setupFloatingHelp(){
 const root=document.getElementById('floatingHelp');if(!root)return;
 const trigger=root.querySelector('.help-trigger'), close=root.querySelector('.help-close');
 const setOpen=open=>{root.classList.toggle('open',open);trigger.setAttribute('aria-expanded',String(open));root.querySelector('.help-panel').setAttribute('aria-hidden',String(!open));};
 trigger.onclick=()=>setOpen(!root.classList.contains('open'));
 close.onclick=()=>setOpen(false);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
 root.querySelectorAll('[data-service-area]').forEach(b=>b.onclick=()=>{setOpen(false);openServiceArea()});
 document.querySelectorAll('footer [data-service-area]').forEach(b=>b.onclick=()=>openServiceArea());
 root.querySelectorAll('[data-scroll]').forEach(b=>b.onclick=()=>{setOpen(false);const el=document.querySelector(b.dataset.scroll);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});});
}

document.getElementById('year').textContent=new Date().getFullYear();
renderCameras();renderIndustries();initFaq();renderAssessmentFaq();setupPlanner();setupProcessTrack();setupWA();setupModals();setupHeader();setupNightLab();setupMonitoring();setupAssessment();setupSolutions();setupServicesAndProjects();setupAboutAAN();setupFloatingHelp();loadConfig();
