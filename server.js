require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

app.use(express.json({limit:'100kb'}));
app.use(express.urlencoded({extended:true}));

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, {recursive:true});
if (!fs.existsSync(LEADS_FILE)) fs.writeFileSync(LEADS_FILE, '[]');

function readLeads(){
  try { return JSON.parse(fs.readFileSync(LEADS_FILE,'utf8') || '[]'); }
  catch { return []; }
}
function saveLead(payload){
  const leads = readLeads();
  const lead = {
    id: `AAN-${Date.now()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'New',
    ...payload
  };
  leads.unshift(lead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads,null,2));
  return lead;
}

app.get('/api/config', (req,res)=>{
  res.json({
    whatsappNumber: process.env.WHATSAPP_NUMBER || '',
    phone: process.env.BUSINESS_PHONE || '',
    phoneAlt: process.env.BUSINESS_PHONE_ALT || '',
    email: process.env.BUSINESS_EMAIL || '',
    address: process.env.BUSINESS_ADDRESS || '',
    serviceAreas: process.env.SERVICE_AREAS || ''
  });
});

app.post('/api/leads', (req,res)=>{
  const body = req.body || {};
  const required = ['name','phone'];
  for (const key of required){
    if (!String(body[key] || '').trim()){
      return res.status(400).json({ok:false,message:`${key} is required`});
    }
  }
  if (String(body.website || '').trim()){
    return res.status(400).json({ok:false,message:'Spam detected'});
  }
  const lead = saveLead(body);
  res.status(201).json({ok:true,leadId:lead.id,message:'Request received'});
});

app.get('/api/health',(req,res)=>res.json({ok:true,service:'AAN Security & IT Solutions'}));

app.use(express.static(path.join(__dirname,'public')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(PORT, ()=>console.log(`AAN website running on http://localhost:${PORT}`));
